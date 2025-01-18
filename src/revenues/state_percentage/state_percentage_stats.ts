import { generateMonthlyRevenueByState } from '../mock/mock_generator';

const monthlyRevenueByState = generateMonthlyRevenueByState();

function calculateStatePercentages(revenueByState: Record<string, number>) {
    const totalRevenue = Object.values(revenueByState).reduce((sum, value) => sum + value, 0);

    return Object.entries(revenueByState).map(([state, value]) => ({
        state,
        percentage: (value / totalRevenue) * 100
    }));
}
const statePercentages = calculateStatePercentages(monthlyRevenueByState);

console.log('Percentual de representação por estado:');
statePercentages.forEach(({ state, percentage }) => {
    console.log(`${state}: ${percentage.toFixed(2)}%`);
});
