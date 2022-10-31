//declaring character list
var upperCaseArr = [
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
var lowerCaseArr = [
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
var numbersArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialCharArr = ["!", "@", "#", "$", "%", "&", "*", "?"];

//User length input
var passwordLength;
function generatePassword() {
  passwordLength = prompt(
    "PLease choose how long you would like your password to be. Must be between 8 - 128 characters"
  );
  if (passwordLength >= 8 && passwordLength <= 128) {
  } else {
    passwordLength = alert("Please click 'Generate Password' and try again");
    return;
  }
  //run this when if statement is true
  var upperCase = confirm("Would you like to include uppercase letters?");
  var lowerCase = confirm("Would you like to include lowercase letters?");
  var numbers = confirm("Would you like to include numbers?");
  var specialChar = confirm("Would you like to include special characters?");
  //confirming character selection
  if (upperCase || lowerCase || numbers || specialChar) {
    alert("Generating your new password...");
  } else {
    alert("You must choose one. Please try again.");
  }

  var passwordArr = [];
  //check booleans of confirms
  if (upperCase === true) {
    passwordArr = passwordArr.concat(upperCaseArr);
  }
  if (lowerCase === true) {
    passwordArr = passwordArr.concat(lowerCaseArr);
  }
  if (numbers === true) {
    passwordArr = passwordArr.concat(numbersArr);
  }
  if (specialChar === true) {
    passwordArr = passwordArr.concat(specialCharArr);
  }
  console.log(passwordArr);
  //generate random password with loop
  var newPassword = [];
  for (var i = 0; i < passwordLength; i++) {
    var random = Math.floor(Math.random() * passwordArr.length);
    newPassword = newPassword + passwordArr[random];
  }
  return newPassword;
}

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
