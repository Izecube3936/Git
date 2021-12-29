const registerForm = document.getElementById('register-form');
console.log(registerForm);

registerForm.addEventListener('submit', function(e) {
    // preventDefault() prevents the default behavior of the submitted form
    e.preventDefault();

    const inputEmail    = document.getElementById('inputEmail');
    const inputPassword = document.getElementById('inputPassword');
    const inputAddress  = document.getElementById('inputAddress');
    const inputAddress2 = document.getElementById('inputAddress2');
    const gridCheck     = document.getElementById('gridCheck');
    const formMessages  = document.getElementById('messages');


    let errorMessages = '';
    if (inputEmail.value === '') {
        errorMessages += 'Email is required<br>';
    }
    if (inputPassword.value === '') {
        errorMessages += 'Password is required<br>';
    }
    if (inputAddress.value === '') {
        errorMessages += 'Address is required<br>';
    }
    if (inputAddress2.value === '') {
        errorMessages += 'Address 2 is required<br>';
    }
    if (gridCheck.checked !== true) {
        errorMessages += 'Must agree to the terms<br>';
    }

    if (inputPassword.value !== '' 
        && inputPassword.value.length < 6
    ) {
        errorMessages += 'Password must be minimum 6 characters long<br>';
    }

    if (errorMessages) {
        formMessages.innerHTML = `
            <div class="alert alert-danger" role="alert">
                ${errorMessages}
            </div>
        `;
    } else {
        formMessages.innerHTML = `
            <div class="alert alert-success" role="alert">
                Form submitted. You are now registered!
            </div>
        `;
    }
});


let birthYearSelectOptions = '';
for (let year = 2021; year >= 1920; year--) {
    if (year === 1990) {
        birthYearSelectOptions += `<option selected>${year}</option>`;
    } else {
        birthYearSelectOptions += `<option>${year}</option>`;
    }
}

// console.log(birthYearSelectOptions);
document.getElementById('birthYear').innerHTML = birthYearSelectOptions;


