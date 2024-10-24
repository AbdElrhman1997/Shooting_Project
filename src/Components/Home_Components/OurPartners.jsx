import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Logos_01 from "../../assets/Images/PartnersLogos/Services_Images-1.webp";
import Logos_02 from "../../assets/Images/PartnersLogos/Services_Images-2.webp";
import Logos_03 from "../../assets/Images/PartnersLogos/Services_Images-3.webp";
import Logos_04 from "../../assets/Images/PartnersLogos/Services_Images-4.webp";
import Logos_05 from "../../assets/Images/PartnersLogos/Services_Images-5.webp";
import Logos_06 from "../../assets/Images/PartnersLogos/Services_Images-6.webp";
import Logos_07 from "../../assets/Images/PartnersLogos/Services_Images-7.webp";
import Logos_08 from "../../assets/Images/PartnersLogos/Services_Images-8.webp";
import Logos_09 from "../../assets/Images/PartnersLogos/Services_Images-9.webp";
import arrow_left from "../../assets/Images/Icons/arrow_left.svg";
import arrow_right from "../../assets/Images/Icons/arrow_right.svg";
import { useTranslation } from "react-i18next";

const OurPartners = () => {
  const { t } = useTranslation();

  const slider_images = [
    { id: 1, image: Logos_01 },
    { id: 2, image: Logos_02 },
    { id: 3, image: Logos_03 },
    { id: 4, image: Logos_04 },
    { id: 5, image: Logos_05 },
    { id: 6, image: Logos_06 },
    { id: 7, image: Logos_07 },
    { id: 8, image: Logos_08 },
    { id: 9, image: Logos_09 },
  ];

  return (
    <section className="bg-white overflow-x-hidden" dir="ltr">
      <p className="text-black border-b-[#ec3237] border-b-[3px] w-fit mx-auto pb-4 xl:text-5xl lg:text-5xl md:text-5xl text-3xl font-bold xl:mt-32 lg:mt-32 mt-10">
        {t("partners.title")}
      </p>
      <div className="relative flex justify-between items-center">
        <div
          className="custom-next-arrow z-10 cursor-pointer p-4"
          id="custom-prev"
        >
          <img
            src={arrow_left}
            alt=""
            className="xl:w-[200px] lg:w-[200px] md:w-[200px] sm:w-[160px] w-[120px] opacity-70 hover:opacity-100"
          />
        </div>
        <Swiper
          breakpoints={{
            1280: {
              slidesPerView: 4,
              centeredSlides: false,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              centeredSlides: false,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
            },
            0: {
              slidesPerView: 1,
            },
          }}
          navigation={{
            prevEl: "#custom-prev",
            nextEl: "#custom-next",
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper xl:w-3/4 lg:w-3/4 w-3/4 mx-auto"
          loop={true}
        >
          {slider_images.map((item) => {
            return (
              <SwiperSlide key={item.id} className="">
                <img
                  src={item.image}
                  alt={`Logo ${item.id}`}
                  className="xl:mb-0 lg:mb-0 md:mb-2 mb-6"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div
          className="custom-next-arrow z-10 cursor-pointer p-4"
          id="custom-next"
        >
          <img
            src={arrow_right}
            alt=""
            className="xl:w-[200px] lg:w-[200px] md:w-[200px] sm:w-[160px] w-[120px] opacity-70 hover:opacity-100"
          />
        </div>
      </div>
      <div className="rounded-full bg-[#ec3237] w-fit px-24 py-[12px] font-bold xl:text-xl lg:text-xl md:text-xl text-md mx-auto mb-16">
        {t("partners.discoverClients")}
      </div>
    </section>
  );
};

export default OurPartners;
