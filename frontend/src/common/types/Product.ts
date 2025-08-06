interface ProductDimensions {
    width: number;
    height: number;
    depth: number;
}

interface ProductReview {
    rating: number;
    comment: string;
    date: string; // Or Date if you plan to parse it
    reviewerName: string;
    reviewerEmail: "eleanor.collins@x.dummyjson.com" | "lucas.gordon@x.dummyjson.com" | string; // Can be more specific or just string
}

interface ProductMeta {
    createdAt: string; // Or Date
    updatedAt: string; // Or Date
    barcode: string;
    qrCode: string;
}

export interface IProduct {
    id: number;
    title?: string;
    description?: string;
    category?: string;
    price?: number;
    discountPercentage?: number;
    rating?: number;
    stock?: number;
    tags?: string[];
    brand?: string;
    sku?: string;
    weight?: number;
    dimensions?: ProductDimensions;
    warrantyInformation?: string;
    shippingInformation?: string;
    availabilityStatus?: "In Stock" | "Out of Stock" | string; // Can be more specific or just string
    reviews?: ProductReview[];
    returnPolicy?: string;
    minimumOrderQuantity?: number;
    meta?: ProductMeta;
    images?: string[];
    thumbnail?: string;
}