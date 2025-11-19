//Whats closures in JavaScript?
//A closure is a feature in JavaScript where an inner function has access to the outer 
// (enclosing) function's variables— a scope chain.
//The closure has three scope chains: it has access to its own scope (variables defined
//  between its curly brackets),
//it has access to the outer function's variables, and it has access to the global variables.
//Example of Closures




function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log('Outer Variable: ' + outerVariable);
        console.log('Inner Variable: ' + innerVariable);
    }
}

const newFunction = outerFunction('outside');
newFunction('inside');
// Output:
// Outer Variable: outside
// Inner Variable: inside
// Explanation:
// In this example, the innerFunction has access to the outerVariable
// defined in the outerFunction, demonstrating the concept of closures.
// Closures allow the inner function to remember the environment
// in which it was created, even after the outer function has finished executing.

// Practical Example of Closures
function makeCounter() {
    let count = 0;
    return function() {
        count++;
        return count;

    }

}

const counter = makeCounter();


console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
console.log(counter()); // Output: 3
console.log(counter()); // Output: 4
// Explanation:

// In this example, the returned function from makeCounter
// maintains access to the count variable, allowing it to


// increment and return the count value each time it is called.
// This demonstrates how closures can be used to create private variables

// and maintain state across multiple function calls.



// Another Example: Function Factory
function createGreeting(greetingPrefix) {
    return function(name) {
        console.log(greetingPrefix + ', ' + name + '!');
    }
}

const greetHello = createGreeting('Hello');
greetHello('Alice'); // Output: Hello, Alice!
greetHello('Bob');   // Output: Hello, Bob!

const greetHi = createGreeting('Hi');
greetHi('Charlie');

// Output: Hi, Charlie!
// Explanation:
// Here, createGreeting returns a function that uses the greetingPrefix
// provided when it was created. Each returned function retains access
// to its own greetingPrefix, demonstrating the use of closures
// to create specialized functions.

// Closure with Asynchronous Code
function fetchData(url) {
    let requestCount = 0;
    return function() {
        requestCount++;

        console.log('Fetching data from ' + url + '. Request count: ' + requestCount);

        // Simulate an asynchronous data fetch
        setTimeout(function() {
            console.log('Data fetched from ' + url);
        }, 1000);
    }
}

const fetchFromAPI = fetchData('https://api.example.com/data');

fetchFromAPI();
fetchFromAPI();
fetchFromAPI();
// Output:
// Fetching data from https://api.example.com/data. Request count: 1



// Fetching data from https://api.example.com/data. Request count: 2
// Fetching data from https://api.example.com/data. Request count: 3
// Data fetched from https://api.example.com/data
