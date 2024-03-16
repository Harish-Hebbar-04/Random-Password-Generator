const passwordBox = document.getElementById("password");
const length = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbol = "!@#$%^&*()_+~`|}{[]\:;?><,./";
const allChars = upperCase + lowerCase + numbers + symbol;

function createPassword(){
  let generatedPassword = "";
  generatedPassword += upperCase[Math.floor(Math.random() * upperCase.length)];
  generatedPassword += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  generatedPassword += numbers[Math.floor(Math.random() * numbers.length)];
  generatedPassword += symbol[Math.floor(Math.random() * symbol.length)];

  while(length > generatedPassword.length){
    generatedPassword += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passwordBox.value = generatedPassword;
}
function copyPassword(){
  passwordBox.select();
  document.execCommand("copy");
}
const generateBtn = document.querySelector("button");
generateBtn.addEventListener("click", createPassword);


