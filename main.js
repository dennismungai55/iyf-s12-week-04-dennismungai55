
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

// ===================================
// TASK 7.3: FUNCTIONS
// EXERCISE 1: FUNCTION DECLARATIONS
// ===================================

// 1. Function declaration
function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet("Dennis"));


// 2. Function expression
const add = function(a, b) {
    return a + b;
};

console.log("Addition:", add(10, 5));


// 3. Arrow function
const multiply = (a, b) => a * b;

console.log("Multiplication:", multiply(4, 5));


// 4. Arrow function with body
const divide = (a, b) => {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
};

console.log("Division:", divide(20, 4));
console.log("Division:", divide(20, 0));

// ===================================
// TASK 7.3: EXERCISE 2
// BUILD THESE FUNCTIONS
// ===================================

// 1. Calculate area of a rectangle
function calculateArea(width, height) {
    return width * height;
}

console.log("Rectangle area:", calculateArea(10, 5));


// 2. Convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

console.log("Temperature:", celsiusToFahrenheit(25), "°F");


// 3. Check if a number is even
function isEven(number) {
    return number % 2 === 0;
}

console.log("Is 10 even?", isEven(10));
console.log("Is 7 even?", isEven(7));


// 4. Get initials from a full name
function getInitials(fullName) {
    return fullName
        .split(" ")
        .map(name => name.charAt(0).toUpperCase())
        .join("");
}

console.log("Initials:", getInitials("Dennis Mungai"));


// 5. Reverse a string
function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log("Reversed:", reverseString("JavaScript"));

// ===================================
// TASK 7.3: EXERCISE 3
// DEFAULT PARAMETERS
// ===================================

// Example: Default parameters
function greet(name = "Guest", greeting = "Hello") {
    return `${greeting}, ${name}!`;
}

console.log(greet());
console.log(greet("Alice"));
console.log(greet("Bob", "Hi"));


// Build: Calculate tip
function calculateTip(bill, tipPercent = 15) {
    return bill * (tipPercent / 100);
}

console.log("Tip amount:", calculateTip(1000));
console.log("Tip amount:", calculateTip(2000, 10));

function calculateTip(bill, tipPercent = 15) {
    return bill * (tipPercent / 100);
}

// ===================================
// TASK 7.4: CONTROL FLOW
// EXERCISE 1: IF/ELSE STATEMENTS
// ===================================

function getGrade(score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

// Test the function
console.log("Score 95:", getGrade(95));
console.log("Score 85:", getGrade(85));
console.log("Score 75:", getGrade(75));
console.log("Score 65:", getGrade(65));
console.log("Score 45:", getGrade(45));

// ===================================
// TASK 7.4: EXERCISE 2
// SWITCH STATEMENTS
// ===================================

function getDayName(dayNumber) {
    switch (dayNumber) {
        case 0:
            return "Sunday";

        case 1:
            return "Monday";

        case 2:
            return "Tuesday";

        case 3:
            return "Wednesday";

        case 4:
            return "Thursday";

        case 5:
            return "Friday";

        case 6:
            return "Saturday";

        default:
            return "Invalid day";
    }
}

// Test the function
console.log(getDayName(0));
console.log(getDayName(1));
console.log(getDayName(3));
console.log(getDayName(5));
console.log(getDayName(6));
console.log(getDayName(8));

// ===================================
// TASK 7.4: EXERCISE 3
// LOOPS
// ===================================

// 1. FOR LOOP
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// 2. WHILE LOOP
let count = 0;

while (count < 5) {
    console.log(count);
    count++;
}

// 3. FOR...OF LOOP
const colors = ["red", "green", "blue"];

for (const color of colors) {
    console.log(color);
}

console.log("Numbers 1 to 100:");

for (let i = 1; i <= 100; i++) {
    console.log(i);
}

console.log("Even numbers:");

for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
console.log("FizzBuzz:");

for (let i = 1; i <= 100; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } 
    else if (i % 3 === 0) {
        console.log("Fizz");
    } 
    else if (i % 5 === 0) {
        console.log("Buzz");
    } 
    else {
        console.log(i);
    }
}

