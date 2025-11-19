//3️⃣ (Tough) Write a program that checks if two numbers are equal in both 
// value and type, without using '==' or '==='.

let num1 = 10;
let num2 = 20;

let sameType = Object.is(typeof num1, typeof num2);
let sameValue = Object.is(num1 - num2, 0);
console.log(sameType)
console.log(sameValue)


//⭐ Notes -->

// | Goal             | How we achieve it               | Why it works                       |
// | ---------------- | ------------------------------- | ---------------------------------- |
// | Check same type  | `Object.is(typeof a, typeof b)` | Compares `"number"` strings safely |
// | Check same value | `Object.is(a - b, 0)`           | Equal numbers → difference = 0     |
// | Combine          | `sameType && sameValue`         | Both must be true                  |
