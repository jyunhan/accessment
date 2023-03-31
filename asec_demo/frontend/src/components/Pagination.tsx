import React, { useContext, useState } from 'react';

import PaginationCss from '../styles/Pagination.module.css'
import HomeContext from '../context/home';
import SearchBar from './SearchBar'
import BottomDots from './BottomDots'

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Pagination(props: any) {
  const { characterList } = props;
  const ctx = useContext(HomeContext);
  const isLaodingCharacter = ctx.isLaodingCharacter;

  return (
    <>
      <SearchBar />
      <div className={PaginationCss.slider}>
        {
          isLaodingCharacter ?
          (<h1>Loading...</h1>) :
          (ctx.characterList || characterList).map((character: any) => (
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
