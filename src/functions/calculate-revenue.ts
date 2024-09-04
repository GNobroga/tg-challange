
export type Revenue = {
    month: number;
    day: number;
    value: number;
}


export type RevenueOutput = {
    [key: string]: {
        minValue: number;
        maxValue: number;
    };
};

export function calculateLowestRevenue(revenues: Revenue[]): RevenueOutput[] {
    const output = new Map<string, { minValue: number, maxValue: number }>();

    const generateDateString = (month: number, day: number) => `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}`;

    for (const { month, day, value } of revenues) {
        const dateString = generateDateString(month, day);

        if (output.has(dateString)) {
            const currentValue = output.get(dateString) as { minValue: number, maxValue: number };
            if (currentValue.minValue > value) {
                currentValue.minValue = value;
            }
            if (currentValue.maxValue < value) {
                currentValue.maxValue = value;
            }
        } else {
            output.set(dateString, { minValue: value, maxValue: value });
        }

    }

    return Array.from(output.entries()).map(([key, value]) => ({ [key]: value }));
}

// Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.
export type RevenueDaysAboveCountOutput = {
    [month: string]: {
        average: number;
        countDays: number;
        values: number[];
    }
};

export function calculateDaysAboveAverage(revenues: Revenue[]): RevenueDaysAboveCountOutput[] {
    const mapPerMonth = new Map<number, number[]>();
    for (const { month, value } of revenues) {
        if (mapPerMonth.has(month)) {
            const values = mapPerMonth.get(month) as number[];
            values.push(value);
        } else {
            mapPerMonth.set(month, [ value ]);
        }
    }


    return Array.from(mapPerMonth.entries()).map(([ month, values ]) => {
        values = values.filter(value => value > 0); // Filtrando os dias teve faturamento.
        const average = values.reduce((x, y) => x + y) / values.length;
        const days = values.filter(value => value > average);
        return {
            [month]: {
                average,
                countDays: days.length,
                values
            }
        }
    });
}


