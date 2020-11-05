/*
1. Make a function that accepts 2 arguments and return a greeting statement that uses these parameters. 
your program should return, "Hello, my name is ${arg1}! I'm ${arg2} yo.".
*Advance: If there is no second argument, should only returns "Hello, my name is ${arg1}!"
*/

function sayHello(arg1, arg2) {
    // your code
}

console.log("1. sayHello: ", sayHello("Jkim", 28));

/*
2. Complete the square sum function so that it squares each number passed into it 
and then sums the results together. 
*Advance: Should validate the parameter as an Array of numbers.

For example, 
for [1, 2, 2] 
it should return 9 
because 1^2 + 2^2 + 2^2 = 9
*/

function sqrSum(arr) {
    // your code

    console.log("2. sqrSum: ", sqrSum([1, 2, 2]));

    /*
    3. Write a function that returns a sequence of all the EVEN characters from a string.
    If the string is smaller than two characters or longer than 100 characters, 
    the function should return "invalid string".
    *Advance: Return the sequence with an inverted order and all capitalized.

    For example,
    "abcdefghijklm" --> ["b", "d", "f", "h", "j", "l"]
    "a"             --> "invalid string"
    */

    function onlyEvens(arg1) {
        // your code
    }

    console.log("3. onlyEvens: ", onlyEvens("abcdefghijklm"));