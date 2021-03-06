import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
const Navbar = () => {

    const [user, loading, error] = useAuthState(auth);
    const menuItems =
        <>
            <li><Link  to="/">Home</Link></li>
            <li><Link  to="/appointment">Appointment</Link></li>
            {user && <li><Link  to="/dashboard">Dashboard</Link></li>}
            <li><Link  to="/contact">Contact</Link></li>
            <li> <Link  to="/about">About</Link></li>
            {user ? <button className="btn" onClick={() => signOut(auth) } >Log Out</button> : <li><Link  to="/login">Login</Link></li>}
        </>

    return (
        <div className="bg-base-100">
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                        </ul>
                    </div>
                  <Link to="/"> <li className="btn btn-ghost normal-case text-2xl font-bold">medicare.</li></Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Navbar;