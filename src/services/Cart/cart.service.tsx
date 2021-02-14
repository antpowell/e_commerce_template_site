import { createContext, ReactNode, useContext, useState } from 'react';

import { commerce } from '../../lib/commerce';
import { iCart } from '../../models/cart.model';

const CartContext = createContext<iCart | {}>({});
export const useCart = (newCart?: iCart) => {
    const [cart, setCart] = useState<iCart | {}>({});
    return useContext(CartContext);
};

// const AddToCartContext = createContext<iAddToCart>({} as iAddToCart);
const cart = useCart();
export const useAddToCart = async (id: string, quantity: number) => {
    const item = await commerce.cart.add(id, quantity);

    const cart = useCart(item.cart);

    return cart;
};

interface CartServiceProps {
    children: ReactNode;
}

const CartServiceProvider = ({ children }: CartServiceProps) => {
    return <CartContext.Provider value={cart}>{children}</CartContext.Provider>;
};

export default CartServiceProvider;
