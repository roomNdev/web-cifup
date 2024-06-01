import axios from 'axios';
import { graphql, useStaticQuery } from 'gatsby';
import React, { useContext, useEffect, useState } from 'react';
import { MdClose } from 'react-icons/md';

import { SearchModalContext } from '../../contexts/searchModalContext';
import { SearchModalStyles } from '../../styles/search/SearchModalStyles';
import ActionButton from '../buttons/ActionButton';
import SearchResult from './SearchResult';
import SearchField from './SearchField';

const query = graphql`
  {
    localSearchBlogs {
      publicStoreURL
      publicIndexURL
    }
    localSearchAuthors {
      publicStoreURL
      publicIndexURL
    }
  }
`;

function Search() {
  const { isSearchModalOpen } = useContext(SearchModalContext);
  const [searchQuery, setSearchQuery] = useState('');
  const { closeSearchModal } = useContext(SearchModalContext);
  const [blogsIndexStore, setBlogsIndexStore] = useState(null);
  const [categoriesIndexStore, setCategoriesIndexStore] = useState(null);
  const [authorsIndexStore, setAuthorsIndexStore] = useState(null);
  const [poemsIndexStore, setPoemsIndexStore] = useState(null);
  const data = useStaticQuery(query);

  useEffect(() => {
    if (isSearchModalOpen) {
      document.body.style.overflow = 'hidden';
      setSearchQuery('');
    } else {
      document.body.style.overflow = 'initial';
    }
  }, [isSearchModalOpen]);

  const {
    publicStoreURL: blogsPublicStoreURL,
    publicIndexURL: blogsPublicIndexURL,
  } = data.localSearchBlogs;
  const {
    publicStoreURL: authorsPublicStoreURL,
    publicIndexURL: authorsPublicIndexURL,
  } = data.localSearchAuthors;


  const handleOnFocus = async () => {
    if (blogsIndexStore && categoriesIndexStore && authorsIndexStore) return;
    const [
      { data: blogsIndex },
      { data: blogsStore },
      { data: authorsIndex },
      { data: authorsStore },
    ] = await Promise.all([
      axios.get(`${blogsPublicIndexURL}`),
      axios.get(`${blogsPublicStoreURL}`),
      axios.get(`${authorsPublicIndexURL}`),
      axios.get(`${authorsPublicStoreURL}`),
    ]);
    setBlogsIndexStore({
      index: blogsIndex,
      store: blogsStore,
    });
    setAuthorsIndexStore({
      index: authorsIndex,
      store: authorsStore,
    });
  };

  if (!isSearchModalOpen) return null;
  return (
    <SearchModalStyles>
      <div className="modal__container">
        {/* <ActionButton className="close" onClick={() => closeSearchModal()}>
          <MdClose />
        </ActionButton> */}
        <SearchField
          value={searchQuery}
          setValue={setSearchQuery}
          onFocus={handleOnFocus}
        />
        {searchQuery &&
          blogsIndexStore &&
          authorsIndexStore &&
          (
            <div className="search__result">
              <SearchResult
                searchQuery={searchQuery}
                blogsIndexStore={blogsIndexStore}
                // authorsIndexStore={authorsIndexStore}
              />
            </div>
          )}
      </div>
    </SearchModalStyles>
  );
}

export default Search;
