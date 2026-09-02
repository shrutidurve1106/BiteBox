// //user defined function
// function mult(p, q) {
//   m = p * q;
//   console.log("Multiplication is:" + m);
// }
// mult(8, 5); //function call

// //built in
// alert("This is home page!");
// let name = prompt("Enter your name:");
// console.log(name);

//String Method
// let s = "      Im happy!      ";
// console.log(s.toUpperCase());
// console.log(s.trim("a"));

//Array method

// function income(salary) {
//   console.log(salary * 2);
// }
// income(20000);

// let increment = parseInt(prompt("Enter incentive: "));
// function income(salary) {
//   let total = salary * 2 + increment;
//   console.log(total);
// }
// income(20000);

// function sayHello() {
//   console.log("Hello");
// }
// function highOrder(sayHello) {
//   for (let i = 1; i <= 5; i++) {
//     sayHello();
//   }
// }
// highOrder(sayHello);

// function greet(name) {
//   return "Hello. ${name}!";
// }
// console.log(greet("Students"));

//Arrow Function

let greet = (name) => "Hello $(name)..!!";
console.log(greet("Shru"));

let add = (a, b) => {
  sum = a + b;
  return sum;
};
console.log(add(12, 31));
