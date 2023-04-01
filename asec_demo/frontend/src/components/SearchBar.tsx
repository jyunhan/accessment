import React, { ChangeEvent, useContext } from 'react';

import HomeContext from '../context/home';
import { client as apolloClient, PEOPLE_QUERY, CHARACTER_QUERY } from '../graphql/queries';

import PaginationCss from '../styles/Pagination.module.css'

function SearchBar() {
    const ctx = useContext(HomeContext);
  
    const onTyping = (e: ChangeEvent<HTMLInputElement>) => {
      const searchText = e.target.value;
      ctx.homeDispatch({ type: 'UPDATE_SEARCH_TEXT', payload: { searchText }});
    }

    const onSearch = async () => {
      let characters = ctx.homeStatus.characters;
      if (ctx.homeStatus.searchText === '') {
        const { data } = await apolloClient.query({
          query: PEOPLE_QUERY,
          variables: { page: 1 },
        });
        characters = data.characters;
      } else {
        const { data } = await apolloClient.query({
          query: CHARACTER_QUERY,
          variables: { name: ctx.homeStatus.searchText },
        });
        characters = [data?.character];
      }
      ctx.homeDispatch({ type: 'UPDATE_SEARCH_RESULT', payload: { characters } })
    }

    return (
      <div className={PaginationCss.searchContainer}>
        <input onChange={(e) => { onTyping(e) }} value={ctx.homeStatus.searchText}/>
        <div onClick={() => { onSearch() }}>serach bar</div>
      </div>
    )
}

export default SearchBar
