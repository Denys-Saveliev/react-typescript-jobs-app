import { ApplyBtn } from '../../components/ApplyBtn/ApplyBtn';
import { CompensationsList } from '../CompensationsList/CompensationsList';

export const Compensations = (props: { compensations: string[] | undefined }) => {

   return (
      <section className="xl:w-[720px] pt-[25px] xl:pt-[35px]">
         <div className="w-[335px] xl:w-[720px]">
            <h2 className="font-bold text-[20px] text-[#3A4562] tracking-[-0.63px] leading-[1.25] mb-[25px] xl:mb-[15px]">
               Compensation & Benefits:
            </h2>
            <CompensationsList compensations={props.compensations && props.compensations} />
            <ApplyBtn class="flex mx-auto xl:mx-0" />
         </div>
      </section>
   );
};

