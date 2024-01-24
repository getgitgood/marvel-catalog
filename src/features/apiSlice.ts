import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import md5 from 'md5';

const PRIVATE_API_KEY = import.meta.env.VITE_PRIVATE_API_KEY;
const PUBLIC_API_KEY = import.meta.env.VITE_PUBLIC_API_KEY;

export const marvelApi = createApi({
  reducerPath: 'projectApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://gateway.marvel.com/v1/public'
  }),
  endpoints: (builder) => ({
    getComicByTitle: builder.query({
      query: (title) => {
        const timestamp = Date.now();
        const seed = timestamp + PRIVATE_API_KEY + PUBLIC_API_KEY;
        const hashString = md5(seed);

        return `comics?title=${title}&ts=${timestamp}&apikey=${PUBLIC_API_KEY}&hash=${hashString}`;
      }
    })
  })
});

export const { useGetComicByTitleQuery } = marvelApi;
