# __Caesar Cipher__

## *Pseudocódigo*
1.	Iniciar

2.	Crear función whatToCaesar().

3.	Inicializar variable answer.

4.	Declarar la variable answer como la respuesta a "Si desea CIFRAR una frase, escriba 1. Si desea DESCIFRAR una frase, escriba 2", y hacer prompt() de la pregunta mientras input sea igual a una cadena vacía

5.	Leer answer.

6.	Si answer es literalmente igual a “1”, llame a la función cipher().

7.	Sino, llame a la función decipher().

8.	Sino, mande un alert que diga "Ingrese una opción válida".

9.	Crear una función llamada cipher.

10.	Inicializa variable answerCipher

11.	Declara la variable answerCipher como la respuesta a "Por favor, escriba la frase que desea CIFRAR", y hacer prompt mientras input sea igual a una cadena vaía o a números.

12.	Inicializar y declarar variable answerCipherSpecialChar como una expresión regular de caracteres especiales.

13.	Inicializa array arrayAsciiC.

14.	Inicializa variable var strCipher.

15.	Crear un for de índice i que recorra answerCipher y que mientras sea menor que la longitud de answerCipher, que aumente de a uno.

16.	Sí el elemento en la posición en la que se encuentra i equivale a un elemento de la variable answerCipherSpecialChar, empujar al final del array arrayAsciiC mediante push el elemento ubicado en ese índice.

17.	Sino, convertir el contenido de answerCipher al código ASCII y aplicando la fórmula (x – n) % 26, convertirlo al mismo tiempo en código caesar.

18.	Declarar la variable srtCipher como la unión en una ‘string’ del array answerCipher, mediante el método .join().

19.	Escribir en el cuerpo de la página web “tu frase cifrada es “ unido con el output de la variable strCipher.

20.	Crear una función llamada decipher
.
21.	Inicializa variable answerDecipher

22.	Declara la variable answerDecipher como la respuesta a "Por favor, escriba la frase que desea CIFRAR", y hacer prompt mientras input sea igual a una cadena vacía o a números.

23.	Inicializar y declarar variable answerDecipherSpecialChar como una expresión regular de caracteres especiales.

24.	Inicializa array arrayAsciiD.

25.	Inicializa variable var strDecipher.

26.	Crear un for de índice i que recorra answerDecipher y que mientras sea menor que la longitud de answerDecipher, que aumente de a uno.

27.	Sí el elemento en la posición en la que se encuentra i equivale a un elemento de la variable answerDecipherSpecialChar, empujar al final del array arrayAsciiD mediante push el elemento ubicado en ese índice.

28.	Sino, convertir el contenido de answerDeipher al código ASCII y aplicando la fórmula ((x – n) % 26) – 7 +26, convertirlo al mismo tiempo en código caesar.

29.	Declarar la variable srtDecipher como la unión en una ‘string’ del array answerDecipher, mediante el método .join().

30.	Escribir en el cuerpo de la página web “tu frase cifrada es  “  unido con el output de la variable strDecipher.

31. Cerrar función.

32. Llamar a función whatToCaesar().

33. Finalizar.

### *Diagrama de Flujo*
Imagen png
![Diagrama Caesar](C:/Users/Viviana/Desktop/DiagramaCC.png "Diagrama Caesar")

Enlace
[Diagrama Ceasar Cipher](https://www.dropbox.com/s/g1gtlb901r8mwv8/DiagramaCC.png?dl=0)
