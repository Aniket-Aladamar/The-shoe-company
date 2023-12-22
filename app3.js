//code working fine(ref for future)
var http= require('http');
var fs= require('fs');
var path=require('path');
const { error } = require('console');

console.log(__dirname);

function onRequest(req,res){
    if(req.url=='/index.html' || req.url=='/'){
        fs.readFile('./index.html',(error,data)=>{
            if(error){
                res.writeHead(404);
                res.write("File not found");

            }
            else{
                res.writeHead(200,{"Content-Type":"text/css"});
                res.writeHead(200,{"Content-Type":"text/html"});
                res.write(data);
            }
            res.end();
        });
    }
    else if(req.url=='/output.css'){
        res.setHeader('Content-Type','text/css');
        res.write(fs.readFileSync('./output.css'));
        res.end();
        }
    else if(req.url=='/app1.css'){
            res.setHeader('Content-Type','text/css');
            res.write(fs.readFileSync('./app1.css'));
            res.end();
            }
    else{
        res.write("invalid file");
        res.end()
    }
}
http.createServer(onRequest).listen(3000,()=>{
    console.log("server created");
})