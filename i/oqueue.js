const { promises } = require('dns');
const fs = require('fs');
fs.readFile( __filename, () => {'To be or not to be'})

process.nextTick(() => {
    console.log('Promise 1');
})
Promise.resolve(1).then(() => {
    console.log('Promise 2');
})
