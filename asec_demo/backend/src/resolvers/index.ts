// import { Company, Job, User } from './db.js';
import axios from 'axios';

import { People } from '../utilities/extraFileReader';
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
    people: async (_root: any, { page }: { page: number }) => {
      const response = await demoRequest({
        method: 'GET',
        url: `https://swapi.dev/api/people?page=${page}`,
      });
      return response.results;
    },
    person: async (_root: any, { name }: { name: string }) => {
      const localFileResult = await People.findOne((character: any) => character.name === name);
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
  People: {
    films: async (people: any) => {
      const result = await demoRequest({
        method: 'GET',
        url: 'https://swapi.dev/api/films'
      });

      return result.results.filter((film: any) => people.films.includes(film.url));
    }
  }
};

export default resolvers;
