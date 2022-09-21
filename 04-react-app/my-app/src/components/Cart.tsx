import React from "react";
import { CartContext } from "../context/CartContext";
import { CartList } from "./CartList";

export const Cart = () => {
    let {cart} = React.useContext(CartContext);
    return (
        <div className="container">
            {
                cart.length === 0 ? <h1>No items...</h1> :
                cart.map(product => <CartList key={product.id} {...product}/>)
            }
        </div>
    )
}