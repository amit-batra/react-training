import React from "react";
import { CartContext } from "../context/CartContext";
import { ICart } from "../reducers/CartReducer";
import { Button } from "./Button";

export const CartList = (product:ICart) => {
    let {id,name,price,image,qty, amount} = product;
    let {increment} = React.useContext(CartContext);
    return (
        <div className="row">
            <div className="col-md-2">
                <img src={image} style={{"width":"50px", "height": "50px"}}/>
            </div>
            <div className="col-md-2">
                <Button onClick={() => increment(id!)}>+</Button>
                <Button>-</Button>
            </div>
            <div className="col-md-2">
                Name: {name}
            </div>
            <div className="col-md-2">
                Price : {price}
            </div>
            <div className="col-md-2">
                Qty: {qty}
            </div>
            <div className="col-md-2">
                Amount : {amount}
            </div>
        </div>
    )
}