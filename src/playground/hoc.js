import React from 'react';
import ReactDOM from 'react-dom';

const Info = () => {
    return (
        <div>
            <h1>Info</h1>
            <p>The info is: {props.info}</p>
        </div>
    );
}

ReactDOM.render(<Info info='There are the details'/>, document.getElementById('root'));