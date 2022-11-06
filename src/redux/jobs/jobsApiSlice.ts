import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IJob } from '../../models/models';

export const jobsApi = createApi({
  reducerPath: 'jobs/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.json-generator.com/templates/ZM1r0eic3XEy',
  }),
  endpoints: builder => ({
    fetchJobs: builder.query<IJob[], void>({
      query: () => ({
        url: '/data',
        headers: {
          Authorization: 'Bearer wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu',
        },
        transformResponse: (response: IJob[]) => response,
      }),
    }),
  }),
});

export const { useFetchJobsQuery } = jobsApi;
