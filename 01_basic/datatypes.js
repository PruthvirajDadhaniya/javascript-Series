// Datatype are uded to categories and represent different types of data

//  primitive datatype

// 1) string
// 2) Nunmber
// 3) boolean
// 4) null
// 5) undefined

// 6) bigint
// 7) symbol


// Non-primitive/reference type

// 8) object

// a. Array
// b. function
// c. date
// d. RegEx
// e. Map,Weakmap
// f. set,weakset

// 1) string : A value return inside double quotes or single quotes or back ticks is a string in js

var fName = "Pruthviraj";
var lName = "Dadhaniya";
var gender = `Male`;
var Age = "18";

console.log(fName , typeof fName );
console.log(lName , typeof lName );
console.log(gender, typeof gender);
console.log(Age , typeof Age);


// 2) Number : 

var num = 18;
var pi = 3.14;
var p = 10;

console.log(num , typeof num);
console.log(pi , typeof pi);
console.log(p , typeof p);

// boolean

var isFollow = true;
var isUnflow = false;

console.log(isFollow , typeof isFollow );
console.log(isUnflow , typeof isUnflow );

// null

var car = null;
console.log(car , typeof car);

// undefined

User;
console.log(user, typeof user);


// Non-primitive/reference type

//  Object 

var student = {
    fName : "Pruthviraj",
    lName : "Dadhaniya",
    Age : 22,
    isMarried : false,
};

console.log(student, typeof student);


// Array

var carModel = ["jagquar", "Mclaran", "defender", "Thar"];
var person = ["Tonny stark", 18 , true];

console.log(carModel, typeof carModel);
console.log(person, typeof person);

// Function

console.log(2 + 5);
console.log(10 + 20);
console.log(25 + 5);

function sum(a , b) {
    console.log(a+b);
}
sum(10, 12);
sum( 10,4);
sum(7, 5);

function percentage(p,q) {
    console.log((p/q) * 100);
}
percentage(23, 50);
percentage( 54, 100);
percentage(100, 200);

// Date
var Date = new Date();
console.log(Date, typeof Date);




