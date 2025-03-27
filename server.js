const http = require('node:http');
const fs = require('node:fs');


// const server = http.createServer((req, res) => {
//     const superHero = {
//         name: 'superman',
//         age: 30,
//         power: 'flying',
//         isAlive: true,
//         isSuperHero: true,
//         city: 'metropolis',
//         country: 'USA',
//     }
    
//     const name = 'Akinola'
//     let html = fs.readFileSync('./index.html', 'utf-8')
//     html = html.replace('{{name}}', name)
//     // fs.createReadStream(__dirname+'index.html', 'utf-8')
//     // .pipe(res)

//     res.writeHead(200, {
//         'Content-Type': 'text/html',
//         'X-Powered-By': 'nodejs'
//     })
//     res.end(html)
// })

const server = http.createServer((req, res) => {
    // res.end(req.url)

    if(req.url === '/'){
        res.writeHead(200, {
            'Content-Type': 'text/plain-text',
        })
        res.end('Welcome to the home page')
    }else if(req.url === '/about'){
        res.writeHead(200, {
            'Content-Type': 'text/plain-text',
        })
        res.end('Welcome to the about page')
    }
    else if (req.url === '/api'){
        res.writeHead(200, {
            'Content-Type': 'application/json',
        })
        res.end(JSON.stringify({
            name: 'Akinola',
            age: 30,
            power: 'flying',
            isAlive: true,
            isSuperHero: true,
            city: 'metropolis',
            country: 'USA',
        }))

    }
    else {
        res.writeHead(404)
        res.end('<h1>404 Page not found</h1>')
    }
})

server.listen(3000, () => {
    console.log('server is running on port 3000');
})