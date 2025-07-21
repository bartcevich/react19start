import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const albumsApi = createApi({
  reducerPath: 'albumsApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  tagTypes: ['Albums'],
  endpoints: (builder) => ({
    getAlbums: builder.query({
      query: () => 'albums',
      providesTags: ['Albums'],
    }),
    addAlbum: builder.mutation({
      query: (album) => ({
        url: 'albums',
        method: 'POST',
        body: album,
      }),
      invalidatesTags: ['Albums'],
    }),
    deleteAlbum: builder.mutation({
      query: (id) => ({
        url: `albums/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Albums'],
    }),
  }),
});

export const { useGetAlbumsQuery, useAddAlbumMutation, useDeleteAlbumMutation } = albumsApi;
