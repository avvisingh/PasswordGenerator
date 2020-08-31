// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Implementing the writePassword function which will be called onclick 
function writePassword() {
  var length = prompt("How long would you like your password to be? Please enter a number between 8 and 128 (inclusive) only.");
  if (length < 8 || length > 128) {
    var length = prompt("Your length must be larger than, or equal to, 8 and smaller than, or equal to, 128. Please try again.");
    console.log(length);
  }

}