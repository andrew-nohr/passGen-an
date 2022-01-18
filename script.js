// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = 'abcdefghiklmnopqrstuvwxyz'.split('');
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
var numeric = '1234567890'.split('');
var special = '!@#$%^&*()'.split('');

function randomizer(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length)
  var randomChar = arr[randomIndex]

  return randomChar
}

function generatePassword() {
  var possibleCharacters = [];
  var result = [];
  // Prompt the user for all of the passwords options that they would like
  var length = parseInt(prompt('How long would you like your password to be?'))

  if(length < 8 || length > 128) {
    alert('Password must be between 8 and 128 characters.');
    return null;
  }

  var hasLower = confirm('Click ok to have lowercase characters in your password.')
  if(hasLower === true) {
    possibleCharacters = possibleCharacters.concat(lowercase);
  }

  var hasUpper = confirm('Click ok to have uppercase characters in your password.')
  if(hasUpper === true) {
    possibleCharacters = possibleCharacters.concat(uppercase);
  }

  var hasNumber = confirm('Click ok to have numeric characters in your password.')
  if(hasNumber === true) {
    possibleCharacters = possibleCharacters.concat(numeric);
  }

  var hasSpecial = confirm('Click ok to have special characters in your password.')
  if(hasSpecial === true) {
    possibleCharacters = possibleCharacters.concat(special);
  }

  if( possibleCharacters.length === 0) {
        alert('You must select at least one character type for your password')
        return null; 
      }

  console.log(possibleCharacters)
  //Conditional statements to combine the arrays that they user wants in the password

  // a for loop to loop the length amount that user wants and push the characters into the result array
  for(var i = 0; i < length; i++) {
    var character = randomizer(possibleCharacters);
    console.log(character)
    result.push(character);
  }
  //return the result array
  return result.join('');

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
