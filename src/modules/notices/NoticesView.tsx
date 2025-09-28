import Banner from '@/common/components/customize/Banner';
import { Container } from '@/common/components/customize/Container';
import React from 'react';
import foto from '@public/notices/encabezadoNoticias.webp';
import NoticeCard from './components/PreviewNotice';
import { notices, noticesHeader } from './data/notices';
export const NoticesView = () => {
	return (
		<>
			<Container size="full" className="py-0 px-0">
				<Banner image={foto} title="Noticias" overlay={false} />
			</Container>

			<Container className="py-10">
				<h4 className="pb-4">Recientes</h4>
				<div className="space-y-10">
					{notices.map((notice) => (
						<NoticeCard
							key={notice.slug}
							image={noticesHeader}
							alt={notice.alt}
							date={notice.date}
							title={notice.title}
							description={notice.description}
							ctaLabel="LEER COMPLETO"
							href={`/noticias/${notice.slug}`}
						/>
					))}
				</div>
			</Container>
		</>
	);
};
