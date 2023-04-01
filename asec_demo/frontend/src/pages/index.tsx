import Link from "next/link";
import React, { useState, useEffect } from "react";

import Pagiation from '../components/Pagination';
import { HomeContextProvider } from '../context/home';
import { client as apolloClient, PEOPLE_QUERY } from '../graphql/queries';

const HomePage = (props: any) => {
  return (
    <HomeContextProvider>
      <Pagiation characters={props.characters} />
    </HomeContextProvider>
  )
};

export async function getServerSideProps() {
  const { data } = await apolloClient.query({
    query: PEOPLE_QUERY,
    variables: { page: 1 },
  });

  return {
    props: {
      characters: data.characters
    }
  }
};

export default HomePage;
