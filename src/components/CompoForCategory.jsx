import React from "react";
import './shoppingCart.css';

function CateComponent({picture, name}){
    return(
        <div className="component-category">
            <img src={picture} alt="category" />
            <h3>{name}</h3>
        </div>
    )
}

export default CateComponent