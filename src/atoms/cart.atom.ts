import { atom } from 'recoil';

import { iCart } from './../types/cart.d';

export const cartAtom = atom<iCart | null>({
    key: 'cart',
    default: null,
});
