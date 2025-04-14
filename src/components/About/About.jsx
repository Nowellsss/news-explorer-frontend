
import React from 'react';

import authorpicture from '../../images/jorge.jpg';

const About = () => (
  <section className="about">
    <img className="about__image" src={authorpicture} alt="author picture" />
    <div className="about__text">
      <h2 className="about__text-title">Sobre o autor</h2>
      <p className="about__text-para">
      Sou formado em Logística e Administração, porém obtive uma oportunidade com a Tripleten de desenvolver as minhas capacidades de programação web. Espero com este projeto obter o certificado onde apresentei todas as capacidades para ser um desenvolvedor autonomo.
      </p>
      

    </div>
  </section>
);

export default About;
