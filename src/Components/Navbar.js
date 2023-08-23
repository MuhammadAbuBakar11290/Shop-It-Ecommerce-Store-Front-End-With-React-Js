import './navbar.css';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from './images/logo.png';
import { useCart } from './CartContext';

const Navbar = () => {
    const { cart } = useCart();
    
        return(
        <div className='Navbar-Container'>
            
            <div className='logo-container'>
                <Link to="/" className='logo-p'>
                    <img src={logo} alt="Logo" />
                    <div className='heading'>
                    <Link to="/">
                    <h3> SHOP-IT</h3>            
                    </Link>
                    </div>
                            </Link>
                    </div>
            <div className='links-container'>
                <ul className='nav-opt'>
                    <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/services">Collections</Link></li>
                        <li><Link to="/pages">Pages</Link></li>
                        <li className='sign-in-button'><Link to='/signin'>Sign In</Link></li>           
                        <li><Link to="/Contact">Contact Us</Link></li>
                        <li className='View-Cart-button'><Link to="/cart">View Cart ({cart.length})</Link></li>
                       
                       
                </ul>
            </div>
            
        </div>

       
     );
};

export default Navbar;
