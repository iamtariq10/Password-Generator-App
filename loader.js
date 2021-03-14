
function passwordGen(){
let passwordLength= 10;
let char = "ABCDEFGHIJKLMNOPQRSTabcdefghijklmnopqrst123456789";
let password = "";



for(i=0;i<passwordLength;i++){
    let randomPassword = Math.floor(Math.random()*char.length);
    password += char.substring(randomPassword,randomPassword+1);
    console.log(password);
}


document.getElementById('password').value= password;

}



