import * as React from "react"
import { graphql, useStaticQuery, type HeadFC, type PageProps } from "gatsby"

import HeroSection from '../components/homePage/HeroSection';
import Seo from '../components/seo';
import JoinStyles from "../styles/JoinStyles";
import Header from "../components/Header";
import PageSpace from "../components/PageSpace";
import ContactStyles from "../styles/contactStyles";
import { Title } from "../components/typography/Title";
import { StaticImage } from "gatsby-plugin-image";
import ParagraphText from "../components/typography/ParagraphText";
// import { PodcastsStyles } from "../../styles/homePage/PodcastsStyle";

const IndexPage: React.FC<PageProps>  = () => {
    const form = React.useRef();
      const [isTooltipShowing, setIsTooltipShowing] = React.useState({display: false, status: ""})
      const displayTooltip = (value) => {
        setIsTooltipShowing({display: true, status: value})
        setTimeout(() => {
          setIsTooltipShowing({display: false, status: value})
        }, 3000)
      }
    
    //   const sendEmail = (e) => {
    //     e.preventDefault();
    
    //     emailjs
    //     .sendForm('service_8nr81rx', 'template_nnka0ra', form.current, {
    //       publicKey: 'EUegBhPVzc5CFFQka',
    //     })
    //       .then(
    //         () => {
    //           form.current[0].value = ""
    //           form.current[1].value = ""
    //           form.current[2].value = ""
    //           form.current[3].value = ""
    //           displayTooltip("Mensaje enviado")
    //         },
    //         (error) => {
    //           displayTooltip("Error al enviar mensaje")
    //         },
    //       );
    //   };
    
      return (  
      <PageSpace top={80} bottom={100}>
        <Seo title="Contacto" />
        <ContactStyles>
          <div className={`${isTooltipShowing.display ? 'tooltip-active' : 'tooltip-inactive'} tooltip`}>
            {isTooltipShowing.status}
          </div>
          <div className="container">
             <Title className="title">
                 Contacto
             </Title>
             {/* <section className='image__wrapper'>
                <div className='left'>
                  <StaticImage
                    className="left__image"
                    src="../images/imagen-contacto-1.jpeg"
                    alt="vr guy"
                    placeholder="blurred"
                    // objectPosition="50% 30%"
                  />
                </div>
                <div className='right'>
                  <StaticImage
                  className="right__image"
                  src="../images/imagen-contacto-2.jpeg"
                  alt="vr guy"
                  placeholder="blurred"
                  // objectPosition="50% 30%"
                />
                </div>
                
             </section> */}
          <form ref={form} className='form'>
            {/* <section className='info'> */}
            <label className="label" htmlFor="name">Nombre*</label>
              <input type="text" name="user_name" id='name'
              required
              />
              {/* <input type="text" name="user_surname" id='surname' placeholder='Apellido'/> */}
            {/* </section> */}
            <label className="label" htmlFor="email">E-mail*</label>
              <input type="email" name="user_email" id='email' 
              required
              />
              <label className="label" htmlFor="subject">Asunto*</label>
              <input type="email" name="user_subject" id='subject' 
              required
              />
              <label className="label" htmlFor="message">Mensaje*</label>
            <textarea name="message" id='message'
            required
            />
            <ParagraphText className="label"> ¿Quieres colaborar o ser parte de nosotros? Contáctanos</ParagraphText>
            <input type="submit" value="Enviar" id='submit'/>
          </form>
          </div>
          <div className='maps'>
          <Title className="title">
            Encuentranos en
          </Title>
        <div className="mapouter">
          <div className="gmap_canvas">
            <iframe title='Ubicación de la UP' width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=Jr.+Gral%2C+Jir%C3%B3n+Luis+S%C3%A1nchez+Cerro+2141+Lima%2C+Jes%C3%BAs+Mar%C3%ADa+15072%2C+Per%C3%BA&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
            <a href="https://online.stopwatch-timer.net/pomodoro-timer">
              tomato timer
            </a>
          <br/>
          <a href="https://www.calc-calc.com/">
            calculator
          </a>
          <br/>
          <style>
          </style>
          <a href="https://www.ongooglemaps.com">generate Google Maps</a>
            <style>
            </style>
          </div>
        </div>
        </div>
        </ContactStyles>
      </PageSpace>
      );
};

export default IndexPage;

export const Head: HeadFC = () => <title>CIFUP</title>
//     const [role, setRole] = React.useState("miembro");

//   return (
//       <JoinStyles>
//     <Seo title={"Inicio"} description={"Página de inicio de Lee UP, una organización estudiantil de la Universidad del Pacífico"}/>
//     {/* <HeroSection /> */}
//     <div className="container">
//       <h1>Únete</h1>
//       <section>
//         <h2>Quiero unirme como...</h2>
//         <div className="button-container">
//         <button onClick={() => setRole('miembro')}>Miembro</button>
//         <button onClick={() => setRole('honorario')}>Miembro Honorario</button>
//         </div>
//       </section>
//         {
//             role === 'miembro' 
//             ? <>
//                 <h1>Miembro</h1>
//                 <p>As a Community member of the Finance Club you stay up to date and receive insights on the hot topics in the world of finance. Our Newsletter regularly informs you on upcoming events and vacant job positions from leading firms from the finance industry. After completing the registration form below you become a Community member. </p>
//                 <p>Important: There are no costs related to the Community membership. </p>
//                 <p>Become a Community member by subscribing to our newsletter here:</p>
//             </>
//             : <>
//             <h1>Sé un miembro honorario</h1>
//             <p>As Ambassador of the Finance Club you are an essential part of the team. You play an active role at our events and can help develop and execute new ideas. You also benefit from priority treatment for certain events.</p>
//             <p>Furthermore, we offer you the opportunity to sharpen your social and networking skills and you will gather insights in IT- and event-management. You will also deepen your finance knowledge and enlarge your network ranging from representatives from the university to practitioners from the finance industry.</p>
//             <p>Each semester we accept applications from students enlisted at the UZH or ETH. Selected applicants will be invited to a casual interview and will be handed a contract upon success.</p>
//         </>
//         }
//       <form className="form">
//         <div>
//             <label className="label" htmlFor="">Nombre</label>
//             <input type="text" name="" id="" />
//         </div>
//         <div>
//             <label htmlFor="">Nombre</label>
//             <input type="text" name="" id="" />
//         </div>
//         <div>
//             <label htmlFor="">Nombre</label>
//             <input type="text" name="" id="" />
//         </div>
//         <div>
//             <label htmlFor="">Nombre</label>
//             <select name="" id=""></select>
//         </div>
//         <div>
//             <label htmlFor="">Nombre</label>
//             <select name="" id=""></select>
//         </div>
//         <div>
//             <label htmlFor="">Nombre</label>
//             <select name="" id=""></select>
//         </div>
//         <div>

//             <label htmlFor="">Nombre</label>
//             <textarea name="" id="" cols={96} rows={16}></textarea>
//         </div>
//       </form>

//     </div>
//       </JoinStyles>
// )