'use client';
import React from 'react';

import BannerCarouselHome from './components/carouselBanner/CarouselMain';
import { Container } from '@/common/components/customize/Container';
import Image from 'next/image';
import fondo1 from '@public/home/fondo02.png';
import fondo2 from '@public/home/fondo01.png';
import Sectors from './components/sectors/Sectors';
import Link from 'next/link';
import AboutCard from './components/AboutCard';
import { cn } from '@/lib/utils';
import { useScrolled } from '@/common/hooks/useScrolled';

export const HomeView = () => {
	const isScrolled = useScrolled(0);

	return (
		<>
			<Container size="full" className="py-0 px-0 relative h-[100dvh]">
				<BannerCarouselHome />
				<div
					className={cn(
						'max-w-[1200px] xl:block hidden w-full absolute -bottom-[28%] left-1/2 translate-x-[-50%] transition-opacity duration-500 ease-in-out',
						isScrolled ? 'opacity-100 ' : 'opacity-0  pointer-events-none'
					)}
				>
					<AboutCard />
				</div>
			</Container>
			<Container size="full" className="xl:hidden block  w-full py-0 px-0">
				<AboutCard />
			</Container>

			<Container className="xl:mt-[220px]">
				<Sectors />
			</Container>

			<Container size="full" className="py-0 px-0">
				{/* <Values /> */}
				<div className="grid grid-cols-1 lg:grid-cols-2 bg-black">
					<Link
						href="/producto/tuberia-para-voladura"
						className="relative group"
					>
						<Image
							src={fondo1}
							alt="asdsd"
							className="object-cover object-center relative "
						/>
						<div className="absolute bottom-0 text-white sm:py-10 py-6 px-6 sm:px-12 ">
							<span className="text-xs lg:tex-sm text-white/80 font-light">
								PRODUCTOS
							</span>
							<h3 className="text-lg lg:text-xl font-bold mb-2.5 group-hover:underline group-hover:underline-offset-4">
								TUBERÍA PARA VOLADURA
							</h3>
							<p className="max-w-[600px] text-sm lg:text-base font-light">
								Tuberías especializadas para operaciones de voladura en minería,
								con cortes, acabados y materiales adaptados a cada operación..
							</p>
						</div>
					</Link>
					<Link href="/producto/tuberia-poli" className="relative group">
						<Image
							src={fondo2}
							alt="asdsd"
							className="object-cover object-center "
						/>
						<div className="absolute bottom-0 text-black sm:py-10 py-6 px-6 sm:px-12">
							<span className="text-xs lg:tex-sm font-light">PRODUCTOS</span>
							<h3 className="text-lg lg:text-xl font-bold mb-2.5 group-hover:underline group-hover:underline-offset-4">
								TUBERÍA Y ACCESORIOS DE POLIETILENO
							</h3>
							<p className="max-w-[600px] text-sm lg:text-base font-light">
								Tuberías especializadas para operaciones de voladura en minería,
								con cortes, acabados y materiales adaptados a cada operación..
							</p>
						</div>
					</Link>
				</div>
			</Container>
		</>
	);
};
