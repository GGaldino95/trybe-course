const promise = new Promise((resolve, reject) => {
    const array = [];
    for (let i = 0; i < 10; i += 1) {
        array.push(Math.floor(Math.random() * 51));
    }

    const output = array.reduce((result, number) => result + Math.pow(number, 2));
    return output > 8000 ? resolve(output) : reject('É mais de oito mil! Essa promise deve estar quebrada!');
})
    .then(output => {
        const array = [output / 2, output / 3, output / 5, output / 10];
        console.log(`Succeso! O valor recebido foi: ${output}
${output} dividido por 2: ${array[0].toFixed(1)}
${output} dividido por 3: ${array[1].toFixed(1)}
${output} dividido por 5: ${array[2].toFixed(1)}
${output} dividido por 10: ${array[3].toFixed(1)}`);

        return new Promise((resolve) => {
            return resolve(array);
        })
            .then(array => {
                const output = array.reduce((result, number) => result + number);
                return console.log(`O somatorio das divisoes foi: ${output.toFixed(1)}`)
            });
    })
    .catch(msg => console.log(msg));