import { useFetchJobsQuery } from "../redux/jobs/jobsApiSlice";

export const HomePage = () => {
   const { isLoading, data } = useFetchJobsQuery('');
   
   console.log(data)

  return <h1>Home</h1>;
};
