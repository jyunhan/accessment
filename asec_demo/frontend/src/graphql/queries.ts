import { ApolloClient, gql, InMemoryCache } from '@apollo/client';

const GRAPHQL_URL = 'http://localhost:9000/graphql';

export const client = new ApolloClient({
  uri: GRAPHQL_URL,
  cache: new InMemoryCache(),
});

export const CHARACTER_QUERY = gql`
  query CHARACTERQUERY($name: String) {
    person (name: $name) {
      name
      height
      mass
      hair_color
      skin_color
      eye_color
      birth_year
      gender
      homeworld
      species
      vehicles
      starships
      created
      edited
      url
    }
  }
`

export const PEOPLE_QUERY = gql`
  query PeopleQuery($page: Int!) {
    people (page: $page) {
      name
      height
      mass
      hair_color
      skin_color
      eye_color
      birth_year
      gender
      homeworld
      species
      vehicles
      starships
      created
      edited
      url
      films {
        title
        producer
      }
    }
  }
`;

export const PAGE_COUNT_QUERY = gql`
  query {
    countPage
  }
`;
