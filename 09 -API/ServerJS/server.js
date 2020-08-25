// import


const express = require('express');

// instantiate server 

var server = express ();


//configure
// Fonction callback (req = request res = response) 

server.get('/', function (request, response) {
res.setHeader('content-Type', 'text/html');
resizeTo.status(200).send("<h1>welcome on my server</h1>");
// CHAINE DE CARACTÈRE EN ""

});


//launch server


server.listen(8080, function(){
console.log('server is listening');

})