console.log("Star Triangle:");

for (let i = 1; i <= 5; i++) {
    let stars = "";

    for (let j = 1; j <= i; j++) {
        stars += "*";
    }

    console.log(stars);
}



// ===================================
// TASK 7.4: MINI-PROJECT
// INTERACTIVE CONSOLE CALCULATOR
// ===================================

// 1. Addition
function add(a, b) {
    return a + b;
}

// 2. Subtraction
function subtract(a, b) {
    return a - b;
}

// 3. Multiplication
function multiply(a, b) {
    return a * b;
}

// 4. Division
function divide(a, b) {
    if (b === 0) {
        return "Error: Cannot divide by zero!";
    }
    return a / b;
}

// 5. Main calculator function
function calculate(num1, operator, num2) {

    switch (operator) {

        case "+":
            return add(num1, num2);

        case "-":
            return subtract(num1, num2);

        case "*":
            return multiply(num1, num2);

        case "/":
            return divide(num1, num2);

        case "%":
            if (num2 === 0) {
                return "Error: Cannot divide by zero!";
            }
            return num1 % num2;

        case "**":
            return num1 ** num2;

        default:
            return "Invalid operator";
    }
}

// ===================================
// TEST THE CALCULATOR
// ===================================

console.log("Addition:", calculate(10, "+", 5));

console.log("Subtraction:", calculate(10, "-", 5));

console.log("Multiplication:", calculate(10, "*", 5));

console.log("Division:", calculate(10, "/", 5));

console.log("Division by zero:", calculate(10, "/", 0));

console.log("Modulus:", calculate(10, "%", 3));

console.log("Power:", calculate(2, "**", 3));

console.log("Invalid operator:", calculate(10, "&", 5));


// ===================================
// TASK 8.1: ARRAYS
// EXERCISE 1: ARRAY BASICS
// ===================================

// Creating arrays
const fruits = ["apple", "banana", "orange"];
const numbers = [1, 2, 3, 4, 5];
const mixed = ["hello", 42, true, null];

// Accessing elements
console.log("First fruit:", fruits[0]);
console.log("Array length:", fruits.length);

// Modifying arrays
fruits.push("grape");
console.log("After push:", fruits);

fruits.unshift("mango");
console.log("After unshift:", fruits);

fruits.pop();
console.log("After pop:", fruits);

fruits.shift();
console.log("After shift:", fruits);

// ===================================
// EXERCISE 2: ARRAY METHODS
// ===================================

const numbers2 = [1, 2, 3, 4, 5];

// forEach - perform an action on each element
numbers2.forEach(num => console.log("Doubled:", num * 2));

// map - transform each element
const doubled = numbers2.map(num => num * 2);
console.log("Doubled array:", doubled);

// filter - keep elements that pass a test
const evenNumbers = numbers2.filter(num => num % 2 === 0);
console.log("Even numbers:", evenNumbers);

// find - get the first matching element
const firstEven = numbers2.find(num => num % 2 === 0);
console.log("First even number:", firstEven);

// reduce - combine all elements
const sum = numbers2.reduce((total, num) => total + num, 0);
console.log("Sum:", sum);

// includes - check whether an element exists
console.log("Includes 3:", numbers2.includes(3));



const values = [2, 4, 6, 8, 10];

const doubledValues = values.map(num => num * 2);

console.log("Doubled numbers:", doubledValues);


const values2 = [-5, 10, -3, 20, 0, 8];

const positiveNumbers = values2.filter(num => num >= 0);

console.log("Non-negative numbers:", positiveNumbers);


const values3 = [3, 7, 12, 15, 20];

const firstGreater = values3.find(num => num > 10);

