import React from 'react';
import '../Expenses/ExpenseItem.css';
import ExpenseDate from '../Expenses/ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
    const { amount, date, title } = props;

    // const [Title, setTitle] = useState(props.title);

    // let Title = props.title;
    // const btnCLick = () => {
    //     console.log('clicked');
    //     setTitle('Hello Title change')
    //     console.log(Title)
    // }
    return (
        <li>
            <Card className="expense-item">
                < ExpenseDate date={date} />
                <div className="expense-item__description">
                    <h2> {title} </h2>
                    <div className="expense-item__price">INR {amount}</div>
                </div>
                {/* <button onClick={btnCLick}>
                Change Title
            </button> */}
            </Card>
        </li>

    )
}

export default ExpenseItem;
