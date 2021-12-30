const registerForm = document.getElementById('register-form');
console.log(registerForm);

registerForm.addEventListener('submit', function(e) {
    //Metoden e.prevent...hindrar formuläret från default-inställningen, 
    // dvs. att formuläret laddas om när man trycker Skicka
    e.preventDefault();
    alert('Form submitted');

    const inputEmail = document.getElementById('inputEmail');
    //console.log(inputEmail.value);  Du ser vad du angett i e-post
    const inputPassword = document.getElementById('inputPassword');
    const inputAddress = document.getElementById('inputAddress');
    const inputgridCheck = document.getElementById('inputgridCheck');

    let errorMessages =''; 
    if (inputEmail.value === '') { //Felmeddelande om du inte angett något alls
        errorMessages += 'Email is required\n';   
    }
         
    if (inputPassword.value === '') { //Felmeddelande om du inte angett något alls
        errorMessages += 'Password is required\n'; 
    }

    if (inputAddress.value === '') { //Felmeddelande om du inte angett något alls
        errorMessages += 'Address is required\n';   
    }

    if (gridCheck.checked == false) { //Felmeddelande om du inte kryssat i
        errorMessages += 'Must agree on terms\n';   
    }

    if (inputPassword.value.length < 6) { /* Lösenord måste vara minst 6 tecken */
        errorMessages += 'Password must be at least 6 characters\n';
    }
    
    if (inputPassword.value !== '' && inputPassword.value.length < 6) { /* Lösenord måste vara minst 6 tecken */
        errorMessages += 'Password must be at least 6 characters\n';
    }

    console.log(errorMessages); //Två let-variabler kan inte ha samma namn här



})