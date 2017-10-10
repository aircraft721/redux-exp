import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <h1>Expenses</h1>
            <NavLink exact activeClassName='is-active' to='/'>Go Home </NavLink>
            <NavLink activeClassName='is-active' to='/create'>Create </NavLink>
            <NavLink activeClassName='is-active' to='/help'>Help</NavLink>
        </header>
    );
}

export default Header;