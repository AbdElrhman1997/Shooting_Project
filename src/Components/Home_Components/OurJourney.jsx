import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import our_partners from "../../assets/Images/HomeImages/our_partners.webp";
import { useTranslation } from "react-i18next";

const OurJourney = () => {
  const { t } = useTranslation();

  return (
    <div dir="rtl" className="xl:mt-20 lg:mt-20 md:mt-20 mt-10 min-h-[70vh]">
      <div className="-z-10 xl:-mt-[4.6rem] lg:-mt-[4.6rem] md:-mt-[4.6rem] -mt-[.6rem]">
        <div className="grid grid-cols-6 gap-x-6 text-black xl:px-16 lg:px-16 md:px-16 px-4 xl:mt-10 lg:mt-10 md:mt-10 relative xl:text-right lg:text-right text-center">
          <p className="col-span-6 border-b-[#ec3237] border-b-[3px] w-fit xl:mx-0 lg:mx-0 mx-auto pb-4 xl:text-5xl lg:text-5xl md:text-5xl text-3xl font-bold">
            {t("journey.title")}
          </p>
          <div
            className="absolute xl:top-[260px] lg:top-[240px] left-0 w-full xl:block lg:block hidden"
            style={{
              background: "linear-gradient(to left, rgba(255, 0, 0, 0), #000)",
              minHeight: "350px",
            }}
          ></div>
          <ul className="xl:leading-loose leading-relaxed mt-8 xl:mx-0 lg:mx-0 md:mx-0 mx-auto xl:col-span-3 lg:col-span-3 col-span-6 text-xl font-bold mb-10 w-11/12 ">
            <li className="relative flex gap-x-2 items-center">
              {t("journey.history")}
            </li>
            <li className="relative flex gap-x-2 items-center mt-2">
              <div>
                {t("journey.uniquePresence")}
                <span className="text-main">
                  {" "}
                  {t("journey.productProjects")}
                </span>
                {t("journey.uniquePresence_2")}
              </div>
            </li>
            <li className="relative flex gap-x-2 items-center">
              <div>
                {t("journey.supportedProjects")}{" "}
                <span className="text-main">
                  {t("journey.supportedProjectsList")}
                </span>
              </div>
            </li>
          </ul>
          <div className="relative flex justify-between items-center xl:col-span-3 lg:col-span-3 col-span-6 text-xl">
            <Swiper
              slidesPerView={1}
              navigation={{
                prevEl: "#custom-prev",
                nextEl: "#custom-next",
              }}
              spaceBetween={50}
              pagination={{
                el: ".swiper-pagination",
                clickable: true,
                bulletClass: "swiper-pagination-bullet",
                bulletActiveClass: "swiper-pagination-bullet-active",
              }}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper mx-auto"
              loop={true}
            >
              <SwiperSlide>
                <img
                  src={our_partners}
                  alt="Slide 1"
                  className="xl:mb-0 lg:mb-0 md:mb-2 max-h-[350px] mx-auto"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={our_partners}
                  alt="Slide 2"
                  className="xl:mb-0 lg:mb-0 md:mb-2 max-h-[350px] mx-auto"
                />
              </SwiperSlide>
              <div className="swiper-pagination"></div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurJourney;