console.log("First number greater than 10:", firstGreater);


const values4 = [2, 3, 4, 5];

const product = values4.reduce((total, num) => total * num, 1);

console.log("Product:", product);


// ===================================
// TASK 8.2: OBJECTS
// EXERCISE 1: OBJECT BASICS
// ===================================

// Creating an object
const person = {
    firstName: "Dennis",
    lastName: "Mungai",
    age: 21,
    isStudent: true,
    hobbies: ["coding", "football", "music"],
    address: {
        city: "Nairobi",
        country: "Kenya"
    }
};

// Accessing properties
console.log("First name:", person.firstName);
console.log("Last name:", person["lastName"]);
console.log("City:", person.address.city);

// Modifying properties
person.age = 22;

// Adding a new property
person.phone = "0712345678";

// Removing a property
delete person.isStudent;

// Display updated object
console.log("Updated person:", person);


// ===================================
// EXERCISE 2: OBJECT METHODS
// ===================================

const calculator = {

    // Function expression
    add: function(a, b) {
        return a + b;
    },

    // Shorthand method
    subtract(a, b) {
        return a - b;
    },

    // Arrow function
    multiply: (a, b) => a * b,

    // Another method
    divide(a, b) {
        if (b === 0) {
            return "Cannot divide by zero";
        }
        return a / b;
    }
};

// Testing calculator methods
console.log("Addition:", calculator.add(5, 3));
console.log("Subtraction:", calculator.subtract(5, 3));
console.log("Multiplication:", calculator.multiply(5, 3));
console.log("Division:", calculator.divide(10, 2));

// ===================================
// EXERCISE 3: OBJECT ITERATION
// ===================================

const scores = {
    math: 95,
    english: 88,
    science: 92
};

// Get keys
console.log("Subjects:", Object.keys(scores));

// Get values
console.log("Scores:", Object.values(scores));

// Get entries
console.log("Entries:", Object.entries(scores));

// Loop through the object
for (const [subject, score] of Object.entries(scores)) {
    console.log(`${subject}: ${score}`);
}


// ===================================
// TASK 8.3: ARRAY OF OBJECTS
// WORKING WITH REAL DATA
// ===================================

// Student information
const students = [
    { name: "Alice", age: 22, grade: 85, major: "CS" },
    { name: "Bob", age: 20, grade: 72, major: "Math" },
    { name: "Charlie", age: 23, grade: 90, major: "CS" },
    { name: "Diana", age: 21, grade: 88, major: "Physics" },
    { name: "Eve", age: 22, grade: 95, major: "CS" }
];

// 1. Get all student names
const names = students.map(student => student.name);
console.log("Student names:", names);

// 2. Get students with grade > 80
const highAchievers = students.filter(student => student.grade > 80);
console.log("High achievers:", highAchievers);

// 3. Find the student named Charlie
const charlie = students.find(student => student.name === "Charlie");
console.log("Charlie:", charlie);

// 4. Calculate average grade
const totalGrade = students.reduce((total, student) => {
    return total + student.grade;
}, 0);

const avgGrade = totalGrade / students.length;
console.log("Average grade:", avgGrade);

// 5. Get CS majors only
const csMajors = students.filter(student => student.major === "CS");
console.log("CS students:", csMajors);

// 6. Sort by grade (highest first)
const sortedByGrade = [...students].sort((a, b) => b.grade - a.grade);
console.log("Sorted by grade:", sortedByGrade);

// 7. Check if any student has grade > 90
const hasTopStudent = students.some(student => student.grade > 90);
console.log("Has top student:", hasTopStudent);

// 8. Check if all students are passing (grade >= 60)
const allPassing = students.every(student => student.grade >= 60);
console.log("All students passing:", allPassing);



// TASK 8.4: JSON — DATA AS TEXT

const postsJson = '[{"id":1,"title":"Welcome","likes":12,"published":true},{"id":2,"title":"Draft ideas","likes":0,"published":false},{"id":3,"title":"Week 4 recap","likes":30,"published":true}]';

