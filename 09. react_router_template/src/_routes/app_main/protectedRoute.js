import React , { useContext } from 'react';
import { Route , Redirect } from 'react-router-dom';

import AppContext from './main__contexts/appContext';

const ProtectedRoute = ( { component : Component , ...rest } ) => {
    let { isUser } = useContext( AppContext );

    return (
        <Route { ...rest } render={ props => {
            if ( isUser ) {
                return <Component { ...props } />
            } else {
                return <Redirect to={ { pathname: '/login' } } />
            }
        }} />
    )
}

// const ProtectedComponent = ( { hasAuth , authComponent : AuthOk , noAuthComponent : AuthNoOk } ) => {
//     return hasAuth ? (
//         <AuthNoOk />
//     ) : (
//         <AuthNoOk />
//     )
// }

export default ProtectedRoute;
