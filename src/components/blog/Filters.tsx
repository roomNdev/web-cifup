import React, { useContext } from 'react';
import { FiltersStyles } from '../../styles/blog/FiltersStyles';
import Button from '../buttons/Button';
// import BlogItem from './BlogItem';
import { SearchModalContext } from '../../contexts/searchModalContext';
import { MdSearch } from 'react-icons/md';

function Filters({ handleChangeFilters, current }) {
  const { openSearchModal } = useContext(SearchModalContext);

  const handleSearchModalOpen = () => {
    openSearchModal();
  };
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
    
{/* <button className={`${current === "directiva" ? 'active' : ''}`} onClick={() => {
          handleChangeFilters("directiva")
        }}>Directiva</button>
        <button className={`${current === "areas" ? 'active' : ''}`} onClick={() => {
          handleChangeFilters("areas")
        }}>Areas</button>
        
        <button className={`${current === "exmiembros" ? 'active' : ''}`} onClick={() => {
          handleChangeFilters("exmiembros")
        }}>Ex miembros</button>
        <button className={`${current === "honorarios" ? 'active' : ''}`} onClick={() => {
          handleChangeFilters("honorarios")
        }}>Miembros honorarios</button>
         */}
  return (
    <FiltersStyles>
      <div className='filters-container'>
        <div className='filters'> 
        <button className={`${current === "articulos" ? 'active' : ''}`} onClick={() => {
          handleChangeFilters('articulos')
        }}>Articulos</button>
        <button className={`${current === "noticias" ? 'active' : ''}`} onClick={() => {
        handleChangeFilters('noticias')
        }}>Noticias</button>
        </div>
        
      <div
          className="searchIcon__wrapper"
          onClick={handleSearchModalOpen}
          onKeyDown={handleSearchModalOpen}
          tabIndex={0}
          role="button"
        >
          <MdSearch color=''/>
        </div>
      </div> 
    </FiltersStyles>
  );
}

export default Filters;
