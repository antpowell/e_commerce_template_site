import { createContext, FC, ReactNode, useContext, useState } from 'react';

import { commerce } from '../../lib/commerce';
import { iAddToCart, iCart } from '../../models/cart.model';

const CartContext = createContext<iCart | null>(null);
export const useCart = () =>
{
    return useContext(CartContext);
}

const AddToCartContext = createContext<iAddToCart | null>(null);
export const useAddToCart = (id: string, quantity: number) =>
{
    handleAddToCart(id, quantity);

    return useContext(AddToCartContext);
}

interface CartServiceProps
{
    children: ReactNode;
}

const handleAddToCart: (productId: string, quantity: number) => Promise<void> = async (productId: string, quantity: number) =>
{
    const item = await commerce.cart.add(productId, quantity);

    console.log(item.cart);
    // setCart(item.cart as iCart);
}

const CartServiceProvider: FC<CartServiceProps> = ({ children }: CartServiceProps) =>
{
    const [cart, setCart] = useState<iCart | null>(null);



    return (
        <CartContext.Provider value={cart}>
            <AddToCartContext.Provider value={handleAddToCart}>
                {children}
            </AddToCartContext.Provider>
        </CartContext.Provider >
    );
}

export default CartServiceProvider;