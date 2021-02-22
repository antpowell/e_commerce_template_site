import { atom } from 'recoil';

import { iProduct } from '../types/products';

export const productsAtom = atom<iProduct[]>({
    key: 'products',
    default: [],
});
