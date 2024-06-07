import React, { useState } from 'react';
import { AuthorGridStyles } from '../../styles/author/AuthorGridStyles';
import AuthorItem from './AuthorItem';
import { graphql, useStaticQuery } from 'gatsby';
import AuthorFilters from './AuthorFilters';
import DirectiveItem from './DirectiveItem';
import HonoraryItem from './HonoraryItem';
import PersonsGrid from './PersonsGrid';

function Persons() {
    const data = useStaticQuery(graphql`{
      allSanityAuthor(filter: {}) {
  group(field: {types: {title : SELECT}}) {
    totalCount
    fieldValue
    nodes {
            id
            name
            role
            area {
              name
              slug {
                _key
                _type
                current
                source
              }
            }
            slug {
              current
            }
            isAuthor
            linkedin
            email
            actual
            wasDirective
            date
            dateEnd
            types {
              _id
              slug {
                _key
                _type
                current
                source
              }
            }
            profileImage {
              asset {
                gatsbyImageData
              }
            }
          }
        }
      }    
      sanityPageContent(_id: {eq: "76023209-46fb-40af-af68-a8035213ac20"}) {
        members_directiva
        members_miembros
        members_miembros_img {
          asset {
            gatsbyImageData
          }
            alt
        }
        members_honorarios
        members_exmiembros
      }
    
  }
  `);

  const areas = data.allSanityAuthor.group
  const authorsData = data.sanityPageContent
    const [section, setsection] = useState('directiva');

    const handleChangeSections = (section) => {
      setsection(section)
    }
  console.log(areas);
  const order = ['Directiva', 'Miembro', 'Honorarios', 'ExMiembros'];

  let rearrangedAreas = areas.sort((a, b) => {
    return order.indexOf(a.fieldValue) - order.indexOf(b.fieldValue);
  });
  
  rearrangedAreas[0].fieldDesc = authorsData.members_directiva
  rearrangedAreas[1].fieldDesc = authorsData.members_miembros
  rearrangedAreas[2].fieldDesc = authorsData.members_honorarios
  rearrangedAreas[3].fieldDesc = authorsData.members_exmiembros
  // const rearrangedAreas = areas.
  return (
    <>
        <AuthorFilters current={section} handleChangeSections={handleChangeSections}/>
        <AuthorGridStyles>
          
            <PersonsGrid
                      // type={filter}
                      img={authorsData.members_miembros_img}
                      areas={rearrangedAreas}
                      />
        </AuthorGridStyles>
    </>
  );
}

export default Persons;