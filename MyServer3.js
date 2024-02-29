// Import the HTTP module
const http = require("http");
// Import the URL module
const url = require("url");
// Import Pathcls
const fs = require('fs');
// Import Path module
const path = require('path');

const host = 'localhost';
const port = 8000;

const index = fs.readFileSync('index.html', 'utf8');

const requestListener = function (req, res) {    
    const reqUrl = url.parse(req.url).pathname;
    if(reqUrl == "/") {
        res.writeHead(200);
        res.end(index);
    }
    else if(reqUrl == "/nome") {
        res.writeHead(200);
        res.write('<html>Meu nome é <strong>Cristian</strong>!</html>');
        res.end();
    } 
    else {
        res.writeHead(404); 
        res.end()       
    }

};

const server = http.createServer(requestListener);
server.listen(port, host, () => {   
    console.log(`Server is running on http://${host}:${port}`);
});

function readFile(file) {
    fs.readFile(path.join(__dirname, file), (err, data) => {    
        // Send the HTML content to the client
        console.log(data);
        return data;
    })
}