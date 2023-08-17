// step:1 add event handler  with click submit button
document.getElementById('btn-submit').addEventListener('click', function(){

    // step:2 get email
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    // step:3 get password
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    
    // step:4 valid or invalid
    if(email === 'fyzulpavel@gmail.com' && password === 'secret'){
        window.location.href = 'bank.html'
    }
    else{
        alert('invalid user')
    }
})