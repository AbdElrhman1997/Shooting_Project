import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import home_bg_1 from "../../assets/Images/HomeImages/home_bg_1.webp";
import home_bg_1_en from "../../assets/Images/HomeImages/home_bg_1_en.webp";
import home_bg_2 from "../../assets/Images/HomeImages/home_bg_2.webp";
import { useTranslation } from "react-i18next";

const HomBackground = () => {
  const { i18n } = useTranslation();
  return (
    <section className="bg-white">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src={i18n.language == "en" ? home_bg_1_en : home_bg_1}
            alt="Slide 1"
            className="xl:mb-0 lg:mb-0 md:mb-2 mb-6"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={home_bg_2}
            alt="Slide 2"
            className="xl:mb-0 lg:mb-0 md:mb-2 mb-6"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default HomBackground;
