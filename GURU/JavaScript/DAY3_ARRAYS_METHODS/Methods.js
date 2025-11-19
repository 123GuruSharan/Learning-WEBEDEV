let arr = [1,2,3,4,5,6,7,8,9,10];

arr.push(11); // Adds 11 at the end
arr.pop();   // Removes last element
arr.shift(); // Removes first element
arr.unshift(0); // Adds 0 at the beginning
arr.splice(4,99); // Adds 99 at index 4

console.log(arr);