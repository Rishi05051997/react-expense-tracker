import React from 'react'
import Chart from "../Chart/Chart"

export default function ExpensesChart(props) {

    const chartDataPoints = [
        {
            label:'Jan', value:0
        },
        {
            label:'Feb', value:0
        },
        {
            label:'Mar', value:0
        },
        {
            label:'April', value:0
        },
        {
            label:'May', value:0
        },
        {
            label:'Jun', value:0
        },
        {
            label:'July', value:0
        },
        {
            label:'Aug', value:0
        },
        {
            label:'Sept', value:0
        },
        {
            label:'Oct', value:0
        },
        {
            label:'Nov', value:0
        },
        {
            label:'Dec', value:10
        },
    ]

    for (const expense of props.expenses) {
        const expenseMonth = expense.date.getMonth(); ////  starting at 0 => Jan => 0
        chartDataPoints[expenseMonth].value += expense.amount
    }
    return (
        < Chart dataPoints = { chartDataPoints } />
    )
}