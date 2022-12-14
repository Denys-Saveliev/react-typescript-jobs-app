import { useFetchJobsQuery } from '../redux/jobs/jobsApiSlice';
import { useParams } from 'react-router-dom';
import { Header } from '../components/Header/Header';
import { Responsibilities } from '../components/Responsibilities/Responsibilities';
import { Description } from '../components/Description/Description';
import { Compensations } from '../components/Compensations/Compensations';
import { AttachedImages } from '../components/AttachedImages/AttachedImages';
import { AdditionalInfo } from '../components/AdditionalInfo/AdditionalInfo';

export const JobDetailsPage = () => {
   const { data: jobs } = useFetchJobsQuery();
   const { jobId } = useParams<string>();

   const job = jobs?.find(job => job.id === jobId);


   return (
      <div className="container bg-[#FFFFFF]">
         <div className="xl:w-[775px] xl:pr-[50px]">
            <Header />
            <Description job={job} />
            <Responsibilities responsibilities={job?.responsibilities} />
            <Compensations compensations={job?.compensations} />
            <AttachedImages
               images={job?.images}
               alt={job?.title}
               class={'xl:hidden'}
            />
            <AdditionalInfo types={job?.employment_type} benefits={job?.benefits} />
            <AttachedImages
               images={job?.images}
               alt={job?.title}
               class={'hidden xl:block'}
            />
         </div>
      </div>
   );
};
