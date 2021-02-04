import styled from 'styled-components';

export const CartProducts = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const TotalPrice = styled.div`
  background: #cecece;
  width: 70%;
  padding: 20px 10px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  font-size: 18px;
  flex-direction: column;
  box-shadow: 0 3px 20px rgba(0, 0, 0, 0.2);
`;

export const PriceRow = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 15px;
`;

export const Price = styled.span`
  font-weight: bolder;
  margin-left: 5px;
  &:after {
    content: '€';
  }
`;

export const CheckoutButton = styled.button`
  border: none;
  padding: 10px 20px;
  background: #f7a4a4;
  border-radius: 10px;
  font-weight: bolder;
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.2);
  transition: all ease-in-out 0.4s;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
  }
`;
