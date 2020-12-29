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
  padding: 0.25rem 0.5rem;
  transition: all ease-in-out 0.4s;

  &:hover {
    transform: scale(1.08);
  }
`;

export const Paragraph = styled.p`
    font-size: small;
`;
