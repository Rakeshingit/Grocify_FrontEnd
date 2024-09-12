import React,{useRef,useState} from "react";
import './shoppingCart.css';
import ItemCardTemplate from './ItemCard';
import Mango from '../assets/fruits_imgs/kiwi/Mango.png'
import Apple from '../assets/fruits_imgs/kiwi/apple.png'
import Banana from '../assets/fruits_imgs/kiwi/Banana.png'
import Pineapple from '../assets/fruits_imgs/kiwi/Pineapple.png'
import { shoppingCart,addingitem } from "../shoppingCart";

function P1_cont2(){
    const [quantity,setquantity] = useState(1);

    const handleInputChange = (event) => {
        setquantity(event.target.value);
        }
    // console.log(quantity);

    return (
        <>
            <h2 className="container_second_heading">Today's Top Items</h2>
        <div className="container second">
        <ItemCardTemplate itemName="Apple" id="ApplesQ" imgsrc={Apple} />
        <ItemCardTemplate itemName="Banana" id="BananasQ" imgsrc={Banana}/>
        <ItemCardTemplate itemName="Mango" id="MangoesQ" imgsrc={Mango}/>
        <ItemCardTemplate itemName="Pineapple" id="PineapplesQ" imgsrc={Pineapple}/>
        </div>
        </>
    )
}

export default P1_cont2;