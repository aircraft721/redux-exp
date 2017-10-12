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
                {props.isAdmin && <p>This is private info. Please don't share!</p>}
                <WrappedComponent {...props}/>
            </div>
        );
        
    }
}

const requireAuthentication = (WrappedComponent) => {
    return (props) => {
        return (
            <div>
                {props.isAuthenticated && <strong>dasdasdsa</strong>}
                <WrappedComponent {...props} />
            </div>
        )
    }
}

const AdminInfo = withAdminWarning(Info);

const AuthInfo = requireAuthentication(Info);



// ReactDOM.render(<AdminInfo isAdmin={true} info="There are the details" />, document.getElementById('root'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="There are the details" />, document.getElementById('root'));