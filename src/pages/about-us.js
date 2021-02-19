import React from 'react';
import {
  BigTitle,
  LargeText,
  Section,
  Signature,
} from '../components/globalStyle';
import Layout from '../components/layout';
import SEO from '../components/seo';

function aboutUs() {
  return (
    <Layout>
      <SEO title="Sobre Nosotros" />
      <Section>
        <BigTitle>Sobre Nosotros</BigTitle>
        <LargeText>
          Somos <span>Eco&Friendly</span> y queremos darte las gracias por
          llegar hasta aquí y estar leyendo esto. A finales de 2020 quisimos
          montar nuestro pequeño negocio para ofrecer una opción de compra
          saludable, consciente, sonstenible y respetuosa con el medio ambiente.
        </LargeText>
        <LargeText>
          <br />
          Tanto si empiezas a intereasarte ahora por las alternativas
          respetuosas con el medio ambiente, como si ya conoces bien el impacto
          medioambiental de lo que usas a diario, estámos aquí para apoyarte.
          Nuestra misión es encontrar productos que sean eficaces y sotenibles,
          para llevarlos a tu casa con el menor impacto posible. Así lograremos
          el ahorro perfecto: ahorras tú, con artículos de calidad, naturales y
          duraderos; y le ahorraremos al planeta los residuos generados por
          embalajaes, plásticos, químicos y transportes innecesarios.
        </LargeText>
        <LargeText>
          <br />
          Creemos que un consumo sostenible empieza por elegir productos de alta
          calidad, elaborados con esmero y sobre todo duraderos. Respetamos a
          los animales, los amamos y nunca haríamos pruebas sobre ellos, ni los
          utilizaremos de ninguna forma en nuestra oferta. Para nosotros es
          lógico utilizar el envase mínimo, hecho con el mayor contenido
          reciclado posible y que por tanto, se pueda reciclar fácilmente.
        </LargeText>
        <Signature style={{ alignSelf: 'flex-end' }}>
          <br /> El equipo de <span>Eco&friendly</span>
        </Signature>
      </Section>
    </Layout>
  );
}

export default aboutUs;
