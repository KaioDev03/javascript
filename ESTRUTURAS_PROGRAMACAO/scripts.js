/* Variáveis */ /* Tipos de variáveis as varáveis let e const */
let Username = "Kaio";
let age = 24;

Username = "Kaio França"; /* Case Sensitive */

console.log(Username);
console.log(age);

const pi = 3.14;
console.log(pi); /* Não podemos alterar o valor de uma constante */
// pi = 3.1415; /* Isso gera um erro */

/* Funções JS */
let nome = prompt("Digite seu nome: ");

/* Math */ /* Max e min e o floor(arredondamento) */
console.log(Math.max(10, 15, 20, 8, 30));
console.log(Math.min(10, 15, 18, 8, 72));
console.log(Math.floor(4.9));
console.log(Math.floor(4.1));

/* Console.x usado para debug e entender o que pode estar errado */
console.log("Hello World");
console.error("Isso é um erro");/* Error */
console.warn("Isso é um aviso");/* Aviso, Alert */

/* Estruturas de controle: If, Else, Else if */
/* If é utilizado para verificar se uma condição é verdadeira(Booleano) */
const m = 10;

if (m > 5) {
    console.log("M é maior do que 5");
}

const user = "João";

if (user === "João") {
    console.log("Olá João, tudo bem?");
}

if (user === "Maria") {
    console.log("Olá Maria, tudo bem?");
}

console.log(user === "João", user === "Maria");

/* Estrutura de controle Else */
const loggedIn = false;

if (loggedIn) {
    console.log("Bem-vindo usuário!");
} else {
    console.log("Por favor, faça login.");
}

const q = 10;
const w = 15;

if (q > 5 && w > 20) {
    console.log("Condição verdadeira");
} else {
    console.log("Condição falsa, não atendeu todas as condições.");
}

/* Else if usada criar atende novas condições */

if (1 > 2) {
    console.log("Teste");
} else if (2 > 3) {
    console.log("Teste 2");
} else if(5 > 1) {
    console.log("Correto!");
}

const userName = "Kaio";
const userAge = 24;

if (userName === "José") {
    console.log("Bem vindo José!")
} else if (userName === "Kaio" && userAge === 24) {
    console.log("Bem vindo Kaio, você tem 24 anos!");
} else {
    console.log("Usuário não reconhecido.");
}

/* Estruturas de repetição For e While */
/* While */
let p = 0;

while (p < 5) {
    console.log(`Repetindo ${p}`);
    p = p + 1;
}

/* Loop infinito */
let x = 10;

while (x > 5) {
    console.log(`Imprimindo ${x}`);
    x = x - 1;
}

/* Do While */
let o = 10;

do {
    console.log(`Imprimindo ${o}`);
    o--;
} while (0 > 1);

/* For (Mais utilizada) */
for (let t = 0; t > 10; t++) {
    console.log(`Repetindo algo... ${t}`);
}

let r = 10;

for (r; r > 0; r = r - 1) {
    console.log(`O R está diminuindo... ${r}`);
}

/* Forçando a saida do loop utilizando o Break */
for (let g = 20; g > 10; g--) {
    console.log(`O G está diminuindo... ${g}`);
    if (g === 11) {
        console.log("Chegou no 11, saindo do loop.");
        break;
    }
}

/* Continue (Pula um loop também) vai para a proxima condição */
for (let s = 0; s < 10; s++) {
    
    if (s % 2 === 0) {
        console.log(`O número ${s} é par, pulando...`);
        continue;
    }
}

/* Switch case (utilizando para fazer condições) utilizar sempre quando usar if/else com 3 ou mais condições */
const job = "Estagiário";

switch (job) {
    case "Júnior":
        console.log("Seu salário é de R$ 2.000,00");
        break;
    case "Pleno":
        console.log("Seu salário é de R$ 4.000,00");
        break;
    case "Sênior":
        console.log("Seu salário é de R$ 7.000,00");
        break;
    case "Estagiário":
        console.log("Seu salário é de R$ 1.000,00");
        break;
    default:
        console.log("Cargo não reconhecido.");
        break;
}

/* Switch de forma errada */
const l = 100;

switch (l) {
    case 50:
        console.log("L é igual a 50");
    
    case 100:
        console.log("L é igual a 100");
    
    case 150:
        console.log("L é igual a 150");
    
    default:
        console.log("L não é igual a 50, 100 ou 150");
}