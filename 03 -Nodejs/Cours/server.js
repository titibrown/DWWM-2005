const http = require('http');
const url = require('url');

//https://media.arfp.eu/articles/actualites

// 127.0.0.1 appellé   loudback ou bien localhost
//localhost
//http:// localhost :11000


const host = "localhost"; //nom du domaine
const port = "11000";//> a  1024 & < a 65555
const serverOpen = function () {
    console.log('Server is listening');
}
const serverRequest = function (request, response) {
    let u = url.parse(request.url);
    console.log(u);
    let message = "";
    switch (u) {
        case '/':
            message = "Hello !"
        case '/articles/':
            message = "Vous etes sur la page articles ";
            break;
        case '/actus/':
            message = "Vous etes sur la page actus ";
            break;
        default:
            message = "404 page non trouvee ."
    }
    response.end(message);
}
// création dúne instance d un serveur http
const server = http.createServer(serverRequest);
// le serveur ecoute sur le port specifié
server.listen(port, host, serverOpen);