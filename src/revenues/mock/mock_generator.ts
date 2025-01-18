import {faker} from '@faker-js/faker';

export const generateDailyRevenue = (): { day: number; value: number }[] => {
    return Array.from({ length: 30 }, (_, i) => ({
        day: i + 1,
        value: faker.datatype.boolean() ? parseFloat(faker.finance.amount()) : 0
    }));
};

export const generateMonthlyRevenueByState = (): Record<string, number> => {
    const states = ['SP', 'RJ', 'MG', 'ES', 'Others'];
    return states.reduce((acc, state) => {
        // @ts-ignore
        acc[state] = parseFloat(faker.finance.amount(10000, 70000));
        return acc;
    }, {} as Record<string, number>);
};
