import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../Hooks/AuthHook';
import { getAuth, signOut } from "firebase/auth";
import logo from '../../images/Logo.svg'
import app from '../../Firebase/Firebase.config';


export default function Header() {
    const auth = getAuth(app);

    const { user } = useContext(AuthContext)
    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }



    return (
        <div className="navbar bg-[#1C2B35] text-[#FFFFFF] px-10 fixed z-40">
            <div className="flex-1">
                <img src={logo} alt='logo'></img>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0 font-bold">
                    <li><NavLink className={({ isActive }) => isActive ? 'hover:text-orange-300 text-gray-500 font-bold' : 'hover:text-orange-300 text-white font-bold'} to='/home'>Home</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? 'hover:text-orange-300 text-gray-500 font-bold' : 'hover:text-orange-300 text-white font-bold'} to='/about'>About</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? 'hover:text-orange-300 text-gray-500 font-bold' : 'hover:text-orange-300 text-white font-bold'} to='/orders'>Orders</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? 'hover:text-orange-300 text-gray-500 font-bold' : 'hover:text-orange-300 text-white font-bold'} to='/inventory'>Inventory</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? 'hover:text-orange-300 text-gray-500 font-bold' : 'hover:text-orange-300 text-white font-bold'} to='/shipping'>Shipping</NavLink></li>
                    {

                        user?.uid ? <li><NavLink className={({ isActive }) => isActive ? 'hover:text-orange-300 text-gray-500 font-bold' : 'hover:text-orange-300 text-white font-bold'} to='/home' onClick={handleSignOut}>Log Out</NavLink></li> : <>
                            <li><NavLink className={({ isActive }) => isActive ? 'hover:text-orange-300 text-gray-500 font-bold' : 'hover:text-orange-300 text-white font-bold'} to='/login'>Log In</NavLink></li>
                            <li><NavLink className={({ isActive }) => isActive ? 'hover:text-orange-300 text-gray-500 font-bold' : 'hover:text-orange-300 text-white font-bold'} to='/signup'>Sign Up</NavLink></li>
                        </>
                    }
                    <li className='text-white font-bold'> <a>{user?.email}</a> </li>
                </ul>
            </div>
        </div>
    )
}
