// Ternary operator

var p=20;
var q=20;
var r="20";
var s=5;

// condition ?  first case : second case

// condition -> true : first case
// condition -> false : second condition

p == r ?  console.log("Success") : console.log("Failure");
p === r ? console.log("Success") : console.log("Failure");


// Nested ternary operator

var p = 20;
var q = 15;
var r = 5;
var s = 4;

// post increment
    console.log(p++); //current 20  // after 21
    console.log(p);
    
// post decrement
    console.log(q--); // current 15  // after 14
    console.log(q);
    
// pre increment
    console.log(++r); // current 6 // after 6
    console.log(r);
    
// pre decrement
    console.log(--r); // current 3 // after 3  
    

// Example

var a = 1;
var b = 2;
var c;
var d;

c = ++b;    // b = 3  b = 3 // c = 3  
d = a++;    // a = 1  a = 2 // d = 1
c++;        // c = 3  c = 41
b++;        // b = 3  b = 4
++a;        // a = 3

console.log(a,b,c,d); // 3 4 4 1


