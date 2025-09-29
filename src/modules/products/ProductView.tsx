import Image from 'next/image';

import { Container } from '@/common/components/customize/Container';
import type { Product } from '@/common/types/product';
type ProductProps = {
	product: Product;
};

const ProductView = ({ product }: ProductProps) => {
	return (
		<Container size="full" className="py-10 min-h-[70vh]">
			<div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
				{/* Columna izquierda */}
				<div className="flex flex-col gap-4">
					<h2 className="text-2xl font-bold">{product.title}</h2>
					<ul className="flex flex-col gap-3 text-gray-700">
						{product.features.map((feature, i) => (
							<li key={i} className="flex items-start gap-2">
								<div className="flex-shrink-0 size-3.5 rounded-full bg-[#F19C49] mt-1"></div>{' '}
								<p className="max-w-[432px] font-light">{feature}</p>
							</li>
						))}
					</ul>
				</div>

				{/* Columna derecha */}
				<div className="grid grid-cols-1 justify-center items-center sm:grid-cols-2 gap-2">
					{product.images.map((img, i) => (
						<Image
							key={i}
							src={img}
							alt={`${product.title} ${i + 1}`}
							className="object-cover w-auto h-auto max-sm:mx-auto"
						/>
					))}
				</div>
			</div>
		</Container>
	);
};

export default ProductView;