// 1. Parse JSON text into a JavaScript array
const posts = JSON.parse(postsJson);
console.log("All posts:", posts);

// 2. Keep only published posts
const publishedPosts = posts.filter(post => post.published);
console.log("Published posts:", publishedPosts);

// 3. Sort published posts by likes (highest first)
const sortedPosts = [...publishedPosts].sort((a, b) => b.likes - a.likes);
console.log("Sorted posts:", sortedPosts);

// 4. Map posts to readable strings
const postTitles = sortedPosts.map(post =>
    `${post.title} (${post.likes} likes)`
);
console.log("Post titles:", postTitles);

// 5. Convert the filtered array back into JSON text
const postsBackToJson = JSON.stringify(publishedPosts, null, 2);
console.log("JSON text:", postsBackToJson);
console.log("Data type:", typeof postsBackToJson);




const gradeTracker = {
    students: [],

    // 1. Add a new student
    addStudent(name, grades) {
        this.students.push({ name, grades });
    },

    // 2. Get a student by name
    getStudent(name) {
        return this.students.find(student =>
            student.name.toLowerCase() === name.toLowerCase()
        ) || null;
    },

    // 3. Calculate a student's average
    getStudentAverage(name) {
        const student = this.getStudent(name);

        if (!student) return null;

        const grades = Object.values(student.grades);
        const total = grades.reduce((sum, grade) => sum + grade, 0);

        return Number((total / grades.length).toFixed(2));
    },

    // 4. Get class average for a subject
    getSubjectAverage(subject) {
        const grades = this.students
            .filter(student => student.grades[subject] !== undefined)
            .map(student => student.grades[subject]);

        if (grades.length === 0) return null;

        const total = grades.reduce((sum, grade) => sum + grade, 0);

        return Number((total / grades.length).toFixed(2));
    },

    // 5. Get top performer
    getTopStudent() {
        if (this.students.length === 0) return null;

        return this.students.reduce((top, student) => {
            return this.getStudentAverage(student.name) >
                this.getStudentAverage(top.name) ? student : top;
        });
    },

    // 6. Get students needing help (average below 70)
    getStrugglingStudents() {
        return this.students.filter(student =>
            this.getStudentAverage(student.name) < 70
        );
    },

    // 7. Get letter grade
    getLetterGrade(score) {
        if (score >= 90) return "A";
        if (score >= 80) return "B";
        if (score >= 70) return "C";
        if (score >= 60) return "D";
        return "F";
    },

    // 8. Generate report card
    generateReportCard(name) {
        const student = this.getStudent(name);

        if (!student) return "Student not found.";

        let report = `REPORT CARD: ${student.name}\n`;
        report += "-------------------------\n";

        for (const [subject, grade] of Object.entries(student.grades)) {
            report += `${subject}: ${grade} (${this.getLetterGrade(grade)})\n`;
        }

        const average = this.getStudentAverage(name);

        report += "-------------------------\n";
        report += `Average: ${average}\n`;
        report += `Overall Grade: ${this.getLetterGrade(average)}`;

        return report;
    }
};

// TEST YOUR IMPLEMENTATION

gradeTracker.addStudent("Alice", {
    math: 95,
    english: 88,
    science: 92
});

gradeTracker.addStudent("Bob", {
    math: 72,
    english: 85,
    science: 78
});

gradeTracker.addStudent("Charlie", {
    math: 60,
    english: 65,
    science: 58
});

// Test the methods
console.log("Alice's average:", gradeTracker.getStudentAverage("Alice"));
console.log("Math class average:", gradeTracker.getSubjectAverage("math"));
console.log("Top student:", gradeTracker.getTopStudent()?.name);
console.log("Students needing help:", gradeTracker.getStrugglingStudents());
console.log(gradeTracker.generateReportCard("Alice"));



