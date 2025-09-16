'use client';
import React, { useRef } from 'react';
import { EmblaOptionsType } from 'embla-carousel';
// import { useDotButton } from './DotButton';
import { PrevButton, NextButton, usePrevNextButtons } from './Arrows';
import useEmblaCarousel from 'embla-carousel-react';
import './embla.css';
// import HomePublicStyles from '../../styles/homePublic.module.css';
// import Fade from 'embla-carousel-fade';

import Autoplay from 'embla-carousel-autoplay';
import { cn } from '@/lib/utils';
import { useAutoplayProgress } from './useAutoplayProgress';
import Image from 'next/image';
import fondo1 from '@public/home/bannerCarousel/fondo.webp';
import fondoMobile1 from '@public/home/bannerCarousel/fondo1Mobiles.webp';

import fondo3 from '@public/home/bannerCarousel/slide3.webp';
import fondoMovil from '@public/home/bannerCarousel/13.webp';

import Link from 'next/link';

type PropType = {
	options?: EmblaOptionsType;
};

const BannerCarouselHome: React.FC<PropType> = (props) => {
	const { options } = props;
	const progressNode = useRef<HTMLDivElement>(null!); // Usamos "non-null assertion"

	const autoplay = Autoplay({ delay: 4000, stopOnInteraction: false });
	// const fade = Fade();
	const [emblaRef, emblaApi] = useEmblaCarousel(
		{ ...options, loop: true, containScroll: false },
		[autoplay]
	);

	const { showAutoplayProgress } = useAutoplayProgress(emblaApi, progressNode);

	// Pasamos handleSlideChange al hook para que se ejecute tras scrollPrev/scrollNext
	const {
		prevBtnDisabled,
		nextBtnDisabled,
		onPrevButtonClick,
		onNextButtonClick,
	} = usePrevNextButtons(emblaApi);

	return (
		<section className="relative h-full w-full overflow-hidden">
			<div
				className="bg-thedooragency-negro relative h-full w-full"
				ref={emblaRef}
			>
				<div className="flex h-full w-full">
					<div className="flex h-full shrink-0 basis-full items-center justify-center">
						<div className="h-full w-full">
							{/* <Image
								src={fondoMobile1}
								alt="fondo de combat"
								className="object-cover w-full h-full object-left md:object-top"
								fill
								placeholder="blur"
								blurDataURL="data:image/webp;base64,UklGRsgAAABXRUJQVlA4ILwAAAAwBACdASogABAAPpE4mEeloyKhMAgAsBIJYwC7AYvOsq/a93k0ny0uZdAA/v8tERUk2vJ/+sL99U1GZtfeWXGN7InPpjbYqq52PEG3yoH+fs5nctcGbBqa7866+VmvxGmd70a/EalJoUtqnCAEse1xrylc6rDvOweFJoSWW/JT9l7O2x+s8Z1oM38mzWEVgLb+chAmMlr3I8TwhILVBOkMQDMrhom+2ZRkqJ2gO8yrDSbS257wsrGYQ2OAAA=="
							/> */}
							<Image
								src={fondo1}
								alt="fondo de combat desktop"
								className="hidden md:block object-cover w-full h-full object-top"
								fill
								placeholder="blur"
								blurDataURL="data:image/webp;base64,UklGRsgAAABXRUJQVlA4ILwAAAAwBACdASogABAAPpE4mEeloyKhMAgAsBIJYwC7AYvOsq/a93k0ny0uZdAA/v8tERUk2vJ/+sL99U1GZtfeWXGN7InPpjbYqq52PEG3yoH+fs5nctcGbBqa7866+VmvxGmd70a/EalJoUtqnCAEse1xrylc6rDvOweFJoSWW/JT9l7O2x+s8Z1oM38mzWEVgLb+chAmMlr3I8TwhILVBOkMQDMrhom+2ZRkqJ2gO8yrDSbS257wsrGYQ2OAAA=="
							/>

							{/* Imagen para mobile */}
							<Image
								src={fondoMobile1}
								alt="fondo de combat mobile"
								className="block md:hidden object-cover w-full h-full object-[100%_30%] sm:object-[100%_45%]"
								fill
								placeholder="blur"
								blurDataURL="data:image/webp;base64,UklGRsgAAABXRUJQVlA4ILwAAAAwBACdASogABAAPpE4mEeloyKhMAgAsBIJYwC7AYvOsq/a93k0ny0uZdAA/v8tERUk2vJ/+sL99U1GZtfeWXGN7InPpjbYqq52PEG3yoH+fs5nctcGbBqa7866+VmvxGmd70a/EalJoUtqnCAEse1xrylc6rDvOweFJoSWW/JT9l7O2x+s8Z1oM38mzWEVgLb+chAmMlr3I8TwhILVBOkMQDMrhom+2ZRkqJ2gO8yrDSbS257wsrGYQ2OAAA=="
							/>
						</div>
					</div>

					<div className="flex h-full shrink-0 basis-full items-center justify-center">
						<div className="relative z-10 h-full w-full">
							{/* <Image
								src={fondo3}
								alt="fondo de combat"
								className="object-cover w-full h-full object-center md:object-top"
								fill
								placeholder="blur"
								blurDataURL="data:image/webp;base64,UklGRtwAAABXRUJQVlA4INAAAAAQBQCdASogABAAPpE6l0eloyIhMAgAsBIJZwC/P2pVWA6xuZh8u7MQyQLMp7nljJgAAP7/iGTfv4s+HNY3hKrP3aaP+G18UNzYvDvd/s707C7NuNJ7ax52bamqI79k9Jj0NoIdlrn/yiqFyUPCqM2VfJJf0QbL/xyrb5kdCSdbuyi5xOqWHYoGRgF/oQ3r7qOWQd8dq8esUuYZaj/g0mo3LSmD9e9IKwLYenXkvILoVJiwDipILuoDM/lKz1FLL3NUhoDc93xfh2f/FHz0MAAA"
							/> */}
							<Image
								src={fondo3}
								alt="fondo de combat desktop"
								className="hidden md:block object-cover w-full h-full object-top"
								fill
								placeholder="blur"
								blurDataURL="data:image/webp;base64,UklGRsgAAABXRUJQVlA4ILwAAAAwBACdASogABAAPpE4mEeloyKhMAgAsBIJYwC7AYvOsq/a93k0ny0uZdAA/v8tERUk2vJ/+sL99U1GZtfeWXGN7InPpjbYqq52PEG3yoH+fs5nctcGbBqa7866+VmvxGmd70a/EalJoUtqnCAEse1xrylc6rDvOweFJoSWW/JT9l7O2x+s8Z1oM38mzWEVgLb+chAmMlr3I8TwhILVBOkMQDMrhom+2ZRkqJ2gO8yrDSbS257wsrGYQ2OAAA=="
							/>

							{/* Imagen para mobile */}
							<Image
								src={fondoMovil}
								alt="fondo de combat mobile"
								className="block md:hidden object-cover w-full h-full object-top sm:object-center"
								fill
								placeholder="blur"
								blurDataURL="data:image/webp;base64,UklGRsgAAABXRUJQVlA4ILwAAAAwBACdASogABAAPpE4mEeloyKhMAgAsBIJYwC7AYvOsq/a93k0ny0uZdAA/v8tERUk2vJ/+sL99U1GZtfeWXGN7InPpjbYqq52PEG3yoH+fs5nctcGbBqa7866+VmvxGmd70a/EalJoUtqnCAEse1xrylc6rDvOweFJoSWW/JT9l7O2x+s8Z1oM38mzWEVgLb+chAmMlr3I8TwhILVBOkMQDMrhom+2ZRkqJ2gO8yrDSbS257wsrGYQ2OAAA=="
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="inset-0  w-full h-full absolute max-w-[1200px] px-6 xl:px-0 mx-auto">
				<div className="absolute max-sm:top-[18%] max-md:top-[15%] max-md:left-1/2 md:top-1/2 max-w-[550px] w-full max-md:-translate-x-1/2 space-y-3.5 md:-translate-y-[50%]">
					<h3 className="text-sayac-amarillo text-sm md:text-lg font-light leading-2 text-center md:text-left">
						GRUPO SAYAQ
					</h3>
					<h4 className="text-white font-bold xl:leading-[60px] tracking-wider text-3xl text-center md:text-left max-md:mx-auto max-md:max-w-[350px] max-xl:max-w-[400px] md:text-4xl text-balance xl:text-5xl">
						GENERANDO INDUSTRIA PARA EL DESARROLLO{' '}
					</h4>
					{/* <span className="text-white/80">
						para concreto, Morteros y Shotcrete.
					</span> */}
					<Link
						href="/productos"
						className="w-fit max-md:mx-auto flex items-center text-black gap-2 bg-sayac-amarillo px-10 py-2 rounded-[2px] text-sm uppercase mt-4 font-medium"
					>
						Ver productos
					</Link>
				</div>
			</div>
			<PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
			<NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
			<div className="fade-in-unique absolute bottom-6 left-1/2 -translate-x-1/2">
				<div
					className={cn('embla__progress', {
						'embla__progress--hidden': !showAutoplayProgress,
					})}
				>
					<div className="embla__progress__bar" ref={progressNode} />
				</div>
			</div>

			{/* <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <div className="flex items-center gap-2">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={cn('embla__dot', {
                'embla__dot--selected': index === selectedIndex,
              })}
            />
          ))}
        </div>
      </div> */}
		</section>
	);
};

export default BannerCarouselHome;
