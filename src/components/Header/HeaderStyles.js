import styled from 'styled-components';

export const Navbar = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  background: #fefefe;
  z-index: 1;
`;

export const Navigation = styled.nav`
  display: flex;
`;

export const NavItems = styled.ul`
  display: flex;
  align-items: center;
  text-align: center;
  list-style: none;
  background: #f7a4a4;
  transition: all ease 0.4s;
  border-radius: 40px;
  padding: 1rem;
  margin: 1rem;

  @media (max-width: 768px) {
    position: fixed;
    right: 0;
    top: 0;
    height: ${props => (props.open ? '100%' : 0)};
    background: #f7a4a4;
    z-index: 1;
    margin: 0;
    flex-direction: column;
    justify-content: center;
    border-top-left-radius: 40px;
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
    box-shadow: -5px 0 7px rgba(0, 0, 0, 0.2);
    width: 150px;
    opacity: ${props => (props.open ? 1 : 0)};
    transform: translateX(${props => (props.open ? '0' : '150px')});
  }
`;

export const NavItem = styled.li`
  padding: 0.75rem;
  cursor: pointer;
  transition: all ease 0.4s;
  color: #fff;
  font-weight: 600;
  text-transform: capitalize;
  margin: 0.15rem;

  &:hover {
    background: #fff;
    border-radius: 40px;
    color: #f7a4a4;
  }
`;

export const ShoppingCart = styled.li`
  position: relative;
  font-size: 2.2rem;
  color: #fff;
  cursor: pointer;
  transition: all ease 0.4s;

  &:hover {
    transform: scale(1.04);
  }

  @media (max-width: 768px) {
    position: fixed;
    bottom: 20px;
  }
`;

export const ShoppingBadge = styled.span`
  position: absolute;
  border-radius: 50%;
  background: #fff;
  height: 15px;
  width: 15px;
  right: 0;
  color: #f7a4a4;
  font-size: small;
`;

export const NavbarToggle = styled.button`
  z-index: 2;
  opacity: 0;
  display: none;
  margin: 2rem;
  padding: 0.45rem;
  border: none;
  outline: none;
  cursor: pointer;
  background: transparent;
  font-size: 2.2rem;
  color: ${props => (props.open ? '#fff' : '#f7a4a4')};

  @media (max-width: 768px) {
    opacity: 1;
    display: inline-block;
  }
`;

export const Title = styled.h1`
  flex: 1;
  margin: 1rem;
`;

export const Logo = styled.img`
  object-fit: cover;
  height: 80px;
  margin-left: 10px;
  align-self: center;
`;
