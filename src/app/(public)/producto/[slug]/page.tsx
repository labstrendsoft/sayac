import { redirect } from 'next/navigation';

import ProductView from '@/modules/products/ProductView';

import { products } from '@/modules/products/data/products';
import generateSeoMetadata from '@/lib/generateSeoMetadata';
import { Metadata } from 'next';

type PageProps = {
	params: Promise<{ slug: string }>;
};

// ⬇️ Usamos tu función para SEO dinámico
export async function generateMetadata({
	params,
}: PageProps): Promise<Metadata> {
	const { slug } = await params;
	const product = products.find((p) => p.slug === slug);

	if (!product) {
		return generateSeoMetadata({
			title: 'Producto no encontrado | Grupo SAYAQ',
			description: 'Este producto no está disponible en el catálogo.',
			canonicalPath: 'productos',
		});
	}

	return generateSeoMetadata({
		title: `${product.title}`,
		description: product.description,
		keywords: product.features,
		type: 'article',
		image: product.cover.src, // og:image
		canonicalPath: `producto/${slug}`,
	});
}

export default async function page({ params }: PageProps) {
	const { slug } = await params;
	const product = products.find((p) => p.slug === slug);

	if (!product) {
		redirect('/productos');
	}

	return <ProductView product={product} />;
}
