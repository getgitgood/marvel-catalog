import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import md5 from 'md5';
import { ApiResponse, RequestResults } from '../types';

const PRIVATE_API_KEY = import.meta.env.VITE_PRIVATE_API_KEY;
const PUBLIC_API_KEY = import.meta.env.VITE_PUBLIC_API_KEY;

export const marvelApi = createApi({
  reducerPath: 'projectApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://gateway.marvel.com/v1/public'
  }),
  endpoints: (builder) => ({
    getComicByTitle: builder.query<RequestResults, string>({
      query: (title) => {
        const processedTitle = title.toLowerCase().trim().replace(/ /g, '-');

        const timestamp = Date.now();
        const seed = timestamp + PRIVATE_API_KEY + PUBLIC_API_KEY;
        const hashString = md5(seed);

        if (processedTitle) {
          return `comics?title=${processedTitle}&ts=${timestamp}&apikey=${PUBLIC_API_KEY}&hash=${hashString}`;
        }

        return `comics?ts=${timestamp}&apikey=${PUBLIC_API_KEY}&hash=${hashString}`;
      },

      transformResponse: (data: ApiResponse) => {
        const { offset, limit, total, count, results } = data.data;
        return {
          pagination: {
            offset: offset,
            limit: limit,
            total: total,
            count: count
          },
          results: results
        };
      }
    })
  })
});

export const { useGetComicByTitleQuery } = marvelApi;
