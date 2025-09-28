import Banner from '@/common/components/customize/Banner';
import { Container } from '@/common/components/customize/Container';
import React from 'react';
import foto from '@public/products/encabezadoProductos.webp';
import Image from 'next/image';

import Link from 'next/link';
import { products } from './data/products';
const ProductsView = () => {
	return (
		<>
			<Container size="full" className="py-0 px-0">
				<Banner image={foto} title="Productos" overlay={false} />
			</Container>
			<Container size="full" className="py-0 px-0">
				{/* <Values /> */}
				<div className="grid grid-cols-1 lg:grid-cols-2 bg-black">
					{products.map((product) => (
						<Link
							key={product.slug}
							href={`/producto/${product.slug}`}
							className="relative group"
						>
							<Image
								src={product.cover}
								alt={product.title}
								className="object-cover object-center w-full h-auto"
							/>
							<div className="absolute bottom-0 sm:py-10 py-6 px-6 sm:px-12 text-white">
								<span className="text-xs lg:text-sm font-light">PRODUCTOS</span>
								<h3 className="text-lg lg:text-xl font-bold mb-2.5 group-hover:underline group-hover:underline-offset-4">
									{product.title}
								</h3>
								<p className="max-w-[600px] text-sm lg:text-base font-light">
									{product.description}
								</p>
							</div>
						</Link>
					))}
				</div>
			</Container>
		</>
	);
};

export default ProductsView;
