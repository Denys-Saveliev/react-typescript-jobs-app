import { nanoid } from 'nanoid';

export const Responsibilities = (props: {
  responsibilities: string[] | undefined;
}) => {
  return (
    <section className="pt-[45px] xl:pt-[40px]">
      <div className="w-[365px] xl:w-[720px]">
        <h2 className="font-bold text-[20px] text-[#3A4562] tracking-[-0.63px] leading-[1.25] mb-[12px]">
          Responsibilities
        </h2>
        <div className="font-normal text-[18px] text-[#38415d82] xl:text-[#3A4562] tracking-[-0.56px] leading-[1.33]">
          {props.responsibilities &&
            props.responsibilities.map(responsibility => (
              <p key={nanoid()} className="mb-[30px] last-of-type:mb-0">
                {responsibility}
              </p>
            ))}
        </div>
      </div>
    </section>
  );
};
