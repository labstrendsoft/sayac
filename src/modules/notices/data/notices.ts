import type { StaticImageData } from 'next/image';

import encabezado from '@public/notices/preview.png';
import blog from '@public/notices/notice1.png';

export type Notice = {
	slug: string;
	title: string;
	description: string; // para listado
	date: string;
	image: StaticImageData;
	alt: string;
	content: string[]; // párrafos para el detalle
};

export const notices: Notice[] = [
	{
		slug: 'sayaq-innovacion',
		title:
			'Innovación en tuberías de PVC: una solución sostenible para minería, construcción e industria',
		description:
			'Grupo Sayaq reafirma su compromiso con la calidad y la innovación en el suministro de tuberías de PVC...',
		date: 'Lima, julio de 2025',
		image: blog,
		alt: 'Camión mezclador de concreto en sitio de construcción',
		content: [
			'Grupo Sayaq reafirma su compromiso con la calidad y la innovación en el suministro de tuberías de PVC certificadas bajo normas técnicas vigentes, que hoy en día se han convertido en un elemento clave para distintos sectores productivos como minería, construcción civil, industria, energía y agricultura. En el sector minero, las tuberías de PVC son altamente valoradas por su resistencia a la corrosión, su ligereza y su capacidad para transportar fluidos de manera segura en condiciones extremas. En la construcción civil, su versatilidad permite aplicaciones en sistemas de agua potable, desagüe y drenaje, contribuyendo a proyectos más eficientes y duraderos.',
			'La industria energética también ha encontrado en el PVC una alternativa confiable para instalaciones eléctricas y conducciones, reduciendo riesgos y optimizando costos. Por su parte, la agricultura moderna aprovecha estas tuberías en sistemas de riego tecnificado, donde la durabilidad y la facilidad de instalación generan un impacto positivo en la productividad de los cultivos.',
			'Además de su rendimiento, las tuberías de PVC representan una solución sostenible, ya que su fabricación y uso implican un menor consumo energético en comparación con otros materiales, y su vida útil prolongada reduce la necesidad de reemplazos constantes. Con estas características, Grupo Sayaq continúa consolidándose como un aliado estratégico para los sectores que mueven el desarrollo del país, brindando productos de calidad que cumplen los más altos estándares internacionales.',
		],
	},
];

export const noticesHeader = encabezado;
