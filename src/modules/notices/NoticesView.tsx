import Banner from '@/common/components/customize/Banner';
import { Container } from '@/common/components/customize/Container';
import React from 'react';
import foto from '@public/notices/encabezadoNoticias.webp';
import blog from '@public/notices/blog.png';
import NoticeCard from './components/PreviewNotice';
export const NoticesView = () => {
	return (
		<>
			<Container size="full" className="py-0 px-0">
				<Banner image={foto} title="Noticias" overlay={false} />
			</Container>

			<Container className="py-10">
				<h4 className="pb-4">Recientes</h4>
				<div className="space-y-10">
					<NoticeCard
						image={blog}
						alt="Camión mezclador de concreto en sitio de construcción"
						date="Lima, Agosto de 2025"
						title="Innovación en tuberías de PVC: una solución sostenible para minería, construcción e industria"
						description="Grupo Sayak reafirma su compromiso con la calidad y la innovación en el suministro de tuberías de PVC..."
						ctaLabel="LEER COMPLETO"
						href="/noticias/ecoandina-innovacion"
					/>
					<NoticeCard
						image={blog}
						alt="Camión mezclador de concreto en sitio de construcción"
						date="Lima, Agosto de 2025"
						title="Innovación en tuberías de PVC: una solución sostenible para minería, construcción e industria"
						description="Grupo Sayak reafirma su compromiso con la calidad y la innovación en el suministro de tuberías de PVC..."
						ctaLabel="LEER COMPLETO"
						href="/noticias/ecoandina-innovacion"
					/>
					<NoticeCard
						image={blog}
						alt="Camión mezclador de concreto en sitio de construcción"
						date="Lima, Agosto de 2025"
						title="Innovación en tuberías de PVC: una solución sostenible para minería, construcción e industria"
						description="Grupo Sayak reafirma su compromiso con la calidad y la innovación en el suministro de tuberías de PVC..."
						ctaLabel="LEER COMPLETO"
						href="/noticias/ecoandina-innovacion"
					/>
				</div>
			</Container>
		</>
	);
};
