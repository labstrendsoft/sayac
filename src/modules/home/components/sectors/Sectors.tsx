import React from 'react';
import fondo from '@public/home/decoracion.png';
import Image from 'next/image';
import uno from '@public/home/sectores/1.png';
import dos from '@public/home/sectores/2.png';
import tres from '@public/home/sectores/3.png';
import cuatro from '@public/home/sectores/4.png';
import cinco from '@public/home/sectores/5.png';
const SECTORS = [
	{
		title: 'Minería',
		description:
			'Proveemos soluciones robustas para operaciones mineras, incluyendo tuberías para voladura, conducción de agua y sistemas de drenaje resistentes a químicos y presión.',
		image: uno,
	},
	{
		title: ' Construcción Civil',
		description:
			'Ofrecemos materiales confiables para obras civiles, canalizaciones, sistemas de desagüe y soluciones estructurales que requieren resistencia y durabilidad.',
		image: cinco,
	},
	{
		title: 'Industria',
		description:
			'Suministramos tuberías industriales para la conducción de fluidos, químicos o gases, con altos estándares de seguridad y resistencia a la abrasión.',
		image: cuatro,
	},
	{
		title: 'Energía',
		description:
			'Proveemos tuberías y accesorios para plantas eléctricas, sistemas de enfriamiento, drenajes industriales y canalización de cables en proyectos energéticos.',
		image: tres,
	},
	{
		title: 'Agricultura',
		description:
			'Brindamos sistemas de riego tecnificado y soluciones de conducción para agua y fertilizantes, orientadas a optimizar los recursos en el agro.',
		image: dos,
	},
];

const Sectors = () => {
	return (
		<div className="relative w-full">
			<Image
				src={fondo}
				alt="asdsd"
				className="object-cover absolute flex items-center justify-center left-1/2 -translate-x-1/2 -top-4 z-[-10]"
			/>
			<div className="flex flex-col items-center justify-center gap-2 mb-16">
				<span className="text-[#F19C49] text-sm font-light">
					¿QUÉ BRINDAMOS?
				</span>
				<h2 className="font-bold text-2xl text-center lg:text-3xl mb-4">
					SECTORES QUE ATENDEMOS
				</h2>
				<p className="text-center text-sm lg:text-base max-w-[956px] mx-auto font-light">
					En Grupo SAYAQ brindamos soluciones eficientes y especializadas en
					sistemas de tuberías para diversos sectores productivos del país. A
					continuación, conoce los principales rubros en los que trabajamos:
				</p>
			</div>
			<div className="w-full flex flex-wrap items-start justify-center gap-y-10 gap-x-6 max-w-[1200px] mx-auto">
				{SECTORS.map((sector, index) => (
					<div
						key={index}
						className="flex flex-col items-center justify-center gap-2.5 max-w-[350px]  text-center"
					>
						<Image
							src={sector.image}
							alt={sector.title}
							className="object-cover"
						/>
						<h3 className="font-bold text-xl">{sector.title}</h3>
						<p className="font-light text-sm lg:text-base">
							{sector.description}
						</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Sectors;
