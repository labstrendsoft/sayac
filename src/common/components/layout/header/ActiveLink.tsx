import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Nav } from '@/common/types/nav';

export const ActiveLink = ({
	name,
	href,
	icon,
	active,
}: Nav & { active: boolean }) => {
	return (
		<Link
			href={href}
			className="w-full text-center text-xs font-medium text-white uppercase"
		>
			{icon}
			<p
				className={cn(
					' whitespace-nowrap ',
					active && 'text-sayac-amarillo',
					'hover:text-sayac-amarillo'
				)}
			>
				{name}
			</p>
		</Link>
	);
};
