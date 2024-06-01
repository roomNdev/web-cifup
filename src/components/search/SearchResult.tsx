import React from 'react';
import { useFlexSearch } from 'react-use-flexsearch';
import {
  AuthorSearchResultItem,
  BlogSearchResultItem,
  CategorySearchResultItem,
  PoemSearchResultItem
} from './SearchResultItem';
import ParagraphText from '../typography/ParagraphText';

function SearchResult({
  searchQuery,
  blogsIndexStore,
  authorsIndexStore,
}) {
  const blogsResult = useFlexSearch(
    searchQuery,
    JSON.stringify(blogsIndexStore.index),
    blogsIndexStore.store
  );
  // const authorsResult = useFlexSearch(
  //   searchQuery,
  //   JSON.stringify(authorsIndexStore.index),
  //   authorsIndexStore.store
  // );

  if (
    blogsResult.length === 0
    // authorsResult.length === 0
  ) {
    return <ParagraphText>No se han encontrado resultados</ParagraphText>;
  }

  return (
    <>
      {blogsResult.length > 0 && (
        <>
          {blogsResult.map((result) => (
            <BlogSearchResultItem key={result.id} blog={result} />
          ))}
        </>
      )}
{/*       
      {authorsResult.length > 0 && (
        <>
          <ParagraphText>Authors</ParagraphText>
          {authorsResult.map((result) => (
            <AuthorSearchResultItem key={result.id} author={result} />
          ))}
        </>
      )}
       */}
    </>
  );
}

export default SearchResult;
