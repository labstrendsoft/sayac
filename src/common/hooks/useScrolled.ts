import { useEffect, useState } from 'react';

export function useScrolled(threshold = 50) {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => setIsScrolled(window.scrollY > threshold);

		window.addEventListener('scroll', handleScroll, { passive: true });
		handleScroll(); // asegurar estado inicial correcto

		return () => window.removeEventListener('scroll', handleScroll);
	}, [threshold]);

	return isScrolled;
}
