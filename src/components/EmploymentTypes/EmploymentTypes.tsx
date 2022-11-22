import { nanoid } from "nanoid";

export const EmploymentTypes = (props: { types: string[] | undefined }) => {
   return (
      <>
         {props.types && props.types.map(type =>
            <div key={nanoid()} className="py-[17px] pr-[15px] xl:pr-0 w-[122px] xl:w-[222px] bg-[#55699E4D] rounded-[8px] border-solid border border-[#55699e30] m-[5px] last:mr-0">
               <p className="flex justify-end xl:justify-center font-bold text-[16px] text-[#55699E] tracking-[-0.46px] leading-[1]"> {type}</p>
            </div>
         )}
      </>
   );
};

