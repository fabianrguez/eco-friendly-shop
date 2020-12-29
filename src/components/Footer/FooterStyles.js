import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background: #f7a4a4;
  padding: 2rem;
`;

export const FooterContent = styled.div`
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

export const SocialIcons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
`;

export const SocialLink = styled.a`
  background: #fff;
  margin: 0.25rem;
  padding: 0.25rem 0.5rem;
  transition: all ease-in-out 0.4s;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: scale(1.08);
  }
`;

export const Paragraph = styled.p`
  font-size: small;
`;
