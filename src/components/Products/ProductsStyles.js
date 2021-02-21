import styled from 'styled-components';

export const ProductsListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProductsListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const ProductCard = styled.div`
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  min-height: 478px;
  min-width: 220px;
  max-width: 300px;
  padding: 1rem;
  margin: 0.35rem;
  cursor: pointer;
  transition: all ease-in-out 0.4s;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    transform: scale(1.02);
  }
`;

export const ProductPrice = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background: #f7a4a4;
  padding: 0.6rem 2rem;
  border-radius: 5px;
  font-size: 24px;
  color: #fff;
  font-weight: 800;
`;
