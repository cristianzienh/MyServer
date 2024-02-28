// Import the HTTP module
const http = require("http");
// Import the URL module
const url = require("url");

const host = 'localhost';
const port = 8000;

const requestListener = function (req, res) {    
    const reqUrl = url.parse(req.url).pathname;
    if(reqUrl == "/") {
        res.writeHead(200);
        res.write("Oi, bem vindo à homepage");
        res.end();
    }
    else if(reqUrl == "/nome") {
        res.writeHead(200);
        res.write('<html>Meu nome é <strong>Cristian</strong>!</html>');
    } 
    else {
        res.writeHead(404);        
    }
    res.end()
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {   
    console.log(`Server is running on http://${host}:${port}`);
});
