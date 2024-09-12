import React from "react";
import './shoppingCart.css';
import Summer_fresh_bg from '../assets/Summer_Fresh_bg.png'


function Carosals(){
    return (
        <div className="firstContainerBody">
                <img src={Summer_fresh_bg} alt="adv" />
                <div className="textSegment">
                <h2>Summer Fresh</h2>
                <p>Get the freshest at your door step</p>
                <button className="Btn HeroAd">Learn more</button>
                </div>
        </div>
    );
    
}

export default Carosals
