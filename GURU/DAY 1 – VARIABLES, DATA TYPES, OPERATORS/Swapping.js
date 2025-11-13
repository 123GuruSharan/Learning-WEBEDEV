//2️⃣ (Medium) Swap the values of two variables without using a third variable.

let a = 10;
let b = 20;

console.log("Before Swapping:\n" , "A = " +a, "B = "+b);

a = a + b; //30
b = a - b; //10
a = a - b; //20


console.log("After Swapping: \n", "A = " +a, "B = "+b);