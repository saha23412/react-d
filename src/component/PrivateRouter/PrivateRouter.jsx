import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { Navigate, useLocation } from 'react-router-dom'
const PrivateRouter = ({children}) => {
    const { user } = useContext(AuthContext)
    const  location = useLocation()
    if(!user){
        return <Navigate to='/login' />
    }
    return children
}

export default PrivateRouter;
