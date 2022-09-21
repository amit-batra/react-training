import axios from "axios";
import React from "react";
import cartReducer, { ICart } from "../reducers/CartReducer";
import { ProductContext } from "./ProductContext";

const initialState = {
    products:[],
    total: 0
}
interface Props {
    children: React.ReactNode;
}

export const CartContext = React.createContext<{cart:ICart[],
     addToCart:(id:string)=>void,
     increment:(id:string) => void}>({cart:[], 
        addToCart:(id:string) => {},
        increment:(id:string) => {}});

        
export const CartProvider:React.FC<Props> = ({children}) => {
    let [state, dispatch] = React.useReducer(cartReducer, initialState);
    let {products} = React.useContext(ProductContext);

    function addToCart(id:string) {
        let prd = products.filter(p => p.id === id)[0];
        dispatch({type:'ADD_TO_CART', payload :prd})
    }

    function increment(id:string) {
        dispatch({type:'INCREMENT', payload:id})
    }

    function checkout() {
        axios.post("http://localhost:1234/orders", state).then(
            ()=>console.log("order placed!!!")
        )
    }
    return <CartContext.Provider value={{cart:state.products, 
            addToCart:addToCart, 
            increment:increment}}>
        {children}
    </CartContext.Provider>
}