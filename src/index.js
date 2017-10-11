import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppRouter from './routers/AppRouter';

import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';

//ADD_EXPENSE
const addExpense = ({description = '', note = '', amount = 0, createdAt = 0}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
})

//REMOVE_EXPENSE
const removeExpense = ({id}) => ({
    type: 'REMOVE_EXPENSE',
    id
})

//EDIT_EXPENSE
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

//SET TEXT FILTER
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    filter: {text}
})

//SORT BY DATE
const sortByDate = () => ({
    type: 'SORT_BY_DATE',
});

//SORT BY AMOUNT
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});

//START DATE
const setStartDate = (startDate) => ({
    type: 'START_DATE',
    startDate
})

const setEndDate = (endDate) => ({
    type: 'END_DATE',
    endDate
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
        case 'EDIT_EXPENSE':
            return state.map(expense => {
                if(expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense;
                }
            })
        default: 
            return state;
    }
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch(action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state, 
                ...action.filter
            };
        case 'SORT_BY_AMOUNT':
            return {
                ...state, 
                sortBy: 'amount'
            }
        case 'SORT_BY_DATE':
            return {
                ...state, 
                sortBy: 'date'
            }
        case 'START_DATE': 
            return {
                ...state,
                startDate: action.startDate
            }
        case 'END_DATE': 
            return {
                ...state,
                endDate: action.endDate
            }
        default:
            return state;
    }
}

//get visible expenses
const getVisibleExpenses = (expenses, {text,sortBy,startDate,endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= startDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        //figure out if expenses.description as the text variable string inside of it
        //includes

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b)=>{
        if(sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    });
}

//store creation

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses);
})

const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 100, createdAt: -21000}));
const expenseTwo = store.dispatch(addExpense({description: 'Brunei', amount: 400, createdAt: -1000}));

// console.log(expenseOne);
// store.dispatch(removeExpense({id: expenseOne.expense.id}));

// store.dispatch(editExpense(expenseTwo.expense.id, {amount: 500}));

// store.dispatch(setTextFilter('b'));
// store.dispatch(setTextFilter(''));

// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate(0));
// store.dispatch(setEndDate(1500));



// const demoState = {
//     expenses: [{
//         id: 'dasda',
//         description: 'January',
//         note: 'Final payment',
//         amount: 55000,
//         createdAt: 0
//     }],
//     filters: {
//         text: 'rent',
//         sortBy: 'amount',
//         startDate: undefined,
//         endDate: undefined
//     }
// };



ReactDOM.render(<Provider store={store}><AppRouter /></Provider>, document.getElementById('root'));

 