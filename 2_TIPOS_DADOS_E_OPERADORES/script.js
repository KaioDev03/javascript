//1- Number
console.log(typeof 2);
console.log(typeof 25.14);
console.log(typeof -125);
console.log(5 + 9);
console.log(5 - 9);
console.log(5 * 9);
console.log(5 / 9);
console.log(5 + (45 * 2));

//2- String Podemos usar aspas duplas ou simples e crase, mas cada um com suas pecualiaridades
console.log(typeof "hello");
console.log(typeof "hello world");
console.log(typeof "123");


// Simbolos especiais JS
console.log("Olá kaio\ntudo bem?");
console.log("Salve meu\t amigo");

//Concatenação
console.log("Olá " + "kaio");

//Template String
console.log("Template Strings\n");
console.log(`A soma dos números é ${2 + 45}`);

//3- Boolean
console.log(typeof true);
console.log(typeof false);

//4- Null
console.log(typeof null);

//5- Undefined
console.log(typeof undefined);

//6- Symbol
console.log(typeof Symbol());

/* Special Numbers são dados considerados como numeros, mas não funcionam com eles: infinity, -infinity , NaN(Not a Number) */

console.log(typeof Infinity);
console.log(typeof -Infinity);
console.log(typeof NaN);
console.log(220 * "asd");


/* Dados Booleanos */
console.log(true);
console.log(false);

console.log(5 > 8);
console.log(10 < 12);

/* Comparação */
console.log("Comparação");
console.log(5 <= 5);
console.log(5 < 5);
console.log(10 == 9);
console.log(10 != 9);

/* Comparação de idêntico */
console.log("Comparação de idêntico")
console.log("Kaio" === "Kaio");
console.log("Kaio" !== "kaio");
console.log("Diego" !== "Kaio");

/* Operadores lógicos */
/* Servem para unir duas ou mais comparações  &&(AND) True se os 2 lados forem verdadeiros*/
/* II(OR) True se pelo menos um dos lados for verdadeiro */
/* !(NOT) este operador inverte o resultado */
console.log("Operadores lógicos");
console.log(5 > 10 && 10 > 5);
console.log(5 > 10 || 10 > 5);
console.log(!(5 > 10));

/* Empty Values */
console.log("Empty Values");
console.log(typeof null, typeof undefined);
console.log("null" == undefined);
console.log("null" === undefined);