/* 

Skapa ett program som frågar efter namn och ålder samt sparar ner dessa i separata variabler.
Börja med att göra en flowchart och sedan skriva pseudokod, detta för att arbeta in förberedelsemetoder inför programmeringsproblem.

Beroende på vilken åldern användaren skriver in ska olika popups komma upp. Dessa ska ni styra med if/else statements.

följande regler ska gälla:

* programmet ska svara med namnet innan den skriver ut reglerna

* om personen är under 15, visa texten "Du måste ha hjälm när du cyklar"

* om personen är under 18, visa texten "Du får inte rösta"

* om personen är under 23, visa texten "Det blir ingen finlandsfärga"

* om personen är över 23, visa texten "Du är gammal nog att göra vad du vill"

Programmet ska bete sig enligt följande när du är klar:

Hej, vad heter du? :Micke
Ok Micke, hur gammal är du? :17

Du får inte rösta, Micke!
Det blir ingen finlandsfärga, Micke!

*/

let namn = prompt("Hej, vad heter du? ");
let ålder = prompt("Ok " + namn +" ,hur gammal är du? ");
if (ålder < 15) {
	alert("Du måste ha hjälm "+ namn); //0-14 år
}
else if (ålder >= 15 && ålder < 18) {	//15-17 år
	alert("Du får inte rösta " + namn);
}

else if (ålder >= 18 && ålder < 23)  {	//18-22
	alert("Det blir ingen färja, " + namn);
}

else {
	alert("Du är nu 23 eller äldre " + namn);
}
	
	
	
	
	
	