import readline from 'readline-sync';

const capacityUnits = ['kl', 'hl', 'dal', 'l', 'dl', 'cl', 'ml'];

function capacityConvert(value: number, fromUnit: string, toUnit: string): number {
  const fromIndex = capacityUnits.indexOf(fromUnit);
  const toIndex = capacityUnits.indexOf(toUnit);
  const exponent = (toIndex - fromIndex);

  return value * Math.pow(10, exponent);
}

function exec() {
  const value = readline.questionFloat('Digite o valor a ser convertido: \n');

  const fromUnitChoiceIndex = readline.keyInSelect(capacityUnits, 'Escolha um número para a unidade base:');
  const toUnitChoiceIndex = readline.keyInSelect(capacityUnits, 'Escolha um número para a conversão:');

  const fromUnitChoice = capacityUnits[fromUnitChoiceIndex];
  const toUnitChoice = capacityUnits[toUnitChoiceIndex];

  const result = capacityConvert(value, fromUnitChoice, toUnitChoice)
  const message = `${value}${fromUnitChoice} é igual a ${result}${toUnitChoice}`
  console.log(message);
}

exec();
