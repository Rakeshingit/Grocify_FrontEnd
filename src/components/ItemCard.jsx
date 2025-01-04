import React from 'react';
import '../Admin Page StylesSheets/shoppingCart.css';
import { useState } from 'react';
import BestButton from './Button';

import { shoppingCart,addingitem } from "../shoppingCart";

function ItemCardTemplate({id, itemName, imgsrc, itemPrice}) {
    const [Quantity, setQuantity] = useState(1);

    function handleInputChange(event){
        setQuantity(event.target.value);
    }

    // const imges = [Apple,Banana,Pineapple,Mango];
    return (
        <div className="item-card-container">
        <div className="itemcards">
            <img src={imgsrc} alt={itemName} className="item_img" />
            <h2 className="titleOfItem">{itemName}</h2>
            <h3 className={"priceOfItem"}>₹{itemPrice}</h3>
        </div>
            <div className="addbtns">
                {/*<label htmlFor={id}>Quantity:</label>*/}
                {/*<input type="number" onChange={handleInputChange} defaultValue={Quantity} id={id} />*/}
                <BestButton
                    variant={"Primary"}
                    size={"large"}
                    btnText={"Add to cart"}
                    type={"submit"}
                    onClick={(event) => addingitem(itemName, Quantity, event.target)}
                />
                {/*<button type="submit" className="Btn addToCart" onClick={(event) => addingitem(itemName, Quantity, event.target)}>Add item to Cart</button>*/}
            </div>
        </div>
    )
}

export default ItemCardTemplate