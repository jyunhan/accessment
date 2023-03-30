import React, { useContext, useState } from 'react';
import Slider, { Settings } from 'react-slick';
import { useLazyQuery } from '@apollo/client';

import PaginationCss from '../styles/Pagination.module.css'
import HomeContext from '../context/home';
import { PEOPLE_QUERY, PAGE_COUNT_QUERY } from '../graphql/queries';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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

function Pagination(props: any) {
  const { characterList } = props;
  const ctx = useContext(HomeContext);
  const pageDotArray = Array.from({length: ctx.pages}, (_, index) => index + 1);
  let pageNumber = ctx.page;
  const [getLaztQueryResult, { data, loading, error }] = useLazyQuery(PEOPLE_QUERY, {
    variables: { page: pageNumber },
  });

  const isDisplayLoadingTxt = ctx.isLaodingCharacter || loading;

  const settings: Settings = {
    draggable: false,
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    lazyLoad: 'ondemand',
    speed: 500,
    rows: 2,
    slidesPerRow: 5
  };

  const changePage = (idx: number) => {
    if (pageNumber === idx + 1) return
    pageNumber = idx + 1;
    ctx.changeDotIdx(idx)
    getLaztQueryResult()
  }

  return (
    <>
      <SearchBar />
      <div className={PaginationCss.cardConatiner}>
        {
          isDisplayLoadingTxt ?
          (<div className={PaginationCss.slider}><h1>Loading...</h1></div>):
          (
            <Slider {...settings} className={PaginationCss.slider}>
              {(ctx.characterList || characterList).map((character: any) => (
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
              ))}
            </Slider>   
          )        
        }
        <div className={PaginationCss.dotContainer}>
          {
            pageDotArray.map((page: number, idx) => {
              return (
                <div
                  key={idx}
                  className={`${PaginationCss.dot} ${ctx.targetDotIdx === idx ? PaginationCss.target : ''}`}
                  onClick={() => changePage(idx)}
                >
                  {page.toString()}
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default Pagination;
