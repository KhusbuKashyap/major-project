const form=document.getElementById('form');
const username=document.getElementById('username');
const email=document.getElementById('email');
const phone=document.getElementById('phone');
const password=document.getElementById('password');
const password2=document.getElementById('password2');


//Show input error message

function showError(input,message){
    const formControl=input.parentElement;
    formControl.className='form-control error';
    const small=formControl.querySelector('small');
    small.innerText=message;
}

function showSuccess(input){
    const formControl=input.parentElement;
    formControl.className='form-control success';
    
}

//Email

function isValidEmail(email)
{
    const re= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


//Phone number

function isValidPhone(phone) {
  var re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

  return re.test(phone);
}





form.addEventListener('submit',function(e){
    e.preventDefault();

    if(username.value.length<5){
        showError(username,'Enter full Username');
    }
    else if(username.value===''){
        showError(username,'Username is required');
    }
    else{
        showSuccess(username);
    }
    
    
    if(email.value===''){
        showError(email,'Email is required');
    }else if(!isValidEmail(email.value)){
        showError(email,'Email is not valid');
    }
    else{
        showSuccess(email);
    }


    if(phone.value===''){
        showError(phone,'Phone number is required');
    }else if(!isValidPhone(phone.value)){
        showError(phone,'Enter correct Phone number');
    }
    else{
        showSuccess(phone);
    }

    
    if(password.value.length<8){
        showError(password,'Password is required');
    }
    else if(password.value==username.value){
        showError(password,'Username can not be password');
    }
    else if(password.value=='password'){
        showError(password,'This can not be used as password');
    }
    else{
        showSuccess(password);
    }
    
    if(password2.value===''){
        showError(password2,'confirm password is required');
    }
    else if(password2.value!=password.value){
        showError(password2,'password does not match');
    }
    else{
        showSuccess(password2);
    }

});
