function encode(str) {
    let array = [];
    let encoded = '';
    for (let i = 0; i < str.length; i += 1) {
        array[i] = str[i];
        switch (array[i]) {
            case 'a':
                array[i] = '1';
                break;
            case 'e':
                array[i] = '2';
                break;
            case 'i':
                array[i] = '3';
                break;
            case 'o':
                array[i] = '4';
                break;
            case 'u':
                array[i] = '5';
                break;
        }

        encoded += array[i];
    }
    return encoded;
}

function decode(str) {
    let array = [];
    let decoded = '';
    for (let i = 0; i < str.length; i += 1) {
        array[i] = str[i];
        switch (array[i]) {
            case '1':
                array[i] = 'a';
                break;
            case '2':
                array[i] = 'e';
                break;
            case '3':
                array[i] = 'i';
                break;
            case '4':
                array[i] = 'o';
                break;
            case '5':
                array[i] = 'u';
                break;
        }

        decoded += array[i];
    }
    return decoded;
}

module.exports = { encode, decode };