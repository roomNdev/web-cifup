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
  }
  `);

  const areas = data.allSanityAuthor.group
    const [section, setsection] = useState('directiva');

    const handleChangeSections = (section) => {
      setsection(section)
    }
  console.log(areas);
  const order = ['Directiva', 'Miembro', 'Honorarios', 'ExMiembros'];

  const rearrangedAreas = areas.sort((a, b) => {
    return order.indexOf(a.fieldValue) - order.indexOf(b.fieldValue);
  });
  
  // const rearrangedAreas = areas.
  return (
    <>
        <AuthorFilters current={section} handleChangeSections={handleChangeSections}/>
        <AuthorGridStyles>
          
            <PersonsGrid
                      // type={filter}
                      areas={rearrangedAreas}
                      />
        </AuthorGridStyles>
    </>
  );
}

export default Persons;