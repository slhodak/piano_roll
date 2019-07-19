//  Server needed to write and read data from files

const path = require('path');
const express = require('express');
const cors = require('cors');

const app = express();
const { Network } = require('./config');

app.use(cors());
app.use(express.static(path.resolve(__dirname, '../dist')));
app.use('/piano_roll', express.static(path.resolve(__dirname, '../piano_roll')));

app.listen(Network.httpPort, () => {
  console.log(`Piano roll service available on port ${Network.httpPort}`);
});
