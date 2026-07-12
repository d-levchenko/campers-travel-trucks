import Link from 'next/link';
import css from './Header.module.css';
import SvgIcon from '../SvgIcon/SvgIcon';
import NavList from './NavList/NavList';

const Header = () => {
  return (
    <header className={css.header}>
      <Link href="/" aria-label="Main logo" className={css.logoLink}>
        <SvgIcon name="mainLogo" width={136} height={16} />
      </Link>

      <NavList />
    </header>
  );
};

export default Header;
