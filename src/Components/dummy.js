import React from 'react';
import './ExpenseItem.css'

const ExpenseItem = (props) => {
    const {title, amount, date} = props;
    const month = date.toLocaleString('en-US', {month:'long'});
    const day = date.toLocaleString('en-US', {day:'2-digit'});
    const year = date.getFullYear();
    return (
        
        <div className="expense-item">
            <div>
               <div>{month}</div>
               <div>{year}</div>
               <div>{day}</div>
            </div>
            <div className="expense-item__description">
               <h2> {title}</h2>
               <div className="expense-item__price">INR {amount}</div>
            </div>
        </div>
    )
}

export default ExpenseItem;
