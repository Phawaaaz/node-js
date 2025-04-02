const upperCase = require('upper-case').upperCase
function greet (name){
    console.log(upperCase(`Hello ${name} Welcome to my world`));
}


greet('akinola fawaz')
module.exports = greet;