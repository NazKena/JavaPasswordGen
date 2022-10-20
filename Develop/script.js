// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword () {
  const charachterAmountCL = ["a","b","c","d","e","f","g","h","i","j,","k","l","m","n", "o","p","q","r,","s","t","u,","v","w","x","y","z"];
  const charachterAmountLC = ["A","B","C","D","E","F","G","H","I","J","K","L","M","M","N","O,","P","Q","R","S","T","U","V","W","X","Y","Z"];
  const charachterAmountNumbers = ["0,1,2,3,4,5,6,7,8,9"];
  const characterAmountSymbols= ["!","@","£","$","%","%","_","-","<",">",];

  const allDigits = [...charachterAmountCL,...charachterAmountLC,...charachterAmountNumbers,...characterAmountSymbols]
  console.log ("allDigits")
}


let passwordlength = prompt ("How many charachters between 8 and 124 do you want in your password?");{
  if (isNaN(passwordlength))
  alert ("no value. please enter a number.");
  if (passwordlength <8 || passwordlength >128)
  alert ("please enter a value betwwen 8 and 128")
}

const UserIncCL =confirm ("Do you want to add a capital letter?")
const UserIncLC = confirm ("Do you want to add a lowercase letter?")
const UserIncNumber =-confirm("Do you want to add numbers?")
const UserIncSymbols = confirm("Do you want to add symbols?")




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
