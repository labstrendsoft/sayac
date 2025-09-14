import { Button } from '@/common/components/shadcnui/button';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';

interface NoticeCardProps {
	image: StaticImageData | string;
	alt: string;
	date: string;
	title: string;
	description: string;
	ctaLabel?: string;
	onClick?: () => void;
	href?: string;
}

const NoticeCard: React.FC<NoticeCardProps> = ({
	image,
	alt,
	date,
	title,
	description,
	ctaLabel = 'Leer más',
	onClick,
	href,
}) => {
	return (
		<div className="overflow-hidden bg-ecoandina-plomo shadow-sm">
			<div className="flex flex-col lg:flex-row">
				{/* Image Section */}
				<div className="lg:w-1/3">
					<Image
						src={image}
						alt={alt}
						className="w-full h-48 lg:h-full object-cover"
					/>
				</div>

				{/* Content Section */}
				<div className="lg:w-2/3 p-6 flex flex-col items-start justify-center">
					<div>
						{/* Date */}
						<p className="text-sayac-amarillo font-bold mb-2">{date}</p>

						{/* Title */}
						<h2 className="text-xl lg:text-3xl text-balance font-bold text-gray-900 mb-4 leading-tight">
							{title}
						</h2>

						{/* Description */}
						<p className="text-gray-600 text-sm lg:text-base mb-6 leading-relaxed font-light max-w-[650px]">
							{description}
						</p>
					</div>

					{/* CTA Button */}
					{ctaLabel && (
						<div>
							{href ? (
								<Link href={href}>
									<Button className="bg-sayac-amarillo hover:bg-sayac-amarillo/80 text-white rounded-none px-6 py-2 text-sm font-medium">
										{ctaLabel}
									</Button>
								</Link>
							) : (
								<Button
									onClick={onClick}
									className="bg-sayac-amarillo hover:bg-sayac-amarillo/80 text-white px-6 rounded-none py-2 text-sm font-medium"
								>
									{ctaLabel}
								</Button>
							)}
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default NoticeCard;
