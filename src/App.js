import React, { useCallback, useEffect, useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import './App.css';

function App() {
  //expenses means items
  const [expenses, setExpenses] = useState([]);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchDataHandler=useCallback(async (type,lien) =>{
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(lien);
      if (!response.ok) {
        throw new Error('Error: Something went wrong');
      }
      const data = await response.json();
      const items = [];
      for (const key in data) {
        items.push({
          id: key,
          title: data[key].title,
          amount: data[key].amount,
          date: data[key].date
        });
      }
      if(type==='USERS'){
        setUsers(items);
      }else{
        setExpenses(items);
      }
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  },[]);

  useEffect(
    ()=>{
      fetchDataHandler('USERS','https://miniprojets-89bf3-default-rtdb.firebaseio.com/users.json');
      fetchDataHandler('projects','https://miniprojets-89bf3-default-rtdb.firebaseio.com/projets.json');
    },[fetchDataHandler]);

  return (
    <div>
      <NewExpense  />
      {!isLoading && <Expenses items={expenses} />}
      {isLoading &&!error && <p>LOADING ...</p>}
      {!isLoading && error &&<p>{error}</p>}
      <NewExpense users='users' />
      {!isLoading && <Expenses items={users} />}
      {isLoading &&!error && <p>LOADING ...</p>}
      {!isLoading && error &&<p>{error}</p>}
    </div>
  );
}

export default App;
