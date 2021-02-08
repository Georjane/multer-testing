const express = require('express');
const app = express();
const multer = require('multer');

// Starting express server
app.listen(3000 || process.env.PORT, () => {
  console.log("Server on...");
});

// Configure diskstorage. DiskStorage is a method made available by multer where 
// we configure the destination of the file, 
// the name of the file and 
// we can also add validations regarding the type of the file.
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

// Providing an upload route
const uploadStorage = multer({ storage: storage});

//single files
app.post('/upload/single', uploadStorage.single('file'), (req, res) => {
  console.log(req.file);
  return res.send('Single file');
});

