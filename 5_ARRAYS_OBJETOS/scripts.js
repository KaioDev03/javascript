/* Arrays são considerados objetos no JS */
const lista = [1, 2, 3, 4, 5];

console.log(lista); // object
console.log(typeof lista); // object

const lista2 = ["Kaio", 2, 4, "Pedro"]; // array com tipos diferentes
console.log(lista2);
console.log(typeof lista2); // object

/* Mais sobre array */
const arr = ["a", "v", "t"];
console.log(arr[0]); // Acessando o primeiro elemento do array
console.log(arr[1]); // Acessando o segundo elemento do array

/* Propriedades são informações sobre o objeto e podemos acessa-lás por notação de pontos ou colchetes */
const numbers = [1, 2, 3];

console.log(numbers.length);

console.log(numbers["length"]); // notação de colchetes

const myName = "Kaio";

console.log(myName.length);

/* Métodos são como funcões, utilizamos notação de ponto e utilizamos () para invocar */
const otherNumbers = [1, 2, 3];
const theNumbers = [4, 5, 6];

const allNumbers = otherNumbers.concat(theNumbers); // concatena dois arrays
console.log(allNumbers);

const text = "Kaio";
const text2 = "Bem vindo!";

const fullText = text.concat(" ", text2).toUpperCase(); // concatena duas strings
console.log(fullText);

console.log(text.indexOf("o")); // retorna o índice do caractere

/* Arrays são objetos com propriedades e métodos */

/* Objetos (Object literal) Vem do POO */
const person = {
    name: "Kaio",
    age : 24,
    job : "Desenvolvedor",
};

console.log(person); // exibe o objeto person
console.log(person.name); // Acessando a propriedade name do objeto person
console.log(person["age"]); // Acessando a propriedade age do objeto person
console.log(typeof person); // object

/* Criando e deltando obejetos */
const car = {
    brand : "Volkswagen",
    model : "Golf GTI",
    year : 2025,
};

console.log(car);
// Adicionando uma nova propriedade ao objeto car 
car.color = "Black";

console.log(car);

delete car.year; // Deletando a propriedade year do objeto car

console.log(car);

/* Diferença entre arrays e objetos */
/* Os arrays são utilizados como lista de itens com strings, numeros ou boleanos e outros tipos. */
/* Os objetos utilizados para descrever um item com varias propriedades (Armazenar dados complexos) */
/* Além de que também é bastante utilizado o array de objetos */

/* Mais sobre objetos */

const obj = {
    a: "Kaio",
    b: true,
};

console.log(obj instanceof Object);

const obj2 = {
    c: []
}

Object.assign(obj2, obj);

console.log(obj2);

/* Podemos verificar as propriedades de um objeto usando o método Keys com o método entries recebemos arrays dos nomes das propriedades com seus valores. */

console.log(Object.keys(obj));
console.log(Object.keys(obj2));
console.log(Object.keys(car));
console.log(Object.entries(car));

/* Mutação */

const a = {
    name: "Kaio",
};

const b = a;

console.log(a);
console.log(a === b); // true

a.age = 24;

console.log(b); // b também foi alterado

/* Isso acontece porque objetos são mutáveis e são passados por referência. */

delete b.age;

console.log(a);
console.log(b);

/* Loop em arrays: Percorrer os arryays através de estruturas de repetição como o for, for in e for of e podemos utilizar o resultado de cada um dos elementos do array sem repetição do codigo, ou seja, apenas reutilizando a estrutura já criada 1x */
/* Loop Arrays */

const users = ["Kaio", "Pedro", "Maria"];

for (let i = 0; i < users.length; i++) {
    console.log(`Listando o usuário: ${users[i]}`);
}

/* Métodos de arrays: Push e Pop. Podemos manipular os arrays, ou seja, seus alterar seus valores de alguma forma. */
/* Utilizamos o Push parqa adicionar elementos no fim do array e utilizamos o Pop para remover elementos no fim do array (Sempre os ultimos indices dentro do array) */

const array = [1,2, 3, 5, 10, 12, 55, 100];

array.push(200);
console.log(array);
console.log(`O tamanho do array é: ${array.length}`);

array.pop();
console.log(array);

/* Métodos de manipulação dos arrays com shift que remove o primeiro elemento do array e unshift que adiciona um elemento no inicio do array */

const array2 = ["a", "c", "e", "Kaio"];

array2.shift(); // remove o primeiro elemento
console.log(array2);

array2.unshift("Início"); // adiciona um elemento no inicio do array
console.log(array2);

/* IndexOf permite encontrar o indice de um determinado elemento dentro do array. lastIndexOf retorna o ultimo indice de um determinado elemento */

const myElements = ["Banana, Maçã", "Laranja", "Uva", "Melancia"];

