import { Link } from 'gatsby';
import React from 'react';
import { menu } from '../constants/menu';
import { socialLinks } from '../constants/socialLinks';
import { FooterStyles } from '../styles/FooterStyles';
import ParagraphText from './typography/ParagraphText';
import Logo from './Logo';

function Footer() {
  return (
    <FooterStyles>
      <div className="container">
        <div className="col-1">
          <Logo/>
          <h2>Circulo de Inversion y Finanzas de la Universidad del Pacifico</h2>
        </div>
        <div className="col-2">
        <ul className="footer__socialList">
          {socialLinks.map((item) => (
            <li key={item.name}>
              <a href={item.url} target='_blank'>{item.icon}</a>
            </li>
          ))}
        </ul>
        </div>
        <div className="col-3">
          <h2>Colaboraciones</h2>
          <ul>
            <li><Logo></Logo></li>
            <li><Logo></Logo></li>
            <li><Logo></Logo></li>
          </ul>
        </div>
      {/* <ParagraphText className="footer__text">
      “El verbo leer, como el verbo amar y el verbo soñar, no soporta el modo imperativo”. - Jorge Luis Borges
        </ParagraphText>
        <ul className="footer__menuList">
          {menu.map((item) => (
            <li key={item.path}>
              <Link to={item.path}>{item.title}</Link>
            </li>
          ))}
        </ul>*/}
      </div>
      
      <div className='join-container'>
        <Link to={'/contacto'} className='join'
          // className="searchIcon__wrapper"
          // onClick={handleSearchModalOpen}
          // onKeyDown={handleSearchModalOpen}
          // tabIndex={0}
          // role="button"
        >
          Contacto
        </Link>
        <span className=''>
          Para colaboraciones y consultas
        </span>
      </div>

                  
        <ParagraphText className="copyright">
          LEE UP {new Date().getFullYear()} © Todos los derechos reservados.
        </ParagraphText> 
    </FooterStyles>
  );
}

export default Footer;
