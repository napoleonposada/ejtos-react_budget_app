import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget,remaining, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetValidation = (event) => {
        if(event.target.value < remaining){
            alert("The budget value cannot set under " + remaining);
            event.target.value = budget;
        }
        else if (event.target.value > 20000){
            alert("The budget value cannot exceed el valor de " + currency + " 20,000");
            event.target.value = budget;
        }
        else
            setNewBudget(event.target.value);
    }
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    }
    return (
        <div className='alert alert-secondary'>
        <span>Budget: {currency}</span>
        <input type="number" step="10" value={newBudget} onChange={handleBudgetChange} onBlur={handleBudgetValidation}></input>
        </div>
    );
};
export default Budget;

