Promise.resolve(1).then(() => {
    console.log('Promise 1');
})
process.nextTick(() => {
    console.log('nextTick 1');
})
//The next tick queue is executed before the microtask queue and promises
// Promise.resolve(1).then(() => {

// console.log('console.log 1');

// process.nextTick(() => {
//     console.log('nextTick 1');
// })

// console.log('console.log 2');