import { atomFamily } from 'recoil';

import { iProduct } from '../types/products';

export const productAtom = atomFamily<iProduct | null, string>({
    key: 'product',
    default: null,
});
