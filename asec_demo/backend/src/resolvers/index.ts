import { Character } from '../utilities/extraFileReader';
import { demoRequest } from '../utilities/request'

const resolvers = {
  Query: {
    films: async () => {
      const response = await demoRequest({
        method: 'GET',
        url: 'https://swapi.dev/api/films'
      })
      return response.results
    },
    countPage: async () => {
      const response = await demoRequest({
        method: 'GET',
        url: `https://swapi.dev/api/people`,
      });
      const { count, results } = response;
      return Math.ceil(count / results.length);
    },
    characters: async (_root: any, { page }: { page: number }) => {
      const response = await demoRequest({
        method: 'GET',
        url: `https://swapi.dev/api/people?page=${page}`,
      });
      return response.results;
    },
    character: async (_root: any, { name }: { name: string }) => {
      const localFileResult = await Character.findOne((character: any) => character.name === name);
      if (localFileResult) {
        return localFileResult
      }

      const response = await demoRequest({
        method: 'GET',
        url: `https://swapi.dev/api/people?search=${name}`,
      });
      return response.results.pop();
    }
  },
  Character: {
    films: async (character: any) => {
      const result = await demoRequest({
        method: 'GET',
        url: 'https://swapi.dev/api/films'
      });

      return result.results.filter((film: any) => character.films.includes(film.url));
    }
  }
};

export default resolvers;
