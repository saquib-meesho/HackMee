export interface ProductInterface {
    product_id: number;
    portfolio: string;
    category: string;
    s_cat: string;
    ss_cat_name: string;
    rating: number;
    price: number;
    image_link_images: string;
    fabric: string;
    order_count: number;
    color: string;
    print_pattern: string;
    major_category: string;
}

export interface CartItemInterface {
    product_id: number;
    portfolio: string;
    category: string;
    s_cat: string;
    ss_cat_name: string;
    rating: number;
    price: number;
    image_link_images: string;
    fabric: string;
    order_count: number;
    color: string;
    print_pattern: string;
    major_category: string;
    quantity: number;
}