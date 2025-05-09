// Logical operator

// OR ( || )

// true or true     = true
// true or false    = true
// false or true    = true
// false or false   = false

console.log(true ||  true); //true
console.log(true ||  false); //true
console.log(false || true ); //true
console.log(false || false ); //false


//  AND ( && )

// true or true     = true
// true or false    = false
// false or true    = false
// false or false   = false

console.log(true ||  true); //true
console.log(true ||  false); //false
console.log(false || true ); //false
console.log(false || false ); //false


// NOT ( ! )

// ! false = true
// ! true = false

console.log(! false); //true
console.log(! true); //false

var p=20;
var q=20;
var r="20";
var s=5;

console.log(p == q && p==s); // true && false = false
console.log(p == q || p==s); // true || false = true
console.log(!(p==q));        // !true = false   

// practice

console.log(p == q ||  p == r || p == s);   // true || true || false = true || false = true
console.log(p == q && p == r && p == s);    //  true && true && false = true && false = false
console.log(p == q || (p == r && p == s));  //  true || ( true && false) = true || false = true
console.log((p == q && p == r)|| p == s);   // ( true && true) || false = true || false = true


console.log(p === q ||  p === r || p === s);   // false || false || true = false|| true = true
console.log(p === q && p ===r && p === s);    // false && false && true = false && false = false
console.log(p === q || (p === r && p === s));  // false || false && true = false && false = True
console.log((p === q && p ===r)|| p === s);   // false && false || true = false && true = false




