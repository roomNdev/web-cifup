import React from 'react'
import ParagraphText from '../typography/ParagraphText'
import { AboutSectionStyles } from '../../styles/homePage/AboutStyles'
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import ImageTexture from '../../constants/imageTexture'
import { graphql, useStaticQuery } from 'gatsby'
import Button from '../buttons/Button'
import { IoBarChartSharp } from "react-icons/io5";
import { FaBalanceScale, FaMoneyCheck } from 'react-icons/fa'
import { MainEventsStyles } from '../../styles/events/MainEventsStyles'

const MainEvents: React.FC<{}> = () => {
    const data = useStaticQuery(graphql`{
        sanityPrincipalPhoto(title: {eq: "Foto Principal"}) {
            title
            principalPhoto {
              asset {
                gatsbyImageData
              }
          }
        }
      }`
    )

    const image = data.sanityPrincipalPhoto

    return (
        <MainEventsStyles>
          <h1>Nosotros</h1>
          <p>CIFUP realiza distintos eventos para promover la cultura e información del mundo financiero. 
            Aquí podrás obtener mas información acerca de fechas, horarios y ubicacion.
          </p>
        </MainEventsStyles>
    )
}

export default MainEvents