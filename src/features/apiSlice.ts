import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ApiRequest, ApiResponse, Comic, RequestResults } from '../types';
import { getHashString } from '../utils/helpers';

export const marvelApi = createApi({
  reducerPath: 'projectApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://gateway.marvel.com/v1/public'
  }),
  endpoints: (builder) => ({
    getComicsByTitle: builder.query<RequestResults, ApiRequest>({
      query: ({ title, limit = '20', offset = '20' }) => {
        const processedTitle =
          title.toLowerCase().trim().replace(/ /g, '-') || '';
        const titleQuery = processedTitle ? `&title=${processedTitle}` : '';
        const { timestamp, apiKey, hashString } = getHashString();

        return `comics?limit=${limit}&offset=${offset}${titleQuery}&format=comic&orderBy=focDate&noVariants=true&ts=${timestamp}&apikey=${apiKey}&hash=${hashString}`;
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
