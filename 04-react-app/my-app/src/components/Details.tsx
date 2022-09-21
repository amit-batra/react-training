import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import IProduct from "../model/IProduct";

export const Details = () => {
    let [product, setProduct] = useState<IProduct | null>(null);
    let {id} = useParams(); // http://localhost:3000/details/2

    const {handleDetails} = useContext(ProductContext);
    // life cycle methods ==> componentDidUpdate
    useEffect(() => {
        let product = handleDetails(id!);
        if(product != null) {
            setProduct(product);
        }
    }, [id]);
    if(product != null) {
        let {name,image,price} = product;
        return (
        <div>
            <h1>{name} {image} {price}</h1>
        </div>
        )
    } else {
        return <div>No Product!!!</div>
    }
    
}