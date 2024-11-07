import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import arrow_left from "../../assets/Images/Icons/arrow_left.svg";
import arrow_right from "../../assets/Images/Icons/arrow_right.svg";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const OurPartners = () => {
  const { t, i18n } = useTranslation();
  const [logos_images, set_logos_images] = useState([]);
  const fetchServices = async () => {
    try {
      const response = await axios.get(
        `https://admin.shootingads.net/api/getPartnerApi`,
        {
          params: { currentPage: 1, per_page: 12 },
        }
      );
      const { data } = response.data;
      set_logos_images(data);
    } catch (error) {
      console.error("Error fetching posts", error);
    } finally {
      // setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  return (
    <section className="bg-white overflow-x-hidden" dir="ltr">
      <p className="text-black border-b-[#ec3237] border-b-[6px] w-fit mx-auto pb-4 xl:text-5xl lg:text-5xl md:text-5xl text-3xl font-bold 2xl:mt-0 xl:mt-24 lg:mt-24 mt-10">
        {t("partners.title")}
      </p>
      <div className="relative flex justify-between items-center 2xl:my-4 xl:my-4 lg:my-4 md:my-4 my-0">
        <div className="custom-prev-arrow-2 z-10 cursor-pointer p-4">
          <img
            src={arrow_left}
            alt=""
            className="xl:w-[170px] lg:w-[170px] md:w-[170px] sm:w-[160px] w-[120px] opacity-70 hover:opacity-100"
          />
        </div>
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={50}
          breakpoints={{
            1280: {
              slidesPerView: 4,
              spaceBetween: 20,
              centeredSlides: false,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
              centeredSlides: false,
            },
            768: {
              slidesPerView: 2,
            },
            0: {
              slidesPerView: 1,
            },
          }}
          onSwiper={(swiper) => console.log(swiper)}
          className="mySwiper xl:w-3/4 lg:w-3/4 w-3/4 mx-auto"
          navigation={{
            prevEl: ".custom-prev-arrow-2",
            nextEl: ".custom-next-arrow-2",
          }}
        >
          {logos_images.map((item) => {
            return (
              <SwiperSlide key={item.id} className="">
                <img
                  src={`https://admin.shootingads.net/images/${item?.image}`}
                  alt={`Logo ${item.id}`}
                  className="xl:mb-0 lg:mb-0 md:mb-2 mb-6"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="custom-next-arrow-2 z-10 cursor-pointer p-4">
          <img
            src={arrow_right}
            alt=""
            className="xl:w-[170px] lg:w-[170px] md:w-[170px] sm:w-[160px] w-[120px] opacity-70 hover:opacity-100"
          />
        </div>
      </div>
      <Link
        to={`/${i18n.language}/our_projects`}
        className="rounded-full block bg-[#ec3237] w-fit px-24 py-[12px] font-bold 2xl:text-3xl xl:text-xl lg:text-xl md:text-xl text-md mx-auto mb-16"
      >
        {t("partners.discoverClients")}
      </Link>
    </section>
  );
};

export default OurPartners;
