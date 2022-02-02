import Chart from '../Charts/Chart';
function ExpensesChart(props) {
    const chartDataPOints = [
        { label: 'jan', value: 0 },
        { label: 'feb', value: 0 },
        { label: 'mar', value: 0 },
        { label: 'apr', value: 0 },
        { label: 'mai', value: 0 },
        { label: 'jun', value: 0 },
        { label: 'jul', value: 0 },
        { label: 'aug', value: 0 },
        { label: 'sep', value: 0 },
        { label: 'oct', value: 0 },
        { label: 'nov', value: 0 },
        { label: 'dec', value: 0 },
    ];
    for (const expense of props.expenses) {
        const expenseMonth = (new Date(expense.date)).getMonth();
        chartDataPOints[expenseMonth].value += 1;
    }
    return (<Chart dataPoints={chartDataPOints} />);
}
export default ExpensesChart;