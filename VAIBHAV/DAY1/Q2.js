// Calculate simple interest (P, R, T) and compound interest.
//SI = (P × R × T) / 100
//CI = P ( (1 + R/100)^T ) – P

const P=parseFloat(prompt("Enter Principal (P):"));
const R=parseFloat(prompt("Enter Rate of Interest % (R):"));
const T=parseFloat(prompt("Enter Time (T):"));

const SI= P*R*T/100;

const CI=  ( P*  (Math.pow (1+R/100),T) )-P;


console.log(SI, CI);