import React from "react";
import {useEffect, useState} from 'react';
import GROCIFY from '../assets/GROCIFY-logo-tweek.png';
import '../Admin Page StylesSheets/shoppingCart.css';
import {Link} from "react-router-dom";
import {IoSearchSharp} from "react-icons/io5";
import {FaCartShopping} from "react-icons/fa6";
import {CgProfile} from "react-icons/cg";
import {IoIosArrowDown} from "react-icons/io";
import {IoIosArrowUp} from "react-icons/io";
import ProfileOptions from "./ProfileOptions";
import LocationButton from "./LocationButton";
import {FaArrowRight} from "react-icons/fa";

function Navbar({toggleSearch}) {

    const [profileToggle, setProfileToggle] = useState(0);
    const [cartCount, setCartCount] = useState(0);

    // const getCookie = (name) => {
    //     const value = `; ${document.cookie}`;
    //     const parts = value.split(`; ${name}=`);
    //     if (parts.length === 2) return parts.pop().split(';').shift();
    //     return null; // Return null if cookie not found
    // };

    function controlProfilePopUp() {
        if (profileToggle === 0)
            setProfileToggle(1);
        else setProfileToggle(0);
    }

    function hadnleSearchFocus() {
        toggleSearch();
    }

    return <div className={"navbar"}>
        <img src={GROCIFY} alt="Logo" className="logo"/>
        <div className="search-container">
            <input type="text" name="" id="search-bar" onFocus={toggleSearch} onBlur={toggleSearch}
                   placeholder="You can search here..."/>
            <button type="submit">
                <IoSearchSharp/></button>
        </div>

        <LocationButton/>
        <div className={"cart-section nav-align"}>
            <div className={"cart-icon"}>
                <FaCartShopping/>
            </div>
            <div className={"cart-count"}>{cartCount}</div>
        </div>

        {
            sessionStorage.getItem('auth') ?
                <div onClick={controlProfilePopUp} className={"profile-btn nav-align"}>
                    <h5 className={"profile-icon"}><CgProfile/></h5>
                    <p>Hello, {sessionStorage.getItem('username')}</p>
                    <h5 className={"arrow"}>{profileToggle === 1 ?
                        <IoIosArrowUp/> : <IoIosArrowDown/>}
                    </h5>
                    {
                        profileToggle === 1 ?
                            <ProfileOptions/> : null
                    }
                </div> :
                <Link to="./LogIn">
                    <li className={"Log-in-btn-home nav-align"}>Log in {<span
                        id={"logIn-arrow"}><FaArrowRight/></span>}</li>
                </Link>
        }
    </div>
}


export default Navbar;