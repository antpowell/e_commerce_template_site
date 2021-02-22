import { atomFamily } from 'recoil';

interface Subtotal {
    raw: number;
    formatted: string;
    formatted_with_symbol: string;
    formatted_with_code: string;
}

interface Currency {
    code: string;
    symbol: string;
}

export interface iCart {
    id: string;
    created: number;
    last_updated: number;
    expires: number;
    total_items: number;
    total_unique_items: number;
    subtotal: Subtotal;
    currency: Currency;
    discount_code: any[];
    hosted_checkout_url: string;
    line_items: any[];
}

export const cartAtom = atomFamily({
    key: 'cart',
    default: {} as iCart,
});
