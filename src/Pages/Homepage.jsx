import React from "react";
import {useEffect} from 'react';
import Navbar from "../components/Navbar.jsx";
import P1_cont1 from "../components/P1_cont1.jsx";
import P1_cont2 from "../components/P1_cont2.jsx";
import Navbar_second from "../components/Navbar_second.jsx";
import Footer from "../components/P1_contFooter.jsx";

function Home(){
        

    return (
    <>
    <Navbar />
    <Navbar_second />
    <P1_cont1 />
    <P1_cont2 />
    <Footer />
    </>
    )
}

export default Home;