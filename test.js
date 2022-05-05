// VOCAB LIST - Chapter 2

/*
expression: A fragment of code that produces a value.
side effects: changes the internal state of the "machine" in a way that will affect the statements that come after it
binding, or variable: to catch and hold values. After a binding has been defined, its name can be used as an expression. The value of such an expression is the value the binding currently holds.
keywords/reserved words: words with a special meaning, such as let, are keywords, and they may not be used as binding names. There are also a number of words that are “reserved for use” in future versions of JavaScript, which also can’t be used as binding names.
environment: The collection of bindings and their values that exist at a given time is called the environment.
function: A function is a piece of program wrapped in a value.
executing a function: Executing a function is called invoking, calling, or applying it.
side effect: e.g. showing a dialog box or writing text to the screen
"return": When a function produces a value, it is said to return that value.
conditional execution:  is created with the if keyword in JavaScript; where the program takes the proper branch based on the situation at hand.
loop: a form of control flow that repeats a section of code a certain number of times.
while: a keyword - is followed by an expression in parentheses and then a statement, much like if. The loop keeps entering that statement as long as the expression produces a value that gives true when converted to Boolean.
Indenting code: consistent indentation is a good habit .
A comment is a piece of text that is part of a program but is completely ignored by the computer
*/

// Code Examples:

console.log('hello world');


let theNumber = Number(prompt("Pick a number"));
if (!Number.isNaN(theNumber)) {
  console.log("Your number is the square root of " + theNumber * theNumber);
}


let theNumber = Number(prompt("Pick a number"));
if (!Number.isNaN(theNumber)) {
  console.log("Your number is the square root of " + theNumber * theNumber);
} else {
  console.log("Hey. Why didn't you give me a number?");
}


let num = Number(prompt("Pick a number"));

if (num < 10) {
  console.log("Small");
} else if (num < 100) {
  console.log("Medium");
} else {
  console.log("Large");
}


let number = 0;
while (number <= 12) {
  console.log(number);
  number = number + 2;
}
console.log('after the loop is done:', number);
// → 0
// → 2
//   … etcetera


let result = 1;
let counter = 0;
while (counter < 10) {
  result = result * 2;
  counter = counter + 1;
}
console.log(result);
// → 1024


let yourName;
do {
  yourName = prompt("Who are you?");
} while (!yourName);
console.log(yourName);


let result = 1;
for (let counter = 0; counter < 10; counter = counter + 1) {
  result = result * 2;
}
console.log(result);
// → 1024


for (let number = 0; number <= 12; number += 2) {
  console.log(number);
}

// Chapter 2 Exercises

// Building a triangle:

var str = "#";

// while str's length is less than or equal to 7
while (str.length <= 7) {
  // log str to the console
  console.log(str);
  // reset str to be str plus another #
  str += "#";
}

// FizzBuzz

// let's write code to log 1 to 100 to the console

// create a counter, set to 1
let counter = 1;
// while counter is less than or equal to 100
while (counter <= 100) {
  
  // if counter is divisible by 3 and divisible by 5
  if ( (counter % 3 === 0) && (counter % 5 === 0) ) {
    // log "FizzBuzz" to the console
    console.log("FizzBuzz");
    // increment the counter by 1
    counter += 1;
    // continue
    continue;
  }
  
  // if counter is divisible evenly by 3
  if (counter % 3 === 0) {
    // log "Fizz" to the console
    console.log("Fizz");
    // increment counter by 1 
    counter += 1;
    // continue
    continue;
  }
  
  // if counter is divisible evenly by 5
  if (counter % 5 === 0) {
    // log "Buzz" to the console
    console.log("Buzz");
    // increment counter by 1 
    counter += 1;
    // continue
    continue;
  }
  
  // log counter to the console
  console.log(counter);
  // increment counter by 1 
  counter += 1;
}

// Chessboard

// create a size variable, set it equal to 8
let size = 5;
// create an empty string result
let result = '';

// loop to create the rows
let row = 1;
while (row <= size) {
  // loop to create the columns
  let column = 1;
  while (column <= size) {
    // if column plus row is even
    if ((column + row) % 2 === 0) {
      // add an empty space
      result += " ";
   	// else
    } else {
      // add an octothorpe #
      result += "#";
    }
    column += 1;
  }
  // add a newline symbol to end current wo
  result += '\n';
  row += 1;
}


// log result to the console
console.log(result);