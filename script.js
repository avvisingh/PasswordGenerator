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

// charUpperCase
// declaring variables 
var Charuppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var Charlowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var Charnumeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var Charspecial = ["@", "!", "#", "$", "%", "&", "?"];

// Implementing the writePassword function which will be called onclick 
function writePassword() {
  var passwordLength = prompt("How long would you like your password to be? Please enter a number between 8 and 128 (inclusive) only.", "Enter a number here between 8 and 128 (inclusive).");
  // I'm aware the length is a string and is implicitly cast into a number
  if (passwordLength >= 8 && passwordLength <= 128) {
    var charArray = []

    alert("The following questions will ask you to specify requirements for characters to include within your password. Please click on 'confirm' to answer with 'yes' and 'cancel' to answer with 'no'. You must select at least one character-type.");

    var lowercase = confirm("Should your password contain lowercase letters?");
    var specialChar = confirm("Should your password contain special characters?");
    var uppercase = confirm("Should your password contain uppercase letters?");
    var numeric = confirm("Should your password contain numeric values?");

    if (!lowercase && !uppercase && !numeric && !specialChar) {
      alert("You must select at least one character requirement. Please Try Again.");
    } else {
      charArray = charArray.concat(lowercase ? Charlowercase : []);
      charArray = charArray.concat(uppercase ? Charuppercase : []);
      charArray = charArray.concat(numeric ? Charnumeric : []);
      charArray = charArray.concat(specialChar ? Charspecial : []);

      var generatedPassword = "";

      for (var i = 0; i < passwordLength; i++) {
        var randomCharIndex = Math.floor(Math.random() * charArray.length);
        var passwordChar = charArray[randomCharIndex];
        generatedPassword += passwordChar;
      }
      document.getElementById("password").innerHTML = generatedPassword;
    }
  } else {
    alert("You have not entered a number which is between 8 and 128.");
  }
}