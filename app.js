var express = require('express');
var app = express();
var path = require('path');

//var index = require('./public/index');
//app.use('/', index);
app.use(express.static(path.join(__dirname, './public')));

var server = app.listen(process.env.PORT || 3000, function(){
    var port = server.address().port;
    console.log('Listening on port: ', port);
});