const http=require('http')
http
    .createServer((req,res)=>{
        res.write('Server is Up and Running');
        res.end();
    })
    .listen(3000);