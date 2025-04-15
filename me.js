const fs = require('fs');

const http = require('http');
// const { url } = require('inspector');
const url = require('url')

// files
const textIn = fs.readFileSync('./txt/input.txt', 'utf8')
// console.log(textIn);

const textOut = `This is what we know about the avocado: ${textIn}. \nCreated on ${Date.now()}`;

fs.writeFileSync('./txt/output.txt', textOut);
    // console.log('File  written');


// Non-blocking, Asynchronous way
fs.readFile('./txt/start.txt', 'utf-8', (err, data1 )=>{
    fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2)=>{
        // err ? console.log('Error') : console.log(data2 );
        fs.readFile(`./txt/append.txt`, 'utf-8', (err, data)=>{
            fs.writeFile('./txt/final.txt', `${data2}\n${data}`, (err)=>{
                // err ? console.log('Error') : console.log('Your file has been written!')
            })
        })

    })
})
console.log('Lets check wh ich one comes first!');

// Server
const server = http.createServer((req, res)=>{
    console.log(req.url);
    const pathName = req.url
    if (pathName === '/' || '/overview'){
        res.end('hello from the Overview')
    }else if (pathName === '/overview'){
        res.end('hello from the Product ')
    }  else{
        res.writeHead(404, {
            'content-type': 'text/html',
            'header': 'hello world'
        })
        res.end('<h1>Page not found</h1>')
    }
})

server.listen(8000, '127.0.0.1', ()=>{
    console.log('listening to request on the server ');
})