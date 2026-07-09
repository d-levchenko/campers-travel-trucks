'use client';

import Link from 'next/link';
import css from './NavList.module.css';
import { usePathname } from 'next/navigation';

const NavList = () => {
  const pathname = usePathname();

  return (
    <nav className={css.nav}>
      <ul className={css.list}>
        <li>
          <Link
            href="/"
            className={`${css.link} ${pathname === '/' && css.linkActive}`}>
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/campers"
            className={`${css.link} ${pathname === '/campers' && css.linkActive}`}>
            Catalog
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavList;
