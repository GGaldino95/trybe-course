import readline from 'readline-sync';

const volumeUnits = ['km³', 'hm³', 'dam³', 'm³', 'dm³', 'cm³', 'mm³'];

function volumeConvert(value: number, fromUnit: string, toUnit: string): number {
  const fromIndex = volumeUnits.indexOf(fromUnit);
  const toIndex = volumeUnits.indexOf(toUnit);
  const exponent = (toIndex - fromIndex);

  return value * Math.pow(1000, exponent);
}

function exec() {
  const value = readline.questionFloat('Digite o valor a ser convertido: \n');

  const fromUnitChoiceIndex = readline.keyInSelect(volumeUnits, 'Escolha um número para a unidade base:');
  const toUnitChoiceIndex = readline.keyInSelect(volumeUnits, 'Escolha um número para a conversão:');

  const fromUnitChoice = volumeUnits[fromUnitChoiceIndex];
  const toUnitChoice = volumeUnits[toUnitChoiceIndex];

  const result = volumeConvert(value, fromUnitChoice, toUnitChoice);
  const message = `${value}${fromUnitChoice} é igual a ${result}${toUnitChoice}`;
  console.log(message);
}

exec();
