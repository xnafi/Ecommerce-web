import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/Logo.svg'

export default function Header() {
    return (
        <div className="navbar bg-[#1C2B35] text-[#FFFFFF] px-10 fixed z-40">
            <div className="flex-1">
                <img src={logo} alt='logo'></img>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0 font-bold">
                    <li><NavLink className={({ isActive }) => isActive ? 'hover:text-orange-300 text-blue-800 font-bold' : 'hover:text-orange-300 text-white font-bold'} to='home'>Home</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? 'hover:text-orange-300 text-blue-800 font-bold' : 'hover:text-orange-300 text-white font-bold'} to='about'>About</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? 'hover:text-orange-300 text-blue-800 font-bold' : 'hover:text-orange-300 text-white font-bold'} to='orders'>Orders</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? 'hover:text-orange-300 text-blue-800 font-bold' : 'hover:text-orange-300 text-white font-bold'} to='inventory'>Inventory</NavLink></li>
                </ul>
            </div>
        </div>
    )
}
