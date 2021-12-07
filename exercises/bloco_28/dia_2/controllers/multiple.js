const multiple = (req, res) => {
  const uploadedFiles = req.files.map((file) => ({
    file: file.originalname,
    url: `http://localhost:3000/${file.path}`,
  }));

  return res.send(uploadedFiles);
};

module.exports = multiple;
