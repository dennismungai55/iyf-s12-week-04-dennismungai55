
// =====================================
// DAY 1: FIZZBUZZ
// =====================================

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

// =====================================
// DAY 2: REVERSE A STRING
// =====================================

// Approach 1: Using a loop
function reverseWithLoop(str) {
    let reversed = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }

    return reversed;
}

console.log("Day 2 - Loop:", reverseWithLoop("hello"));

// Approach 2: Using built-in methods
function reverseWithMethods(str) {
    return str.split("").reverse().join("");
}

console.log("Day 2 - Methods:", reverseWithMethods("hello"));



// =====================================
// DAY 3: FIND LARGEST NUMBER
// =====================================

let numbers = [12, 45, 7, 89, 23, 56];

// Approach 1: Using a loop
function findLargest(arr) {
    let largest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }

    return largest;
}

console.log("Day 3 - Loop:", findLargest(numbers));

// Approach 2: Using reduce()
function findLargestReduce(arr) {
    return arr.reduce((largest, current) => {
        return current > largest ? current : largest;
    });
}

console.log("Day 3 - Reduce:", findLargestReduce(numbers));



// =====================================
// DAY 4: REMOVE DUPLICATES
// =====================================

let duplicateNumbers = [1, 2, 2, 3, 4, 4, 5];

// Approach 1: Using Set
function removeDuplicatesSet(arr) {
    return [...new Set(arr)];
}

console.log("Day 4 - Set:", removeDuplicatesSet(duplicateNumbers));

// Approach 2: Using filter()
function removeDuplicatesFilter(arr) {
    return arr.filter((number, index) => {
        return arr.indexOf(number) === index;
    });
}

console.log("Day 4 - Filter:", removeDuplicatesFilter(duplicateNumbers));



// =====================================
// DAY 5: PALINDROME CHECKER
// =====================================

function isPalindrome(str) {
    // Remove spaces and convert to lowercase
    let cleaned = str.toLowerCase().replace(/\s/g, "");

    // Reverse the cleaned string
    let reversed = cleaned.split("").reverse().join("");

    // Compare both strings
    return cleaned === reversed;
}

console.log("Day 5 - racecar:", isPalindrome("racecar"));
console.log("Day 5 - hello:", isPalindrome("hello"));
console.log(
    "Day 5 - Panama:",
    isPalindrome("A man a plan a canal Panama")
);

