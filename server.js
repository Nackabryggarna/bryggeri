const http = require('http');
const fs = require('fs');
const path = require('path');
const dir = __dirname;
const mime = {'.html':'text/html','.js':'application/javascript','.css':'text/css','.jpg':'image/jpeg','.png':'image/png'};
http.createServer((req,res)=>{
  let f = path.join(dir, req.url==='/'?'/index.html':req.url);
  fs.readFile(f,(err,d)=>{
    if(err){res.writeHead(404);res.end('404');return;}
    res.writeHead(200,{'Content-Type':mime[path.extname(f)]||'text/plain'});
    res.end(d);
  });
}).listen(7823, ()=>console.log('Server running on http://localhost:7823'));
