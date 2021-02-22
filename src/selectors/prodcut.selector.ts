import { selectorFamily } from 'recoil';

export const productSelector = selectorFamily({
    key: 'product',
    get: (id: string) => async () => {
        // const { data }: { data: iProduct[] } = commerce.product.list();
        // return data.includes(id) ? data : null;
    },
});
