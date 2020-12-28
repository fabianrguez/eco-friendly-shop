import { CgMenuRight } from '@react-icons/all-files/cg/CgMenuRight';
import { CgShoppingCart } from '@react-icons/all-files/cg/CgShoppingCart';
import { Link } from 'gatsby';
import React, { useState } from 'react';
import image from '../../images/logo-no-bg.png';
import {
  Logo,
  Navbar,
  NavbarToggle,
  Navigation,
  NavItem,
  NavItems,
  ShoppingBadge,
  ShoppingCart,
  Title,
} from './HeaderStyles';

function Header({ title = '' }) {
  const [mobileNavigationOpen, setMobileNavigationOpen] = useState(false);
  const [navItems] = useState([
    { path: '/', name: 'Inicio', id: 1 },
    { path: '/', name: 'Sobre nosotros', id: 2 },
  ]);

  return (
    <Navbar>
      <Logo src={image} alt="logo" />
      <Title>{title}</Title>
      <Navigation>
        <NavbarToggle
          open={mobileNavigationOpen}
          onClick={() => setMobileNavigationOpen(!mobileNavigationOpen)}
        >
          <CgMenuRight />
        </NavbarToggle>
        <NavItems open={mobileNavigationOpen}>
          {navItems.map(navItem => (
            <NavItem key={navItem.id}>
              <Link to={navItem.path}>{navItem.name}</Link>
            </NavItem>
          ))}
          <ShoppingCart>
            <ShoppingBadge>2</ShoppingBadge>
            <CgShoppingCart />
          </ShoppingCart>
        </NavItems>
      </Navigation>
    </Navbar>
  );
}

export default Header;
