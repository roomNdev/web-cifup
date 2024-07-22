
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
import MyPortableText from "../components/MyPortableText";
import FormfacadeEmbed from "@formfacade/embed-react";


// import { PodcastsStyles } from "../../styles/homePage/PodcastsStyle";

const IndexPage: React.FC<PageProps>  = () => {
    const data = useStaticQuery(graphql`{
      sanityPageContent(_id: {eq: "76023209-46fb-40af-af68-a8035213ac20"}) {
        _rawJoinMiembro
        _rawJoinHonorario
      }
    }
`);
const joinData = data.sanityPageContent;

    const [role, setRole] = React.useState("miembro");
    const [load, setLoad] = React.useState(false);

  return (
      <JoinStyles>
    <Seo title={"Inicio"} description={"Página de inicio de CIFUP, una organización estudiantil de la Universidad del Pacífico"}/>
    {/* <HeroSection /> */}
    <div className="container">
      <h1>Únete</h1>
      <section className="unirme_como">
        <h2>Quiero unirme como...</h2>
        <div className="button-container">
        <button onClick={() => setRole('miembro')}>Miembro</button>
        <button onClick={() => setRole('honorario')}>Miembro Honorario</button>
        </div>
      </section>
      <section className="description">
        {
            role === 'miembro' 
            ? <>
                <h1>Sé un miembro </h1>
                {joinData?._rawJoinMiembro ?
                  <MyPortableText value={joinData?._rawJoinMiembro}></MyPortableText>
                
              :  
              <>
              <p>As a Community member of the Finance Club you stay up to date and receive insights on the hot topics in the world of finance. Our Newsletter regularly informs you on upcoming events and vacant job positions from leading firms from the finance industry. After completing the registration form below you become a Community member. </p>
              <p>Important: There are no costs related to the Community membership. </p>
              <p>Become a Community member by subscribing to our newsletter here:</p>
              </>
              }
            </>
            : <>
            <h1>Sé un miembro <span className="color-cobalt">honorario</span></h1>
            {joinData?._rawJoinHonorario ? 
                  <MyPortableText value={joinData?._rawJoinHonorario}></MyPortableText>
              :  
              <>
<p>As Ambassador of the Finance Club you are an essential part of the team. You play an active role at our events and can help develop and execute new ideas. You also benefit from priority treatment for certain events.</p>
<p>Furthermore, we offer you the opportunity to sharpen your social and networking skills and you will gather insights in IT- and event-management. You will also deepen your finance knowledge and enlarge your network ranging from representatives from the university to practitioners from the finance industry.</p>
<p>Each semester we accept applications from students enlisted at the UZH or ETH. Selected applicants will be invited to a casual interview and will be handed a contract upon success.</p>
              </>
              }
        </>
        }
      </section>
      {
            role === 'miembro' ?
            <>
              <p className={`${ load === true ? 'loaded' : 'loading'}`}>Cargando...</p>
              <div className={`${ load === true ? 'loaded' : 'loading'} form`}>
              <FormfacadeEmbed
                formFacadeURL="https://formfacade.com/include/107440999561169314154/form/1FAIpQLSe4JDpzHLHZ0A0OwmrZ3hOmlfmhSvJWh9xkxEUXWXEP78ygdA/classic.js/?div=ff-compose"
                onSubmitForm={() => console.log('Form submitted')}
                />
              </div>
            </>
            : <></>
            }
    </div>
      </JoinStyles>
)}

export default IndexPage