import { useRecoilValue, useSetRecoilState } from 'recoil';

import { commerce } from '../../lib/commerce';
import { cartAtom } from '../Cart/cart.service';

export const addToCart = async (productID: string, quantity: number) => {
    const item = await commerce.cart.add(productID, quantity);
    return item.cart;
};

export const emptyCart = async () => {
    const setCart = useSetRecoilState(cartAtom);
    await commerce.cart.empty();
    setCart(getCart());
};

export const getCart = () => {
    return useRecoilValue(cartAtom);
};
