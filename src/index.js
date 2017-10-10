import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

const Dummy1 = () => {
    return(
        <div>Dummy1</div>
    );
}

const Dummy2 = () => {
    return(
        <div>Dummy2</div>
    );
}

const EditExpensePage = () => {
    return(
        <div>EditExpensePage</div>
    );
}

const Help = () => {
    return(
        <div>Help!</div>
    );
}

const NotFoundPage = () => {
    return(
        <div>404!</div>
    );
}


const routes = (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Dummy1}/>
            <Route path='/create' component={Dummy2}/>
            <Route path='/edit' component={EditExpensePage}/>
            <Route path='/help' component={Help}/>
            <Route component={NotFoundPage}/>
        </Switch>
    </BrowserRouter>
);


ReactDOM.render(routes, document.getElementById('root'));

