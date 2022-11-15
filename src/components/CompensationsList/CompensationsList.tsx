import { nanoid } from 'nanoid';

export const CompensationsList = (props: { compensations: string[] | undefined }) => {

   return (
      <>
         <p className="font-normal text-[18px] text-[#38415d82] xl:text-[#3A4562] tracking-[-0.56px] leading-[1.33]">
            Our physicians enjoy a wide range of benefits, including:
         </p>
         <ul className="font-normal text-[18px] text-[#38415d82] xl:text-[#3A4562] tracking-[-0.56px] leading-[1.33] mb-[30px] xl:mb-[40px]">
            {props.compensations && props.compensations.map(compensation =>
               <li key={nanoid()} className="relative">
                  <span className="inline-block xl:absolute top-[7px] left-[-20px] w-[9px] h-[9px] bg-[#38415d63] mr-[25px]"></span>
                  <p className="inline">
                     {compensation}
                  </p>
               </li>
            )}
         </ul>
      </>
   );
};

