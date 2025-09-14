'use client';

import dynamic from 'next/dynamic';
import React from 'react';
import { HeaderSkeleton } from './HeaderSkeleton';

// Skeleton mientras carga

// Import dinámico del Header con fallback
const Header = dynamic(() => import('./Header'), {
	loading: () => <HeaderSkeleton />,
	ssr: false, // solo en cliente
});

export const HeaderWrapper = () => {
	return <Header />;
};
