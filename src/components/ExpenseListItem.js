import React from 'react';
import {connect} from 'react-redux';
import {removeExpense} from '../actions/expenses';


const ExpenseListItem = ({dispatch, id, description, amount, createdAt}) => {
    return (
        <div>
            <strong>{description}</strong>
                {` -- `}
            <em>{amount}</em>
            <h6>{createdAt}</h6>
            <button onClick={()=>{
                dispatch(removeExpense({ id }));
            }}>Remove</button>
        </div>
    );
}

export default connect()(ExpenseListItem);