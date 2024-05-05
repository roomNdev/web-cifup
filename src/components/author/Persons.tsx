import React, { useState } from 'react';
import { AuthorGridStyles } from '../../styles/author/AuthorGridStyles';
import AuthorItem from './AuthorItem';
import { graphql, useStaticQuery } from 'gatsby';
import AuthorFilters from './AuthorFilters';
import DirectiveItem from './DirectiveItem';
import HonoraryItem from './HonoraryItem';
import PersonsGrid from './PersonsGrid';

function Persons() {
    const data = useStaticQuery(graphql`
    {
        allSanityAuthor(filter: {}) {
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
  `);

  const authors = data.allSanityAuthor.nodes
    const [filter, setfilter] = useState('directiva');

    const handleChangeFilters = (filtered) => {
        setfilter(filtered)
    }

  return (
    <>
        <AuthorFilters current={filter} handleChangeFilters={handleChangeFilters}/>
        {/* <AuthorGridStyles> */}
            <PersonsGrid
                      type={filter}
                      authors={authors.filter(i => (i.types && i.types.slug.current === filter))}
                      />
        {/* </AuthorGridStyles> */}
    </>
  );
}

export default Persons;
