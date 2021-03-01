import './App.css';

import React, { FC, Suspense } from 'react';
import { useEffect } from 'react';
import { RecoilRoot, useSetRecoilState } from 'recoil';

import { productsAtom } from './atoms/products.atom';
import { NavBar, Products } from './components';
import { commerce } from './lib/commerce';
import { fetchCart } from './services/Cart/cart.service';
import { iProduct } from './types/products';

export const App: FC = () => {
    // const [cart, setCart] = useState<iCart>();
    console.log({});

    const setProductIDsAtom = useSetRecoilState(productsAtom);

    const fetchProducts = async () => {
        const { data }: { data: iProduct[] } = await commerce.products.list();
        data.map((product) => {
            setProductIDsAtom((products) => {
                return !products.includes(product) ? [...products, product] : [];
            });
        });
        return data;
    };

    useEffect(() => {
        fetchProducts();
        fetchCart();
        return () => {};
    }, []);

    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <NavBar />
            </Suspense>
            <Products />
        </>
    );
};

export const AppRoot: FC = () => (
    <RecoilRoot>
        <App />
    </RecoilRoot>
);

export default AppRoot;
