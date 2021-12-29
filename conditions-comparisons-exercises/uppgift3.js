/*
Skapa ett program som låter användaren välja en form genom att skriva in circle/rectangle/triangle. 
Programmet ska baserat på användarens val be om input för att beräkna den valda formens area. 
När användaren fått svara med den data som behövs ska en uträkning på arean ska och programmet skriver ut resultatet 

Gör en flowchart och sedan skriva pseudokod innan ni börjar koda.

cirkeln area = (radie * radie) * 3.14
rekt = b * h 
triangel = (b * h) / 2

*/



let form = prompt("Väljer du cirkel, rektangel eller triangel? ");
if (form == "cirkel") {
	let radie = prompt("Vilken är cirkelns radie? ");

let cirkelarea = (radie * radie) * Math.PI;
alert("Cirkeln area är: " + cirkelarea);
}

else if (form == "rektangel") {
	let rektbas = prompt("Vilken är rektangelns bas? ");
	let rekthöjd = prompt("Vilken är rektangelns höjd? ");
	let rektarea = rektbas * rekthöjd;
	alert("Rektangelns area är: " + rektarea);
}
	
else if (form == "triangel") {
	let triangelbas = prompt("Vilken är triangelns bas? ");
	let triangelhöjd = prompt("Vilken är trianglens höjd? ");
	let triangelarea = (triangelbas * triangelhöjd) / 2;
	alert("Triangelns area är: " + triangelarea);
	
}


else {
	alert("Ogiltigt val");
}
	
	