import React,{useState} from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpenseList from './ExpenseList';
import ExpensesChart from './ExpensesChart';
function Expenses(props) {
    const [year, setYear] = useState('2021');
    const addFilterHandler = (selectedYear) => {
        setYear(selectedYear);
        console.log(selectedYear);
    };

    const filteredExpenses=props.items.filter(expense=> {
        return new Date(expense.date).getFullYear().toString()===year
        });

    return (
        <li>
            <Card className="expenses">
                <ExpensesFilter selected={year} onAddFilter={addFilterHandler} />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpenseList items={filteredExpenses}/>
            </Card>
        </li>
    );
}
export default Expenses;