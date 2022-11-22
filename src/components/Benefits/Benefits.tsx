import { nanoid } from "nanoid";

export const Benefits = (props: { benefits: string[] | undefined }) => {
   return (
      <>
         {props.benefits && props.benefits.map(benefit =>
            <div key={nanoid()} className="py-[17px] px-[12px] xl:px-0 xl:w-[220px] xl:flex xl:justify-center bg-[#ffcf0015] rounded-[8px] border-solid border border-[#ffcf00] m-[3px] last:mr-0">
               <p className="font-bold text-[16px] text-[#988B49] tracking-[-0.4px] leading-[1]">{benefit}</p>
            </div>
         )}
      </>
   );
};

