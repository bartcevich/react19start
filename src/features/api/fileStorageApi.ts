import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface File {
  id: string;
  name: string;
  size: number;
  type: string;
  url: string;
}

export const fileStorageApi = createApi({
  reducerPath: 'fileStorageApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/files' }),
  tagTypes: ['Files'],
  endpoints: (builder) => ({
    getFiles: builder.query<File[], void>({
      query: () => '',
      providesTags: ['Files'],
    }),
    uploadFile: builder.mutation<File, FormData>({
      query: (formData) => ({
        url: '',
        method: 'POST',
        body: formData,
      }),
      invalidatesTags: ['Files'],
    }),
    deleteFile: builder.mutation<void, string>({
      query: (id) => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Files'],
    }),
  }),
});

export const { 
  useGetFilesQuery, 
  useUploadFileMutation, 
  useDeleteFileMutation 
} = fileStorageApi;