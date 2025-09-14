import { StaticImageData } from 'next/image';

// types/product.ts
export interface Product {
	title: string;
	features: string[];
	images: string[] | StaticImageData[];
}
