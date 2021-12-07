const fs = require('fs');

const FILE_PATH = `${__dirname}/../profiles.json`;

const getProfileData = () => {
  const fileText = fs.readFileSync(FILE_PATH);
  return JSON.parse(fileText);
};

const saveProfileData = (profiles) => {
  fs.writeFileSync(FILE_PATH, JSON.stringify(profiles));
};

const profile = (req, res) => {
  const { name, email, passowrd, bio } = req.body;

  const profileDate = {
    id: req.file.filename,
    name,
    email,
    passowrd,
    bio,
  };

  const profiles = getProfileData();

  profiles.push(profileDate);
  saveProfileData(profiles);

  return res.send({ profileDate });
};

const getProfile = (req, res) => {
  const profileId = req.params.id;
  const profiles = getProfileData();

  const profileResult = profiles.find((currentProfile) => currentProfile.id === profileId);

  if (profileResult) return res.send(profileResult);

  return res.status(404).send({ error: { message: 'Perfil não encontrado' } });
};

module.exports = {
  profile,
  getProfile,
};
