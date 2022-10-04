import readline from 'readline-sync';

const massUnits = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'];

function massConvert(value: number, fromUnit: string, toUnit: string): number {
  const fromIndex = massUnits.indexOf(fromUnit);
  const toIndex = massUnits.indexOf(toUnit);
  const exponent = (toIndex - fromIndex);

  return value * Math.pow(10, exponent);
}

function exec() {
  const value = readline.questionFloat('Digite o valor a ser convertido: \n');

  const fromUnitChoiceIndex = readline.keyInSelect(massUnits, 'Escolha um número para a unidade base:');
  const toUnitChoiceIndex = readline.keyInSelect(massUnits, 'Escolha um número para a conversão:');

  const fromUnitChoice = massUnits[fromUnitChoiceIndex];
  const toUnitChoice = massUnits[toUnitChoiceIndex];

  const result = massConvert(value, fromUnitChoice, toUnitChoice);
  const message = `${value}${fromUnitChoice} é igual a ${result}${toUnitChoice}`;
  console.log(message);
}

exec();
