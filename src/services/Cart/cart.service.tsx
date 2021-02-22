export { }
// import { createContext, ReactNode, useContext, useState } from 'react';
// import { useRecoilCallback } from 'recoil';

// import { iAddToCart, iCart } from '../../models/cart.model';
// import { iProduct } from '../../models/product.model';

// const CartContext = createContext<iCart | {}>({});

// // const [cart, setCart] = useRecoilState<iCart>(cartAtom);

// const AddToCartContext = createContext<iAddToCart>({} as iAddToCart);

// const addToCart = useRecoilCallback(({ set }) => {
//     return (id: string, quantity: iProduct) => {
//         // set(cartAtom, [id, quantity]);
//     };
// });

// // export const useAddToCart = async (id: string, quantity: number) => {
// //     const item = await commerce.cart.add(id, quantity);

// //     const cart = setCart(item.cart);

// //     return cart;
// // };

// interface CartServiceProps {
//     children: ReactNode;
// }

// const CartServiceProvider = ({ children }: CartServiceProps) => {
//     return <CartContext.Provider value={cart}>{children}</CartContext.Provider>;
// };

// export default CartServiceProvider;
