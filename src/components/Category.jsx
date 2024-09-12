import React from "react";
import CateComponent from "./CompoForCategory";
import meat from '../assets/categories/meat.png';
import Vegetables from '../assets/categories/Vegetables.png'
import mixfruits from '../assets/categories/Mix_fruits.png'
import organicmilk from '../assets/categories/organic-milk.png'
import spices from '../assets/categories/spices.jpg'
import grains from '../assets/categories/grains.jpg'
import './shoppingCart.css';

function Categories(){
    return(
        <div className="Categories-container">
            <CateComponent picture={meat} name={"Meat"}/>
            <CateComponent picture={Vegetables} name={"Vegetables"}/>
            <CateComponent picture={mixfruits} name={"Fruits"}/>
            
        </div>
    )
}

export default Categories