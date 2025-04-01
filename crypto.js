// const crypto  = require('node:crypto');

const { request } = require('node:http');
const https = require('node:https')


// const { start } = require('node:repl');
//

// process.env.UV_THREADPOOL_SIZE = 3
const Max_calls = 1
const start = Date.now()
for(let i = 0; i<Max_calls; i++){
    https
        .request('https://www.google.com', (res)=>{
            res.on('data', ()=>{});
            res.on('end', () =>{
                console.log(`Request: ${i+1}`, Date.now()-start);
            })
        })
        .end
}
//     crypto.pbkdf2('password', 'salt', 100000, 512, 'sha512', () =>{
//     console.log(`Hash: ${i+1}`, Date.now() - start);
//     })
// }

// crypto.pbkdf2Sync('password', 'salt', 100000, 512, 'sha512')
// crypto.pbkdf2Sync('password', 'salt', 100000, 512, 'sha512')
// crypto.pbkdf2Sync('password', 'salt', 100000, 512, 'sha512')
    // console.log(`Hash: `, Date.now() - start);