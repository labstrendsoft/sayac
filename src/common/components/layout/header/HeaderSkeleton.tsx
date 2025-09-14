import React from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

// Skeleton del Header
export const HeaderSkeleton = () => {
	const pathname = usePathname();

	// Rutas que serán sticky
	const stickyRoutes = ['/producto/', '/noticias/'];

	// Determina si la ruta actual requiere sticky
	const isSticky =
		stickyRoutes.some((base) => pathname.startsWith(base)) &&
		pathname !== '/productos' &&
		pathname !== '/noticias';

	return (
		<div
			className={cn(
				'w-full h-[110px] bg-black',
				isSticky ? 'sticky top-0 z-40' : 'fixed top-0 z-40'
			)}
		/>
	);
};
