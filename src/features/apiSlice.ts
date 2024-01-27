import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ApiResponse, Comic, RequestResults } from '../types';
import getHashString from '../utils/getHashString';

export type ApiRequest = {
  title: string;
  limit?: number;
  offset?: number;
};

export const marvelApi = createApi({
  reducerPath: 'projectApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://gateway.marvel.com/v1/public'
  }),
  endpoints: (builder) => ({
    getComicsByTitle: builder.query<RequestResults, ApiRequest>({
      query: ({ title, limit = '20', offset = '20' }) => {
        const processedTitle = title.toLowerCase().trim().replace(/ /g, '-');

        const { timestamp, apiKey, hashString } = getHashString();

        if (processedTitle) {
          return `comics?limit=${limit}&offset=${offset}&title=${processedTitle}&ts=${timestamp}&apikey=${apiKey}&hash=${hashString}`;
        }

        return `comics?limit=${limit}&offset=${offset}&ts=${timestamp}&apikey=${apiKey}&hash=${hashString}`;
      },

      transformResponse: (data: ApiResponse) => {
        const { limit, total, results } = data.data;
        return {
          pagination: {
            limit: limit,
            total: total
          },
          results: results
        };
      }
    }),
    getComicById: builder.query<Comic, string>({
      query: (id) => {
        const { timestamp, apiKey, hashString } = getHashString();

        return `comics/${id}?ts=${timestamp}&apikey=${apiKey}&hash=${hashString}`;
      }
    })
  })
});

export const { useGetComicsByTitleQuery, useGetComicByIdQuery } = marvelApi;