console.log(myElements.indexOf("Banana, Maçã")); // retorna o indice 0 e 1
console.log(myElements.lastIndexOf("Melancia")); // retorna o indice 1 e 3

/* Método Slice que retorna uma parte do array com base no indice de inicio e fim do array */

const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const newArray = testArray.slice(2, 5  + 1); // retorna do indice 2 ao 4
console.log(newArray);

/* Métodos de arrays: forEach é como uma estrutura de loop mas é um método. Ele percorre cada um dos elementos de um array. */

const nums = [10, 20, 30, 40, 50];

nums.forEach((numero) => {
    console.log(`O número é: ${numero}`);
});

/* Métodos de arrays: Includes verifica se um determinado elemento existe dentro do array e retorna um booleano */

const brands = ["Nike", "Adidas", "Puma", "Reebok"];

console.log(brands.includes("Puma"));

/* Método de arrays: Reverse inverte o array com base no indice do array e retorna um novo array invertido */

const letters = ["a", "b", "c", "d", "e"];

const reversedLetters = letters.reverse();
console.log(reversedLetters);

/* Métodos de strings ou seja, tem métodos e propriedades. Alguns são muito semelhantes ao metodos de arrays */

/* Metodos de strings: Trim é o resposável que remove tudo que não é string(texto) como caracteres especiais e espaços em branco. Um método importante para sanitização de dados, não modificamos o texto principal */
const testeTrim = "     Kaio     ";
console.log(testeTrim);
console.log(testeTrim.trim());

/* Método de strings: PadStart é responsável por inserir um texto no começo da string, podendo ser repetido e de acordo com o 2o argumento ele pode determinar o tamanho da string FIXO */

const testePadStart = "5";
console.log(testePadStart.padStart(4, "0")); // 0005
console.log(testePadStart.padStart(2, "0")); // 05

/* Método de strings: Split ele divide uma string em um array */

const testeSplit = "Kaio João Laly Pedro";
console.log(testeSplit);
const arrayNames = testeSplit.split(", ");
console.log(arrayNames);

/* Método de strings: Join ele junta um array em uma string */

const testeJoin = ["Kaio", "João", "Laly", "Pedro"];
console.log(testeJoin);
const stringNames = testeJoin.join(", ");
console.log(stringNames);

/* Método de strings: Repeat ele repete um texto de acordo com o 2o argumento */

const testeRepeat = "Kaio ";
console.log(testeRepeat.repeat(5));

/* Rest Operator e Spread Operator podemos utiliza-los para receber indefinidos argumentos em uma função, assim não precisamos declarar o que vamos receber na função deixando-a mais ampla */
const somaInfinita = (...numeros) => {
    let total = 0;

    for (let i = 0; i < args.length; i++) {
        total += numeros[i];
    }
    return total;
};

console.log(somaInfinita(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

/* Spread Operator podemos utilizar para espalhar os elementos de um array ou objeto */

/* Estrutura de repetição for..0f: É uma estrutura de repetição semelhante ao for, porém mais simples. O número de repetição é baseado no array utilizado além de que podemos acessar os elementos sem os indices. */

const somaInfinita2 = (...numeros) => {
    total += 0;

    for (num of args) {
        total += num;
    }
    return total;
};

console.log(somaInfinita2(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
console.log(somaInfinita2(10, 20, 30));

/* Destructuring em objetos é uma funcionalidade que nos permite destruturar algum dado. No caso dos objetos podemos criar variáveis de acordo com as propriedades do objeto */

const user = {
    name: "Kaio",
    age: 24,
    job: "Estudante"
};

const { name, age, job } = user;
console.log(name, age, job);

/* Renomear variáveis */
const { name: firstName, age: idade, job: profissao } = user;
console.log(firstName, idade, profissao);

/* Destructuring em arrays é uma funcionalidade que nos permite destruturar algum dado. No caso dos arrays podemos criar variáveis de acordo com os elementos do array */

const myList = ["Melancia", "Banana", "Abacaxi"];

const [fruit1, fruit2 , fruit3] = myList;
console.log(fruit1, fruit2, fruit3);

/* Json é um dado em formato de texto, utilizado para comunicação entre API e front-end */

const myJson = '{"name": "Kaio", "age": 24, "job": "Desenvolvedor"}';

console.log(myJson);
console.log(typeof myJson); // string

/* Conversão de JSON para Objeto e vice-versa */

const myObject = JSON.parse(myJson); // Converte JSON para Objeto
console.log(myObject);
console.log(typeof myObject); // object

/* Json inválido */

const invalidJson = '{name: "Kaio", age: 24, job: "Desenvolvedor"}';
const errorInvalidJson = JSON.parse(errorInvalidJson); // Erro de sintaxe
console.log(errorInvalidJson);