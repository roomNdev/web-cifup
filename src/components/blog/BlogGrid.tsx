import React, { useEffect, useRef, useState } from 'react';
import { BlogGridStyles } from '../../styles/blog/BlogGridStyles';
import BlogItem from './BlogItem';
import Filters from './Filters';
import Pagination from '../Pagination';
import InstagramSection from '../homePage/InstagramSection';
import Search from '../search/SearchModal';

function BlogGrid({ blogs, numberOfPages, currentPage }) {
  const [filteredBlogs, setFilteredBlogs] = useState("articulos");
  // const [, set] = useState(default);
  const handleChangeFilters = (posts) => {
    setFilteredBlogs(posts)
  } 

  // const token = 'IGQWRQOTdQR2cyUzJ5UHd1NVZATOUJzRjdUbVh0WXF5MHFOVUxWMjVyTW1QdkF3N3ZA4ZAzVVb0Q2b05BQk9sOW9abzBsbjRsS1ZADbWhEUS1aQXBxZAkNnVjlhSnhTeXJETGlDdldjUE9oSTRGRjF1RXNUaHpMU3FRb1EZD'
  //   const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&access_token=${token}`
  //   const [feed, setFeed] = useState<any>()
  //   useEffect(() => {
  //       const getData = async () => {
  //           const res = await fetch(url)
  //           // console.log(await res.json());
  //           setFeed(await res.json())
  //           // console.log( res.json());
  //       }
  //       getData()
  //       }, [])
    //     const urlProfile = `https://graph.instagram.com/me?fields=id,username&access_token=IGQWRQekk2RGhWV1NBNTRXY202a0R4Ykw2cnJOSkJOT3RHT241Smk1LWxiWEd3Skt4dDV3RnFJWXQyV2lpaERwcWVpemFhczExSlJGVkRDa0ExcGFwMHFBS3Jsdk94TVo2QnFLS2l2THg5T3VCNElkU0JpWjJfUm8ZD`
    //     const [profile, setProfile] = useState()
    //     useEffect(() => {
    //         const data = fetch(urlProfile)
    //             .then(res => res.json())
    //             .then(data => {
    //                 setProfile(data)
    //             }
    //             )
    //         }, [])
    

        
    //     console.log(feed);
    // //     console.log(profile);
    //     const filterWord = ""
    //     const filteredFeed = feed?.data.filter(i => i.media_type !== "VIDEO")
    //     console.log(filteredFeed);¿
  // function resizeIframe(obj) {
  //   console.log(obj.current.contentWindow.);
  //   obj.current.style.height = obj.current.contentWindow.document.documentElement.scrollHeight + 'px';
  // }
  return (
    <BlogGridStyles>
      <Filters handleChangeFilters={handleChangeFilters} current={filteredBlogs}/>
      <div className='posts'>
      {
        filteredBlogs === "articulos" 
        ? 
          blogs.map((blog) => (
            <BlogItem
              key={blog.id}
              path={blog.slug.current}
              title={blog.title}
              categories={blog.categories}
              author={blog.author}
              image={{
                imageData: blog.coverImage.asset.gatsbyImageData,
                altText: blog.coverImage.alt,
              }}
              excerpt={blog.excerpt}
              publishedAt={blog.publishedAt}
            />
          ))
          :<section className='widget-container'>
          {/* LightWidget WIDGET */}
          <iframe
            src="https://cdn.lightwidget.com/widgets/d00c62dd77a3507a8f257a4eb0fba83b.html"
            allowTransparency={true}
            className="lightwidget-widget"
            style={{ width: "100%", border: 0, height: "100vh"  }}
          >

          </iframe>
        </section>
        
          //  <p style={{color: "var(--text-primary)"}}>Oops! todavia no hay noticias</p>
      //     : filteredFeed.filter(i => i.caption.includes(filterWord)).map((item) => {
      //           return <article className="ig-new">
      //               {/* <StaticImage alt='' src='../../images/bank-of-america-new-logo.jpg'></StaticImage> */}
      //               <img src={item.media_url} alt="" />
      //               {/* <h2>Evento junto con Bank of America</h2> */}
      //               {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt eaque voluptatibus accusantium </p> */}
      //           </article>
      //       })
      }
      </div>
      
      {(numberOfPages > 1 && filteredBlogs === "articulos" ) && (
              <Pagination
                currentPage={currentPage}
                numberOfPages={numberOfPages}
                baseURL="/blog"
              />
            )}

    </BlogGridStyles>
  );
}

export default BlogGrid;
