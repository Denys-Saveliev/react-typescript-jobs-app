import { ReactComponent as ArrowRight } from '../../images/icons/arrowRight.svg';
import { ReactComponent as ArrowLeft } from '../../images/icons/arrowLeft.svg';

export const Pagination = () => {
  return (
    <div className="relative w-[396px] xl:w-[515px] h-[40px] xl:h-[52px] bg-[#F9FAFD] xl:bg-[#FFFFFF] rounded-[8px] xl:rounded-[10.4px] mb-[17px] xl:mb-[64px] xl:mx-auto px-[52.5px] xl:px-[68.25px] pt-[9px] xl:pt-[12px]">
      <button className="hidden xl:block absolute left-[23px] top-[17px] cursor-pointer">
        <ArrowLeft />
      </button>
      <div className="absolute left-[52px] xl:left-[68px] xl:top-[12px] h-[24px] xl:h-[31.2px] w-[1px] xl:w-[1.3px] bg-divider"></div>
      <ul className="flex justify-center xl:items-center content-end h-[30.5px] xl:h-[39.35px] font-bold text-[16px] xl:text-[20.8px] tracking-[1.34px] leading-[1.19] text-numbers xl:mx-auto">
        <li className="w-[24px] xl:h-[31px] xl:w-[31px] text-center mr-[6px] xl:mr-[8px]">
          <a href="#">1</a>
        </li>
        <li className="w-[24px] xl:h-[31px] xl:w-[31px] text-center mr-[6px] xl:mr-[8px] text-[#55699E] border-b-[1px] border-b-[#55699E]">
          <a href="#">2</a>
        </li>
        <li className="w-[24px] xl:h-[31px] xl:w-[31px] text-center mr-[6px] xl:mr-[8px]">
          <a href="#">3</a>
        </li>
        <li className="w-[24px] xl:h-[31px] xl:w-[31px] text-center mr-[6px] xl:mr-[8px]">
          <a href="#">4</a>
        </li>
        <li className="w-[24px] xl:h-[31px] xl:w-[31px] text-center mr-[6px] xl:mr-[8px]">
          <a href="#">5</a>
        </li>
        <li className='after:absolute after:bottom-[-2px] xl:after:bottom-[10px] after:right-[130px] xl:after:right-[170px] after:content-["..."] w-[24px] mr-[6px] xl:h-[31px] text-center'></li>
        <li className="w-[24px] xl:h-[31px] text-center">
          <a href="#">1</a>8
        </li>
      </ul>
      <div className="absolute right-[52px] xl:right-[68px] top-[9px] xl:top-[12px] h-[24px] xl:h-[31.2px] w-[1px] xl:w-[1.3px] bg-divider"></div>
      <button className="hidden xl:block absolute right-[23px] top-[17px] cursor-pointer">
        <ArrowRight />
      </button>
    </div>
  );
};
