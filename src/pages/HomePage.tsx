import { ReactComponent as ArrowRight } from '../images/icons/arrowRight.svg';
import { ReactComponent as ArrowLeft } from '../images/icons/arrowLeft.svg';
import { ReactComponent as MapIcon } from '../images/icons/mapIcon.svg';
import { ReactComponent as BookmarkIcon } from '../images/icons/bookmarkIcon.svg';
import { useFetchJobsQuery } from '../redux/jobs/jobsApiSlice';
import { IJob } from '../models/models';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { ThreeDots } from 'react-loader-spinner';

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
      <ul className="pt-[9px] xl:pt-[30px] pb-[25px] xl:pb-[50px]">
        {jobs &&
          (jobs as IJob[]).map(job => (
            <li
              key={job.id}
              className="relative flex w-[396px] xl:w-[1400px] h-[206px] xl:h-[164px] px-[16px] pt-[45px] pb-[27px] xl:py-[24px] mb-[8px] bg-[#EFF0F5] xl:bg-[#FFFFFF] rounded-[8px] shadow-3xl"
            >
              <p className="block xl:hidden absolute top-[13px] right-[16px] text-[14px] font-light tracking-[0.21px] leading-[1.21] text-[#878D9D]">
                Posted {moment(job.updatedAt).fromNow()}
              </p>

              <img
                className="w-[66px] xl:w-[85px] h-[66px] xl:h-[85px] mr-[19px] xl:mr-[26px] rounded-full"
                src={job.pictures[0]}
                alt={job.name}
              />
              <div>
                <div className="w-[278px] xl:w-[712px] h-[48px] xl:h-[50px] text-clip overflow-hidden ">
                  <Link
                    to={`/details/${job.id}`}
                    className="hover:opacity-80 cursor-pointer"
                  >
                    <h2 className="text-[18px] xl:text-[20px] font-normal xl:font-bold tracking-[-0.57px] xl:tracking-[-0.63px] leading-[1.33] xl:leading-[1.25] text-[#3A4562] mb-[5px] xl:mb-[8px]">
                      {job.title}
                    </h2>
                  </Link>
                </div>
                <div className="flex text-[16px] font-normal tracking-[0.24px] leading-[1.56] text-[#878D9D] mb-[7px] xl:mb-[8px]">
                  <p>Department name &#x2022; {job.name}</p>
                </div>
                <div className="flex items-center">
                  <MapIcon />
                  <p className="ml-[8px] text-[#878D9D] font-normal text-[16px] tracking-[0.24px] leading-[1.56]">
                    {job.address}
                  </p>
                </div>
              </div>
              <div className="ml-auto flex flex-col justify-between hidden xl:flex">
                <BookmarkIcon className="xl:ml-auto xl:cursor-pointer xl:hover:opacity-80" />
                <p className="text-[16px] font-normal tracking-[0.24px] leading-[1.56] text-[#878D9D]">
                  Posted {moment(job.updatedAt).fromNow()}
                </p>
              </div>
            </li>
          ))}
      </ul>
      {isLoading || isError ? null : (
        <div className="relative w-[396px] xl:w-[515px] h-[40px] xl:h-[52px] bg-[#F9FAFD] xl:bg-[#FFFFFF] rounded-[8px] xl:rounded-[10.4px] mb-[17px] xl:mb-[64px] xl:mx-auto px-[52.5px] xl:px-[68.25px] pt-[9px] xl:pt-[12px]">
          <button className="hidden xl:block absolute left-[23px] top-[17px] cursor-pointer">
            <ArrowLeft />
          </button>
          <div className="absolute left-[52px] xl:left-[68px] xl:top-[12px] h-[24px] xl:h-[31.2px] w-[1px] xl:w-[1.3px] bg-divider"></div>
          <ul className="flex justify-center xl:items-center content-end h-[30.5px] xl:h-[39.35px] font-bold text-[16px] xl:text-[20.8px] tracking-[1.34px] leading-[1.19] text-numbers xl:mx-auto">
            <li className="w-[24px] xl:h-[31px] xl:w-[31px] text-center mr-[6px] xl:mr-[8px]">
              <a href="#">1</a>
            </li>
            <li className="w-[24px] xl:h-[31px] xl:w-[31px] text-center mr-[6px] xl:mr-[8px] text-[#55699E] border-b-[1px] border-b-[#55699E]">
              <a href="#">2</a>
            </li>
            <li className="w-[24px] xl:h-[31px] xl:w-[31px] text-center mr-[6px] xl:mr-[8px]">
              <a href="#">3</a>
            </li>
            <li className="w-[24px] xl:h-[31px] xl:w-[31px] text-center mr-[6px] xl:mr-[8px]">
              <a href="#">4</a>
            </li>
            <li className="w-[24px] xl:h-[31px] xl:w-[31px] text-center mr-[6px] xl:mr-[8px]">
              <a href="#">5</a>
            </li>
            <li className='after:absolute after:bottom-[-2px] xl:after:bottom-[10px] after:right-[130px] xl:after:right-[170px] after:content-["..."] w-[24px] mr-[6px] xl:h-[31px] text-center'></li>
            <li className="w-[24px] xl:h-[31px] text-center">
              <a href="#">1</a>8
            </li>
          </ul>
          <div className="absolute right-[52px] xl:right-[68px] top-[9px] xl:top-[12px] h-[24px] xl:h-[31.2px] w-[1px] xl:w-[1.3px] bg-divider"></div>
          <button className="hidden xl:block absolute right-[23px] top-[17px] cursor-pointer">
            <ArrowRight />
          </button>
        </div>
      )}
    </div>
  );
};
