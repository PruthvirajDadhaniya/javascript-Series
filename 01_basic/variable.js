const accountId = 9874562
let accountEmail = "raj@google.com"
var accountPassword = "321456"
accountCity = "Goa"
let accountState;

// accountId = 2 // not allowed


accountEmail = "ram@gmail.com"
accountPassword = "95135748"
accountCity = "mumbai"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])