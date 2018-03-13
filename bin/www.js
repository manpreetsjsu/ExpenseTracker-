// configuration file for the server

var app = require('../server/server'); // server.js file

var port=1000;

app.listen(port,function () {
    console.log('running at  Manpreet localhost:' + port);
});
