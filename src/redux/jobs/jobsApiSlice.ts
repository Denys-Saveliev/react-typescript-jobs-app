import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IJob } from '../../models/models';

export const jobsApi = createApi({
  reducerPath: 'jobs/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://6372041b07858778618832a9.mockapi.io/',
  }),
  endpoints: builder => ({
    fetchJobs: builder.query<IJob[], void>({
      query: () => ({
        url: 'jobs',       
        transformResponse: (response: IJob[]) => response,
      }),
    }),
  }),
});

export const { useFetchJobsQuery } = jobsApi;
