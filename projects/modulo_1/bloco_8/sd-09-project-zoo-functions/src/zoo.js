/*
eslint no-unused-vars: [
  "error",
  {
    "args": "none",
    "vars": "local",
    "varsIgnorePattern": "data"
  }
]
*/

const data = require('./data');
const { animals, employees, prices, hours } = data;

function animalsByIds(...ids) {
  return animals.filter(animal => ids.some(currentId => currentId === animal.id));
}

function animalsOlderThan(animal, age) {
  return animals.some(currentAnimal => currentAnimal.name === animal
    && currentAnimal.residents.every(currentResident => currentResident.age > age));
}

function employeeByName(employeeName) {
  return employeeName !== undefined ? employees.find(
    targetEmployee => targetEmployee.firstName === employeeName
      || targetEmployee.lastName === employeeName) : {};
}

function createEmployee(personalInfo, associatedWith) {
  const { id, firstName, lastName } = personalInfo;
  const { managers, responsibleFor } = associatedWith;
  return { id, firstName, lastName, managers, responsibleFor };
}

function isManager(id) {
  return employees.some(currentEmployee =>
    currentEmployee.managers.some(currentManagerId => currentManagerId === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function animalCount(species) {
  if (!species) {
    const output = {};
    animals.forEach((currentAnimal) => {
      const { residents } = currentAnimal;
      output[currentAnimal.name] = residents.length;
    });
    return output;
  }

  return animals.find(currentAnimal => currentAnimal.name === species).residents.length;
}

function entryCalculator(entrants) {
  return entrants === undefined || Object.keys(entrants).length === 0 ? 0 :
    Object.keys(entrants).reduce((totalEntry, currentPerson) => {
      totalEntry += prices[currentPerson] * entrants[currentPerson];
      return totalEntry;
    }, 0);
}

function animalMap(options) {
  // seu código aqui
}

function schedule(dayName) {
  const fullSchedule = Object.keys(hours);
  const output = {};
  if (!dayName) {
    fullSchedule.forEach((day) => {
      if (day === 'Monday') {
        output[`${day}`] = 'CLOSED';
      } else {
        output[`${day}`] = `Open from ${hours[day].open}am until ${hours[day].close - 12}pm`;
      }
    });

    return output;
  }

  return dayName === 'Monday' ? { [dayName]: 'CLOSED' } : { [dayName]: `Open from ${hours[dayName].open}am until ${hours[dayName].close - 12}pm` };
}

function oldestFromFirstSpecies(id) {
  let oldest = 0;
  const species = animals.find(
    currentAnimal => currentAnimal.id === employees.find(
      currentEmployee => id === currentEmployee.id).responsibleFor[0]).residents;

  species.forEach((currentAnimal) => {
    if (currentAnimal.age > oldest) {
      oldest = currentAnimal.age;
    }
  });

  const output = species.find(currentAnimal => currentAnimal.age === oldest);
  return [output.name, output.sex, output.age];
}

function increasePrices(percentage) {
  Object.keys(prices).forEach((currentValue) => {
    prices[currentValue] += prices[currentValue] * (percentage / 100);
    prices[currentValue] = Math.round(prices[currentValue] * 100) / 100;
  });

  return prices;
}

function employeeCoverage(idOrName) {
  if (!idOrName) {
    const outputList = {};
    employees.forEach((currentEmployee) => {
      outputList[`${currentEmployee.firstName} ${currentEmployee.lastName}`] = currentEmployee.responsibleFor.map((currentId) => {
        currentId = animals.find(currentAnimal => currentAnimal.id === currentId).name;
        return currentId;
      });
    });

    return outputList;
  }

  const selectedEmployee = employees.find(currentEmployee =>
    currentEmployee.id === idOrName
    || currentEmployee.firstName === idOrName
    || currentEmployee.lastName === idOrName);

  const animalOutput = selectedEmployee.responsibleFor.map(currentId =>
    animals.find(currentAnimal => currentAnimal.id === currentId).name);

  return { [`${selectedEmployee.firstName} ${selectedEmployee.lastName}`]: animalOutput };
}

module.exports = {
  entryCalculator,
  schedule,
  animalCount,
  animalMap,
  animalsByIds,
  employeeByName,
  employeeCoverage,
  addEmployee,
  isManager,
  animalsOlderThan,
  oldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
