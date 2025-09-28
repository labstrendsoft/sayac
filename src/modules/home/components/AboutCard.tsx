import { Container } from '@/common/components/customize/Container';
import uno from '@public/home/1.webp';
import dos from '@public/home/2.webp';
import tres from '@public/home/3.webp';
import cuatro from '@public/home/4.webp';
import Image from 'next/image';
import Link from 'next/link';
const AboutCard = () => {
	return (
		<Container
			size="full"
			className="grid grid-cols-1 xl:grid-cols-[0.8fr_1.2fr] py-0 bg-sayac-amarillo px-0"
		>
			{/* Columna izquierda */}
			<div className=" text-black px-12 py-16 flex flex-col justify-center ">
				<span className="text-xs uppercase tracking-wide  font-light">
					Nosotros
				</span>
				<h2 className="text-2xl  md:text-[32px] text-[#030107] font-bold mb-2">
					SOMOS SAYAQ
				</h2>
				<p className="text-sm leading-relaxed mb-6 font-light">
					Grupo SAYAQ S.A.C. Está conformada por un equipo de profesionales con
					más de 5 años de experiencia. Nos especializamos en la
					comercialización, representación y distribución de tuberías de PVC de
					alta calidad y reconocimiento; que cuentan con todas las distintas
					normas técnicas vigentes. Lo que brinda seguridad y cofiabilidad en
					los diferentes sectores donde se requieran.
				</p>
				<Link
					href="/nosotros"
					className="bg-black text-white px-10 rounded-xs py-2.5 w-fit"
				>
					SABER MÁS
				</Link>
			</div>

			{/* Columna derecha */}
			<div className="bg-[#D9D9D9] grid grid-cols-1 sm:grid-cols-2 gap-8 px-10 py-16 w-full">
				<div className="flex items-start gap-4">
					<Image src={uno} className="object-cover" alt="uno" />
					<div>
						<h3 className="text-2xl lg:text-[32px] font-bold text-[#030107]">
							100+
						</h3>
						<p className="text-sm text-gray-700 font-light">
							Proyectos entregados a tiempo.
						</p>
					</div>
				</div>
				<div className="flex items-start gap-4">
					<Image src={dos} className="object-cover" alt="dos" />

					<div>
						<h3 className="text-2xl lg:text-[32px] text-[#030107] font-bold">
							5+
						</h3>
						<p className="text-sm text-gray-700 font-light">
							Años de experiencia comprobada.
						</p>
					</div>
				</div>
				<div className="flex items-start gap-4">
					<Image src={tres} className="object-cover" alt="tres" />

					<div>
						<h3 className="text-2xl lg:text-[32px] text-[#030107] font-bold">
							100%
						</h3>
						<p className="text-sm text-gray-700 font-light">
							Comprometidos con la calidad y normas técnicas.
						</p>
					</div>
				</div>
				<div className="flex items-start gap-4">
					<Image src={cuatro} className="object-cover" alt="cuatro" />

					<div>
						<h3 className="text-2xl lg:text-[32px] text-[#030107] font-bold">
							600,000+{' '}
						</h3>
						<p className="text-sm text-gray-700 font-light">
							Metros de tuberías distribuidas.
						</p>
					</div>
				</div>
			</div>
		</Container>
	);
};

export default AboutCard;
