import { Link } from 'gatsby';
import React, { useEffect, useState } from 'react';
import {
  CartProducts,
  CheckoutButton,
  Price,
  PriceRow,
  TotalPrice,
} from '../../components/CartPageStyles';
import { BigTitle, Section, Text } from '../../components/globalStyle';
import Layout from '../../components/layout';
import ProductCart from '../../components/ProductCart/ProductCart';
import SEO from '../../components/seo';
import { useStateContext } from '../../context/ContextProvider';
import { getCartItemsTotal, getCartTotalPrice } from '../../context/selectors';

function Cart() {
  const [cartLength, setCartLength] = useState(0);
  const { cart } = useStateContext();

  useEffect(() => {
    setCartLength(getCartItemsTotal(cart));
  }, [cart]);

  return (
    <Layout>
      <SEO title="Tu Carrito"></SEO>
      <Section>
        <BigTitle>
          Tu Carrito ({cartLength}
          {cartLength > 0
            ? cartLength === 1
              ? ' producto'
              : ' productos'
            : ''}
          )
        </BigTitle>
        {cartLength > 0 ? (
          <CartProducts>
            {cart &&
              cart.map(item => (
                <ProductCart
                  key={item.id}
                  id={item.id}
                  image={item.image}
                  name={item.name}
                  price={item.price}
                />
              ))}
            <TotalPrice>
              <PriceRow>
                Total: <Price>{getCartTotalPrice(cart).toFixed(2)}</Price>
              </PriceRow>
              <CheckoutButton>Proceder con el pago</CheckoutButton>
            </TotalPrice>
          </CartProducts>
        ) : (
          <div>
            <BigTitle>Su carrito está vacío</BigTitle>
            <Text>
              Puede ver nuestros productos{' '}
              <Link to="/products">
                <b style={{ color: '#f7a4a4' }}>aquí</b>
              </Link>
            </Text>
          </div>
        )}
      </Section>
    </Layout>
  );
}

export default Cart;
