//declaring character list
var UpperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

var specialChar = ["!", "@", "#", "$", "%", "&", "*"];

//User length input
var passwordLength;
function generatePassword() {
  var generate;
  passwordLength = prompt(
    "PLease choose how long you would like your password to be. Must be between 8 - 128 characters"
  );
  if (passwordLength > 7 && passwordLength < 129) {
    passwordLength = prompt("Would you like Upper Case letters?");
  } else {
    passwordLength = prompt("Please try again.");
  }
}

//makes Data type number instead of string

//confirms for characters

//check booleans confirms

//final password

//Get references to the #generate

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
