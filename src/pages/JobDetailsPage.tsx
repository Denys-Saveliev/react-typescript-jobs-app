import { useFetchJobsQuery } from '../redux/jobs/jobsApiSlice';
import { useParams, useNavigate } from 'react-router-dom';
import { Header } from '../components/Header/Header';
import { Responsibilities } from '../components/Responsibilities/Responsibilities';
import { Description } from '../components/Description/Description';
import { Compensations } from '../components/Compensations/Compensations';

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
      </div>
    </div>
  );
};
