import { IJob } from '../models/models';
import { useFetchJobsQuery } from '../redux/jobs/jobsApiSlice';
import { ReactComponent as MapIcon } from '../images/icons/mapIcon.svg';

export const HomePage = () => {
  const { isLoading, data: jobs } = useFetchJobsQuery();
  console.log(jobs);
  return (
    <>
      {isLoading && <div className="text-center">Loading...</div>}
      <ul>
        {jobs &&
          (jobs as IJob[]).map(job => (
            <li
              key={job.id}
              className="flex h-[164px] px-[16px] py-[24px] mb-[8px] bg-[#FFFFFF] rounded-[8px] shadow-3xl"
            >
              <img
                className="w-[85px] h-[85px] mr-[26px] rounded-full"
                src={job.pictures[0]}
                alt={job.name}
              />
              <div>
                <div className="w-[712px]">
                  <h2 className="text-xl font-bold tracking-[-0.63px] leading-[1.25] text-[#3A4562] mb-[8px]">
                    {job.title}
                  </h2>
                </div>
                <div className="flex text-base font-normal tracking-[0.24px] leading-[1.56] text-[#878D9D] mb-[8px]">
                  <h3>Department name</h3>
                  <ul className="list-disc ml-[25px]">
                    <li>{job.name}</li>
                  </ul>
                </div>
                <MapIcon />
              </div>
            </li>
          ))}
      </ul>
    </>
  );
};
