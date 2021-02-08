const express = require('express');
const app = express();
const multer = require('multer');

app.listen(3000 || process.env.PORT, () => {
  console.log("Server on...");
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
