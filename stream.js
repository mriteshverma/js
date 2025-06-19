const fs = require('fs');
//const {minus, divide} = require('./modules');
// const calc = new c();
// console.log(calc.add(1,2));
// console.log(minus(4,3));
// console.log(divide(4,3));

console.log(require('./modules')())
// const server = require('http').createServer();

// server.on('request', (req, res) => {

//     // Solution 1
//     // fs.readFile('text.txt','utf-8', (err, data) => {
//     //     if(err) console.log('file error!');
//     //     console.log(data.length);
//     //     res.end(data);
//     // })

//     // Solution 2: streams
//     // fs.createReadStream('textw.txt').on('data', chunk => {
//     //     console.log(chunk.length);
//     //     res.write(chunk);

//     // }).on('end', () => {
//     //     res.end()
//     // }).on('error', err => {
//     //     res.statusCode = 500
//     //     res.end('file not found.')
//     // })

//     // Solution 3
//     fs.createReadStream('text.txt').pipe(res)
// })
// server.listen(8000,'127.0.0.1')