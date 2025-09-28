// lib/seoConfig.ts

// export const Pages = {
// 	HOME: 'home',
// 	CONTACT: 'contact',
// 	ABOUT: 'about',
// 	BLOG: 'blogs',
// 	PRODUCTS: 'products',
// 	TERMS: 'terms',
// 	PRIVACY: 'privacy',
// 	COMPLAINTS: 'complaints',
// 	LOGIN: 'login',
// 	REGISTER: 'register',
// } as const;

// -----------------------------------------------------------------------------------------------------------
// Configuración base SEO

export const DEFAULT_DESCRIPTION =
	'Grupo SAYAQ S.A.C. especialistas en comercialización, representación y distribución de tuberías de PVC de alta calidad para minería y construcción.';

export const DEFAULT_KEYWORDS = [
	'SAYAQ',
	'Grupo SAYAQ',
	'tuberías PVC',
	'PVC minería',
	'PVC construcción',
	'perforación',
	'voladura',
	'minería subterránea',
	'distribución PVC',
	'empresa de tuberías',
];

// export const DEFAULT_THEME_COLOR = "#000000"
// export const DEFAULT_COLOR_SCHEME = "light"
export const DEFAULT_APPLICATION_NAME = 'Grupo SAYAQ';
export const DEFAULT_AUTHORS = [
	{
		name: 'Grupo SAYAQ S.A.C.',
		url: process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000',
	},
];

//-----------------------------------------------------------------------------------------------------------
// Fallbacks por página

export const DEFAULT_SEO_HOME = {
	title: 'Inicio | Grupo SAYAQ',
	description: DEFAULT_DESCRIPTION,
	keywords: DEFAULT_KEYWORDS,
};

export const DEFAULT_SEO_CONTACT = {
	title: 'Contacto | Grupo SAYAQ',
	description:
		'¿Tienes consultas o cotizaciones? Contáctanos y nuestro equipo especializado te ayudará a encontrar la solución en tuberías de PVC que necesitas.',
	keywords: ['contacto', 'Grupo SAYAQ', 'cotización', 'soporte', 'PVC'],
};

export const DEFAULT_SEO_ABOUT = {
	title: 'Sobre Nosotros | Grupo SAYAQ',
	description:
		'SAYAQ cuenta con más de 5 años de experiencia en la comercialización, representación y distribución de tuberías de PVC de alta calidad. Nos adaptamos a las necesidades del mercado minero y de construcción.',
	keywords: [
		'acerca de',
		'Grupo SAYAQ',
		'empresa tuberías PVC',
		'minería subterránea',
		'distribución PVC',
	],
};

export const DEFAULT_SEO_BLOG = {
	title: 'Blog | Grupo SAYAQ',
	description:
		'Lee artículos, novedades y consejos sobre el uso de tuberías de PVC en minería subterránea y construcción.',
	keywords: [
		'blog',
		'Grupo SAYAQ',
		'PVC minería',
		'tuberías de construcción',
		'perforación y voladura',
	],
};

export const DEFAULT_SEO_PRODUCTS = {
	title: 'Productos | Grupo SAYAQ',
	description:
		'Explora nuestra gama de tuberías de PVC de alta calidad para minería subterránea, construcción y sectores industriales.',
	keywords: [
		'productos PVC',
		'Grupo SAYAQ',
		'tuberías de PVC',
		'PVC minería',
		'PVC construcción',
		'perforación',
		'voladura',
	],
};

export const DEFAULT_SEO_TERMS = {
	title: 'Términos y Condiciones | Grupo SAYAQ',
	description:
		'Revisa los términos y condiciones de uso de la página web y servicios de Grupo SAYAQ S.A.C.',
	keywords: ['términos', 'condiciones', 'uso', 'Grupo SAYAQ'],
};

export const DEFAULT_SEO_PRIVACY = {
	title: 'Política de Privacidad | Grupo SAYAQ',
	description:
		'Conoce cómo Grupo SAYAQ protege tu información personal y la forma en que utilizamos tus datos para brindarte un mejor servicio.',
	keywords: ['privacidad', 'protección de datos', 'Grupo SAYAQ'],
};

export const DEFAULT_SEO_COMPLAINTS = {
	title: 'Libro de Reclamaciones | Grupo SAYAQ',
	description:
		'Accede al Libro de Reclamaciones de Grupo SAYAQ y presenta tu reclamo o queja de manera rápida y sencilla.',
	keywords: ['libro de reclamaciones', 'reclamos', 'quejas', 'Grupo SAYAQ'],
};

export const DEFAULT_SEO_NOTICIES = {
	title: 'Noticias | Grupo SAYAQ',
	description:
		'Entérate de las últimas noticias, novedades y consejos sobre el uso de tuberías de PVC en minería subterránea y construcción.',
	keywords: [
		'noticias',
		'Grupo SAYAQ',
		'PVC minería',
		'tuberías de construcción',
		'perforación y voladura',
	],
};
