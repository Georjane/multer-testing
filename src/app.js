const express = require('express');
const app = express();
const multer = require('multer');

app.listen(3000 || process.env.PORT, () => {
  console.log("Server on...");
});
