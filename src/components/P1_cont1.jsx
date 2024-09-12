import React from "react";
import './shoppingCart.css';
import CateComponent from "./CompoForCategory";
import Carosals from "./Backgrounds";
import meat from '../assets/categories/meat.png';
import Vegetables from '../assets/categories/Vegetables.png'
import mixfruits from '../assets/categories/Mix_fruits.png'
import organicmilk from '../assets/categories/organic-milk.png'
import spices from '../assets/categories/spices.jpg'
import Cardoffers from '../assets/Cardoffers.png'
import grains from '../assets/categories/grains.jpg'
import Categories from "./Category";

function P1_cont1(){
    return (
        <div className="container First">
            <div className="frontPageBannerSkele">
                <Carosals />
            </div>
            <div className="categoriesGlanceSkele">
                <CateComponent picture={meat} name={"Meat"}/>
                <CateComponent picture={Vegetables} name={"Vegetables"}/>
                <CateComponent picture={mixfruits} name={"Fruits"}/>
                <CateComponent picture={organicmilk} name={"Fruits"}/>
                <CateComponent picture={grains} name={"Grains"}/>
                <CateComponent picture={spices} name={"Spices"}/>
            </div>
            <div className="dedicatedOffersSkele">
            <img src={Cardoffers} alt="adv" />
            </div>

            {/* <Carosals />
            <Categories />
            <Categories /> */}
        </div>
    )
}

export default P1_cont1;