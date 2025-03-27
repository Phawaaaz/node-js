const eventEmitter = require('events')
class PizzaShop extends eventEmitter{
    constructor(){
        super();
        this.orderNumber = 0
    }
    order(size, toppings){
        this.orderNumber ++
        this.emit('order', size , toppings)
    }
    displayOrderNumber(){
        console.log(`Current order number is ${this.orderNumber}`);
    }
}

module.exports = PizzaShop