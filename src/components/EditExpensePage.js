import React,{Component} from 'react';

const EditExpensePage = (props) => {
    console.log(props);
    return (
        
        <div>EDIT THE EXPENSE WITH THE ID OF {props.match.params.id}</div>
    );
}

export default EditExpensePage;