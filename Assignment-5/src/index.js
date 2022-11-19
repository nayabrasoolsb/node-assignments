var http = require("http");

const httpServer = http.createServer(handleServer);


function handleServer(req, res) {
    if (req.url == '/') {
        res.writeHead(200, { 'content-type': 'text/html' });
        res.write('You are at home page')
        res.end();
    } else if (req.url == '/welcome') {
        res.writeHead(200, { 'content-type': 'text/html' });
        res.write('Welcome to Dominos!');
        res.end();
    } else if (req.url == '/contact') {
        res.writeHead(200, { 'content-type': 'text/html' });
        res.write(JSON.stringify({
            phone: '18602100000',
            email: 'guestcaredominos@jublfood.com'
        }))
        res.end();
    } else {
        res.writeHead(404, {
            'content-type': 'text/html',
            'keey-Alive': 10
        })
        res.write('page not found')
    }
}
httpServer.listen(8081, () => {
    console.log('server is up now')
})

module.exports = httpServer;