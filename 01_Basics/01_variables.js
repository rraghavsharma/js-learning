const accountId = 154
let accountEmail = "raghav@gmail.com"
var accountPassword = "1254"
accountCity = "Gwalior"
let accountState;
// In js if can not assign variableName as what (const, let and var etc.), it automatically assign as var ----> not a good way
// var use karne k do tarike h js m ----> use as (var or let variable)
// In js we can or can't use semi-colon depends on us.

// accountId = 2 ----> Not allowed

accountEmail = "sharma@gamil.com"
accountPassword = "5124"
accountCity = "Bhopal"

/*
prefer not to use var 
instead of var we use let
because of issue in block scope and functional scope
*/

console.log(accountId)
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
