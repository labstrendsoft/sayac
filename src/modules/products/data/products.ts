import { StaticImageData } from 'next/image';

// Importa todas las imágenes
import p_01_uno from '@public/products/productos/1.png';
import p_01_dos from '@public/products/productos/2.png';
import p_01_tres from '@public/products/productos/3.png';
import p_01_cuatro from '@public/products/productos/4.png';
import p_02_uno from '@public/products/productos/p1.png';
import p_02_dos from '@public/products/productos/p2.png';
import p_02_tres from '@public/products/productos/p3.png';
import p_02_cuatro from '@public/products/productos/p4.png';

import tuberiaVoladuraCover from '@public/home/fondo02.png';
import tuberiaPolietilenoCover from '@public/home/fondo01.png';

export interface Product {
	slug: string;
	title: string;
	description: string;
	cover: StaticImageData;
	images: StaticImageData[];
	features: string[];
}

export const products: Product[] = [
	{
		slug: 'tuberia-para-voladura',
		title: 'TUBERÍA PARA VOLADURA',
		description:
			'Tuberías especializadas para operaciones de voladura en minería, con cortes, acabados y materiales adaptados a cada operación.',
		cover: tuberiaVoladuraCover,
		images: [p_02_uno, p_02_dos, p_02_tres, p_02_cuatro],
		features: [
			'Abastecemos tu tubería con corte en media caña, corte diagonal, tapas y tapones o el acabado que su operación requiera.',
			'Tuberías para taladros largos ideales para labores Sub Level Stoping, Sub Level Caving con bloqueos para explosivos como ANFO y emulsión.',
		],
	},
	{
		slug: 'tuberia-poli',
		title: 'TUBERÍA Y ACCESORIOS DE POLIETILENO',
		description:
			'Soluciones en polietileno de alta resistencia para minería y construcción.',
		cover: tuberiaPolietilenoCover,
		images: [p_01_uno, p_01_dos, p_01_tres, p_01_cuatro],
		features: [
			'Somos fabricantes especialistas en tubos HDPE y tubos para voladuras.',
			'Tubería y accesorios de PVC.',
			'Tuberías Herméticas.',
		],
	},
];
