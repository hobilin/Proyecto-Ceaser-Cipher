//creando función que repite la pregunta si quiere cifrar o decifrar mientras que la respuesta no sea lo pedido o sea una cadena vacía.
function whatToCaesar(){
  var answer;
  do{
    answer = prompt("Si desea CIFRAR una frase, escriba 1. Si desea DESCIFRAR una frase, escriba 2");
    if(answer != ""){
      if(answer === "1"){
        cipher();
      }else if (answer === "2") {
        decipher();
      }else {
        alert("Ingrese una opción válida");
      }
    }
  } while(answer === "" || (answer != "1" && answer != "2"));

//creando función que pregunte qué quiere cifrar y cifre la frase.
function cipher(){
  //Agregando variable para que contenga la respuesta a la futura pregunta.
  var answerCipher;
  //Do...while para que la pregunta se repita hasta que las condiciones se dejen de cumplir.
  do{
    answerCipher = prompt("Por favor, escriba la frase que desea CIFRAR");
  }while (answerCipher == ''); ///^[0-9]/.test(document.getElementById(answerCipher))

  //Agregando variable que contenga carácteres permitidos.
  var answerCipherChar = /[a-zA-Z]/;
  //Agregando variable que contenga carácteres especiales.
  var answerCipherSpecialChar = /[ñ áéíóúäëïöüàèìòù_@$]/;
  //Agregando variable array para que más adelante contenga la frase cifrada.
  var arrayAsciiC = [];
  //Agregando variable para que más adelante contenga el String de la frase cifrada.
  var strCipher;
  /*Si el elemento en el que se encuentra el index i es uno de los carácteres especiales anteriormente nombrados,
  que se imprima en el array el mismo elemento. Sino, que se aplique la fórmula y se imprima en el array el elemento cifrado.
  */
  for(var i = 0; i < answerCipher.length; i++){
    if(answerCipherSpecialChar.test(answerCipher[i])){
      arrayAsciiC.push(answerCipher[i]);
    }else if(answerCipherChar.test(answerCipher[i])){
      arrayAsciiC.push(String.fromCharCode(((answerCipher.charCodeAt(i)- answerCipher.charCodeAt(i) + 33) % 26 + answerCipher.charCodeAt(i))));
    }else{
      alert("La frase escrita no es válida");
    }strCipher = arrayAsciiC.join('');
  }
  //imprimir en cuerpo de página web "Tu frase cifrada es " + la frase que se acaba de cifrar.
  document.write("Tu frase cifrada es " + strCipher);}
}
//creando función que pregunte qué quiere descifrar y descifre la frase.
function decipher(){
  //Agregando variable para que contenga la respuesta a la futura pregunta.
  var answerDecipher;
  //Do...while para que la pregunta se repita hasta que las condiciones se dejen de cumplir.
  do{
    answerDecipher = prompt("Por favor, escriba la frase que desea DESCIFRAR");
  }while (answerDecipher == '');
  //Agregando variable que contenga carácteres permitidos.
  var answerDecipherChar = /[a-zA-Z]/;
  //Agregando variable que contenga carácteres especiales.
  var answerDecipherSpecialChar = /[ñ áéíóúäëïöüàèìòù_@$]/;
  //Agregando variable array para que más adelante contenga la frase cifrada.
  var arrayAsciiD = [];
  //Agregando variable para que más adelante contenga el String de la frase cifrada.
  var strDecipher;
  /*Si el elemento en el que se encuentra el index i es uno de los carácteres especiales anteriormente nombrados,
  que se imprima en el array el mismo elemento. Sino, que se aplique la fórmula y se imprima en el array el elemento descifrado.
  */
  for(var i = 0; i < answerDecipher.length; i++){
    if(answerDecipherSpecialChar.test(answerDecipher[i])){
      arrayAsciiD.push(answerDecipher[i]);
    }else if (answerDecipherChar.test(answerDecipher[i])){
      arrayAsciiD.push(String.fromCharCode(((answerDecipher.charCodeAt(i) - answerDecipher.charCodeAt(i) - 33 +26) % 26 + answerDecipher.charCodeAt(i))));
    }else {
      alert("La frase escrita no es válida");
    }strDecipher = arrayAsciiD.join('');
  }
  //imprimir en cuerpo de página web "Tu frase descifrada es " + la frase que se acaba de descifrar.
  document.write("Tu frase descifrada es " + strDecipher);
}
whatToCaesar();
