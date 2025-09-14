import { notFound, redirect } from 'next/navigation';

import type { Metadata } from 'next';
import NoticeView from '@/modules/notices/NoticeView';
import ProductView from '@/modules/products/ProductView';
import type { Product } from '@/common/types/product';
import p_01_uno from '@public/products/productos/1.png';
import p_01_dos from '@public/products/productos/2.png';
import p_01_tres from '@public/products/productos/3.png';
import p_01_cuatro from '@public/products/productos/4.png';
import p_02_uno from '@public/products/productos/p1.png';
import p_02_dos from '@public/products/productos/p2.png';
import p_02_tres from '@public/products/productos/p3.png';
import p_02_cuatro from '@public/products/productos/p4.png';

type PageProps = {
	params: Promise<{ slug: string }>; // params ahora es una promesa
};

// export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
//   const { slug } = await params;

//   // Filtra proyectos por slug

//   // Metadata básica
//   const title = `Trabajos de ${slug.replace('-', ' ')}`;
//   const description =
//     filteredProjects.length > 0
//       ? `Explora ${filteredProjects.length} proyectos en la categoría ${slug.replace('-', ' ')}.`
//       : `Actualmente no hay proyectos en la categoría ${slug.replace('-', ' ')}.`;

//   return {
//     metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),
//     title,
//     description,
//   };
// }
// Ejemplo de productos (puede venir de JSON, API, DB, etc.)
const PRODUCTS: Record<string, Product> = {
	'tuberia-para-voladura': {
		title: 'TUBERÍA PARA VOLADURA',
		features: [
			'Abastecemos tu tubería con corte en media caña, corte diagonal, tapas y tapones o el acabado que su operación requiera.',
			'Tuberías para taladros largos ideales para labores sub Level Stoping, sub level Caving con bloqueos para explosivos como ANFO y emulsión.',
		],
		images: [p_02_uno, p_02_dos, p_02_tres, p_02_cuatro],
	},
	'tuberia-poli': {
		title: 'TUBERÍA Y ACCESORIOS DE POLIETILENO',
		features: [
			'Somos fabricantes especialistas en tubos HDPE y tubos para voladuras.',
			'Tubería y accesorios de PVC',
			'Tuberías Herméticas',
		],
		images: [p_01_uno, p_01_dos, p_01_tres, p_01_cuatro],
	},
};

export default async function page({ params }: PageProps) {
	// await new Promise((resolve) => setTimeout(resolve, 2000));

	const { slug } = await params;
	const product = PRODUCTS[slug];
	// Si el slug no es válido, redirige a /noticias
	// Si el producto no existe, redirige a /noticias
	if (!product) {
		redirect('/productos');
	}

	// if (!VALID_SLUGS.includes(slug)) {
	//   notFound(); // 404 si no existe la categoría
	// }

	return <ProductView product={product} />;
}
