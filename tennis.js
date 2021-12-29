
	
	var x, y, z;  // Statement 1
	x = 10;        // Statement 2
	y = 4;        // Statement 3
	z = x + y;    // Statement 4
	
	document.getElementById("demo").innerHTML =
	"The value of z is " + z + "." + " Algebra is simple" + "<br>" +
	"John Doe";		//Ny rad med "<br"> annars visas inte John Doe
	
		
	document.getElementById("demo2").innerHTML =
	"My name is Fredrik Dahlbom and I am " + 44 + " years old";
	
	var fredrik;
	
	
	
	let nr1 = prompt("Enter a number: ");
	let nr2 = prompt("Enter a number: ");
	let sum = (nr1 + nr2);
	window.alert("Summan av talen är: " + sum);
	
	
	// KONSOLEN ANVÄNDS NEDAN
	
	console.log(10 + 5);
	console.log(typeof (42));
	console.log(typeof (42.42));
	console.log(typeof (0));
	console.log(typeof ("Ola"));
	console.log(typeof (fredrik));
	console.log(typeof (true));
	console.log('###########INDRAG AV TEXT#############')	//Detta syns bara i konsulen
	
	
	/*Koden nedan funkar och kallas för att omtilldela ett värde. Konsolen skriver ut Frodrik, men jag får inte ha med let.
	En konstant, däremot, får varken redeklareras eller omtilldelas, */
	
	
	let t = "Fredrik";			
	t = "Frodrik";
	console.log(t);
	
		
	
	var x, y, z;  // Statement 1
	x = "Ola";        // Statement 2
	y = "Knutsson";        // Statement 3
	y = 16;
		
	document.getElementById("demo3").innerHTML = x + " heter min kusin, vars ålder är: " + y;	
	//variabler med var kan omdeklareras, både vad gäller datatyp och värden, men inte let
	
	let a, b;
	a= 10;
	b = 4;
	c = a + b;
	console.log(y);
	
	let r = 10;		//Snabbtilldelning
	r+=5;	//det nya r blir 15
	console.log(r);
	
	let roger, rafael, firstNames;			//KONKATENERING AV STRÄNGAR
	roger = "Roger ";
	rafael = "Rafael";
	firstNames = roger + rafael;
	console.log(firstNames);
	
	let string = "Hello";		//Snabbtilldelning av sammanslagna strängar
	string += " World";
	console.log(string);	//Hello World
	string += " Wide";
	console.log(string);	//Hello World Wide
	
	
	let animal1 = "donkey";
	let animal2 = "ape";
	let animal3 = "zebra";
	let animals = animal1 + animal2 + animal3;
	console.log(animals);
	
	animals = `${animal1} ${animal2} ${animal3}`;		//Ett annat sätt att slå samman strängarna, som är bättre om du vill skapa mellanrum mellan orden. Observera att animals inte ska föregås av let
	console.log(animals);
	
	/*
	let userName = prompt("Enter your name: ");		//Inmatning görs, interaktion med användaren
	console.log(userName);
	*/
	

	
	
	
	
	
	
	
	
	
	
	
	
	
	