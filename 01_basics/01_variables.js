const accountId  = 144553
let accountEmail = "pp@gmail.com"
var accountPassword = "112233"
accountCity = "Jaipur"
let accounState;

// accountId = 2  // not allowed

accountEmail = "pk@gmail.com"
accountPassword = "2222222"
accountCity = "Delhi"

console.log(accountId)

/* 
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accounState])
