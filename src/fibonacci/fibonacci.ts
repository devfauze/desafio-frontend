import prompt from 'prompt-sync';
const input = prompt();

function isFibonacci(num?: number): string {
    num = num ?? Number(input("Digite um número para verificar se está na sequência de Fibonacci: "));

    if (num < 0) {
        return "O número deve ser maior ou igual a zero.";
    }

    let fibSequence: number[] = [0, 1];

    while (fibSequence[fibSequence.length - 1] < num) {
        const nextValue =
            fibSequence[fibSequence.length - 1] + fibSequence[fibSequence.length - 2];
        fibSequence.push(nextValue);
    }

    if (fibSequence.includes(num)) {
        return `O número ${num} pertence à sequência de Fibonacci.`;
    } else {
        return `O número ${num} não pertence à sequência de Fibonacci.`;
    }
}

console.log(isFibonacci())