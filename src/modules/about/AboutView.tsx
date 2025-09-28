import Banner from '@/common/components/customize/Banner';
import { Container } from '@/common/components/customize/Container';
import React from 'react';
import foto from '@public/about/encabezadoNosotros.webp';
import Image from 'next/image';
import about from '@public/about/1.png';
import dos from '@public/about/2.webp';
import tres from '@public/about/3.webp';

export const AboutView = () => {
	return (
		<>
			<Container size="full" className="py-0 px-0">
				<Banner image={foto} title="Nosotros" overlay={false} />
			</Container>

			<Container size="full" className=" space-y-20 py-10 ">
				<div className="w-full max-w-[1100px] mx-auto">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-10  items-center">
						<div className="space-y-4 max-w-[600px] max-lg:mx-auto">
							<h2 className="text-2xl md:text-3xl font-bold max-lg:text-center">
								¿QUIÉNES SOMOS?
							</h2>

							<p className="text-balance max-w-[500px] text-sm md:text-base font-light max-lg:text-center">
								Grupo SAYAQ S.A.C. Está conformada por un equipo de
								profesionales con más de 5 años de experiencia. Nos
								especializamos en la comercialización, representación y
								distribución de tuberías de PVC de alta calidad y
								reconocimiento; que cuentan con todas las distintas normas
								técnicas vigentes. Lo que brinda seguridad y cofiabilidad en los
								diferentes sectores donde se requieran.
							</p>
						</div>
						<Image
							src={about}
							alt="asdsd"
							className="w-auto object-cover mx-auto lg:ml-auto"
						/>
					</div>
				</div>
			</Container>
			<Container size="full" className="py-10 bg-[#F9F9F9]">
				<div className="w-full max-w-[1100px] mx-auto ">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-10  items-center">
						<Image
							src={tres}
							alt="asdsd"
							className="w-auto object-cover max-lg:mx-auto order-2 lg:order-1"
						/>

						<div className="space-y-4 max-w-[600px] mx-auto order-1 lg:order-2">
							<div className=" flex flex-col lg:items-end items-center lg:justify-end justify-center">
								<span className="text-[#F19C49] text-sm text-center lg:text-end w-full font-light">
									NUESTRA
								</span>
								<h2 className="text-2xl md:text-3xl font-bold text-center lg:text-end">
									EXPERIENCIA
								</h2>
							</div>

							<p className="text-balance max-w-[500px] text-sm md:text-base text-center lg:text-end ml-auto font-light">
								Nuestra experiencia nos permite abastecer de manera oportuna los
								requerimientos de nuestros clientes, gracias a nuestra moderna
								infraestructura y personal experimentado. Como empresa nos
								acoplamos a los requerimientos del mercado.
							</p>
						</div>
					</div>
				</div>
			</Container>
			<Container size="full" className="py-10">
				<div className="w-full max-w-[1100px] mx-auto ">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-10  items-center">
						<div className="space-y-4 max-w-[600px] max-lg:mx-auto">
							<div>
								<div className="text-[#F19C49] text-sm lg:text-start w-full max-lg:mx-auto font-light text-center">
									NUESTRA
								</div>

								<h2 className="text-2xl md:text-3xl font-bold max-lg:text-center">
									PROPUESTA DE VALOR
								</h2>
							</div>

							<p className="text-balance max-w-[500px] text-sm md:text-base font-light max-lg:text-center">
								Nuestra planta está orientada al desarrollo de tuberías
								especializadas para labores de perforación y voladura en minería
								subterránea. Mantenemos inventario de diámetros y longitudes
								especiales para cumplir con la necesidad de nuestros clientes.
							</p>
						</div>
						<Image
							src={dos}
							alt="asdsd"
							className="w-auto object-cover mx-auto lg:ml-auto"
						/>
					</div>
				</div>
			</Container>
		</>
	);
};
