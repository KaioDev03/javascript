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


