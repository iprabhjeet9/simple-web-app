var express = require('express');
var os = require('os')
var ip = require('ip')
var app = express();
app.get('/', function (req, res) {
    res.send('Hello There !! hostname: '+ os.hostname() +"\n ip: "+ip.address());

});
app.listen(3000, function () {
    console.log('Listening on port 3000!');
    console.log(' http://localhost:3000');
});