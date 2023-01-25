// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword () {
  const charactersAmountCL = ["a","b","c","d","e","f","g","h","i","j,","k","l","m","n", "o","p","q","r,","s","t","u,","v","w","x","y","z"];
  const charactersAmountLC = ["A","B","C","D","E","F","G","H","I","J","K","L","M","M","N","O,","P","Q","R","S","T","U","V","W","X","Y","Z"];
  const charactersAmountNumbers = ["0,1,2,3,4,5,6,7,8,9"];
  const charactersAmountSymbols= ["!","@","£","$","%","%","_","-","<",">",];

  const allDigits = [...charactersAmountCL,...charactersAmountLC,...charactersAmountNumbers,...charactersAmountSymbols]
  console.log ("allDigits")
}

var pw= prompt ("Please choose a length between 8 and 128 characters");
if (pw<8 || pw >128){
  alert ("Incorrect password length")
  generatePassword ()
} else if (pw === '' || isNaN(pw)) {
  alert ("Please enter valid password between 8 and 128")
  generatePassword ()
} 

const UserIncCL =confirm ("Do you want to add a capital letter?")
const UserIncLC = confirm ("Do you want to add a lowercase letter?")
const UserIncNumber =-confirm("Do you want to add numbers?")
const UserIncSymbols = confirm("Do you want to add symbols?")

for (const i=0; i< passwordlength; i++) {
  password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.lenghth - 1)))
}
  

// Write password to the #password input
function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector("#password");

passwordText.value = password;
}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);
