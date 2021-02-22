import './App.css';

import React, { FC } from 'react';
import { useEffect, useState } from 'react';
import { RecoilRoot, useSetRecoilState } from 'recoil';

import { productsAtom } from './atoms/products.atom';
import { NavBar, Products } from './components';
import { commerce } from './lib/commerce';
import { iCart } from './models/cart.model';
import { iProduct } from './types/products';

    export const App: FC = () => {
    
    const [cart, setCart] = useState<iCart>();

    const setProductIDsAtom = useSetRecoilState(productsAtom);
        
    const fetchProducts = async () => {
        const {data}:{data: iProduct[]} = await commerce.products.list();
        data.map((product)=>{
            setProductIDsAtom((products)=>[...products, product]);
        });
        return data;
        
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
        return () => { };
    }, []);

    // console.log(products);
    console.log(cart);

    return (
        <>
            <NavBar />
            <Products />
        </>
    );
};

export const AppRoot: FC = () => <RecoilRoot><App /></RecoilRoot>;

export default AppRoot;
