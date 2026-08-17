const http = require('http');

const server = http.createServer((req, res) =>{

    // console.log(req.url);
    // console.log(req.method);
    // res.write(`<h1>Hello World again </h1>`);
    if (req.url === "/"&& req.method == "GET"){
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write(`<h1>Hello World</h1>`);
        res.end();
    }else if (req.url === "/about" && req.method == "GET"){
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write(`<h1>About Page</h1>`);
        res.end();
    }else if (req.url === "/contact" && req.method == "GET"){
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write(`<h1>Contact Page</h1>`);
        res.end();
    }else{
        res.writeHead(404,{"Content-Type":"text/html"});
        res.write(`<h1>Page Not Found</h1>`);
        res.end();  
    }
});

server.listen(3000,() => {
    console.log("Server is running on port 3000");
});
