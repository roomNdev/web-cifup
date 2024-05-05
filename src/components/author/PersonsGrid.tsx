import React from 'react';
import { AuthorGridStyles } from '../../styles/author/AuthorGridStyles';
import AuthorItem from './AuthorItem';
import { graphql, useStaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import MembersItem from './MembersItem';
import { MembersStyles } from '../../styles/author/MembersStyles';

function PersonsGrid({authors, type}) {
  return (
    <>
        <AuthorGridStyles>
            {
            type === 'areas' 
            ? <MembersStyles>
                <StaticImage src='../../images/icon.png' alt='' className='img'></StaticImage>
                <MembersItem members={authors}/>
            </MembersStyles>
            : 
            <div className='items'>
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
            }
        </AuthorGridStyles>
    </>
  );
}

export default PersonsGrid;
