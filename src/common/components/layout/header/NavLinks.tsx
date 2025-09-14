'use client';

import { ActiveLink } from './ActiveLink';
import { useMenuList } from './useMenuList';

export const NavLinks = () => {
	const menuList = useMenuList();

	return (
		<div className=" gap-10 flex w-full px-10 ">
			{menuList.map((link) => (
				<ActiveLink key={link.name} {...link} />
			))}
		</div>
	);
};
