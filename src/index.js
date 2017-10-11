import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppRouter from './routers/AppRouter';

import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';

//ADD_EXPENSE
const addExpense = ({description = '', note = '', amount = 0, createdAt = 0} = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
})

const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})

//expenses reducers

const expensesReducerDefaultState = [];
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type){
        case 'ADD_EXPENSE':
            return [...state, action.expense];
        case 'REMOVE_EXPENSE':
            return state.filter(({id}) => id !== action.id );
        default: 
            return state;
    }
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

//store creation

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    console.log(store.getState());
})

const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 100}));
const expenseTwo = store.dispatch(addExpense({description: 'Gao', amount: 400}));

console.log(expenseOne);
store.dispatch(removeExpense({id: expenseOne.expense.id}));



const demoState = {
    expenses: [{
        id: 'dasda',
        description: 'January',
        note: 'Final payment',
        amount: 55000,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
};



ReactDOM.render(<Provider store={store}><AppRouter /></Provider>, document.getElementById('root'));

 