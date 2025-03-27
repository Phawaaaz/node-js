
/**
 * Path Module
 */
// const path = require("path")

// console.log(__filename, __dirname);
// console.log(path.basename(__filename))
// console.log(path.basename(__dirname))
// console.log(path.extname(__filename))
// console.log(path.extname(__dirname))
// console.log(path.parse(__filename))
// console.log(path.isAbsolute(__filename))
// console.log(path.format(path.parse(__filename)))

// console.log(path.join('f1', 'f2', 'index.cs'));
// console.log(path.join('f1', 'f2', 'index.cs'));
// console.log(path.join('f1', 'f2', '../index.cs'));
// console.log(path.join(__dirname, 'data.json'));

// console.log(path.resolve('f1', 'f2', 'index.cs'));
// console.log(path.resolve('/f1', 'f2', 'index.cs'));
// console.log(path.resolve('f1', '/f2', '../index.cs'));
// console.log(path.resolve(__dirname, 'data.json'));




/**
 * Event Module
 */

const eventEmitter = require('events')
// const emitter = new eventEmitter()

// emitter.on('OrderPizza', (size, toppins) =>{
//     console.log(`Order recieve: baking ${size} pizza with ${toppins} on it`);
// })

// emitter.on('OrderPizza', (size)=>{
//     if(size === 'large'){
//         console.log('Serving complementary drink');
//     }
// })
// console.log('write cook before cooking');
// emitter.emit("OrderPizza", 'large', 'mushroom')

const PizzaShop = require('./pizza-shop')
const DrinkMachine = require('./drink-machine')
const pizzaShop =  new PizzaShop()
const drinkMachine = new DrinkMachine()

pizzaShop.on('order', (size, toppings)=>{
    console.log(`Order recieve: baking ${size} pizza with ${toppings} on it`);
    drinkMachine.serveDrink(size)
})

pizzaShop.order('large', 'mushroom')
pizzaShop.displayOrderNumber()