import { useFetchJobsQuery } from '../redux/jobs/jobsApiSlice';
import { useParams, useNavigate } from 'react-router-dom';
import { Header } from '../components/Header/Header';
import { IJob } from '../models/models';
import moment from 'moment';



export const JobDetailsPage = () => {
   const {  data: jobs } = useFetchJobsQuery();
   const { jobId } = useParams<string>();
   
   const job = jobs?.find(job => job.id === jobId);

   return (
     <div className="container bg-[#FFFFFF]">
         <div className='xl:w-[775px] xl:pr-[50px]'>
            <Header />
            <button className="hidden xl:block px-[30px] py-[18px] bg-[#384564] rounded-[8px] font-semibold	text-[12px] text-[#FFFFFF] leading-[1.33]">APPLY NOW</button>
            <section className='pt-[30px]'>               
               <div className='xl:flex justify-between mb-[5px] xl:mb-[7px]'>
                  <div className='w-[363px] xl:w-[500px]'>
                     <h1 className='font-bold text-[18px] xl:text-[24px] text-[#3A4562] leading-[1.33] xl:leading-[1.25] tracking-[-0.56px] xl:tracking-[-0.75px]'>{job?.title}</h1> 
                  </div>
                  <div className='hidden xl:block'>
                     <p className='font-bold text-[20px] text-[#3A4562] tracking-[-0.63px] leading-[1.25]'>&#8364; { job?.salary}</p>
                     <p className='font-normal text-[18px] text-[#3A4562] tracking-[-0.56px] leading-[1.33]'>Brutto, per year</p>                     
                  </div>
               </div>
               <div className='flex xl:block items-center justify-between mb-[15px] xl:mb-[7px]'>
                  <p className='font-light text-[13px] xl:text-[18px] text-[#38415d60] xl:text-[#38415d36] tracking-[0.19px] xl:tracking-[-0.56px] leading-[1.92] xl:leading-[1.33]'>Posted {moment(job?.updatedAt).fromNow()}</p>
                  <div className='xl:hidden'>
                     <p className='font-normal text-[18px] text-[#38415d82] tracking-[-0.56px] leading-[1.33]'>Brutto, per year</p>
                     <p className='font-bold text-[20px] text-[#3A4562] tracking-[-0.63px] leading-[1.25]'>&#8364; { job?.salary}</p>
                  </div>
               </div>
               <p className='w-[365px] xl:w-[720px] font-normal text-[18px] text-[#38415d82] xl:text-[#3A4562] tracking-[-0.56px] leading-[1.33]'>{job?.description}</p>
            </section>
            <section className='pt-[45px] xl:pt-[40px] mb-[5px]'>
               <h2 className='font-bold text-[20px] text-[#3A4562] tracking-[-0.63px] leading-[1.25] mb-[12px]'>Responsibilities</h2>
               <div className='w-[365px] xl:w-[720px] font-normal text-[18px] text-[#38415d82] xl:text-[#3A4562] tracking-[-0.56px] leading-[1.33]'>
                  <p className='mb-[30px]'>Wellstar Medical Group, a physician-led multi-specialty group in Atlanta, Georgia, is currently recruiting for a BC/BE cardiothoracic surgeon to join their existing cardiovascular program. This is an opportunity to play a key role on a multidisciplinary team of cardiologists and surgeons.</p>
                  <p className='mb-[30px]'>The ideal candidate will have five or more years of experience in cardiac surgery. This candidate should be facile with off-pump revascularization, complex aortic surgery, minimally invasive valve and valve repair, transcatheter valve replacement, surgical atrial fibrillation ablation, ventricular assist device placement, and extra corporeal membrane oxygenation.</p>
                  <p>Wellstar is one of the largest integrated healthcare systems in the Southeast with 11 hospitals in Atlanta metro region. With two open heart programs at Kennestone Regional Medical Center and Atlanta Medical Center, Wellstar cardiac surgeons perform over 1200 cardiac procedures per year. The cardiac service line is the only center in Georgia with the Joint Commission’s Comprehensive Cardiac Center certification.</p>
               </div>
            </section>
         </div> 
      
   </div>
  );
};
