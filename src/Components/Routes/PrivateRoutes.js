import React, { useContext } from 'react'
import { AuthContext } from '../../Hooks/AuthHook'
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    console.log(user);
    const location = useLocation()
    if (loading) {
        return <h1>loading...</h1>
    }

    if (!user) {

        return <Navigate to='/login' state={{ from: location }} replace />

    }
    return children
}

export default PrivateRoutes