import { ReactComponent as StarIcon } from '../../images/icons/starIcon.svg';
import { ReactComponent as ShapeIcon } from '../../images/icons/shapeIcon.svg';

export const Header = () => {
  return (
    <div className="xl:flex xl:justify-between xl:pb-[9px] xl:pt-[55px] xl:border-b-[1px] border-b-[#3A456213]">
      <h1 className="font-bold text-[28px] tracking-[0.41px] leading-[1.21] text-[#3A4562] pt-[24px] xl:pt-0 pb-[12px] xl:pb-0 border-b-[1px] xl:border-b-0 border-b-[#3A456213] mb-[24px] xl:mb-0">
        Job Details
      </h1>
      <div className="flex">
        <div className="flex items-center mr-[35px] cursor-pointer">
          <StarIcon strokeWidth="0" fill="#3A4562" width="21" height="20" />
          <p className="ml-[12px] font-normal	text-[16px] text-[#38415d90] leading-[1.44] tracking-[-0.5px]">
            Save to my list
          </p>
        </div>
        <div className="flex items-center cursor-pointer">
          <ShapeIcon />
          <p className="ml-[11px] font-normal	text-[16px] text-[#38415d90] leading-[1.44] tracking-[-0.5px]">
            Share
          </p>
        </div>
      </div>
    </div>
  );
};
