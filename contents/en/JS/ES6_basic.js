// [ 1. `use strict` ]
// Added on ES5
// Use it for prevent errors
'use strict';

// undeclaredVar 5;

// duplicatedVar;
// duplicatedVar;

// let arguments = [1, 2, 3];

// function test(a, b) {
//     console.log(arguments)
//     return;
// }
// test(1, 2, 3, 4);

// `this` refers to the object that called the function


// [ 2. Variables ]
// don't ever use `var`
// `var hoisting` (move declaration to the top)
// has no block scope

// {
//     lesson = 6;
//     var lesson = 6;
// };
// console.log('lesson: ', lesson);


// `let` (added on ES6): READ / WRITE

// let globalVar = 'global variable';
// console.log('1. globalVar: ', globalVar); 
// {
//     let name = 'jkim';
//     console.log('1. name: ', name);
//     name = 'daniel';
//     console.log('2. name: ', name);
// console.log('2. globalVar: ', globalVar);
// };
// name = 'amanda';
// console.log('3. name: ', name);
// console.log('3. globalVar: ', globalVar);


// `const` (added on ES6): READ ONLY
// Used for immutable data: security, thread safety, reduce silly mistakes
// Use `const` always unless your variable data needs to be changed (`let`)
// const companyName = 'inter-section.io';
// const pi = 3.14;



// [ 3. Operators ]
// A. string concatenation
// console.log('hello!' + "I'm Daniel!");
// console.log("Im" + 32 + "yo");
// ES6
// let age = 32;
// console.log(`hello Im ${age} yo`);


// B. Numeric operation : +, -, /, *, %, **
// console.log(3 ** 2); // 10^2

// C. Increment & Decrement operators
// let counter = 1;
// const preIncrement = ++counter; 

// 1. counter = counter + 1; <= ++counter
// 2. preIncrement = counter;

// console.log({ preIncrement, counter });

// const postIncrement = counter++
// postIncrement = counter;
// counter = counter + 1;

// D. Asignment operators (+=, -=, /=, *=, %=, **=)
// let counter = 1;
// counter = counter - 1;
// counter -= 1;

// E. Comparisson operators (<, <=, >, >=)
// console.log(3 < 2); // false
// console.log(3 <= 3); // true


// F. Logical operators: || (or), && (and), ! (not)
// console.log(!(3 > 2) || !(4 < 2)); // true + true = true

// G. Equality (== vs. ====, != vs. !==)
// let obj = { age: 32 };
// let obj2 = { age: 32 };
// let obj3 = obj;

// console.log(obj.age != obj2.age); // false, false
// console.log(age === age2); // strict equality, data type OK

// H. Falsy (false, 0, '', null, undefined)
// console.log(0 == false); // true
// console.log(0 === false); // false: 0 => number, false => boolean
// // console.log(typeof false);
// console.log('' == false); // true
// console.log('' === false); // false: '' => string
// console.log(null == undefined); // true
// console.log(null === undefined); // false

// let name; // declare, initialize X => undefined;
// let age = null; 
// *  ===

// [ 4. Conditional ]
// if, else if, else
// let age = 17;
// // program: sell liquor to adults only 18+

// if (age < 18) {
//     console.log("don't sell!")
// }
// console.log("sell!")


// A. Ternary operator   ? : (ES6)
// let age = 17;
// if (age > 18) {
//     console.log("sell!")
// } 
//     console.log("dont sell!")

// CONDITION ? TRUE : FALSE


// age > 18 ? 
// console.log("sell") 
// : 
// console.log("dont sell");


// B. Switch statement
// let age = 18;

// switch (age) {
//     case (age >= 18):

//         console.log("sell");
//         break;
//     case age < 18:
//         console.log("dont sell");
//         break;
//     default:
//         break;
// }


// [ 5. Loops ]
// while, do while


// while (i > 0) {
//     console.log(i);
//     --i;
// }
// console.log(i);

// let i = 10;
// do {
//     console.log(i);
//     i--;
// } while (i > 0) {
//     console.log("finish");
// };

// for (begin; condition; step)
// for (let i = 1; i < 100; i++) {
//     console.log(i)
// }
// nested/ break/ continue
// for (let i = 1; i < 100; i++) {
//     for (let j = 1; j < 100; j++) {
//         console.log({ i, j });
//     }
// }
// ES6. functional programming
// array method
// let arr = [1, 2, 3, 4];
// let arr2 = [[1, 2], [3, 4]];
// let arr2 = [{1, 2}, {3, 4}];
let obj1 = {
    0: "a",
    1: "b",
    2: "c",
};

for (let i of obj1) {
    console.log(i);
};