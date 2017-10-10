import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

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
        <div>404! - <Link to='/'>Go Home</Link></div>
    );
}

const Header = () => {
    return (
        <header>
            <h1>Expenses</h1>
            <NavLink exact activeClassName='is-active' to='/'>Go Home </NavLink>
            <NavLink activeClassName='is-active' to='/create'>Create </NavLink>
            <NavLink activeClassName='is-active' to='/edit'>Edit </NavLink>
            <NavLink activeClassName='is-active' to='/help'>Help</NavLink>
        </header>
    );
    
}


const routes = (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route exact path='/' component={Dummy1}/>
                <Route path='/create' component={Dummy2}/>
                <Route path='/edit' component={EditExpensePage}/>
                <Route path='/help' component={Help}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>  
        
    </BrowserRouter>
);


ReactDOM.render(routes, document.getElementById('root'));

