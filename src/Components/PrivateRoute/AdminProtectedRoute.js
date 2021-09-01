import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const AdminProtectedRoute = ({ children, ...rest }) => {
    return (
        <Route
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...rest}
            render={({ location }) =>
                localStorage.getItem('role')==='admin' ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
};

export default AdminProtectedRoute;
