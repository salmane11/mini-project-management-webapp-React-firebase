import React, { useState } from 'react';

import './ExpenseForm.css';
function ExpenseForm(props) {

    const [enterdTitle, setEnterdTitle] = useState('');
    const [enterdAmount, setEnterdAmount] = useState('');
    const [enterdDate, setEnterdDate] = useState('');

    const titleChangeHandler = (event) => {
        setEnterdTitle(event.target.value);
    }

    const amountChangeHandler = event => {
        setEnterdAmount(event.target.value);
    };

    const dateChangeHandler = event => {
        setEnterdDate(event.target.value);
    };
    const submitHandler=(event)=>{
        event.preventDefault();
        const expenseData={
            title: enterdTitle,
            amount: enterdAmount,
            date: new Date(enterdDate)
        };
        if(props.input1==='Description'){
            props.onCancel();
            fetchDataHandler("https://miniprojets-89bf3-default-rtdb.firebaseio.com/projets.json",expenseData);
        }else{
            props.onCancel();
            fetchDataHandler("https://miniprojets-89bf3-default-rtdb.firebaseio.com/users.json",expenseData);
        }
        
        setEnterdDate('');
        setEnterdTitle('');
        setEnterdAmount('');
    };
    
    async function fetchDataHandler(lien,item){
        const response=await fetch(lien,{
            method:'POST',
            body :JSON.stringify(item),
            'Content-Type':'Application/json'
        });
        const data=response.json();
        console.log(data);
    }

    return (
        <form onSubmit={submitHandler}> 
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>{props.input1}</label>
                    <input type="text" value={enterdTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>{props.input2}</label>
                    <input type="text" value={enterdAmount} onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min='2019-06-02' value={enterdDate} onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit"> {props.input3} </button>
                <button type="button" onClick={props.onCancel}>cancel</button>
            </div>
        </form>
    );
}
export default ExpenseForm;