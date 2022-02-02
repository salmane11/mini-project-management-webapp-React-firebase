import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

function NewExpense(props) {


    const [clicked, setClicked] = useState(false);

    const startEditingHandler = () => {
        setClicked(true);
    };

    const stopEditingHandler = () => {
        setClicked(false);
    };
    if (props.users === 'users') {
        return (
            <div className="new-expense">
                {!clicked && <button onClick={startEditingHandler}>Add new User</button>}
                {clicked && <ExpenseForm input1='Name' input2='job' input3='Add User' onCancel={stopEditingHandler} />}
            </div>
        );
    }
    return (
        <div className="new-expense">
            {!clicked && <button onClick={startEditingHandler}>Add new Project</button>}
            {clicked && <ExpenseForm input1='Description' input2='Title' input3='Add Project'  onCancel={stopEditingHandler} />}
        </div>
    );
}
export default NewExpense;