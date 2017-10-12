import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';

import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

const store = configureStore();

store.dispatch(addExpense({description: 'Water Bill'}))
store.dispatch(addExpense({description: 'Gas Bill'}))
store.dispatch(setTextFilter('water'))


const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses)


console.log(store.getState());

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'));
