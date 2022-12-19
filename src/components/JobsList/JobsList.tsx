import { Link } from 'react-router-dom';
import moment from 'moment';
import { useState } from 'react';
import { IJob, IProps } from '../../models/models';
import { ReactComponent as MapIcon } from '../../images/icons/mapIcon.svg';
import { ReactComponent as BookmarkIcon } from '../../images/icons/bookmarkIcon.svg';

export const JobsList = ({ jobs }: IProps) => {



   return (
      <ul className="pt-[9px] xl:pt-[30px] pb-[25px] xl:pb-[50px]">
         {jobs &&
            jobs.map((job: IJob) => (
               <li
                  key={job.id}
                  className="relative flex w-[396px] xl:w-[1400px] h-[206px] xl:h-[164px] px-[16px] pt-[45px] pb-[27px] xl:py-[24px] mb-[8px] bg-[#EFF0F5] xl:bg-[#FFFFFF] rounded-[8px] shadow-3xl"
               >
                  <p className="block xl:hidden absolute top-[13px] right-[16px] text-[14px] font-light tracking-[0.21px] leading-[1.21] text-[#878D9D]">
                     Posted {moment(job.createdAt).fromNow()}
                  </p>

                  <img
                     className="w-[66px] xl:w-[85px] h-[66px] xl:h-[85px] mr-[19px] xl:mr-[26px] rounded-full"
                     src={job.picture}
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
                           {job.location}
                        </p>
                     </div>
                  </div>
                  <div className="ml-auto flex flex-col justify-between hidden xl:flex">
                     <BookmarkIcon className="xl:ml-auto xl:cursor-pointer xl:hover:opacity-80" />
                     <p className="text-[16px] font-normal tracking-[0.24px] leading-[1.56] text-[#878D9D]">
                        Posted {moment(job.createdAt).fromNow()}
                     </p>
                  </div>
               </li>
            ))}
      </ul>
   );
};
