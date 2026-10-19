// Per-visitor isolation for the hosted playground. Not part of the 2021 project: it exists so two
// people poking at the sandbox at the same time cannot see each other's writes.
//
// Every handler reads and writes `./talker.json` through `fs.promises`, so that one path is the
// seam, the way models/connection.js is in store-manager. With a session, it resolves to that
// visitor's own copy instead. The handlers and validation middlewares are untouched.
const fs = require('fs');
const os = require('os');
const path = require('path');
const { AsyncLocalStorage } = require('async_hooks');

const HEADER = 'x-sandbox-session';
// The id becomes part of a file name, so nothing but hex gets anywhere near it.
const ID_PATTERN = /^[0-9a-f]{32}$/;
// Fifteen minutes of inactivity, refreshed on every request, so an active visitor never loses
// their data mid-experiment and an absent one is reaped shortly after they stop.
const IDLE_MS = 15 * 60 * 1000;

// The handlers name it relative to the working directory, so it is resolved the same way here.
const DATA_FILE = path.resolve('talker.json');
// The same file `npm run restore` copies, so the restore script and a session's seed cannot drift.
const SEED_FILE = path.join(__dirname, 'tests', 'seed.json');
// Outside the project, so session files never show up as changes in the repo. On the host the disk
// is wiped whenever the service sleeps, which clears them too.
const SESSION_DIR = path.join(os.tmpdir(), 'talker-sessions');
const SESSION_FILE = /^talker_([0-9a-f]{32})\.json$/;

const sessionStore = new AsyncLocalStorage();
const lastSeen = new Map();

const { readFile, writeFile } = fs.promises;

function sessionFile(sessionId) {
  return path.join(SESSION_DIR, `talker_${sessionId}.json`);
}

function redirect(file) {
  const sessionId = sessionStore.getStore();

  if (!sessionId || path.resolve(String(file)) !== DATA_FILE) return file;

  return sessionFile(sessionId);
}

// Without a session the path is untouched, so a request made with curl reads and writes the shared
// talker.json exactly like the 2021 project.
fs.promises.readFile = (file, ...rest) => readFile(redirect(file), ...rest);
fs.promises.writeFile = (file, ...rest) => writeFile(redirect(file), ...rest);

// Runs only when a new session appears. Session files left by visitors who stopped more than
// IDLE_MS ago go, and so do files no live session claims, which is what a restart leaves behind.
async function sweep(now = Date.now()) {
  const names = await fs.promises.readdir(SESSION_DIR).catch(() => []);

  const stale = names.filter((name) => {
    const match = name.match(SESSION_FILE);
    if (!match) return false;
    const seen = lastSeen.get(match[1]);
    return seen === undefined || now - seen > IDLE_MS;
  });

  await Promise.all(stale.map((name) => fs.promises.rm(path.join(SESSION_DIR, name), { force: true })));
  stale.forEach((name) => lastSeen.delete(name.match(SESSION_FILE)[1]));

  return stale;
}

// Slides the window on every request, and seeds the session the first time it is seen.
async function open(sessionId) {
  const isNew = !lastSeen.has(sessionId);
  lastSeen.set(sessionId, Date.now());

  if (!isNew) return false;

  await sweep();
  await fs.promises.mkdir(SESSION_DIR, { recursive: true });
  await fs.promises.copyFile(SEED_FILE, sessionFile(sessionId));

  return true;
}

// Puts the caller's data back to the seed: their own copy inside a session, the shared file without.
async function reset() {
  const sessionId = sessionStore.getStore();
  await fs.promises.copyFile(SEED_FILE, sessionId ? sessionFile(sessionId) : DATA_FILE);

  return JSON.parse(await readFile(SEED_FILE, 'utf8'));
}

module.exports = { HEADER, ID_PATTERN, IDLE_MS, sessionStore, open, reset, sweep };
