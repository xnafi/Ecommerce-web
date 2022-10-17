import React, { useContext } from 'react'
import { AuthContext } from '../../Hooks/AuthHook'
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
    const user = useContext(AuthContext)
    const location = useLocation()

    if (user && user.uid) {
        return children

    }
    return <Navigate to='/login' state={{ from: location }} replace />
}

export default PrivateRoutes