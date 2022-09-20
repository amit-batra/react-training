import React, {Component} from "react";
import IProduct from "../model/IProduct";
import axios from 'axios';

interface StateType {
    products: IProduct[]
};

interface ContextType {
    products: IProduct[]
};

type Props = {
    children: React.ReactNode
};

export const ProductContext = React.createContext<ContextType>({
    products: []
});

export class ProductProvider extends Component<Props, StateType> {
    public state: StateType = {
        products: []
    }

    setProducts() {
        axios.get("http://localhost:1234/products").then((response: { data: IProduct[]; }) => {
            this.state.products = response.data;
        })
    }

    componentDidMount(): void {
        this.setProducts();
    }

    render(): React.ReactNode {
        return (
            <ProductContext.Provider value={{...this.state}}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}