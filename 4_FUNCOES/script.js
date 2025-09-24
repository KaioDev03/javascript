/* Estruturas de códigos menores, podemos reutilizar e poupar código. */
function minhaFuncao() {
    console.log("Função executada!");
}

minhaFuncao();

/* Função anonima */
const funcaoEmVariavel = function() {
    console.log("Função em variável executada!");
};

funcaoEmVariavel();

/* Função com parãmetros */
function funcaoComParametros(txt) {
    console.log(`imprimindo: ${txt}`);
}

funcaoComParametros("Olá Mundo!");

/* Retorno das funções (utilizamos return para retornar algo) */
const a = 10;
const b = 20;
const c = 30;
const d = 40;

function soma(n1, n2) {
    return n1 + n2;
}

const resultado = soma(d, b);
console.log(resultado);

/* Arrow Functions */
const subtracao = (n1, n2) => n1 - n2;
console.log(subtracao(d, a));

/* Parâmetros opcionais */
const multiplication = function (m, n) {
    if (n === undefined) {
        return m * n;
    } else {
        return m * n;
    }
}

console.log(multiplication(5));
console.log(multiplication(5, 2));

const greeting = (name) => {
    if (!name) {
        console.log("Olá!");
        return;
    } else {
        console.log(`Olá, ${name}!`);
    }
};

greeting();

greeting("Matheus");

/* Função com argumento default */
const customGreeting = (name, greet = "Olá") => {
    return `${greet}, ${name}!`;
};

console.log(customGreeting("Kaio"));
console.log(customGreeting("Pedro", "Bom dia!"));

const repeatText = (text, times = 2) => {
    for (let i = 0; i < times; i++) {
        console.log(text);
    }
}

repeatText("Bom dia Kaio!");
repeatText("Bom dia Pedro!", 4);

/* Closure é um conjunto de funções onde podemos reaproveitar o escopo interno de uma função. */
function someFunction() {
    let txt = "Função com closure";
    
    function display () {
        console.log(txt);
    }

    display();
}

someFunction();

/* Podemos utilizar o closure para armazenar resultados de outras funções e modificar esses resultados */
const multiplicationClosure = (n) => {
    return (m) => {
        return n * m;
    };
};

const c1 = multiplicationClosure(4);
const c2 = multiplicationClosure(5);

console.log(c1);
console.log(c2);

console.log(c1(4));
console.log(c2(5));

/* Recursão com funções, ela pode se autoinvocar continuamente(loop) */
const untilTen = (n) => {
    if(n < 10) {
        console.log("A função até 10 foi chamada: " + n);
    } else {
        const x = n - m;
        console.log(x);

        untilTen(x, m);
    };
};

untilTen(100, 7);