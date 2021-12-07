const fs = require('fs');

const upload = (req, res) => {
  if (req.fileDuplicated) {
    return res.status(409).send({ error: { mesage: 'File already exists' } });
  }
  
  if (req.fileValidationError) {
    return res.status(403).send({ error: { message: 'Extension must be `png`' } });
  }

  return res.send();
};

const fileExists = (fileName) => {
  const files = fs.readdirSync(`${__dirname}/uploads`); // fs.readdirSync retorna uma lista com nome de todos os arquivos da pasta uploads
  
  return files.some((file) => file === fileName); // Aqui usamos a função some, que retorna `true` se algum dos items do array passar no teste, no nosso caso o `file.includes`
};

const fileFilter = (req, file, cb) => {
  if (file.mimetype !== 'image/png') {
    req.fileValidationError = true; // Colocar uma mensagem de erro na requisição

    return cb(null, false); // Rejeitar o arquivo
  }

  if (fileExists(file.originalname)) {
    req.fileDuplicated = true; // Colocar uma flag de erro na requisição

    return cb(null, false); // Rejeitar o arquivo
  }

  cb(null, true); // Aceitar o arquivo
};

module.exports = {
  upload,
  fileFilter,
};
