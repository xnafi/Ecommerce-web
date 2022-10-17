import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/Firebase.config';


export const AuthContext = createContext()

const auth = getAuth(app);



const AuthHook = ({ children }) => {
    const [user, setUser] = useState(null)

    // CreateAccount
    const createNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // login user
    const logInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // logOut
   
    // hold user state data
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })
        return () => unsubscribe()
    }, [])

    const values = { user, createNewUser, logInUser}
    return (
        <AuthContext.Provider value={values} >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthHook