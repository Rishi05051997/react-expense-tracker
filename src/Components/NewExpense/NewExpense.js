import React, {useState} from 'react'
import "./NewExpense.css"
import ExpenseForm from './ExpenseForm'

export default function NewExpense(props) {
    const [isEditing, setIsEditing] = useState(false)
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        console.log('Newxpense.js')
        console.log(expenseData);
        //// here we r sending data to app.js 
        props.onAddExpense(expenseData);
        setIsEditing(false);
    }

    const startEditingHandler = () => {
        setIsEditing(true)
    }

    const stopEditingHandler = () => {
        setIsEditing(false)
    }
    return (
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing &&< ExpenseForm  onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/>}
        </div>
    )
}
