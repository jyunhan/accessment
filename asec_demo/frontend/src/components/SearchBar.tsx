import React, { useContext } from 'react';

import HomeContext from '../context/home';

import PaginationCss from '../styles/Pagination.module.css'

function SearchBar() {
    const ctx = useContext(HomeContext);
  
    return (
      <div className={PaginationCss.searchContainer}>
        <input onChange={(e) => {
          ctx.setSearchText(e.target.value);
        }} />
        <div onClick={() => ctx.doSearch()}>serach bar</div>
      </div>
    )
}

export default SearchBar
