import React from 'react';
import './shoppingCart.css';
import { useState } from 'react';

import { shoppingCart,addingitem } from "../shoppingCart";
// import { shoppingCart,addingitem } from "../shoppingCart2";

function ItemCardTemplate({id, itemName, imgsrc}){
    const [Quantity, setQuantity] = useState(1);

    function handleInputChange(event){
        setQuantity(event.target.value);
    }

    // const imges = [Apple,Banana,Pineapple,Mango];
    return (
        <div className="itemcards">
            <img src={imgsrc} alt={itemName} className="item_img" />
            <h2 className="titleOf">{itemName}</h2>
            <div className="addbtns">
                <label htmlFor={id}>Quantity:</label>
                <input type="number" onChange={handleInputChange} defaultValue={Quantity} id={id} />
                <button type="submit" className="Btn addToCart" onClick={(event) => addingitem(itemName, Quantity, event.target)}>Add item to Cart</button>
            </div>
        </div>
    )
}

export default ItemCardTemplate