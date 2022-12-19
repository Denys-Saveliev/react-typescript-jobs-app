import { useNavigate } from 'react-router-dom';

import { ReactComponent as Arrow } from '../../images/icons/Arrow.svg';


export const ReturnBtn = () => {
   const navigate = useNavigate();

   return (
      <button onClick={() => navigate(-1)} className="hidden cursor-pointer xl:flex items-center justify-center absolute top-[360px] left-[-100px] w-[215px] h-[50px] bg-[#38456414] rounded-[8px]">
         <Arrow /> <span className='ml-[20px] text-[#3A4562] text-[12px] font-semibold leading-[1.33]'>RETURN TO JOB BOARD</span>
      </button>
   );
};

