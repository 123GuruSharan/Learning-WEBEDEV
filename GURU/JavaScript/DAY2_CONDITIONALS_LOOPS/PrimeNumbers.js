//3️⃣ (Tough) Write a program that prints prime numbers between m and n,


let m = Number(prompt("Enter the Starting range to find prime numbers: "));
let n = Number(prompt("Enter the ending range to find prime numbers: "));

document.write("<h1>Here is your Prime number program to print " + m + " to " + n + "</h1><br>");


for(let i = m; i <= n ; i++)
{
    let isPrime = true
    if(i <=1)
    {
        isPrime = false;
    }

    for(let j=2 ; j<i ; j++)
    {
        if(i%j == 0)
        {
            isPrime = false;
            break;
        }
    }
    if(isPrime)
    {
        document.write(i + "<br>");
    }
}