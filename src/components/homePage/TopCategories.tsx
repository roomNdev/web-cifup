import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { TopCategoriesStyles } from '../../styles/homePage/TopCategoriesStyles';
import CategoryGrid from '../category/CategoryGrid';
import ParagraphText from '../typography/ParagraphText';
import { SectionTitle } from '../typography/Title';

function TopCategories() {
  const data = useStaticQuery(graphql`
    {
      allSanityFeatured(filter: { _id: { eq: "featuredItems" } }) {
        nodes {
          category {
            id
            title
            slug {
              current
            }
            description {
              children {
                text
              }
            }
          }
        }
      }
    }
  `);
  const categories = data.allSanityFeatured.nodes[0].category;
  console.log(categories[0].description[0].children[0].text);
  return (
    <TopCategoriesStyles>
      <SectionTitle tag="">Top Categories</SectionTitle>
      <ParagraphText className="info">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae veniam
        fuga minima.
      </ParagraphText>
      <CategoryGrid categories={categories} />
    </TopCategoriesStyles>
  );
}

export default TopCategories;
