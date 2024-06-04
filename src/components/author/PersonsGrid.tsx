import React from 'react';
import { AuthorGridStyles } from '../../styles/author/AuthorGridStyles';
import AuthorItem from './AuthorItem';
import { graphql, useStaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import MembersItem from './MembersItem';
import { MembersStyles } from '../../styles/author/MembersStyles';

function PersonsGrid({areas}) {
  return (
    <>
        <AuthorGridStyles>
          {
            areas.map(area => {
             return <>
             <div className='area-container'>
             <h1 className='area' id={`${area.fieldValue}`}>{area.fieldValue}</h1>
             <p className='area-desc'>{area.fieldDesc || 'Portable text of areas description that must be added to sanity'}</p>

             </div>
             {
              area.fieldValue === 'Miembro' ? 
              <MembersStyles>
                  <MembersItem members={area.nodes}/>
                  <StaticImage src='../../images/icon.png' alt='' className='img'></StaticImage>
              </MembersStyles>
              : 
              
            <div className='items'>
             { area.nodes.map((item) => (
                

              <AuthorItem
              type={area.fieldValue}
              wasDirective={item.wasDirective}
                key={item.id}
                name={item.name}
                slug={item.slug}
                actual={item.actual}
                role={item.role}
                date={item.date}
                email={item.email}
                dateEnd={item.dateEnd}
                linkedIn={item.linkedin}
                profileImage={item.profileImage}
                />
                ))}
            </div>
             } 
             
             </>
            })
          }
            {/* {
            type === 'areas' 
            ? 
            : 
            <div className='items'>
            {}
                {authors.map((item) => (

                  <AuthorItem
                    type={type}
                    key={item.id}
                    name={item.name}
                    slug={item.slug}
                    role={item.role}
                    date={item.date}
                    email={item.email}
                    dateEnd={item.dateEnd}
                    linkedIn={item.linkedin}
                    profileImage={item.profileImage}
                    />
                  ))}
              </div>
            } */}
        </AuthorGridStyles>
    </>
  );
}

export default PersonsGrid;
