require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 8080;
const pathToIndexHtml = path.join(__dirname, 'build', 'index.html');
const pathToBuildFolder = path.join(__dirname, 'build');

app.use(express.static(pathToBuildFolder));

app.get('/', (req, res) => {
  res.sendFile(pathToIndexHtml);
});

app.listen(PORT, () => console.log(`App listening at http://localhost:${PORT}`));
