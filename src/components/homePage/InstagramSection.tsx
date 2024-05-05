import React, { useEffect, useState } from 'react'
import { Title } from '../typography/Title'
import { InstagramSectionStyles } from '../../styles/homePage/InstagramSectionStyles';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import Slider from '../Slider';
import SimpleSlider from '../Slider';

export const getStaticProps = async () => {

  
    console.log(feed);
    return {feed}
  }
  

const InstagramSection: React.FC<{}> = () => {
    // const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&access_token=IGQWRQekk2RGhWV1NBNTRXY202a0R4Ykw2cnJOSkJOT3RHT241Smk1LWxiWEd3Skt4dDV3RnFJWXQyV2lpaERwcWVpemFhczExSlJGVkRDa0ExcGFwMHFBS3Jsdk94TVo2QnFLS2l2THg5T3VCNElkU0JpWjJfUm8ZD`
    // const [feed, setFeed] = useState()
    // useEffect(() => {
    //     const data = fetch(url)
    //         .then(res => res.json())
    //         .then(data => {
    //             setFeed(data)
    //         }
    //         )
    //     }, [])
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
    //     console.log(profile);

    return (
        <InstagramSectionStyles>
            <h1>Eventos</h1>
            <SimpleSlider>
                <article className="event demo-slide">
                    <StaticImage alt='' src='../../images/bank-of-america-new-logo.jpg'></StaticImage>
                    <h2>Evento junto con Bank of America</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt eaque voluptatibus accusantium </p>
                </article>
                <article className="event demo-slide">
                    <StaticImage alt='' src='../../images/bank-of-america-new-logo.jpg'></StaticImage>
                    <h2>Evento junto con Bank of America</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt eaque voluptatibus accusantium </p>
                </article>
                <article className="event demo-slide">
                    <StaticImage alt='' src='../../images/bank-of-america-new-logo.jpg'></StaticImage>
                    <h2>Evento junto con Bank of America</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt eaque voluptatibus accusantium </p>
                </article>
                <article className="event demo-slide">
                    <StaticImage alt='' src='../../images/bank-of-america-new-logo.jpg'></StaticImage>
                    <h2>Evento junto con Bank of America</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt eaque voluptatibus accusantium </p>
                </article>
                <article className="event demo-slide">
                    <StaticImage alt='' src='../../images/bank-of-america-new-logo.jpg'></StaticImage>
                    <h2>Evento junto con Bank of America</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt eaque voluptatibus accusantium </p>
                </article>
            </SimpleSlider>            
        </InstagramSectionStyles>
    )
}

export default InstagramSection