import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'gatsby';
import clsx from 'clsx';
import { MdClose, MdMenu, MdSearch } from 'react-icons/md';
import HeaderStyles from '../styles/HeaderStyles';
import Logo from './Logo';
import ActionButton from './buttons/ActionButton';
import { menu } from '../constants/menu';
import { useLocation } from '@reach/router';

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  // const params = new URLSearchParams(location.search);
  // console.log(params);
  
  const location = useLocation();
  const params = location.pathname === "/" ? ['', ''] : location.pathname.split('/')
  console.log(location)  
  console.log(params)  
  useEffect(() => {
    if (isNavOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'initial';
    }
  }, [isNavOpen]);


  const handleNavItemClick = () => {
    if (isNavOpen) {
      setIsNavOpen(false);
    }
  };

  return (
    <HeaderStyles>
      {/* <div className="container"> */}
        <div 
        className={`
        header__container 
        ${(params[1] === 'unete' ||
        params[1] === 'contacto' ||
        (params[1] === 'miembros' && params.length > 3) ||
        (params[1] === "blog" && params[3] !== undefined )
      ) && 'bg-color'}`
        } >
          <div className="logo">
            <Logo />
          </div>
          <div className={clsx('nav__wrapper', isNavOpen && 'open')}>
            <div className="mobileIcon">
              <ActionButton
                className="mobileMenuBtn"
                onKeyDown={() => setIsNavOpen(true)}
                onClick={() => setIsNavOpen(true)}
              >
                <MdMenu />
              </ActionButton>
            </div>
            {isNavOpen && (
              <div
                aria-label="Close Menu"
                role="button"
                tabIndex={0}
                className="mobileNavBg"
                onKeyDown={() => setIsNavOpen(false)}
                onClick={() => setIsNavOpen(false)}
              />
            )}
            <nav>
              <ActionButton
                className="mobileMenuCloseBtn"
                onClick={() => setIsNavOpen(false)}
                onKeyDown={() => setIsNavOpen(false)}
              >
                <MdClose />
              </ActionButton>
              <ul>
                {menu.map((item) => (
                  <li key={item.path} className={`${item.path === `/${params[1]}` ? 'active' : ''}`}>
                    <Link to={item.path} onClick={handleNavItemClick}>
                      {item.title}
                    </Link>
                  </li>
                ))}<Link to={'/unete'} onClick={handleNavItemClick} className='join'
              >
                Únete
              </Link>
              </ul>
            </nav>
          </div>
                  
        </div>
      {/* </div> */}
    </HeaderStyles>
  );
}

export default Header;
