var http = require('http');
var fs = require('fs');


function onRequest(req,res)
{
if(req.url=='/index.html' || req.url=='/'){
fs.readFile('./index.html', function inner(error,data) {
if(error){
res.writeHead(404);
res.write('File Not Found');
}
else{
res.writeHead(200,{"Content-Type": "input/css"});
res.writeHead(200, {'Content-Type': 'index/html'});
res.write(data);
//Test Demo Code
res.write('index.html');
res.end();
}})}}
// *************
// To display  the External CSS 



http.createServer(onRequest).listen(8080);
console.log("Server created");