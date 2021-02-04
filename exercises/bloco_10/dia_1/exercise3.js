const techList = (techArray, name) => techArray.length !== 0 ? techArray.sort().map(currentTech => ({ tech: currentTech, name })) : 'Vazio!';

module.exports = techList;