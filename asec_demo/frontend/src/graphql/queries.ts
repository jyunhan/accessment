import { ApolloClient, gql, InMemoryCache } from '@apollo/client';

const GRAPHQL_URL = 'http://localhost:9000/graphql';

export const client = new ApolloClient({
  uri: GRAPHQL_URL,
  cache: new InMemoryCache(),
});

export const CharacterFields = gql`
  fragment CharacterDetails on Character {
    name
    height
    mass
    hair_color
    skin_color
    eye_color
    birth_year
    gender
    created
    edited
    url
  }
`

export const CHARACTER_QUERY = gql`
  ${CharacterFields}
  query CharacterQuery($name: String) {
    character (name: $name) {
      ...CharacterDetails
      homeworld
      species
      vehicles
      starships
      films {
        title
        producer
      }
    }
  }
`

export const PEOPLE_QUERY = gql`
  ${CharacterFields}
  query CharactersQuery($page: Int!) {
    characters (page: $page) {
      ...CharacterDetails
      homeworld
      species
      vehicles
      starships
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
