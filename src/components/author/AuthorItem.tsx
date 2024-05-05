import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { AuthorItemStyles } from '../../styles/author/AuthorItemStyles';
import { DirectiveItemStyles } from '../../styles/author/DirectiveItemStyles';
import { Title } from '../typography/Title';
import ParagraphText from '../typography/ParagraphText';
import { socialLinks } from '../../constants/socialLinks';
import { Link } from 'gatsby';
import { FaLinkedin, FaMailBulk } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { format } from 'date-fns';
import { ExMemberItemStyles } from '../../styles/author/ExMemberItemStyles';

function AuthorItem({ name, role, linkedIn, slug, profileImage, type, email, date, dateEnd}) {

  return (
    <>
    {
      type === 'directiva' ? 
          <DirectiveItemStyles className="author-item" >
          <Link to={`/miembros/${slug.current}`}>
            <section className='image__wrapper'>
              <GatsbyImage
                objectPosition={'50% 50%'}
                image={profileImage.asset.gatsbyImageData}
                alt={name}
                className="profileImage"
              />
            </section>
            <section className='data'>
              <Title 
              tag={'h2'}
              className="title">
                {name}
              </Title>
              <ParagraphText className="role">
                {role}
              </ParagraphText>  
            <section className=''>
                {`${date ? format(new Date(date), 'MMMM dd, yyyy') : ''} - ${dateEnd ? format(new Date(dateEnd), 'MMMM dd, yyyy') : ''}`}
              </section>
              <section className='author_socialList'>
                  { linkedIn ? <a href={`${linkedIn}`}><FaLinkedin className='icon' size={32}></FaLinkedin></a> : <></>}
                  { email ? <a href={`mailto:${email}`}><MdEmail size={32} className='icon'></MdEmail></a> : <></> }
              </section>
            </section>
          </Link>
          
        </DirectiveItemStyles>
        
        : type === 'honorarios' 
        ? <DirectiveItemStyles className="author-item" >
        <Link to={`/miembros/${slug.current}`}>
          <section className='image__wrapper'>
            <GatsbyImage
              objectPosition={'50% 50%'}
              image={profileImage.asset.gatsbyImageData}
              alt={name}
              className="profileImage"
            />
          </section>
          <section className='data'>
            <Title 
            tag={'h2'}
            className="title">
              {name}
            </Title>
            <section className=''>
                {`${date ? format(new Date(date), 'MMMM dd, yyyy') : ''} - ${dateEnd ? format(new Date(dateEnd), 'MMMM dd, yyyy') : ''}`}
            </section>
            <section className='author_socialList'>
                { linkedIn ? <a href={`${linkedIn}`}><FaLinkedin className='icon' size={32}></FaLinkedin></a> : <></>}
                { email ? <a href={`mailto:${email}`}><MdEmail size={32} className='icon'></MdEmail></a> : <></> }
            </section>
          </section>
        </Link>
        
      </DirectiveItemStyles>
        : type === 'exmiembros' 
        ? <ExMemberItemStyles className="author-item" >
          {/* <section className='image__wrapper'>
            <GatsbyImage
              objectPosition={'50% 50%'}
              image={profileImage.asset.gatsbyImageData}
              alt={name}
              className="profileImage"
            />
          </section> */}
          <section className='data'>
            
        <Link to={`/miembros/${slug.current}`}>
            <Title 
            tag={'h2'}
            className="title">
              {name}
            </Title>
              </Link>
            <section className=''>
                {`${date ? format(new Date(date), 'MMMM dd, yyyy') : ''} - ${dateEnd ? format(new Date(dateEnd), 'MMMM dd, yyyy') : ''}`}
            </section>
            <section className='author_socialList'>
                { linkedIn ? <a href={`${linkedIn}`}><FaLinkedin className='icon' size={32}></FaLinkedin></a> : <></>}
                { email ? <a href={`mailto:${email}`}><MdEmail size={32} className='icon'></MdEmail></a> : <></> }
            </section>
          </section>
        
      </ExMemberItemStyles> 
      :
        <AuthorItemStyles className="author-item" >
          <Link to={`/miembros/${slug.current}`}>
            <section className='image__wrapper'>
              <GatsbyImage
                image={profileImage.asset.gatsbyImageData}
                alt={name}
                className="profileImage"
              />
            </section>
            <section className='data'>
              <Title 
              tag={'h2'}
              className="title">
                {name}
              </Title>
              <ParagraphText className="role">
                {role}
              </ParagraphText>  
            </section>
          </Link>

        </AuthorItemStyles>
    }
    </>

  );
}

export default AuthorItem;
