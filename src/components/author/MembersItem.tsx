import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { AuthorItemStyles } from '../../styles/author/AuthorItemStyles';
import { DirectiveItemStyles } from '../../styles/author/DirectiveItemStyles';
import { Title } from '../typography/Title';
import ParagraphText from '../typography/ParagraphText';
import { socialLinks } from '../../constants/socialLinks';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { FaChevronDown, FaLinkedin, FaMailBulk } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { format } from 'date-fns';

function MembersItem({members}) {
    const data = useStaticQuery(graphql`
    {
        allSanityAreas(filter: {}) {
          nodes {
            name
            slug {
                current
            }
          }
        }
      }
  `);
    const areas = data.allSanityAreas.nodes
    const allAreas = members.map(member => member.area.slug.current)
    let result = allAreas.filter((item,index)=>{
        return allAreas.indexOf(item) === index;
      })
      console.log(result)

  return (
    <section className='areas'>
        {
            areas.filter(i => result.includes(i.slug.current)).map((item) => {
                return <details className='area'>
                        <summary><h2 className='title'>{item.name}<FaChevronDown className='icon '></FaChevronDown></h2></summary>
                        <section className='members'>
                        {
                                members
                                .filter((member) => member.area.slug.current === item.slug.current)
                                .map(member => {
                                    const splittedName = member.name.split(' ')

                                    return  <AuthorItemStyles className="author-item" >
                                    {/* <Link to={`/miembros/${member.slug.current}`}> */}
                                    <section className='image__wrapper'>
                                        <GatsbyImage
                                        image={member.profileImage.asset.gatsbyImageData}
                                        alt={member.name}
                                        className="profileImage"
                                        />
                                    </section>
                                    <section className='data'>
                                    <Link to={`/miembros/${member.slug.current}`} 
                                        className="title">
                                    {
                                        splittedName.map(i => (
                                          <Title 
                                            tag={'h2'}
                                            className="title">
                                              {i}
                                            </Title>
                        
                                        ))
                                      }
                                        </Link>
                                        <ParagraphText className="role">
                                        {member.role}
                                        </ParagraphText>
                                    </section>
                                        <div className='author_socialList'>
                                        { member.linkedin ? <a href={`${member.linkedin}`}><FaLinkedin className='icon' size={20}></FaLinkedin></a> : <></>}                                        </div>
                                    {/* </Link> */}
                        
                                </AuthorItemStyles>
                                })
                            }{
                                members
                                .filter((member) => member.area.slug.current === item.slug.current)
                                .map(member => {
                                    const splittedName = member.name.split(' ')

                                    return  <AuthorItemStyles className="author-item" >
                                    {/* <Link to={`/miembros/${member.slug.current}`}> */}
                                    <section className='image__wrapper'>
                                        <GatsbyImage
                                        image={member.profileImage.asset.gatsbyImageData}
                                        alt={member.name}
                                        className="profileImage"
                                        />
                                    </section>
                                    <section className='data'>
                                    <Link to={`/miembros/${member.slug.current}`} 
                                        className="title">
                                    {
                                        splittedName.map(i => (
                                          <Title 
                                            tag={'h2'}
                                            className="title">
                                              {i}
                                            </Title>
                        
                                        ))
                                      }
                                        </Link>
                                        <ParagraphText className="role">
                                        {member.role}
                                        </ParagraphText>
                                    </section>
                                        <div className='author_socialList'>
                                        { member.linkedin ? <a href={`${member.linkedin}`}><FaLinkedin className='icon' size={20}></FaLinkedin></a> : <></>}                                        </div>
                                    {/* </Link> */}
                        
                                </AuthorItemStyles>
                                })
                            }{
                                members
                                .filter((member) => member.area.slug.current === item.slug.current)
                                .map(member => {
                                    const splittedName = member.name.split(' ')

                                    return  <AuthorItemStyles className="author-item" >
                                    {/* <Link to={`/miembros/${member.slug.current}`}> */}
                                    <section className='image__wrapper'>
                                        <GatsbyImage
                                        image={member.profileImage.asset.gatsbyImageData}
                                        alt={member.name}
                                        className="profileImage"
                                        />
                                    </section>
                                    <section className='data'>
                                    <Link to={`/miembros/${member.slug.current}`} 
                                        className="title">
                                    {
                                        splittedName.map(i => (
                                          <Title 
                                            tag={'h2'}
                                            className="title">
                                              {i}
                                            </Title>
                        
                                        ))
                                      }
                                        </Link>
                                        <ParagraphText className="role">
                                        {member.role}
                                        </ParagraphText>
                                    </section>
                                        <div className='author_socialList'>
                                        { member.linkedin ? <a href={`${member.linkedin}`}><FaLinkedin className='icon' size={20}></FaLinkedin></a> : <></>}                                        </div>
                                    {/* </Link> */}
                        
                                </AuthorItemStyles>
                                })
                            }
                        </section>
                </details>
            })
        }
    </section>

  );
}

export default MembersItem;
