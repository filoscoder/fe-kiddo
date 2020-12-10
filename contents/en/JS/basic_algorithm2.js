/*
1. Make a function that returns a multiplication table (as a String) for a given `number` as argument.
*Advance-1: Validate the argument data type. Only accepts number arguments. Otherwise return: "WRONG NUMBER"

For example, a multiplication table (string) for number === 5 looks like below:

1 * 5 = 5
2 * 5 = 10
3 * 5 = 15
4 * 5 = 20
5 * 5 = 25
6 * 5 = 30
7 * 5 = 35
8 * 5 = 40
9 * 5 = 45
10 * 5 = 50

P. S. You can use `\n` (escape character) in string to jump to the next line.
*/

function multiplicationTable(arg1) {
    // your code

    // end of your code
}

console.log("[1] multiplicationTable: ", multiplicationTable(5));
console.log("[1] multiplicationTable: ", multiplicationTable(9));


/*
2. Make a function that accepts a string argument and returns it reversed. 
*Advance-1: Write the FUNCTION and his logic in only ONE LINE of code. (ES6)

For example, given a string "world" the expected output is: "dlrow"
*/

function strReverser(arg1) {
    // your code

    // end of your code
}
console.log("[2] strReverser: ", strReverser("world")); // Expect output: "dlrow"
console.log("[2] strReverser: ", strReverser("Code and Design")); // Expect output: "ngiseD dna edoC"


/*
3. Write a function that counts how many coins are given. It should count by each type: there is four types: 10c, 25c, 50c, 100c.

For example, given this coins: `[10, 25, 25, 50, 10, 100, 10, 50]` the function should return a message like below:

"Coins in your pocket:
    10c: 3
    25c: 2
    50c: 2
    100c: 1

Total of 8 coins"

P. S. You can use `\n` to jump to the next line and `\t` to put a tab in the string.
The ARGUMENT will be always an Array with number elements.
*/

function coinCounter(stringArg) {
    // your code

    // end of your code
}

console.log("[3] coinCounter: ", coinCounter([10, 25, 25, 50, 10, 100, 10, 50]));
console.log("[3] coinCounter: ", coinCounter([10, 50, 10, 100, 25, 25, 50, 10, 100, 10, 50, 10, 100, 25, 25, 50, 10, 100, 10, 50]));