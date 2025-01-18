import { generateDailyRevenue } from '../mock/mock_generator';

const dailyRevenue = generateDailyRevenue();

function calculateDailyStatistics(revenue: { day: number; value: number }[]) {
    const daysWithRevenue = revenue.filter(d => d.value > 0);
    const lowestValue = Math.min(...daysWithRevenue.map(d => d.value));
    const highestValue = Math.max(...daysWithRevenue.map(d => d.value));
    const totalRevenue = daysWithRevenue.reduce((sum, d) => sum + d.value, 0);
    const averageRevenue = totalRevenue / daysWithRevenue.length;
    const daysAboveAverage = daysWithRevenue.filter(d => d.value > averageRevenue).length;

    return { lowestValue, highestValue, averageRevenue, daysAboveAverage };
}

const stats = calculateDailyStatistics(dailyRevenue);

console.log('Faturamento diário:');
console.log(`Menor valor: R$${stats.lowestValue.toFixed(2)}`);
console.log(`Maior valor: R$${stats.highestValue.toFixed(2)}`);
console.log(`Média mensal: R$${stats.averageRevenue.toFixed(2)}`);
console.log(`Dias acima da média: ${stats.daysAboveAverage}`);
