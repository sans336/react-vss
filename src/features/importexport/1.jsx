export function add(a, b) {
  return a + b;
}// Exporting in React:


// Importing in React:
import { add } from './myFunctions.js';

const result = add(5, 3); 


//. Default Exports:
function Mycomponent() {
    return <h1>hello world</h1>;
} export default Mycomponent;
import MyComponent from './MyComponent.js';//importing


