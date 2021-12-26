const alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
];

const romans: { [key: string]: number } = {
    "M": 1000,
    "CM": 900,
    "D": 500,
    "CD": 400,
    "C": 100,
    "XC": 90,
    "L": 50,
    "XL": 40,
    "X": 10,
    "IX": 9,
    "V": 5,
    "IV": 4,
    "I": 1,
};


export const convertToAlphabetic = (input: number) => {
    const result = [];
    if (input <= 26) {
        result.push(alphabet[input - 1]);
    } else {
        const remainder = input % alphabet.length;
        const quo = Math.floor(input / alphabet.length);

        result.push(alphabet[quo - 1]);

        if (remainder > 0) {
            // adding remaining value - remainder will only range withing 1-25
            result.push(alphabet[remainder - 1]);
        }
    }
    return result.join('');
};


export const convertToRoman = (num: number) => {
    const result = [];

    for (const i of Object.keys(romans)) {
        const q = Math.floor(num / romans[i]);
        num -= q * romans[i];
        result.push(i.repeat(q));
    }

    return result.join("").toLowerCase();
};