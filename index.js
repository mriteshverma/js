const fs = require('fs');
const http = require('http')
const url = require('url')
const slugify = require('slugify')

const templateHtml = require('./modules/templateHtml')

const data = fs.readFileSync('data.json', 'utf-8');
const html = fs.readFileSync('index.html', 'utf-8');
const cards = fs.readFileSync('cards.html', 'utf-8');
const productTemp = fs.readFileSync('product.html', 'utf-8');
const dataObj = JSON.parse(data);

const slugs = dataObj.map(el => slugify(el.productName, {lower: true}))
console.log(slugs)
const server = http.createServer((req, res) => {
    console.log(req.url);

    const { query, pathname } = url.parse(req.url, true);

    if (pathname === '/' || pathname === '/overview') {
        res.writeHead(200, { 'content-type': 'text/html' });
        const cardsHtml = dataObj.map(el => templateHtml(cards, el))
        const output = html.replace(/{%PRODUCT_CARDS%}/g, cardsHtml)
        res.end(output);


    } else if (pathname === '/api') {
        res.writeHead(200, {
            'content-type': 'application/json'
        })
        res.end(dataObj);
    } else if (pathname === '/product') {
        const product = dataObj[query.id];
        const output = templateHtml(productTemp, product)
        res.end(output);
    } else {
        res.writeHead(404, {
            'content-type': 'text/html',
            'myheader': 'ye baby'
        });
        res.end('<h1>404</h1>');
    }

})
server.listen(8000, '127.0.0.1', () => {
    console.log('listening to request...');
})
