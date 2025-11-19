function counter()
{
    let count = 0;
    return {
        increment: function() {
            count++;
            return count;
        },
        getCount: function() {
            return count;
        }
    };
}

const myCounter = counter();

console.log(myCounter.increment());
console.log(myCounter.increment());
console.log(myCounter.increment());