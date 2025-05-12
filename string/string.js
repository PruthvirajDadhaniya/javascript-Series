// String 

var fName = "pruthviraj";
var lName = "Dadhaniya";

// method 1(+)
var result = fName +" "+ lName;
console.log(result);

// method 2 (concat)
var result = fName.concat(" ",lName);
console.log(result);

// method 3 (Templete Literals)
var result = `${fName} ${lName}`;
console.log(result);


// use case
 var result = "On 19th Febuary 1630, chatrapati shivaji mahiraj was born in a maratha family at shivnari fort, maharashtra.";
 
var dob = "19th Febuary 1630";
var person = "chatrapati shivaji mahiraj";
var family = "Maratha family";
var place = "shivnari fort";
var state = "Maharashtra";

// method 1
var result = "On " + dob + ", " + person + " was born in a " + family + " at " + place + ", ";
console.log(result);

// method 2 (concat)
var result = "On ".concat(dob,", ", person, " Was born in a ", family, " at ", place, ", ", state,".");
console.log(result);

// method 3(Template Literals)
var result = `On ${dob}, ${person}, Was born in a ${family} at ${place} ${place}, ${state}.`;
console.log(result);


