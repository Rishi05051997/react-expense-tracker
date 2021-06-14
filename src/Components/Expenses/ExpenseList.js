import React from 'react'
import "./ExpenseList.css"
import ExpenseItem from './ExpenseItem';

export default function ExpenseList(props) {
    if(props.items.length === 0){
        return <h2 className="expenses-list__fallback">Found no expenses</h2>
    }
    return <ul className="expenses-list">
                {
                    props.items.map((expense, index) =>  (
                        
                            < ExpenseItem 
                                key={index}
                                title={expense.title} 
                                amount={expense.amount} 
                                date={expense.date} 
                            />
                    ))
                        
                }
           </ul>
    
}
