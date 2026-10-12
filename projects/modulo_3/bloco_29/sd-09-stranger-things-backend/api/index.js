// Vercel's entry point. The app itself is untouched: this only hands it over as the request
// handler, because a serverless function is invoked per request instead of listening on a port.
module.exports = require('../index');
