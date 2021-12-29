/* I den här uppgiften ska ni arbeta med nummer/integers och strings. 
Se till att den andra <script> raden i index.html inte är utkommenterad när ni testar koden.
Datorn kan läsa numeriska värden som de är men inte tecken. 
Använd citattecken för att lägga in tecken som data.
*/


var name = "Sibar";
var age = 36;		//107 + 180 = 286
var height = 179;
var weight = 71;
var eyes = "bruna";
var hair = "svart";
  
console.log("Det här är " + name + ".");
console.log(name + " är " + age + " år");
console.log(name + " är " + height + " cm lång." );
console.log(name + " väger " + weight + "kg." );
console.log(name + " har " + eyes + " ögon och " + hair + " hår" );


// Lösningsförslag 1
let totalSum = age + weight + height; 
console.log("Om vi lägger ihop " + name + "s ålder, vikt och längd får vi " + totalSum);

// Lösningsförslag 2
// console.log("Om vi lägger ihop " + name + "s ålder vikt och längd får vi " + parseInt(age + weight + height));

// Lösningsförslag 3
//console.log("Om vi lägger ihop " + name + "s ålder vikt och längd får vi " + (age + weight + height));

