import React from 'react';
import { CgFacebook, CgInstagram, CgTwitter } from 'react-icons/cg';
import {
  FooterContainer,
  FooterContent,
  Paragraph,
  SocialIcons,
  SocialLink,
  Telephone,
  Mail,
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
          C/Marta S/N, Chimiche, Granadilla de Abona, Santa Cruz de Tenerife,
          España, 38594
        </Paragraph>
        <Paragraph>
          Contacto:
          <Telephone itemprop="telephone" href="tel:000-000-000">
            922-77-00-00
          </Telephone>
          ,
          <Telephone itemprop="telephone" href="tel:000-000-000">
            636-54-31-23
          </Telephone>
          ,
          <Mail itemprop="mail" href="mailto:administracion@ecofriendly.es">
            administracion@ecofriendly.es
          </Mail>
        </Paragraph>
        <Paragraph>
          {new Date().getFullYear().toString()}. ©Todos los derechos reservados.
        </Paragraph>
      </FooterContent>
    </FooterContainer>
  );
}

export default Footer;
