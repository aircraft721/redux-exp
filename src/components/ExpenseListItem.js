import React from 'react';
const ExpenseListItem = ({description, amount, createdAt}) => {
    return (
        <div>
            <strong>{description}</strong>
                {` -- `}
            <em>{amount}</em>
            <h6>{createdAt}</h6>
        </div>
    );
}

export default ExpenseListItem;