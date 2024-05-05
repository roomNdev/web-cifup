import React from 'react';
import PageHeader from '../components/PageHeader.tsx';
import PageSpace from '../components/PageSpace.tsx';
// import Pagination from '../components/Pagination.tsx';
import Seo from '../components/seo.tsx';
import { AuthorsStyles } from '../styles/author/AuthorsStyles.ts';
import HeroSection from '../components/homePage/HeroSection.tsx';
import Persons from '../components/author/Persons.tsx';

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

function AuthorList({ data, pageContext }) {
  // const directiva = data.sanityAreas
  // const { currentPage, numberOfPages } = pageContext;

  return (
    <PageSpace top={80} bottom={100}>
      <Seo title="Autores" />
      <HeroSection />
      {/* <div className="container"> */}
      <AuthorsStyles>
        <PageHeader title="Conoce a nuestro miembros" />
        <p className="desc">
          Our Ambassadors support us in reaching an ever-broader audience
          on-campus as well as on social media. Our diligent Ambassadors are
          responsible for carrying out various tasks that keep operations
          running smoothly. In addition, they support us in reaching an
          ever-broader audience to help grow the Finance Club community.
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
    </PageSpace>
  );
}

export default AuthorList;
