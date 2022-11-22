import { Benefits } from '../Benefits/Benefits';
import { EmploymentTypes } from '../EmploymentTypes/EmploymentTypes';

export const AdditionalInfo = (props: {
  types: string[] | undefined;
  benefits: string[] | undefined;
}) => {
  return (
    <section className="pt-[63px] xl:pt-[86px]">
      <div className="pb-[10px] xl:pb-[9px] mb-[15px] border-b-[1px] border-b-[#3A456213]">
        <h2 className="font-bold text-[28px] text-[#3A4562] tracking-[0.41px] leading-[1.21]">
          Additional Info
        </h2>
      </div>
      <h3 className="mb-[5px] font-normal text-[18px] text-[#38415d82] xl:text-[#3A4562] tracking-[-0.56px] leading-[1.33]">
        Employment type
      </h3>
      <div className="flex flex-wrap mb-[17px]">
        <EmploymentTypes types={props.types} />
      </div>
      <h3 className="mb-[7px] font-normal text-[18px] text-[#38415d82] xl:text-[#3A4562] tracking-[-0.56px] leading-[1.33]">
        Benefits
      </h3>
      <div className="flex flex-wrap">
        <Benefits benefits={props.benefits} />
      </div>
    </section>
  );
};
