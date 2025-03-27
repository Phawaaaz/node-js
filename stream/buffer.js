// const { buffer } = require("stream/consumers");

const buffer = new Buffer.from('Hello World', 'utf-8')
buffer.write('name is Fawaz');
console.log(buffer.toJSON())
console.log(buffer.toString())
console.log(buffer);
console.log(buffer[0]);
console.log(buffer[1]); 
