import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { cn } from '@/lib/utils';

export interface BannerProps {
	image: StaticImageData | string;
	title: string;
	height?: string; // ejemplo: "h-[40vh]" | "h-[60vh]" | "h-auto"
	overlay?: boolean;
	className?: string;
	titleClassName?: string;
}

export const Banner: React.FC<BannerProps> = ({
	image,
	title,
	height = 'h-[40vh]',
	overlay = true,
	className,
	titleClassName = 'text-5xl',
}) => {
	return (
		<div
			className={cn(
				'relative w-full overflow-hidden max-md:h-[30vh]',
				height,
				className
			)}
		>
			{/* Imagen */}
			<Image
				src={image}
				alt={title}
				className="object-cover object-bottom w-full h-full"
				placeholder="blur"
				blurDataURL="data:image/webp;base64,UklGRsgAAABXRUJQVlA4ILwAAAAwBACdASogABAAPpE4mEeloyKhMAgAsBIJYwC7AYvOsq/a93k0ny0uZdAA/v8tERUk2vJ/+sL99U1GZtfeWXGN7InPpjbYqq52PEG3yoH+fs5nctcGbBqa7866+VmvxGmd70a/EalJoUtqnCAEse1xrylc6rDvOweFJoSWW/JT9l7O2x+s8Z1oM38mzWEVgLb+chAmMlr3I8TwhILVBOkMQDMrhom+2ZRkqJ2gO8yrDSbS257wsrGYQ2OAAA=="
			/>

			{/* Overlay opcional */}
			{overlay && <div className="absolute inset-0 bg-black/40 z-0" />}

			{/* Texto */}
			<h2
				className={cn(
					'absolute inset-0 flex items-center justify-center max-md:text-4xl text-white font-black z-10 md:pt-16',
					titleClassName
				)}
			>
				{title}
			</h2>
		</div>
	);
};

export default Banner;
