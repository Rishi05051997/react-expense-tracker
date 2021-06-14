import React, {useState} from 'react'
import '../Expenses/Expenses.css'
import Card from './../UI/Card';
import ExpensesChart from './ExpensesChart';
import ExpensesFilter from './ExpenseFilter';
import ExpenseList from './ExpenseList';

export default function Expenses(props) {
    let [filteredYear, setFilteredYear] = useState('2020')

    // console.log(props);
    console.log(props.items[0].date.getFullYear());

    const filterChangehandler = (selectedYear) => {
        console.log("Expenses.js");
        console.log(selectedYear)
        setFilteredYear(selectedYear);
        filteredYear = selectedYear;
    }

    const filteredExpenses = props.items.filter(
        expense => {
            return expense.date.getFullYear().toString() === filteredYear;
        }
    )

    
   
    return (
        <div>
            
        <Card className="expenses">
            < ExpensesFilter selected = {filteredYear} onChangeFilter = {filterChangehandler}/>
            {/* { filteredExpenses.length === 0  && <p style={{color: '#ffff'}}>No Expenses found</p> }
            {
                filteredExpenses.length > 0  &&
                    filteredExpenses.map((expense, index) =>  {
                        return(
                            < ExpenseItem 
                                key={index}
                                title={expense.title} 
                                amount={expense.amount} 
                                date={expense.date} 
                            />
                        )
                })
             
            } */}
            < ExpensesChart expenses={filteredExpenses} />
            < ExpenseList  items={filteredExpenses} />
            
            {/* < ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date} />
            < ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date} />
            < ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date} />
            < ExpenseItem title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date} /> */}
        </Card>
        </div>
    )
}
