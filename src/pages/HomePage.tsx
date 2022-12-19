import { useFetchJobsQuery } from '../redux/jobs/jobsApiSlice';
import { ThreeDots } from 'react-loader-spinner';
import { JobsList } from '../components/JobsList/JobsList';
import { Pagination } from '../components/Pagination/Pagination';

export const HomePage = () => {
   const { isLoading, isError, data: jobs } = useFetchJobsQuery();
   return (
      <div className="container bg-[#e6e9f2]">
         {isError && (
            <div className="fixed top-[50%] left-[50%] text-bold text-[20px] xl:text-[30px] -translate-x-[50%] -translate-y-[50%]">
               Somthing went wrong...
            </div>
         )}
         {isLoading && (
            <div className="fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
               <ThreeDots height="80" width="80" color="#55699E" />
            </div>
         )}

         {jobs && <JobsList jobs={jobs} />}
         {isLoading || isError ? null : <Pagination />}
      </div>
   );
};
