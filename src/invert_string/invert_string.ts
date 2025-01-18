import promptSync from 'prompt-sync';

function invertString(str: string): string {
    let invertedStr = '';

    for (let i = str.length - 1; i >= 0; i--) {
        invertedStr += str[i];
    }

    return invertedStr;
}

const prompt = promptSync();
const inputString = prompt('Digite uma string para inverter: ');
const result = invertString(inputString);

console.log("String invertida:", result);
