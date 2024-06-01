import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { format } from 'date-fns';
import React from 'react';
import { BlogItemStyles } from '../../styles/blog/BlogItemStyles';
import ParagraphText from '../typography/ParagraphText';
import { Title } from '../typography/Title';
import Button from '../buttons/Button';

function BlogItem({ path, excerpt, author, title, image, categories, publishedAt }) {
  console.log(author);
  return (
    <BlogItemStyles>
      <Link to={`/blog/${path}`}>
        <GatsbyImage
          image={image.imageData}
          alt={title}
          className="img"
        />
      </Link>
      <Link to={`/miembros/${author[0].slug.current}`} className='author'>
        <GatsbyImage
          image={author[0].profileImage.asset.gatsbyImageData}
          alt={`Foto de perfil de ${author[0].name}`}
          className="author__img"
        />
        <div className='author-text'>
        <ParagraphText className="author__name">{author[0].name} {author.length > 1 && (
          <span className='authors__number'> + {author.length - 1}</span>
        )}
        </ParagraphText>
        
        {publishedAt && (
        <ParagraphText className="publishedAt">
          {format(new Date(publishedAt), 'p, MMMM dd, yyyy')}
        </ParagraphText>
      )}
        </div>
      </Link>
      <Link to={`/blog/${path}`}>
        <Title className="title">{title}</Title>
        
      </Link>
      <ParagraphText className="excerpt">
        {excerpt && excerpt[0]._rawChildren[0].text}
      </ParagraphText>
      <div className='button__wrapper'>
        <Button tag="a" variant='' className="button__more">
          <Link to={`/blog/${path}`}>Leer más</Link>
        </Button>
      </div>
      {/* <ParagraphText className="categoriesText">
        {categories.map((item, index) => (
          <span key={item.slug.current}>
            <Link to={`/categorias/${item.slug.current}`}>{item.title}</Link>
            {index < categories.length - 1 ? ', ' : ''}
          </span>
        ))}
      </ParagraphText> */}
      
    </BlogItemStyles>
  );
}

export default BlogItem;
