export interface LineTotal {
    raw: number;
    formatted: string;
    formatted_with_symbol: string;
    formatted_with_code: string;
}

export interface Subtotal {
    raw: number;
    formatted: string;
    formatted_with_symbol: string;
    formatted_with_code: string;
}

export interface Currency {
    code: string;
    symbol: string;
}

export interface Price {
    raw: number;
    formatted: string;
    formatted_with_symbol: string;
    formatted_with_code: string;
}

export interface LineTotal2 {
    raw: number;
    formatted: string;
    formatted_with_symbol: string;
    formatted_with_code: string;
}

export interface Price2 {
    raw: number;
    formatted: string;
    formatted_with_symbol: string;
    formatted_with_code: string;
}

export interface Variant {
    variant_id: string;
    variant_name: string;
    option_id: string;
    option_name: string;
    price: Price2;
}

export interface LineItem {
    id: string;
    product_id: string;
    name: string;
    quantity: number;
    price: Price;
    line_total: LineTotal2;
    variants: Variant[];
}

export interface Cart {
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
    line_items: LineItem[];
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
    success: boolean;
    event: string;
    line_item_id: string;
    product_id: string;
    product_name: string;
    quantity: number;
    line_total: LineTotal;
    cart: Cart;
}
