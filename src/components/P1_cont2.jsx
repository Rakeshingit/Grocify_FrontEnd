import React, {useEffect, useState} from "react";
import '../Admin Page StylesSheets/shoppingCart.css';
import ItemCardTemplate from './ItemCard';
import Mango from '../assets/fruits_imgs/kiwi/Mango.png'
import Apple from '../assets/fruits_imgs/kiwi/apple.png'
import Banana from '../assets/fruits_imgs/kiwi/Banana.png'
import Pineapple from '../assets/fruits_imgs/kiwi/Pineapple.png'
import { shoppingCart,addingitem } from "../shoppingCart";

function P1_cont2(){
    const [quantity,setquantity] = useState(1);
    const [products, setProducts] = useState([{}]);
    const [isLoading, setIsLoading] = useState(true);

    // const handleInputChange = (event) => {
    //     setquantity(event.target.value);
    //     }

    const HighPriceItems = (product) => {
        if (product.price > 100 && product.name !== "Strawberries")
            return product;
    }

    useEffect(() => {
        fetch("https://localhost:8901/get-products")
            .then(response => response.json())
            .then(data => {
                setProducts(data);
                setIsLoading(false);
            })
            .catch((err) => console.log(err));
        setIsLoading(false);
        // const data = await response.json()
        // const newData = products.filter(HighPriceItems)
        // setProducts(newData);
        // console.log(`This is ${typeof(products)}`);
    }, [])

    if (isLoading) return <div>Loading...</div>
    if (!products || products.length === 0) return <div>Product list is empty</div>;

    const filteredData = products.filter(HighPriceItems);
    console.log(filteredData)
    return (
        <>
            <div className="pageTitle">
            <h2 className="container_second_heading">Today's Top Items</h2>
            </div>
        <div className="container second">
            {
                filteredData.map((item) => {
                    return (
                        <ItemCardTemplate itemName={item.name} itemPrice={item.price} id={`${item.name}_card`}
                                          imgsrc={item.imageUrl}/>
                    )
                })
            }
        </div>
        </>
    )
}

export default P1_cont2;