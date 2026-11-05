
// ==================================
// TASK 7.1: JAVASCRIPT VARIABLES
// ==================================

// Variable declarations
let name = "Dennis";
let age = 21;
const birthYear = 2005;

// typeof operator
console.log(typeof name);      // string
console.log(typeof age);       // number
console.log(typeof true);      // boolean

// let vs const
let score = 100;
score = 150; // Works!

const PI = 3.14159;
// PI = 3; // Error! const cannot be reassigned


// ==================================
// EXERCISE: VARIABLE PRACTICE
// ==================================

// Your personal variables
let myName = "Dennis";
let myAge = 21;
let isStudent = true;
let favoriteColors = ["Blue", "Black", "White"];
let today = new Date();

// Display variables in the console
console.log("My name is:", myName);
console.log("My age is:", myAge);
console.log("Am I a student?", isStudent);
console.log("My favorite colors are:", favoriteColors);
console.log("Today's date is:", today);

// TASK 7.2: Data Types & Operators

// Basic math
let a = 10;
let b = 3;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Exponentiation:", a ** b);

// Increment/Decrement
let count = 0;

count++;
console.log("After increment:", count);

count--;
console.log("After decrement:", count);

// EXERCISE 2: STRING OPERATIONS

let firstName = "Dennis";
let lastName = "Mungai";

// Concatenation
let fullName = firstName + " " + lastName;

// Template literals
let greeting = `Hello, ${firstName}!`;
let message = `${firstName} has ${firstName.length} letters.`;

// String methods
console.log("Full name:", fullName);
console.log("Greeting:", greeting);
console.log("Message:", message);
console.log("Uppercase:", fullName.toUpperCase());
console.log("Lowercase:", fullName.toLowerCase());
console.log("First letter:", firstName.charAt(0));
console.log("Includes Dennis:", fullName.includes("Dennis"));

// EXERCISE 3: COMPARISON & LOGICAL OPERATORS

// Comparison operators
console.log(5 > 3);    // true
console.log(5 < 3);    // false
console.log(5 === 5);  // true
console.log(5 == "5"); // true (loose equality)
console.log(5 !== 3);  // true

// Logical operators
console.log(true && true);   // AND
console.log(true || false);  // OR
console.log(!true);          // NOT

// CHALLENGE: AGE CALCULATIONS

// Use your actual age and birth year
let myAge = 21;
let myBirthYear = 2005;

// Calculate age in days
let ageInDays = myAge * 365;

// Calculate age in hours
let ageInHours = ageInDays * 24;

// Calculate the year you will turn 100
let yearAt100 = myBirthYear + 100;

console.log("My age in days:", ageInDays);
console.log("My age in hours:", ageInHours);
console.log("I will turn 100 in:", yearAt100);
