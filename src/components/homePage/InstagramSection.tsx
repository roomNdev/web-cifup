import React, { useEffect, useRef, useState } from 'react'
import { Title } from '../typography/Title'
import { InstagramSectionStyles } from '../../styles/homePage/InstagramSectionStyles';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import Slider from '../Slider';
import SimpleSlider from '../Slider';
import IframeResizer from '@iframe-resizer/react';
import '@iframe-resizer/child'
// export const getStaticProps = async () => {

  
//     console.log(feed);
//     return {feed}
//   }
  

const InstagramSection: React.FC<{titulo: boolean, page: string}> = ({titulo = false, page}) => {
    const frameRef = useRef()
    const [h, setH] = useState();
    // const container = useRef()
    // window.iFrameResizer = {targetOrigin: "https://cdn.lightwidget.com"};
    // const data = fetch('https://cdn.lightwidget.com/widgets/b2df72a36a2f516486504a435dbdba54.html').catch(e => console.log(e))
    // data.then(res => console.log(res))
    const resizeIFrameToFitContent =(iFrame ) => {
        if (!frameRef.current) return
        // const height =  iFrame.contentWindow.document.body
        // // setH(height)
        // console.log(height);
    }

        useEffect(() => {
            if(!frameRef.current) return
            resizeIFrameToFitContent( frameRef.current );
        }, [frameRef.current])


    return (
        <>
        
        <InstagramSectionStyles>
  {/* LightWidget WIDGET */}
  {titulo ? 
  <h1>Eventos y talleres</h1> : <></>}
        <section className={`${page === 'home' ? "home" : '' } container`}>
            
            {
                page === 'home' ?
                <iframe
                    src="https://cdn.lightwidget.com/widgets/b2df72a36a2f516486504a435dbdba54.html"
                    scrolling="no"
                    allowTransparency={true}
                    className="lightwidget-widget"
                    style={{ width: "100%", border: 0, overflow: "hidden", height: "100%" }}
                />
                :
                <iframe
                  ref={frameRef}
                  targetOrigin="https://cdn.lightwidget.com"
                  src="https://cdn.lightwidget.com/widgets/b2df72a36a2f516486504a435dbdba54.html"
                  allowTransparency={true}
                  className="lightwidget-widget"
                    scrolling="no"
                  style={{ width: "100%", border: 0, height: h}}
                  />
            }
            </section>    
        </InstagramSectionStyles>
        </>
    )
}

export default InstagramSection