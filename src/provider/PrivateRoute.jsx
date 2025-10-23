import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate } from 'react-router';

const PrivateRoute = ({children}) => {

    const {user, loading}=use(AuthContext)
    // console.log(user);
    if(loading){
        return <div className="flex justify-center items-center py-20 min-h-[30vh]">
            <span className="loading loading-bars loading-xl text-primary"></span>
        </div>
    }

    if(user && user.email){
        return children
    }
   return <Navigate to='/login'> </Navigate>
   
};

export default PrivateRoute;