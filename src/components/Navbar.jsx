import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../plugin/font-awesome/css/all.css";
import "../plugin/css/Navbar.css";

const Navbar = () => {
    const [activeNavItem, setActiveNavItem] = useState('/');
    const [isOpen, setIsOpen] = useState(false);
    const [show,SetShow] = useState(false);

    const Dropdown = () => {
        SetShow(!show);
    };
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };

    const handleNavItemClick = (item) => {
      setActiveNavItem(item);
    
    };

    return(
        <div className="bg-white fixed w-full top-0 z-10">
             {/* nav mobile */}
             <div className="dropdownn bg-white flex w-full items-center  px-5 lg:hidden xl:hidden uppercase fixed top-0 left-0 z-10">
                <button className="toggle-buttonn fa-xl " onClick={toggleDropdown}>
                    <i class="fa-solid fa-bars"></i>
                </button>
                <div className={`dropdown-menuu ${isOpen ? 'open ' : ''}`}>
                {/* <div className={`dropdown-menuu ${isOpen ? 'open px-5 (CSS/CLASS UNUTK BUKA)' : 'px-5 (CSS/CLASS UNUTK TUTUP'}`}> */}
                    <ul className="text-abu-abu-100 px-5 max-sm:text-xs sm:text-xs font-semibold">
                    <Link to="/" className="nav-link2">
                    <li
                        className={`nav-item2 ${activeNavItem === '/' ? 'active2' : ''}`}
                        onClick={() => handleNavItemClick('/')}
                        >
                        Home
                    </li>
                </Link>
                <Link to="/latihan" className="nav-link2">
                    <li
                        className={`nav-item2 ${activeNavItem === 'latihan' ? 'active2' : ''}`}
                        onClick={() => handleNavItemClick('latihan')}
                        >
                        Latihan
                    </li>
                </Link>
                <Link to="/profile" className="nav-link2">
                    <li
                        className={`nav-item2 ${activeNavItem === 'profile' ? 'active2' : ''}`}
                        onClick={() => handleNavItemClick('profile')}
                        >
                        Profile
                    </li>
                </Link>
                    </ul>
                </div>
                <img src={require("../plugin/img/Logo.png")} alt="logo" className="h-[3rem]  mx-auto"/>
            </div>

            <div className='text-base flex px-14 py-2 container mx-auto  '>
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