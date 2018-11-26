const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const routes = require('./app/routes');
let app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/', routes);

app.listen(4000, function(){
  console.log('listen to server');
})

module.exports = app;