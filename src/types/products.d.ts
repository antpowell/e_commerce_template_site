interface Price {
    raw: number;
    formatted: string;
    formatted_with_symbol: string;
    formatted_with_code: string;
}

interface Media {
    type: string;
    source: string;
}

interface Seo {
    title?: any;
    description?: any;
}

interface Conditionals {
    is_active: boolean;
    is_free: boolean;
    is_tax_exempt: boolean;
    is_pay_what_you_want: boolean;
    is_quantity_limited: boolean;
    is_sold_out: boolean;
    has_digital_delivery: boolean;
    has_physical_delivery: boolean;
    has_images: boolean;
    has_video: boolean;
    has_rich_embed: boolean;
    collects_fullname: boolean;
    collects_shipping_address: boolean;
    collects_billing_address: boolean;
    collects_extrafields: boolean;
}

interface Is {
    active: boolean;
    free: boolean;
    tax_exempt: boolean;
    pay_what_you_want: boolean;
    quantity_limited: boolean;
    sold_out: boolean;
}

interface Has {
    digital_delivery: boolean;
    physical_delivery: boolean;
    images: boolean;
    video: boolean;
    rich_embed: boolean;
}

interface Collects {
    fullname: boolean;
    shipping_address: boolean;
    billing_address: boolean;
    extrafields: boolean;
}

interface CheckoutUrl {
    checkout: string;
    display: string;
}

interface ImageDimensions {
    width: number;
    height: number;
}

interface Asset {
    id: string;
    url: string;
    is_image: boolean;
    filename: string;
    file_size: number;
    file_extension: string;
    image_dimensions: ImageDimensions;
    meta: any[];
    created_at: number;
    updated_at: number;
}

export interface iProduct {
    id: string;
    created: number;
    updated: number;
    active: boolean;
    permalink: string;
    name: string;
    description: string;
    price: Price;
    quantity: number;
    media: Media;
    sku?: any;
    sort_order: number;
    seo: Seo;
    thank_you_url?: any;
    meta?: any;
    conditionals: Conditionals;
    is: Is;
    has: Has;
    collects: Collects;
    checkout_url: CheckoutUrl;
    extrafields: any[];
    variants: any[];
    categories: any[];
    assets: Asset[];
    related_products: any[];
}

interface Links {}

interface Pagination {
    total: number;
    count: number;
    per_page: number;
    current_page: number;
    total_pages: number;
    links: Links;
}

interface Meta {
    pagination: Pagination;
}

export interface iProducts {
    data: iProduct[];
    meta: Meta;
}
