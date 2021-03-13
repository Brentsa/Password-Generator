// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var lowercaseArray = "abcdefghijklmnopqrstuvwxyz".split("");
var uppercaseArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numbersArray = "0123456789".split("");
var specialArray = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split("");

function lengthPrompt(){
  var passwordLength = parseInt(prompt("Select length of password between 8 and 128 characters."));
  while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)){
    alert("Please enter a valid number between 8 and 128");
    passwordLength = prompt("Select length of password between 8 and 128 characters.");
  }
  return passwordLength;
}

//Append values from and array to another array
function appendCharacters(array, arrayToAppend){
  for(var i = 0; i < arrayToAppend.length; i++){
    array.push(arrayToAppend[i]);
  }
}

//Return a randomly generated number between min and max
function randomNumber(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomCharacters(characterArray, length){
  var word = "";

  for(var i = 0; i < length; i++){
    word += characterArray[randomNumber(0, characterArray.length)];
  }

  return word;
}

function createPasswordUserCriteria(length, lower, upper, numbers, special){
  console.log(length);
  console.log(lower);
  console.log(upper);
  console.log(numbers);
  console.log(special);

  var randomCharacterArray = [];

  if(lower){
    appendCharacters(randomCharacterArray, lowercaseArray);
  }
  if(upper){
    appendCharacters(randomCharacterArray, uppercaseArray);
  }
  if(numbers){
    appendCharacters(randomCharacterArray, numbersArray);
  }
  if(special){
    appendCharacters(randomCharacterArray, specialArray);
  }

  console.log(randomCharacterArray);

  return generateRandomCharacters(randomCharacterArray, (length - 1));
}

function generatePassword(){

  //All user selections arise
  var passwordLength = lengthPrompt();
  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumbers = confirm("Include numerical characters?");
  var includeSpecial = confirm("Include special characters?");

  //Restart the bool user prompts if the user didnt accept at least one
  while(!includeLowercase && !includeUppercase && !includeNumbers && !includeSpecial){
    alert("You must select at least one criteria.");
    includeLowercase = confirm("Include lowercase characters?");
    includeUppercase = confirm("Include uppercase characters?");
    includeNumbers = confirm("Include numerical characters?");
    includeSpecial = confirm("Include special characters?");
  }

  //Pass the user selections into the create password 
  return createPasswordUserCriteria(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSpecial);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
