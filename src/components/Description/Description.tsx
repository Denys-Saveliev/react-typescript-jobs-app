import { IJob } from '../../models/models';
import { ApplyBtn } from '../../components/ApplyBtn/ApplyBtn';
import moment from 'moment';

export const Description = (props: { job: IJob | undefined }) => {
  return (
    <section className="pt-[30px]">
      <ApplyBtn class="hidden xl:flex mb-[30px]" />
      <div className="xl:flex justify-between mb-[5px] xl:mb-[7px]">
        <div className="w-[363px] xl:w-[500px]">
          <h1 className="font-bold text-[18px] xl:text-[24px] text-[#3A4562] leading-[1.33] xl:leading-[1.25] tracking-[-0.56px] xl:tracking-[-0.75px]">
            {props.job?.title}
          </h1>
        </div>
        <div className="hidden xl:block">
          <p className="font-bold text-[20px] text-[#3A4562] tracking-[-0.63px] leading-[1.25]">
            &#8364; {props.job?.salary}
          </p>
          <p className="font-normal text-[18px] text-[#3A4562] tracking-[-0.56px] leading-[1.33]">
            Brutto, per year
          </p>
        </div>
      </div>
      <div className="flex xl:block items-center justify-between mb-[15px] xl:mb-[7px]">
        <p className="font-light text-[13px] xl:text-[18px] text-[#38415d60] xl:text-[#38415d36] tracking-[0.19px] xl:tracking-[-0.56px] leading-[1.92] xl:leading-[1.33]">
          Posted {moment(props.job?.createdAt).fromNow()}
        </p>
        <div className="xl:hidden">
          <p className="font-normal text-[18px] text-[#38415d82] tracking-[-0.56px] leading-[1.33]">
            Brutto, per year
          </p>
          <p className="font-bold text-[20px] text-[#3A4562] tracking-[-0.63px] leading-[1.25]">
            &#8364; {props.job?.salary}
          </p>
        </div>
      </div>
      <p className="w-[365px] xl:w-[720px] font-normal text-[18px] text-[#38415d82] xl:text-[#3A4562] tracking-[-0.56px] leading-[1.33]">
        {props.job?.description}
      </p>
    </section>
  );
};
