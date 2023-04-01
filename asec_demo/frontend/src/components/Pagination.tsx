import React, { useContext, useEffect } from 'react';

import SearchBar from './SearchBar'
import BottomDots from './BottomDots'

import HomeContext from '../context/home';
import PaginationCss from '../styles/Pagination.module.css'

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Pagination(props: any) {
  const { characters } = props;
  const ctx = useContext(HomeContext);

  useEffect(() => {
    ctx.homeDispatch({ type: 'UPDATE_CHARACTERS', payload: { characters }})
  }, [])

  return (
    <>
      <SearchBar />
      <div className={PaginationCss.slider}>
        {
          ctx.homeStatus.isFetching ?
          (<p>Loading...</p>) :
          ctx.homeStatus.characters.map((character: any) => (
            <div key={character.url} className={PaginationCss.card}>
              <div className={PaginationCss.frame}>
                <div>
                  <span>Name: </span><span>{character?.name}</span>
                </div>
                <div>
                  <span>Gender: </span><span>{character?.gender}</span>
                </div>
                <div>
                  <span>Birth: </span><span>{character?.birth_year}</span>
                </div>
                <div>
                  <span>Mass: </span><span>{character?.mass}</span>
                </div>
                <div>
                  <span>Hair color: </span><span>{character?.hair_color}</span>
                </div>
              </div>
            </div>
          ))
        }
      </div>
      <BottomDots />
    </>
  )
}

export default Pagination;
