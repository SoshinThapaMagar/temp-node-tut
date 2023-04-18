const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end('Welcome to our home page');
        return;
    }
    if(req.url === '/about'){
        res.end('Here is our about page');
        return;
    }
    res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you're looking for
    <a href="/"> Back Home </a>
    </p>
    `);
});

server.listen(5000);