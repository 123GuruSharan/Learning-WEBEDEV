//2️⃣ (Medium) Print the multiplication table of any given number using a loop.

let num = Number(prompt("Enter a number: "));

document.write("<h1>Here is the table of "+ num + "</h1>")
for(let i = 1; i<= 10;i++)
    {
        document.write(num, " x ", i , " = " ,(num*i)+ "<br>");
    }