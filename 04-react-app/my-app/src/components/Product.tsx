import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import IProduct from "../model/IProduct";
import { Button } from "./Button";

export const Product = (product:IProduct) => {
    let {addToCart} = useContext(CartContext);
    let {id, image} = product;
    return (
        <div className="col-md-3 my-2">
            <div className="card">
                <div className="img-container">
                    <Link to={`/details/${id}`}>
                         <img src={image} className="card-img-top" />
                    </Link>
                    <Button className="cart-btn fa fa-cart-plus" onClick={() => addToCart(id)}/>
                </div>
            </div>
        </div>
    )
}