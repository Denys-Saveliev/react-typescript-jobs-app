
export const ApplyBtn = (props: { class: string }) => {
   
   const applyBtnCls = `items-center justify-center w-[127px] h-[52px] bg-[#384564] rounded-[8px] font-semibold text-[12px] text-[#FFFFFF] leading-[1.33] ${props.class}`;

   return (
      <button className={applyBtnCls}>
          APPLY NOW
        </button>
   );
};

