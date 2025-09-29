import Image from 'next/image';
import React from 'react';
import { Container } from '@/common/components/customize/Container';
import { Notice } from './data/notices';

const NoticeView = ({ notice }: { notice: Notice }) => {
	return (
		<Container>
			<div>
				{/* Date */}
				<p className="text-sayac-amarillo font-bold mb-2">{notice.date} </p>

				{/* Title */}
				<h2 className="text-xl md:text-3xl  font-bold text-gray-900 mb-4 leading-tight">
					{notice.title}
				</h2>

				{/* Description */}
				{/* Contenido dinámico */}
				{notice.content.map((paragraph, i) => (
					<p
						key={i}
						className="text-gray-600 text-sm md:text-base mb-6 leading-relaxed"
					>
						{paragraph}
					</p>
				))}

				<Image
					src={notice.image}
					alt={notice.alt}
					className="w-full h-48 md:h-full object-cover"
				/>
			</div>
		</Container>
	);
};

export default NoticeView;
