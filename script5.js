function greet()
{
console.log("Hello from a function declaration!");
}
const sayGoodbye = function()
  {
console.log("Goodbye from a function expression!");
};
const sayThanks = () =>
{
console.log("Thanks from an arrow function!");
};
greet(); // Calls the declared
function sayGoodbye(); // Calls the
function expression sayThanks(); //
Calls the arrow function
