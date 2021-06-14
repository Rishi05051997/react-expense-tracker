import './App.css';
// import ExpenseItem from './Components/ExpenseItem';
import Expenses from './Components/Expenses/Expenses';
import React, {useState} from "react";
import NewExpense from './Components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Home Constrution',
    amount: 100000,
    date: new Date(2021, 5, 10)
  },
  {
    id: 'e2',
    title: 'Health',
    amount: 50000,
    date: new Date(2021, 4, 10)
  },
  {
    id: 'e1',
    title: 'Education',
    amount: 60000,
    date: new Date(2021, 5, 10)
  },
  {
    id: 'e1',
    title: 'Other',
    amount: 100000,
    date: new Date(2021, 1, 10)
  },
];


const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  //// alternative way for JSX
  // return React.createElement(
  //   'div', 
  //   {}, 
  //   React.createElement('h2', {}, "Lets gets started!"),
  //   React.createElement(Expenses, {items:expenses})
  // );
  const addExpenseHandler = expense => {
    console.log('In App.js')
    // console.log(expense);
    // setExpenses([expense, ...expenses])
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className="App">
      {/* <h2>Lets get started</h2>
      <p>This is also visible</p> */}
      < NewExpense  onAddExpense = {addExpenseHandler} />
      < Expenses items={expenses}/>

    </div>
  );
}

export default App;
