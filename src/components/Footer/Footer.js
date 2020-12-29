import React from 'react';
import { CgFacebook, CgInstagram, CgTwitter } from 'react-icons/cg';
import {
  FooterContainer,
  FooterContent,
  Paragraph,
  SocialIcons,
  SocialLink,
} from './FooterStyles';

function Footer({ title }) {
  return (
    <FooterContainer>
      <FooterContent>
        <h2>{title}</h2>
        <SocialIcons>
          <SocialLink href="https://facebook.com">
            <CgFacebook />
          </SocialLink>
          <SocialLink href="https://instagram.com">
            <CgInstagram />
          </SocialLink>
          <SocialLink href="https://twitter.com">
            <CgTwitter />
          </SocialLink>
        </SocialIcons>
        <Paragraph>
          {new Date().getFullYear().toString()}. ©Todos los derechos reservados.
        </Paragraph>
      </FooterContent>
    </FooterContainer>
  );
}

export default Footer;
