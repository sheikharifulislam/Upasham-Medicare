import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../customHook/useAuth';

const PrivateRoute = ({children,...rest}) => {
    const {user, isLoading} = useAuth();

    const spinnerStyle = {
        display: 'flex',       
        alignItems: 'center',
        margin: '0 auto',
        marginTop: '200px',
        marginBottom: '200px',
    } 

    if(isLoading) {
        return (
            <div className="spinner-border text-dange" style={spinnerStyle} role="status">
               
            </div>
        )
    }
    return (      
     
            <Route 
                {...rest}
                render={({location}) => user.email ? children : <Redirect
                to={{
                    pathname: '/register',
                    state: {from: location}
                }}
                ></Redirect>}
            >
    
            </Route>
        );    
};

export default PrivateRoute;