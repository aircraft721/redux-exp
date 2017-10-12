import React,{Component} from 'react';
import ExpenseList from './ExpenseList';

const ExpenseDashBoardPage = () => {
    return (
        <div>
            <p>This is from dashboard component</p>
            <ExpenseList />
        </div>
    );
}

export default ExpenseDashBoardPage;