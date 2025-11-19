let arr = [23,61,66,65465,616.05,2.02,10.0,9999,100];

// Sorting in ascending order
arr.sort(function(a, b) {
    return a - b;
});
console.log("Ascending Order: " + arr);
// Sorting in descending order
arr.sort(function(a, b) {
    return b - a;
});
console.log("Descending Order: " + arr);
 