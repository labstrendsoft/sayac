import Image from 'next/image';
import Link from 'next/link';
import logo from '@public/logo.webp';
import { socialLinks } from '@/modules/contact/data/redes';
import logo_aislamiento from '@public/Modo_de_aislamiento.png';
import { ChevronRight } from 'lucide-react';
export default function Footer() {
	return (
		<footer className="bg-black text-white pt-16 px-6 2xl:px-0">
			<div className="max-w-[1200px] mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{/* Primera columna */}
					<div className="hidden md:flex items-start gap-20  text-sm">
						<div className="space-y-4">
							<ul className="space-y-3">
								<li>
									<Link
										href="/"
										className="text-gray-300 hover:text-white transition-colors flex items-center"
									>
										<ChevronRight className="text-white size-3.5 mr-0.5" />
										Inicio
									</Link>
								</li>
								<li>
									<Link
										href="/nosotros"
										className="text-gray-300 hover:text-white transition-colors flex items-center"
									>
										<ChevronRight className="text-white size-3.5 mr-0.5" />
										Nosotros
									</Link>
								</li>
								<li>
									<Link
										href="/productos"
										className="text-gray-300 hover:text-white transition-colors flex items-center"
									>
										<ChevronRight className="text-white size-3.5 mr-0.5" />
										Productos
									</Link>
								</li>
							</ul>
						</div>

						{/* Segunda columna */}
						<div className="space-y-4">
							<ul className="space-y-3">
								<li>
									<Link
										href="/noticias"
										className="text-gray-300 hover:text-white transition-colors flex items-center"
									>
										<ChevronRight className="text-white size-3.5 mr-0.5" />
										Noticias
									</Link>
								</li>
								<li>
									<a
										href="https://wa.me/51907466257?text=Hola%20quiero%20cotizar%20..."
										className="text-gray-300 hover:text-white transition-colors flex items-center"
										target="_blank"
									>
										<ChevronRight className="text-white size-3.5 mr-0.5" />
										Cotización
									</a>
								</li>
							</ul>
						</div>

						{/* Tercera columna */}
						<div className="space-y-4">
							<ul className="space-y-3">
								<li>
									<Link
										href="/producto/tuberia-para-voladura"
										className="text-gray-300 hover:text-white transition-colors flex items-center"
									>
										<ChevronRight className="text-white size-3.5 mr-0.5" />
										Tubería para voladura
									</Link>
								</li>
								<li>
									<Link
										href="/producto/tuberia-poli"
										className="text-gray-300 hover:text-white transition-colors flex items-center"
									>
										<ChevronRight className="text-white size-3.5 mr-0.5" />
										Tubería y accesorios de polietileno
									</Link>
								</li>
							</ul>
						</div>
					</div>

					{/* Cuarta columna - Logo y redes sociales */}
					<div className="flex lg:flex-row  flex-col-reverse items-center gap-6 w-full justify-center">
						<Image
							src={logo_aislamiento}
							alt="logo de trendacademy"
							className=" object-cover will-change-transform"
						/>
						<div className="gap-2 flex flex-col items-center justify-center">
							<Link href="/" className="max-w-[100px] w-full h-min pb-2">
								<Image
									src={logo}
									alt="logo de trendacademy"
									className=" object-cover will-change-transform"
								/>
							</Link>{' '}
							<div className="flex items-center gap-4">
								{socialLinks.map((social, index) => (
									<Link
										key={index}
										href={social.url}
										className="flex items-center"
										target="_blank"
										rel="noopener noreferrer"
									>
										<Image
											src={social.icon}
											alt={social.name}
											className="h-[25px] w-[25px] object-contain transition-opacity hover:opacity-80"
										/>
									</Link>
								))}
							</div>
						</div>
					</div>
				</div>
				<div className="space-y-4 block md:hidden mt-10">
					<ul className="space-y-3 flex flex-col items-center justify-center text-center">
						<li>
							<Link
								href="/"
								className="text-gray-300 hover:text-white transition-colors font-light text-sm lg:text-base"
							>
								Inicio
							</Link>
						</li>
						<li>
							<Link
								href="/nosotros"
								className="text-gray-300 hover:text-white transition-colors font-light text-sm lg:text-base"
							>
								Nosotros
							</Link>
						</li>
						<li>
							<Link
								href="/productos"
								className="text-gray-300 hover:text-white transition-colors font-light text-sm lg:text-base"
							>
								Productos
							</Link>
						</li>
					</ul>
				</div>
				{/* Copyright */}
				<div className="mt-12 py-8 border-t border-gray-800 text-center">
					<p className="text-gray-300 text-sm font-light ">
						©2025 Thedooragency
					</p>
				</div>
			</div>
		</footer>
	);
}
