let custo = 100;
let venda = 200;
let lucro;

if (custo < 0 || venda < 0) {
    console.log("Valores inválidos! Tente novamente.")
} else {
    custo += custo * 0.2;
    lucro = venda - custo;
    console.log(lucro);
}
