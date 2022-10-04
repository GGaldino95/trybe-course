import readline from 'readline-sync';

const areaUnits = ['km²', 'hm²', 'dam²', 'm²', 'dm²', 'cm²', 'mm²'];

function areaConvert(value: number, fromUnit: string, toUnit: string): number {
  const fromIndex = areaUnits.indexOf(fromUnit);
  const toIndex = areaUnits.indexOf(toUnit);
  const exponent = (toIndex - fromIndex);

  return value * Math.pow(100, exponent);
}

function exec() {
  const value = readline.questionFloat('Digite o valor a ser convertido: \n');

  const fromUnitChoiceIndex = readline.keyInSelect(areaUnits, 'Escolha um número para a unidade base:');
  const toUnitChoiceIndex = readline.keyInSelect(areaUnits, 'Escolha um número para a conversão:');

  const fromUnitChoice = areaUnits[fromUnitChoiceIndex];
  const toUnitChoice = areaUnits[toUnitChoiceIndex];

  const result = areaConvert(value, fromUnitChoice, toUnitChoice)
  const message = `${value}${fromUnitChoice} é igual a ${result}${toUnitChoice}`
  console.log(message);
}

exec();
