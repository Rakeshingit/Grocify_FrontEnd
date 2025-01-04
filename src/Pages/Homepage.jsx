import React from "react";
import {useEffect, useState} from 'react';
import Navbar from "../components/Navbar.jsx";
import P1_cont1 from "../components/P1_cont1.jsx";
import P1_cont2 from "../components/P1_cont2.jsx";
import Navbar_second from "../components/Navbar_second.jsx";
import Footer from "../components/P1_contFooter.jsx";
import ProfileOptions from "../components/ProfileOptions";
import SearchResults from "../components/SearchResults";

function Home(){
    const [isSearching, setIsSearching] = useState(false);

    return (
    <>
        <Navbar
            toggleSearch={() => setIsSearching(!isSearching)}
        />
        {isSearching ? <SearchResults/> : null}
    <Navbar_second />
        <P1_cont1/>
    <P1_cont2 />
    <Footer />
    </>
    )
}

export default Home;