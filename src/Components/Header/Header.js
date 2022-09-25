import React from 'react';
import logo from '../../images/Logo.svg'

export default function Header() {
    return (
        <div className="navbar bg-[#1C2B35] text-[#FFFFFF] px-10 fixed z-40">
            <div className="flex-1">
                <img src={logo} alt='logo'></img>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0 font-bold">
                    <li><a className='hover:text-orange-300'>Home</a></li>
                    <li><a className='hover:text-orange-300'>About</a></li>
                    <li><a className='hover:text-orange-300'>Order</a></li>
                    <li><a className='hover:text-orange-300'>Order Review</a></li>
                </ul>
            </div>
        </div>
    )
}
