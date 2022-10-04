import readline from 'readline-sync';

const lengthUnits = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];

function lengthConvert(value: number, fromUnit: string, toUnit: string): number {
  const fromIndex = lengthUnits.indexOf(fromUnit);
  const toIndex = lengthUnits.indexOf(toUnit);
  const exponent = (toIndex - fromIndex);

  return value * Math.pow(10, exponent);
}

function exec() {
  const value = readline.questionFloat('Digite o valor a ser convertido: \n');

  const fromUnitChoiceIndex = readline.keyInSelect(lengthUnits, 'Escolha um número para a unidade base:');
  const toUnitChoiceIndex = readline.keyInSelect(lengthUnits, 'Escolha um número para a conversão:');

  const fromUnitChoice = lengthUnits[fromUnitChoiceIndex];
  const toUnitChoice = lengthUnits[toUnitChoiceIndex];

  const result = lengthConvert(value, fromUnitChoice, toUnitChoice)
  const message = `${value}${fromUnitChoice} é igual a ${result}${toUnitChoice}`
  console.log(message);
}

exec();
