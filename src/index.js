// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import AppRouter from './routers/AppRouter';
// import configureStore from './store/configureStore';

// import {Provider} from 'react-redux';
// import {createStore, combineReducers} from 'redux';
// import {addExpense} from './actions/expenses';
// import {setTextFilter} from './actions/filters';
// import getVisibleExpenses from './selectors/expenses';

// const store = configureStore();

// store.dispatch(addExpense({description: 'Water Bill'}))
// store.dispatch(addExpense({description: 'Gas Bill'}))
// store.dispatch(setTextFilter('water'))


// const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
// console.log(visibleExpenses)


// console.log(store.getState());









// ReactDOM.render(<AppRouter />, document.getElementById('root'));



import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => {
    return (
        <div>
            <h1>Info</h1>
            <p>The info is: {props.info}</p>
        </div>
    );
}

const withAdminWarning = (WrappedComponent) => {
    return (props) => {
        return (
            <div>
                <p>This is private info. Please don't share!</p>
                <WrappedComponent {...props}/>
            </div>
        );
        
    }
}

const AdminInfo = withAdminWarning(Info);



ReactDOM.render(<AdminInfo info="There are the details" />, document.getElementById('root'));