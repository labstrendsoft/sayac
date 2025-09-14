import Image from 'next/image';
import React from 'react';
import blog from '@public/notices/blog.png';
import { Container } from '@/common/components/customize/Container';

const NoticeView = () => {
	return (
		<Container>
			<div>
				{/* Date */}
				<p className="text-sayac-amarillo font-bold mb-2">
					Lima, julio de 2025
				</p>

				{/* Title */}
				<h2 className="text-xl md:text-3xl  font-bold text-gray-900 mb-4 leading-tight">
					Innovación en tuberías de PVC: una solución sostenible para minería,
					construcción e industria
				</h2>

				{/* Description */}
				<p className="text-gray-600 text-sm md:text-base mb-6 leading-relaxed ">
					Grupo Sayak reafirma su compromiso con la calidad y la innovación en
					el suministro de tuberías de PVC certificadas bajo normas técnicas
					vigentes, que hoy en día se han convertido en un elemento clave para
					distintos sectores productivos como minería, construcción civil,
					industria, energía y agricultura. En el sector minero, las tuberías de
					PVC son altamente valoradas por su resistencia a la corrosión, su
					ligereza y su capacidad para transportar fluidos de manera segura en
					condiciones extremas. En la construcción civil, su versatilidad
					permite aplicaciones en sistemas de agua potable, desagüe y drenaje,
					contribuyendo a proyectos más eficientes y duraderos.
				</p>
				<p className="text-gray-600 text-sm md:text-base mb-6 leading-relaxed ">
					La industria energética también ha encontrado en el PVC una
					alternativa confiable para instalaciones eléctricas y conducciones,
					reduciendo riesgos y optimizando costos. Por su parte, la agricultura
					moderna aprovecha estas tuberías en sistemas de riego tecnificado,
					donde la durabilidad y la facilidad de instalación generan un impacto
					positivo en la productividad de los cultivos.
				</p>
				<p className="text-gray-600 text-sm md:text-base mb-6 leading-relaxed ">
					Además de su rendimiento, las tuberías de PVC representan una solución
					sostenible, ya que su fabricación y uso implican un menor consumo
					energético en comparación con otros materiales, y su vida útil
					prolongada reduce la necesidad de reemplazos constantes. Con estas
					características, Grupo Sayak continúa consolidándose como un aliado
					estratégico para los sectores que mueven el desarrollo del país,
					brindando productos de calidad que cumplen los más altos estándares
					internacionales.
				</p>
				<Image
					src={blog}
					alt=""
					className="w-full h-48 md:h-full object-cover"
				/>
			</div>
		</Container>
	);
};

export default NoticeView;
