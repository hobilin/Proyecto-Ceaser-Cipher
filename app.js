// Function that ciphers and deciphers according to the Caesar Cipher coding
function whatToCaesar() {
  var answer;
  do {
    answer = prompt('If you wish to CIPHER a phrase, enter 1. If you wish to decipher a phrase, enter 2');
    if (answer !== '') {
      if (answer === '1') {
        cipher();
      } else if (answer === '2') {
        decipher();
      } else {
        alert('Enter a valid option');
      }
    }
  } while (answer === '' || (answer !== '1' && answer !== '2'));

  /*
   *function to ask what phrase the user wants to cipher
   *and cipher it.
   */
  function cipher() {
    // initializing variable that will contain the phrase to cipher.
    var answerCipher;
    // Do...while so that the prompt repeat itself until the condition is not longer met.
    do {
      answerCipher = prompt('Please, enter the phrase you want to CIPHER');
      // checking if there is a number in the phrase.
    } while (/[0-9]/.test(answerCipher) === true);
    // creating var with allowed characters.
    var answerCipherChar = /[a-zA-Z]/;
    // creating var with special characters,
    var answerCipherSpecialChar = /[ñ áéíóúäëïöüàèìòù_@$]/;
    // Initializing var with an empty array that will contain the ciphered phrase.
    var arrayAsciiC = [];
    // Initializing var that will contain the string version of the ciphered phrase.
    var strCipher;
    /*
    *If the element found at [i] is one of the special characters,
    *it will be pushed to the array without modification.
    *else, the formula will be applied and then pushed to the array.
    */
    for (var i = 0; i < answerCipher.length; i++) {
      var codeAscii = answerCipher.charCodeAt(i);
      if (answerCipherSpecialChar.test(answerCipher[i]) === true) {
        arrayAsciiC.push(answerCipher[i]);
      } else if (codeAscii >= 65 && codeAscii <= 90) {
        arrayAsciiC.push(String.fromCharCode((codeAscii - 65 + 33) % 26 + 65));
      } else if (codeAscii >= 97 && codeAscii <= 122) {
        arrayAsciiC.push(String.fromCharCode((codeAscii - 97 + 33) % 26 + 97));
      }
    }
    strCipher = arrayAsciiC.join('');
    // alert with you phrase already ciphered.
    alert('Your ciphered phrase is: ' + strCipher);
  }

  /*
   *function to ask what phrase the user wants to decipher
   *and decipher it.
   */
  function decipher() {
    // initializing variable that will contain the phrase to decipher
    var answerDecipher;
    // Do...while so that the prompt repeat itself until the condition is not longer met.
    do {
      answerDecipher = prompt('Please, enter the phrase you want to DECIPHER');
    // checking if there is a number in the phrase.
    } while (/[0-9]/.test(answerDecipher) === true);
    // creating var with allowed characters.
    var answerDecipherChar = /[a-zA-Z]/;
    // creating var with special characters,
    var answerDecipherSpecialChar = /[ñ áéíóúäëïöüàèìòù_@$]/;
    // Initializing var with an empty array that will contain the deciphered phrase.
    var arrayAsciiD = [];
    // Initializing var that will contain the string version of the deciphered phrase.
    var strDecipher;
    /*
    *If the element found at [i] is one of the special characters,
    *it will be pushed to the array without modification.
    *else, the formula will be applied and then pushed to the array.
    */
    for (var i = 0; i < answerDecipher.length; i++) {
      var codeAscii = answerDecipher.charCodeAt(i);
      if (answerDecipherSpecialChar.test(answerDecipher[i])) {
        arrayAsciiD.push(answerDecipher[i]);
      } else if (answerDecipherChar.test(answerDecipher[i])) {
        arrayAsciiD.push(String.fromCharCode(codeAscii - 65 - 7 + 65));
      } else if (codeAscii >= 97 && codeAscii <= 122) {
        arrayAsciiC.push(String.fromCharCode(codeAscii - 97 - 7 + 97));
      } else {
        alert('The submited phrase is invalid');
      } 
      strDecipher = arrayAsciiD.join('');
    }
    // alert with you phrase already deciphered.
    alert('Your deciphered phrase is: ' + strDecipher);
  }
}

whatToCaesar();
