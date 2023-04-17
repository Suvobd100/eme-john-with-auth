import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>

                <div className="navbar bg-neutral text-neutral-content">
                    {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
                    <Link to="/">Shop</Link>
                    <Link to="/orders">Orders</Link>
                    <Link to="/inventory">Inventory</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/signup">SignUp</Link>
                </div>
            </div>
        </nav>
    );
};

export default Header;