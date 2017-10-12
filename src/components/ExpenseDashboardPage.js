import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

const ExpenseDashBoardPage = () => {
    return (
        <div>
            <p>This is from dashboard component</p>
            <ExpenseListFilters />
            <ExpenseList />
        </div>
    );
}

export default ExpenseDashBoardPage;