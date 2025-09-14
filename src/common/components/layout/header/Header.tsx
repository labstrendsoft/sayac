'use client';
import Link from 'next/link';
import React from 'react';
import logo from '@public/logo.webp';
import Image from 'next/image';
import { NavLinks } from './NavLinks';
import mail from '@public/iconos/mailIcon.webp';
import phone from '@public/iconos/callIco.webp';
import ubication from '@public/iconos/ubiIcon.webp';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useScrolled } from '@/common/hooks/useScrolled';
import { MobileMenu } from './MenuMovil';
const Header = () => {
	const pathname = usePathname();

	const isScrolled = useScrolled(0); // 👈 mucho más limpio
	const dynamicDetailBases = ['/producto/', '/noticias/'];

	const isDetailPage =
		dynamicDetailBases.some((base) => pathname.startsWith(base)) &&
		pathname !== '/productos' &&
		pathname !== '/noticias';

	return (
		<header
			className={cn(
				'fixed top-0 z-40 w-full overflow-hidden border-white/30 pt-2.5 md:pb-0 pb-2.5 md:space-y-4 transition-transform duration-500 ease-in-out',
				isDetailPage && 'sticky top-0 bg-black ',
				!isDetailPage && (isScrolled ? 'bg-black shadow-md' : 'bg-transparent')
			)}
		>
			<div className=" mx-auto flex  w-full h-full max-w-[1200px] items-center justify-between px-6 2xl:px-0 ">
				<Link href="/" className="max-w-[100px] ">
					<Image
						src={logo}
						alt="logo de trendacademy"
						className="object-cover will-change-transform"
						priority
					/>
				</Link>
				<div className="w-full hidden  md:flex items-center justify-end ">
					<div className="flex items-stretch justify-end divide-x gap-4 divide-white py-1.5 text-white text-xs w-fit ">
						<div className="flex items-center gap-2 pr-4">
							<Image
								src={phone}
								alt="celular"
								className="w-5 object-cover lg:w-7"
							/>{' '}
							<span className="font-light">+51 907 466 257</span>
						</div>
						<div className="flex items-center gap-2 pr-4">
							<Image
								src={mail}
								alt="celular"
								className="w-5 object-cover lg:w-7"
							/>{' '}
							<span className="font-light">ventas@gruposayaq.com</span>
						</div>
						<div className="flex items-center gap-2 pr-4">
							<Image
								src={ubication}
								alt="celular"
								className="w-5 object-cover lg:w-6"
							/>{' '}
							<span className="max-w-[160px] font-light">
								Huerta Niveria Mz. N Lt 6 Lurigancho
							</span>
						</div>
					</div>
				</div>

				{/* <NavLinks /> */}
				<MobileMenu />
			</div>
			<div className=" w-full h-full max-w-[1200px] mx-auto hidden md:flex items-center bg-black/20">
				<NavLinks />

				{/* Search Icon */}
				<a
					href="https://wa.me/51907466257?text=Hola%20quiero%20cotizar%20..."
					className="text-black bg-sayac-amarillo px-6 py-3 text-xs font-bold w-fit whitespace-nowrap "
					target="_blank"
				>
					COTIZAR AHORA
				</a>
			</div>
		</header>
	);
};

export default Header;
