/*
Skapa ett program som frågar användaren efter höjd och bredd. Med inmatningsvärden skall programmet räkna ut arean och visa svaret i consolen.

Börja med att göra en flowchart och översätt denna sedan till pseudokod. Parprogrammering 
uppmuntras för att bolla tankar.
*/

/**
 * PSEUDOKOD
 * 
 * Fråga efter bredd?
 * Fråga efter höjd?
 * Räkna ut arean.
 * Visa svaret.
 */

let height = prompt('Ange höjd');
console.log(height);
let width = prompt('Ange bredd');
console.log(width);

let area = height * width;
let message = "The area of the square is " + area;

alert(message);
console.log(message);