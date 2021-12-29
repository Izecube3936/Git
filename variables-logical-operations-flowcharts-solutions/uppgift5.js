/*
Skapa ett program som konverterar celcius till fahrenheit. 
Användaren ska ge input (numeriska värden) i celcius som programmet 
sedan ska konvertera till fahrenheit och skriva ut det som en popup.

Börja med att göra en flowchart och översätt denna sedan till pseudokod. Parprogrammering 
uppmuntras för att bolla tankar.
*/


/**
 * PSEUDOKOD
 * 
 * Fråga efter grader i celcius?
 * Konvertera celcius till fahrenheit
 * Visa svaret.
 */

const askForNumber = prompt('Ange grader i Celcius');
const convertToFahrenheit = (askForNumber * 9) / 5 + 32;
alert(`${askForNumber} grader i celcius är ${convertToFahrenheit} grader i fahrenheit`);
