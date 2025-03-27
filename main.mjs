import {testing, subtract} from './testing.mjs';
import data from './data.json'  assert { type: "json" }


console.log(testing(1, 2)); // 3 )
subtract(2, 1); // 1

console.log(data); // { name: 'John Doe', age: 25 }