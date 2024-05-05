import React from 'react';
import { FiltersStyles } from '../../styles/blog/FiltersStyles';
import Button from '../buttons/Button';
// import BlogItem from './BlogItem';

function Filters({ handleChangeFilters, posts }) {

    // const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&access_token=IGQWRQekk2RGhWV1NBNTRXY202a0R4Ykw2cnJOSkJOT3RHT241Smk1LWxiWEd3Skt4dDV3RnFJWXQyV2lpaERwcWVpemFhczExSlJGVkRDa0ExcGFwMHFBS3Jsdk94TVo2QnFLS2l2THg5T3VCNElkU0JpWjJfUm8ZD`
    // const [feed, setFeed] = useState()
    // useEffect(() => {
    //     const data = fetch(url)
    //         .then(res => res.json())
    //         .then(data => {
    //             setFeed(data)
    // y aca hago un poco el filtro para que las cosas se muestren bien
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
    

  return (
    <FiltersStyles>
      <div className='filters'>
        <button onClick={() => {
          handleChangeFilters(posts)
        }}>Articulos</button>
        <button onClick={() => {
        // handleChangeFilters(feed)
        }}>Noticias</button>
      </div>
    </FiltersStyles>
  );
}

export default Filters;
