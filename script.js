
var generateBtn = document.querySelector("#generate");
var charaterTypesArr = []

function randomNumber (min, max){
  var value = Math.floor(Math.random() * (max - min +1) + min);
  return value;
};

function getPasswordLength() {
  passwordLength = window.prompt('How long do you want the password to be? Password must be between 8 and 128 charcters.')
  if (passwordLength >7 && passwordLength <=128){
    return passwordLength
  }else{
    window.alert('Invaild password length selection, please try again')
    return getPasswordLength()
  }
};

function getIncludeLowercase() {
  includeLowercase = window.prompt('Do you want to include lowercase characters [a-z] in your password? (y/n');
  if (includeLowercase.toLowerCase() === 'y'){
    return charaterTypesArr.push('a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z')
  }else if (includeLowercase.toLowerCase() === 'n'){
    return
  }else{
    window.alert('Invalid response regarding including lowercase charaters, please try again')
    return getIncludeLowercase()
  }
};

function getIncludeUppercase() {
  includeUppercase = window.prompt('Do you want to include uppercase characters [A-Z] in your password? (y/n');
  if (includeUppercase.toLowerCase() === 'y'){
    return charaterTypesArr.push('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L','M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X','Y', 'Z')
  }else if (includeUppercase.toLowerCase() === 'n'){
    return
  }else{
    window.alert('Invalid response regarding including uppercase charaters, please try again')
    return getIncludeUppercase()
  }
};

function getIncludeNumeric(){
  includeNumeric = window.prompt('Do you want to include numeric characters [0-9] in your password? (y/n');
  if (includeNumeric.toLowerCase() === 'y'){
    return charaterTypesArr.push('0','1','2','3','4','5','6','7','8','9')
  }else if (includeNumeric.toLowerCase() === 'n'){
    return
  }else{
    window.alert('Invalid response regarding including numberic charaters, please try again')
    return getIncludeNumeric()
  }
};

function getIncludeSpecialChar() {
  includeSpecialChar = window.prompt('Do you want to include special characters [! # $ % & ( ) * +  , - . / : ; < = > ? @ ^ _ ~] in your password? (y/n');
  if (includeSpecialChar.toLowerCase() === 'y'){
    charaterTypesArr.push( '!','#','$','%','&','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','^','_','~')
    return
  }else if (includeSpecialChar.toLowerCase() === 'n'){
    return
  }else{
    window.alert('Invalid response regarding including special charaters, please try again')
    return getIncludeSpecialChar()
  }
};

function passwordPrompt(){
  getPasswordLength();
  getIncludeLowercase();
  getIncludeUppercase();
  getIncludeNumeric();
  getIncludeSpecialChar();
};

function generatePassword (length,array){
  password = '';
  for (i=0; i<length; i++) {
    password = password + array[randomNumber(0,array.length-1)]
  };
  return password
}


function writePassword() {
  passwordPrompt();
  while (charaterTypesArr.length === 0) {
    window.alert ('You need to pick at least one charater category to include in your password, please try again.')
    passwordPrompt()
  }
  var password = generatePassword(passwordLength, charaterTypesArr);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  charaterTypesArr = []
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
