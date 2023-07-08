import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../plugin/font-awesome/css/all.css";
import "../plugin/css/Navbar.css";

const Navbar = () => {
    const [activeNavItem, setActiveNavItem] = useState('/');

    const handleNavItemClick = (item) => {
      setActiveNavItem(item);
    
    };

    return(
        <div className="bg-white fixed w-full top-0">
            <div className='text-base flex px-14 py-2 container mx-auto '>
                <div className='w-[20%]'>
                    <img src={ require('../plugin/img/Logo.png') } alt="img-logo" className='' />
                </div>
                <ul className='flex top-0 inset-x-0 w-[50%] mx-auto absolute items-center  justify-center'>
                <Link to="/" className="nav-link">
                    <li
                        className={`nav-item ${activeNavItem === '/' ? 'active' : ''}`}
                        onClick={() => handleNavItemClick('/')}
                        >
                        Home
                    </li>
                </Link>
                <Link to="/latihan" className="nav-link">
                    <li
                        className={`nav-item ${activeNavItem === 'latihan' ? 'active' : ''}`}
                        onClick={() => handleNavItemClick('latihan')}
                        >
                        Latihan
                    </li>
                </Link>
                <Link to="/profile" className="nav-link">
                    <li
                        className={`nav-item ${activeNavItem === 'profile' ? 'active' : ''}`}
                        onClick={() => handleNavItemClick('profile')}
                        >
                        Profile
                    </li>
                </Link>
                </ul>
                <div className="ms-auto mt-3">
                    <i class="fa-solid fa-bell text-ungu"></i>
                </div>
            </div>
        </div>
        
    )
}
export default Navbar