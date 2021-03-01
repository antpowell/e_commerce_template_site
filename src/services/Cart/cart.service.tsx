import { atom, selector } from 'recoil';

import { commerce } from '../../lib/commerce';
import { iCart } from '../../types/cart';

// import { useState } from 'react';
// export const [cart, setCart] = useState<iCart>();

export const cartAtom = atom<iCart>({
    key: 'cart',
    default: selector({
        key: 'cartQuery',
        get: async () => await commerce.cart.retrieve(),
    }),
});

// const setCart = (cart: iCart) => {
//     const setCartAtom = useSetRecoilState(cartAtom);
//     setCartAtom(cart);
// };

export const handleAddToCart = async (productId: string, quantity: number): Promise<iCart> => {
    const newCart = await commerce.cart.add(productId, quantity);
    console.dir(newCart.cart);
    return newCart.cart;
};

export const fetchCart = async () => {
    const cart = await commerce.cart.retrieve();
    console.log('fetching cart');
    console.log({ cart });
    return cart;
};
