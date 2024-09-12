import React from "react";
import {useEffect, useState} from 'react';
import GROCIFY from '../assets/GROCIFY.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './shoppingCart.css';
import {Link} from "react-router-dom";

function Navbar(){
    const [isMouse, setisMouse] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
            setisMouse(window.scrollY);
            console.log(isMouse);
           // Current scroll position
          // Add your scroll logic here
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);


    return <div className={isMouse === 0 ? "navbar" : "navbar_on121"}>
        <img src={GROCIFY} alt="Logo image" className="logo" />
        <div className="search-container">
            <input type="search" name="" id="" placeholder="You can search here..."/>
            <button type="submit">
            <FontAwesomeIcon icon={faMagnifyingGlass} />            </button>
        </div>
        <div className="menuList">
            <li><a href="./">Home</a></li>
            <li><a href="./checkout">Buy</a></li>
            <li><a href="./feddback.html">Feedback</a></li>
            <li data-bs-toggle="popover" data-bs-title="Popover title"><a href="./feddback.html">About us</a></li>
        </div>
        <Link to="./LogIn"><li className={"Log-in-btn"}>Log in</li></Link>
    </div>
}


export default Navbar;