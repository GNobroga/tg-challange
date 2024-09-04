import sum from './functions/sum';
import fibonacciSequence from './functions/fibonacci-sequence';
import { calculateDaysAboveAverage, calculateLowestRevenue, Revenue } from './functions/calculate-revenue';

// 1)
console.log('int INDICE = 13, SOMA = 0, K = 0; Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }, RESULTADO: ', sum(13));

// 2)

const num = 13;
fibonacciSequence(num) ? console.log(`${num} pertence a sequência de Fibonacci`) : console.log(`${num} não pertence a sequência de Fibonacci`);


// 3)

const { revenues } = require('../revenues.json') as { revenues: Revenue[] };

console.log(calculateLowestRevenue(revenues));

console.log(calculateDaysAboveAverage(revenues)); // output 7 dias para o mês 9


// 4)
const revenueMap = {
    'SP': 67836.43,
    'RJ': 36678.66,
    'MG': 29229.88,
    'ES': 27165.48,
    'OUTROS': 19849.53
};

// Cria um array de faturamento por estado, usando 'OUTROS' para estados não listados
const revenuePerState = [
    "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA",
    "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN",
    "RS", "RO", "RR", "SC", "SP", "SE", "TO"
].map(state => {
    return {
        state,
        revenue: revenueMap[state as keyof typeof revenueMap] || revenueMap['OUTROS'],
    }
});


const totalRevenueState = revenuePerState.reduce((total, { revenue }) => total + revenue, 0);

revenuePerState.forEach(({ state, revenue }) => {
    const percent = (revenue / totalRevenueState) * 100;
    console.log(`O estado ${state} tem ${percent.toFixed(2)}% de representação.`);
});


// 5)

const phrase = 'Gabriel comeu pastel';

function stringReversed(value: string): string {
    if (value.length === 0) return '';
    return stringReversed(value.substring(1)) + value[0];
}

console.log(stringReversed(phrase))