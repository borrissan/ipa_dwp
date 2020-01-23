const express = require('express');
const app = express();
const url = require('url');
const fs = require('fs');

app.use(express.static('public'));

function renderHTML(path, res) {
  fs.readFile(path, null, function(error, data) {
    if (error) {
      response.writeHead(400);
      response.write('File not found!');
    } else {
      response.write(data);
    }
    response.end();
  })
}

module.exports = {
  handleRequest: function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});

      const path = url.parse(req.url).pathname;
      switch (path) {
        case '/':
          renderHTML('./index.html', response);
          break;
        default:
          response.writeHead(404);
          response.write('Route not defined');
          response.end();
      }
  }
}

app.get('/', (req, res) => {
  res.send(document.getElementById("./index.html"));
});


