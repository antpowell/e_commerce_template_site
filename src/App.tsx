import './App.css';

import React from 'react';
import { useEffect, useState } from 'react';

import { NavBar, Products } from './components';
import { commerce } from './lib/commerce';
import { iCart } from './models/cart.model';
import { iProduct } from './models/product.model';

// interface AppProps {}

export const App = () => {
    const [products, setProducts] = useState<iProduct[]>([]);
    const [cart, setCart] = useState<iCart>();
    // const cart = useContext();

    const fetchProducts = async () => {
        const { data } = await commerce.products.list();

        setProducts(data);
    };

    const fetchCart = async () => {
        setCart(await commerce.cart.retrieve());
    };

    // const addToCartHandler = async (id: string, quantity: number) => {
    //     const item = await commerce.cart.add(id, quantity);

    //     setCart(item.cart);
    //     console.log(cart);
    // };

    useEffect(() => {
        fetchProducts();
        fetchCart();
        return () => {};
    }, []);

    console.log(products);
    console.log(cart);

    return (
        <>
            <div className="App">
                <NavBar />
                <Products products={products} />
            </div>
        </>
    );
};

export default App;
