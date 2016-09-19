const express = require('express');
const path = require('path');
var url = require('url');
var proxy = require('proxy-middleware');
const app = express();

app.use(express.static(__dirname + '/src'));

app.use('/build', proxy(url.parse('http://localhost:8011/build')));

app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'src', 'index.html'))
});

app.listen(8000);