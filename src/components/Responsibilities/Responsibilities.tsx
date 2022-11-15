
export const Responsibilities = (props: {responsibilities: string[] | undefined}) => {
   return (
      <section className="pt-[45px] xl:pt-[40px]">
          <div className="w-[365px] xl:w-[720px]">
            <h2 className="font-bold text-[20px] text-[#3A4562] tracking-[-0.63px] leading-[1.25] mb-[12px]">
              Responsibilities
            </h2>
            <div className="font-normal text-[18px] text-[#38415d82] xl:text-[#3A4562] tracking-[-0.56px] leading-[1.33]">
               
              <p className="mb-[30px]">
                  {props.responsibilities && props.responsibilities[0]}
              </p>
              <p className="mb-[30px]">
                  { props.responsibilities && props.responsibilities[1]}
              </p>
              <p>
                  { props.responsibilities && props.responsibilities[2]}
              </p>
            </div>
          </div>
        </section>
   );
};

