const fs = require('fs');
const path = require('path');
const http = require('http');

//**********  run index.js in cmp ***********

// fs.writeFileSync(
//     path.join(__dirname, 'index.html'),
//     `<h1> Hello World </h1><p> This is Rasool </p>`,
//     (err) => {
//         console.log(err)
//     }
// )
fs.writeFileSync(
    path.join(__dirname, 'index.html'),
    `<h1> Hello World </h1><p> This is Rasool </p>`,
    (err) => {
        console.log(err)
    }
)
let data = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf-8')
// console.log(data)
const server = http.createServer((req, res) => {
    if (req.url == '/') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write(data)
        res.end()
    } else {
        res.writeHead(404, {
            'content-type': 'text/html',
            'keey-Alive': 10
        })
        res.write('Page not found');
        res.end();
    }

})
server.listen(3001, () => {
    console.log('server is up now')
})

