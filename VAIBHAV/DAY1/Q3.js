// Write a program to swap two numbers using bitwise XOR.
//(XOR = true only when values are different)
let a=20;
let b=10;


 a=a^b;
 b=a^b;
 a=a^b;

 console.log(`a:${a},b:${b}`);