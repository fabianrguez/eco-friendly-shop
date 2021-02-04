import { CgMenuRight } from '@react-icons/all-files/cg/CgMenuRight';
import { CgShoppingCart } from '@react-icons/all-files/cg/CgShoppingCart';
import { Link } from 'gatsby';
import React, { useEffect, useState } from 'react';
import { useStateContext } from '../../context/ContextProvider';
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
import { getCartItemsTotal } from '../../context/selectors';

function Header({ title = '', menuOpen, menuOpenHandler }) {
  const [navItems] = useState([
    { path: '/', name: 'Inicio', id: 1 },
    { path: '/products', name: 'Nuestros productos', id: 2 },
    { path: '/about-us', name: 'Sobre nosotros', id: 3 },
  ]);
  const { cart } = useStateContext();
  const [cartItemsTotal, setCartItemsTotal] = useState(0);

  useEffect(() => {
    setCartItemsTotal(getCartItemsTotal(cart));
  }, [cart]);

  return (
    <Navbar>
      <Link to="/">
        <Logo src={image} alt="logo" />
      </Link>
      <Title>{title}</Title>
      <Navigation>
        <NavbarToggle
          open={menuOpen}
          onClick={() => menuOpenHandler(!menuOpen)}
        >
          <CgMenuRight />
        </NavbarToggle>
        <NavItems open={menuOpen}>
          {navItems.map(navItem => (
            <NavItem key={navItem.id}>
              <Link to={navItem.path}>{navItem.name}</Link>
            </NavItem>
          ))}
          <Link to="/cart">
            <ShoppingCart>
              <ShoppingBadge show={cartItemsTotal > 0}>
                {cartItemsTotal}
              </ShoppingBadge>
              <CgShoppingCart />
            </ShoppingCart>
          </Link>
        </NavItems>
      </Navigation>
    </Navbar>
  );
}

export default Header;
