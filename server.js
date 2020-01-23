const {createServer} = require('net');
const express = require('express')
const app = express();

const fs = require('fs');

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));