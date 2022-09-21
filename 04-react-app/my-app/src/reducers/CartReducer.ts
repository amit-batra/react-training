
import IProduct from "../model/IProduct";

type Action = {type:'ADD_TO_CART', payload:IProduct} 
| {type:'INCREMENT', payload:string} 
| {type:'DECREMENT', payload:string} 
| {type:'CLEAR_CART'} 

export interface ICart  {
    id?:string,
    name?:string,
    image?:string,
    price?:number,
    amount?:number,
    qty?:number
}

export interface StateType {
    products: ICart[],
    total: number
}

const cartReducer = (state:StateType, action:Action) => {
    if(action.type === 'ADD_TO_CART') {
        const product = {...action.payload};
        let item = {...product, qty : 1, amount: product.price}
        let cartItems = state.products;
        let total = state.total += product.price;
        return {products: [...cartItems, {...item}], total: total}

    } else if (action.type === 'INCREMENT') {
        return state;
    }
    
    return state;
    
}

export default cartReducer;