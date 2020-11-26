/*
1. Make a function that accepts 2 arguments and return a greeting statement that uses these parameters. 
your program should return, "Hello, my name is ${arg1}! I'm ${arg2} yo.".
*Advance: If there is NO 2nd ARGUMENT, should only returns "Hello, my name is ${arg1}!"
*/

function sayHello(arg1, arg2) {
    // your code

    // end of your code
}

console.log("[1] sayHello: ", sayHello("Jkim", 28));
console.log("[1] sayHello: ", sayHello("Daniel", 32));

/*
2. Complete the square sum function so that it squares each number passed into it 
and then sums the results together. 
*Advance-1: Read the Array argument in reverse order.
*Advance-2: Should validate the parameter as an Array of numbers (*use the syntax `typeof`).

For example, 
for [1, 2, 2] 
it should return 9 
because 1^2 + 2^2 + 2^2 = 9
*/

function sqrSum(arr) {
    // your code

    // end of your code
}
console.log("[2] sqrSum: ", sqrSum([1, 2, 2])); // Expect output: 9
console.log("[2] sqrSum: ", sqrSum([4, 2, 3, 5, 7, 1])); // Expect output: 104


/*
3. Write a function that returns an ARRAY of all the EVEN INDEX characters from a string.
If the string is SMALLER than TWO characters or LONGER than 20 characters, 
the function should return "INVALID ARGUMENT".

For example,
"abcdefghijklm" --> ["a", "c", "e", "g", "i", "k", "m"]
"a"             --> "INVALID ARGUMENT"
"abcdefghijklm..." (longer than 20 chars) --> "INVALID ARGUMENT"

*Advance: Return the sequence(Array) with an INVERTED ORDER and all CAPITALIZED.
For example (Advance),
"abcdefghijklm" --> ["M", "K", "I", "G", "E", "C", "A"]
"a"             --> "INVALID ARGUMENT"
"abcdefghijklmnopqrstuvwxyz" (longer than 20 chars) --> "INVALID ARGUMENT"
*/

function onlyEvens(stringArg) {
    // your code
    console.log(stringArg.length)
        // end of your code
}

console.log("[3] onlyEvens: ", onlyEvens("abcdefghijklm")); // Expect output: ["a", "c", "e", "g", "i", "k", "m"]
console.log("[3] onlyEvens: ", onlyEvens("junghun")); // Expect output: ["j", "n", "h", "n"]
console.log("[3] onlyEvens: ", onlyEvens("a")); // Expect output: "INVALID ARGUMENT"
console.log("[3] onlyEvens: ", onlyEvens("abcdefghijklmnopqrstuvwxyz")); // Expect output: "INVALID ARGUMENT"