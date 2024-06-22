import styled from 'styled-components';

export default styled.header`
  /* position: absolute;
  top: 0;
  left: 0; */
  width: 100%;
  height: 100px;
  z-index: 1000;
  .navigation {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  .bg-color {
    background-color: var(--text-primary) !important;
    .link a, .join {
      color: var(--bg-main) !important;
    }
    .join {
      border-color: var(--bg-main);
      &:hover {
        color: var(--text-primary) !important;
        border-color: var(--text-primary);
        background-color: var(--bg-main);
        }
      
    }
    .logo svg {
      color: var(--bg-main) !important;
    }
    .active a{
      color: var(--text-primary) !important;
      background-color:  var(--bg-main) !important;
    }
  }
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease-in-out;
  .logo {
    svg {
      transition: color .6s;
      color: var(--text-primary);
    
    }
  }
  .header__container {
  /* margin: 1rem 0; */
    transition: background-color 0.3s ease-in-out;
    width: 100%;
    padding-inline: 4rem;
    height: 100px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    gap: 4rem;
    align-items: center;
  }
  .join {
    display: inline-block;
    text-decoration: none;
    font-size: 1.8rem;
    padding: 0.5rem 1rem;
    transition: background-color 0.3s;
    border: 2px solid var(--text-primary);
    color: var(--text-primary);
    &:hover {
      color: var(--bg-main);
        background-color: var(--text-primary);
    }
  }
  .nav__wrapper {
    max-width: 1200px;
    
    width: 100%;
    justify-content: space-around;
    display: flex;
    ul {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      li {
        &.active {
         a {
           background-color: var(--text-primary);
           color: var(--bg-main);
         }
          
        }
        &:hover {
          a {
           background-color: var(--text-primary);
           color: var(--bg-main);
          }
        }
        a {
          color: var(--text-primary);
          display: inline-block;
          text-decoration: none;
          font-size: 1.8rem;
          padding: 0.5rem 1rem;
          border-radius: 6px;
          transition-property: color, background-color;
          transition-duration: .3s;
        }
      }
    }
  }

  .searchIcon {
    cursor: pointer;
    font-size: 25px;
    .searchIcon__wrapper {
      border-radius: 6px;
      padding: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background-color .3s;
      background-color: var(--white-1);
    }
    &:hover .searchIcon__wrapper {
      background-color: var(--light-gray);
    }
  }
  .mobileMenuCloseBtn,
  .mobileNavBg,
  .mobileIcon,
  .mobileMenuBtn {
    display: none;
  }
  @media only screen and (max-width: 998px) {
    height: 80px;
    .bg-color {
      .mobileMenuBtn, .mobileIcon {
        border-color: var(--bg-main) !important;
        color: var(--bg-main) !important;
      }
    }
    .header__container {
      
    justify-content: space-between};
    
    .mobileMenuCloseBtn,
    .mobileNavBg,
    .mobileIcon,
    .mobileMenuBtn {
      display: initial;
    }
    .mobileIcon {
      color: var(--text-white);
    }
    .nav__wrapper {
      width: revert;
      nav {
        z-index: 1002;
        position: fixed;
        top: 0;
        right: 0;
        width: 80%;
        transform: translateX(100%);
        background-color: var(--jet-stream);
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        transition: 0.3s ease transform;
        ul {
          width: 90%;
          margin: 0 auto;
          flex-direction: column;
          li {
            display: block;
            margin: 0.5rem 0;
            &:hover {
              a {
                background-color: var(--light-gray);
              }
            }
            a {
              width: 100%;
              padding: 0.5rem 1rem;
              border-radius: 4px;
              text-align: center;
            }
            &.searchIcon {
              display: none;
            }
            
          }
        }
        .mobileMenuCloseBtn {
          color: crimson;
          position: absolute;
          top: 10px;
          right: 10px;
          border-color: crimson;
          &:hover {
            background-color: crimson;
            color: var(--white);
          }
        }
      }
      &.open {
        nav {
          transform: translateX(0);
        }
      }
      .mobileNavBg {
        z-index: 1001;
        position: fixed;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        transition: opacity 0.6s linear 0s;
        background-color: rgba(0, 0, 0, 0.5);
      }
    }
    .mobileIcon {
      display: flex;
      gap: 1rem;
    }
    .mobileMenuBtn {
      svg {
        font-size: 2.5rem;
      }
    }
  }
`;
