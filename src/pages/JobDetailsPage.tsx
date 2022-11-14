import { useFetchJobsQuery } from '../redux/jobs/jobsApiSlice';
import { useParams, useNavigate } from 'react-router-dom';
import { Header } from '../components/Header/Header';
import { ApplyBtn } from '../components/ApplyBtn/ApplyBtn';
import { IJob } from '../models/models';
import moment from 'moment';

export const JobDetailsPage = () => {
  const { data: jobs } = useFetchJobsQuery();
  const { jobId } = useParams<string>();

  const job = jobs?.find(job => job.id === jobId);

  return (
    <div className="container bg-[#FFFFFF]">
      <div className="xl:w-[775px] xl:pr-[50px]">
        <Header />
       
           <section className="pt-[30px]">
               <ApplyBtn class="hidden xl:flex mb-[30px]"/>
          <div className="xl:flex justify-between mb-[5px] xl:mb-[7px]">
            <div className="w-[363px] xl:w-[500px]">
              <h1 className="font-bold text-[18px] xl:text-[24px] text-[#3A4562] leading-[1.33] xl:leading-[1.25] tracking-[-0.56px] xl:tracking-[-0.75px]">
                {job?.title}
              </h1>
            </div>
            <div className="hidden xl:block">
              <p className="font-bold text-[20px] text-[#3A4562] tracking-[-0.63px] leading-[1.25]">
                &#8364; {job?.salary}
              </p>
              <p className="font-normal text-[18px] text-[#3A4562] tracking-[-0.56px] leading-[1.33]">
                Brutto, per year
              </p>
            </div>
          </div>
          <div className="flex xl:block items-center justify-between mb-[15px] xl:mb-[7px]">
            <p className="font-light text-[13px] xl:text-[18px] text-[#38415d60] xl:text-[#38415d36] tracking-[0.19px] xl:tracking-[-0.56px] leading-[1.92] xl:leading-[1.33]">
              Posted {moment(job?.createdAt).fromNow()}
            </p>
            <div className="xl:hidden">
              <p className="font-normal text-[18px] text-[#38415d82] tracking-[-0.56px] leading-[1.33]">
                Brutto, per year
              </p>
              <p className="font-bold text-[20px] text-[#3A4562] tracking-[-0.63px] leading-[1.25]">
                &#8364; {job?.salary}
              </p>
            </div>
          </div>
          <p className="w-[365px] xl:w-[720px] font-normal text-[18px] text-[#38415d82] xl:text-[#3A4562] tracking-[-0.56px] leading-[1.33]">
            {job?.description}
          </p>
        </section>
        <section className="pt-[45px] xl:pt-[40px]">
              <div className='w-[365px] xl:w-[720px]'>
                 <h2 className="font-bold text-[20px] text-[#3A4562] tracking-[-0.63px] leading-[1.25] mb-[12px]">
            Responsibilities
          </h2>
          <div className="font-normal text-[18px] text-[#38415d82] xl:text-[#3A4562] tracking-[-0.56px] leading-[1.33]">
            <p className="mb-[30px]">
              Wellstar Medical Group, a physician-led multi-specialty group in
              Atlanta, Georgia, is currently recruiting for a BC/BE
              cardiothoracic surgeon to join their existing cardiovascular
              program. This is an opportunity to play a key role on a
              multidisciplinary team of cardiologists and surgeons.
            </p>
            <p className="mb-[30px]">
              The ideal candidate will have five or more years of experience in
              cardiac surgery. This candidate should be facile with off-pump
              revascularization, complex aortic surgery, minimally invasive
              valve and valve repair, transcatheter valve replacement, surgical
              atrial fibrillation ablation, ventricular assist device placement,
              and extra corporeal membrane oxygenation.
            </p>
            <p>
              Wellstar is one of the largest integrated healthcare systems in
              the Southeast with 11 hospitals in Atlanta metro region. With two
              open heart programs at Kennestone Regional Medical Center and
              Atlanta Medical Center, Wellstar cardiac surgeons perform over
              1200 cardiac procedures per year. The cardiac service line is the
              only center in Georgia with the Joint Commission’s Comprehensive
              Cardiac Center certification.
            </p>
          </div>
          </div>
        </section>
        <section className="xl:w-[720px] pt-[25px] xl:pt-[35px]">
              <div className='w-[335px] xl:w-[720px]'>
                 <h2 className="font-bold text-[20px] text-[#3A4562] tracking-[-0.63px] leading-[1.25] mb-[25px] xl:mb-[15px]">
            Compensation & Benefits:
          </h2>
          <p className="font-normal text-[18px] text-[#38415d82] xl:text-[#3A4562] tracking-[-0.56px] leading-[1.33]">
            Our physicians enjoy a wide range of benefits, including:
          </p>
          <ul className="font-normal text-[18px] text-[#38415d82] xl:text-[#3A4562] tracking-[-0.56px] leading-[1.33] mb-[30px] xl:mb-[40px]">
            <li className="relative">
              <span className="inline-block xl:absolute top-[7px] left-[-20px] w-[9px] h-[9px] bg-[#38415d63] mr-[25px]"></span>
              <p className="inline">
                Very competitive compensation package with bonuses
              </p>
            </li>
            <li className="relative">
              <span className="inline-block xl:absolute top-[7px] left-[-20px] w-[9px]	w-[9px] h-[9px] bg-[#38415d63] mr-[25px]"></span>
              <p className="inline">Medical, Dental, and Vision Insurance</p>
            </li>
            <li className="relative">
              <span className="inline-block xl:absolute top-[7px] left-[-20px] w-[9px]	w-[9px] h-[9px] bg-[#38415d63] mr-[25px]"></span>
              <p className="inline">Occurrence-based Malpractice Coverage</p>
            </li>
            <li className="relative">
              <span className="inline-block xl:absolute top-[7px] left-[-20px] w-[9px]	w-[9px] h-[9px] bg-[#38415d63] mr-[25px]"></span>
              <p className="inline">
                Short-term and Long-term Disability Insurance
              </p>
            </li>
            <li className="relative">
              <span className="inline-block xl:absolute top-[7px] left-[-20px] w-[9px]	w-[9px] h-[9px] bg-[#38415d63] mr-[25px]"></span>
              <p className="inline">Life insurance</p>
            </li>
          </ul>
              </div>
              <ApplyBtn class="flex mx-auto xl:mx-0"/>
          
        </section>
      </div>
    </div>
  );
};
