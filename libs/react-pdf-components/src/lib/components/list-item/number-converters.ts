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


const ASCII_OFFSET = 65;
export const convertToAlphabetic = (inputNo: number): string => {
    let result = '', midRemainder;

    while (inputNo > 0) {
        midRemainder = (inputNo - 1) % 26;
        // gets the ASCII character
        result = String.fromCharCode(ASCII_OFFSET + midRemainder) + result;

        // remainder sets for the next round
        inputNo = (inputNo - midRemainder) / 26 | 0;
    }
    return result.toLowerCase();
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