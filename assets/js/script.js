// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


function lengthPrompt(){
  var passwordLength = parseInt(prompt("Select length of password between 8 and 128 characters."));
  
  while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)){
    alert("Please enter a valid number between 8 and 128");
    passwordLength = prompt("Select length of password between 8 and 128 characters.");
  }

  return passwordLength;
}

function generatePassword(){

  var passwordLength = lengthPrompt();
  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumbers = confirm("Include numerical characters?");
  var includeSpecial = confirm("Include special characters?");

  var word = "Password";
  return word;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
