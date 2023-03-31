import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { useCharacter, usePageCount } from '../graphql/hooks';
import { client as apolloClient, CHARACTER_QUERY, PEOPLE_QUERY } from '../graphql/queries';

export type HomeContent = {
  pages: number
  page: number
  targetDotIdx: number
  isLaodingCharacter: boolean
  searchText: string
  characterList: any[]
  doSearch: () => void
  setSearchText: (char: string) => void
  changeDotIdx: (dotIdx: number) => void
}

const HomeContext = React.createContext<HomeContent>({
  pages: 0,
  page: 1,
  targetDotIdx: 0,
  isLaodingCharacter: false,
  searchText: '',
  characterList: [],
  doSearch: () => {},
  setSearchText: () => {},
  changeDotIdx: () => {},
});
  
export const HomeContextProvider = (props: any) => {
    const [targetDotIdx, setTargetDotIdx] = useState(0);
    const [page, setPage] = useState(1);
    const [characterList, setCharacterList] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { characters, loading: charactersFetchLoading } = useCharacter(page);
    const { pages, loading: pageCountLoading } = usePageCount();

    useEffect(() => {
      setCharacterList(characters)
    }, [characters])

    const changeDotIdx = async (dotIdx: number) => {
      const newPage = dotIdx + 1
      setTargetDotIdx(dotIdx);
      setPage(newPage)
      const { data, loading } = await apolloClient.query({
        query: PEOPLE_QUERY,
        variables: { page: newPage },
      });
      setCharacterList(data.characters);
      setIsLoading(loading);
    }

    const doSearch = async () => {
      let result: any;
      if (searchText === '') {
        const { data } = await apolloClient.query({
          query: PEOPLE_QUERY,
          variables: { page },
        });
        result = [data.characters];
      } else {
        const { data } = await apolloClient.query({
          query: CHARACTER_QUERY,
          variables: { name: searchText },
        });
        result = [data?.character];
      }
      setCharacterList(result);
    }

    const isLaodingCharacter = isLoading || charactersFetchLoading || pageCountLoading;

    return (
      <HomeContext.Provider
        value={{
          pages,
          page,
          targetDotIdx,
          isLaodingCharacter,
          searchText,
          characterList,
          doSearch,
          changeDotIdx,
          setSearchText,
        }}
      >
        {props.children}
      </HomeContext.Provider>
    );
};

export default HomeContext;
