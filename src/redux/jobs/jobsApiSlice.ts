import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IJob } from '../../models/models';

const TOKEN: string = process.env.REACT_APP_BEARER_TOKEN as string;

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
          Authorization: `Bearer ${TOKEN}`,
        },
        transformResponse: (response: IJob[]) => response,
      }),
    }),
  }),
});

export const { useFetchJobsQuery } = jobsApi;
