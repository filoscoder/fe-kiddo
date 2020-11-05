// 'use strict';

// // 1. Variables with the keyword `const` are block-scope.


// // 2. Variables with the keyword `let` are block-scope.


// // 3. What is the final value of "obj" in the following example?

// const obj = { foo: 1 };
// obj.bar = 2;

// console.log(obj);
// // expected output: ?


// // 4. `Rest` is a new way for functions to handle an arbitrary number of parameters. 
// // Can you guess what the mysterious "a" variable holds? 
// // *Check `arguments`: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/arguments

// function mystery(...params) {
//     return params;
// }
// let a = mystery(1, 23, 4);
// console.log(a);
// // expected output: ?


// // 5. `String interpolation` is a much-needed new feature that is finally available in JavaScript. 
// // See the example below. Is there anything wrong with it?

// const name = 'Harry';
// let occupation = 'wizard';

// console.log(`Hi! My name is ${name}. I'm a ${occupation}.`);
// // expected output: ?


// // 6. What value will this expression return?
// // *Check: https://developer.mozilla.org/it/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

// let a, b = 5;
// c = b, 10;

// console.log({ a, b, c });
// // expected output: ?


// // 7. What will this function return?
// // *Check: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/typeof
// (function() {
//     let f = this ? class g {} : class h {};
//     return [typeof f, typeof h];
// })();

// // expected output: ?


// // 8. What value will this expression return?

// let z = [...[...
//     '...'
// ]].length;
// console.log(z);
// // expected output: ?

// // 9. What will this function return?
// (function() {
//     if (false) {
//         let f = { g() => 1 };
//     }
//     return typeof f;
// })();


// // 10. ES6 gives an alternative way to assign variables. Can you guess what the below code does?
// let a = 12,
//     b = 3;
// [a, b] = [b, a];

// console.log(a, b);
// // expected output: ?


// // 11. What is stored in the `arr3` array?
// let arr1 = [1, 3],
//     arr2 = [arr1, [5, 5]],
//     arr3 = [...arr2, [1, 8]];

// console.log(arr3);
// // expected output: ?


// // 12. Is this a valid code?
// class Slave { // ... };
//     const slave = Slave();