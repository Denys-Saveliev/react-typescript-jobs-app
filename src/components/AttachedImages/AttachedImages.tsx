import { nanoid } from 'nanoid';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper';

export const AttachedImages = (props: {
   images: string[] | undefined;
   alt: string | undefined;
   class: string;
}) => {
   const sectionClass = `xl:w-[720px] pt-[135px] xl:pt-[84px] ${props.class}`;

   return (
      <section className={sectionClass}>
         <div className="pb-[10px] mb-[10px] border-b-[1px] border-b-[#3A456213]">
            <h2 className="font-bold text-[28px] text-[#3A4562] tracking-[0.41px] leading-[1.21]">
               Attached images
            </h2>
         </div>
         <Swiper
            centeredSlides={false}
            spaceBetween={10}
            slidesPerView={1.85}
            autoplay={{
               delay: 2000,
               disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            breakpoints={{
               1920: {
                  slidesPerView: 3,
               },
            }}
         >
            {props.images &&
               props.images.map(image => (
                  <SwiperSlide key={nanoid()}>
                     <img
                        className="overflow-hidden rounded-[10px] w-[209px] h-[115px] drop-shadow"
                        src={image}
                        alt={props.alt}
                     />
                  </SwiperSlide>
               ))}
         </Swiper>
      </section>
   );
};
