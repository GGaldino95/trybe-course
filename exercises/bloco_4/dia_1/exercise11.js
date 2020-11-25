let salarioBruto = 3000.0;
let salarioLiquido;

// Valor inicial
console.log(salarioBruto);

// INSS
if (salarioBruto <= 1556.94) {
    salarioLiquido = salarioBruto - (salarioBruto * 0.08);
} else if (salarioBruto <= 2594.92) {
    salarioLiquido = salarioBruto - (salarioBruto * 0.09);
} else if (salarioBruto <= 5189.82) {
    salarioLiquido = salarioBruto - (salarioBruto * 0.11);
} else {
    salarioLiquido = salarioBruto - 570.88;
}

// Valor com INSS
console.log(salarioLiquido);

// IR
if (salarioLiquido <= 1903.98) {
    console.log(salarioLiquido);
} else if (salarioLiquido <= 2826.65) {
    salarioLiquido -= salarioLiquido * 0.075 - 142.80;
} else if (salarioLiquido <= 3751.05) {
    salarioLiquido -= salarioLiquido * 0.15 - 354.80;
} else if (salarioLiquido <= 4664.68) {
    salarioLiquido -= salarioLiquido * 0.225 - 636.13;
} else {
    salarioLiquido -= salarioLiquido * 0.275 - 869.36;
}

// Valor final com IR
console.log(salarioLiquido);