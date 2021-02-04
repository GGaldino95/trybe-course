const hydrate = string => {
    const splitString = string.split('');
    const result = splitString.reduce((glassesOfWater, char) => {
        let parsedCharacter = parseInt(char);
        let checkCharacter = isNaN(parsedCharacter) === false;

        if (checkCharacter) {
            return glassesOfWater + parsedCharacter;
        }

        return glassesOfWater;
    }, 0);

    const pluralGlass = result === 1 ? 'copo' : 'copos';
    return `${result} ${pluralGlass} de água`;
};

module.exports = hydrate;