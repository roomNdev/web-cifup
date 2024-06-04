import React from 'react';
import PageHeader from '../components/PageHeader.tsx';
import PageSpace from '../components/PageSpace.tsx';
// import Pagination from '../components/Pagination.tsx';
import Seo from '../components/seo.tsx';
import { AuthorsStyles } from '../styles/author/AuthorsStyles.ts';
import HeroSection from '../components/homePage/HeroSection.tsx';
import Persons from '../components/author/Persons.tsx';
import { StaticImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';
import MyPortableText from '../components/MyPortableText.tsx';
import { GatsbyImage } from 'gatsby-plugin-image';

// export const AuthorsQuery = graphql`
//   {
//     allSanityAreas(filter: {}) {
//       nodes {
//         name
//       }
//     }
//     allSanityAuthor(filter: {}) {
//       nodes {
//         id
//         name
//         role
//         area {
//           name
//         }
//         directive
//         slug {
//           current
//         }
//         profileImage {
//           asset {
//             gatsbyImageData
//           }
//         }
//       }
//     }
//   }
// `;

function AuthorList({ dataNotUsed, pageContext }) {
  // const directiva = data.sanityAreas
  // const { currentPage, numberOfPages } = pageContext;
  const data = useStaticQuery(graphql`{
    sanityPageContent(_id: {eq: "76023209-46fb-40af-af68-a8035213ac20"}) {
      members_hero
      members_image {
        asset {
          gatsbyImageData
        }
        alt
      }
      _rawMembersDesc
      members_main_image  {
        asset {
          gatsbyImageData
        }
        alt
      }
      _rawMembersTeamDesc
      members_directiva
      members_miembros
      members_honorarios
      members_exmiembros
    }
  
}
`);
  const authorData = data.sanityPageContent

  return (
    <>
      <Seo title="Autores" />
      <HeroSection title={authorData.members_hero} img={authorData.members_image.asset.gatsbyImageData} alt={authorData.members_image.alt}/>
      {/* <div className="container"> */}
      <AuthorsStyles>
        <div className='description'>
        {
                  authorData?.members_main_image.asset?.gatsbyImageData ? <GatsbyImage 
                  className='description-image' image={authorData.members_main_image.asset.gatsbyImageData} alt={authorData?.members_main_image?.alt}></GatsbyImage>
                  :
                <StaticImage
                alt=''
                src='../../images/bg-image.jpg'
                className='description-image'
                ></StaticImage>
                }     
          {/* <StaticImage className='description-image' src='../images/hero-creativa.jpeg'></StaticImage> */}
          <MyPortableText value={authorData._rawMembersDesc || `
          Our Ambassadors support us in reaching an ever-broader audience
          on-campus as well as on social media. Our diligent Ambassadors are
          responsible for carrying out various tasks that keep operations
          running smoothly. In addition, they support us in reaching an
          ever-broader audience to help grow the Finance Club community.`}></MyPortableText>
        </div>
        <h1>Equipo CIFUP</h1>
        <p className="desc">
        <MyPortableText value={authorData._rawMembersTeamDesc || `
          Our Ambassadors support us in reaching an ever-broader audience
          on-campus as well as on social media. Our diligent Ambassadors are
          responsible for carrying out various tasks that keep operations
          running smoothly. In addition, they support us in reaching an
          ever-broader audience to help grow the Finance Club community.`}>
          </MyPortableText>
        </p>
        <Persons />
        {/* <DirectiveGrid /> */}
        {/* <AuthorGrid /> */}
        {/* <ExMemberGrid /> */}
      </AuthorsStyles>
      {/* {numberOfPages > 1 && (
          <Pagination
            baseURL="/miembros"
            currentPage={currentPage}
            numberOfPages={numberOfPages}
          />
        )} */}
      {/* </div> */}
    </>
  );
}

export default AuthorList;
