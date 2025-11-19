function greetName(name) {
    function greet() {
        console.log('Hello, ' + name + '!');
    }
    return greet;
}
const greetJohn = greetName('John');
greetJohn(); // Output: Hello, John!

