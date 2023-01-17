const http = require('http')

let a = 0;
let b = 10;

const server = http.createServer((req, res) => {
    // console.log(req.statusCode)
    a++;
    // res.write("Hello from NODEJS")
    res.write("<h1>Hello from NODEJS</h1>")

    res.end(`<div>${a}:${b}</div>`)
})

server.listen(3000, () => {
    console.log('Сервер запущен')
})