const fs =require('fs');
const zlib = require('zlib');

const gzip = zlib.createGzip(); // create a gzip stream


const readables = fs.createReadStream('./file.txt', {encoding: 'utf-8',  highWaterMark: 10,})  

readables.pipe(gzip).pipe(fs.WriteStream('./file.txt.gz'));
const writeables = fs.createWriteStream('./file2.txt') 

readables.pipe(writeables);

// readables.on('data', (chunk) => {
//     console.log(chunk);
//     writeables.write(chunk)
// })