import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../SignUp/Providers/AuthProvider';

const Header = () => {
    const { user } = useContext(AuthContext)
    return (
        <nav className='header'>
            {/* <img src={logo} alt="" /> */}
            <div>

                <div className="navbar bg-neutral text-neutral-content">
                    <a className="btn btn-ghost normal-case text-xl  ">
                        <img src={logo} alt="" />
                    </a>
                    <div className='gap-6 ml-auto pr-6'>
                        <Link to="/" >Shop</Link>
                        <Link to="/orders">Orders</Link>
                        <Link to="/inventory">Inventory</Link>
                        <Link to="/login">Login</Link>
                        <Link to="/signup">SignUp</Link>
                        {
                            user && <span>Welcome{user.email}</span>
                        }
                    </div>

                </div>
            </div>
        </nav>
    );
};

export default Header;