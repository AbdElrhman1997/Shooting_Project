import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import arrow_left from "../../assets/Images/Icons/arrow_left.svg";
import arrow_right from "../../assets/Images/Icons/arrow_right.svg";
import our_partners from "../../assets/Images/HomeImages/our_partners.jpg";

const OurJourney = () => {
  return (
    <div dir="rtl" className="xl:mt-20 lg:mt-20 md:mt-20 mt-10 min-h-[70vh]">
      <div className="-z-10 xl:-mt-[4.6rem] lg:-mt-[4.6rem] md:-mt-[4.6rem] -mt-[.6rem]">
        <div className="grid grid-cols-6 gap-x-6 text-black xl:px-16 lg:px-16 md:px-16 px-4 xl:mt-10 lg:mt-10 md:mt-10 relative xl:text-right lg:text-right text-center">
          <p className="col-span-6 border-b-[#ec3237] border-b-[3px] w-fit xl:mx-0 lg:mx-0 mx-auto pb-4 xl:text-5xl lg:text-5xl md:text-5xl text-3xl font-bold">
            مسيرتنا
          </p>
          <div
            className="absolute xl:top-[260px] lg:top-[240px] left-0 w-full xl:block lg:block hidden"
            style={{
              background: "linear-gradient(to left, rgba(255, 0, 0, 0), #000)",
              minHeight: "350px",
            }}
          ></div>
          <ul className="xl:leading-loose leading-relaxed  mt-8 xl:mx-0 lg:mx-0 md:mx-0 mx-auto xl:col-span-3 lg:col-span-3 col-span-6 text-xl font-bold mb-10 w-11/12 ">
            <li className="relative flex gap-x-2 items-center">
              نحن شوت انج لنـــا تـــاريخ قديم في تـــأسيس الشركـــات الناشئـــة
              و التسويق الرقمـــي و الميديـــا لأكثر من 150 براند واجهتنا أكبر
              الصعوبات و التحديـــات و استطعنـــا حلها بل وسجلنا أرقام و نتائج
              كبيرة برحله لتحول الرقمي .
            </li>
            <li className="relative flex gap-x-2 items-center mt-2">
              <div>
                لنا بصمتنا الخـــاصة و الأولـــي بالسوق التي أستطعنــــا من
                خلالهـــــــــــا{" "}
                <span className="text-main">
                  {" "}
                  طرح مشـــــــــــاريع تصنيــــــــــع المنتج{" "}
                </span>
                بصورة مختلفة وجودة تنــافسيـة لدعم المنتج السعودي ممـــا يسهل
                علينــا تسويق المنتج وفق معــايير النجـــاح و الصناعة تفاديا
                للمشــاريع المقلدة و أستنســاخ المنتج .
              </div>
            </li>
            <li className="relative flex gap-x-2 items-center">
              <div>
                المشاريع المدعمة لدينا{" "}
                <span className="text-main">
                  (العطور - مستحضرات التجميل الملابس - المطاعم - الكافيهات)
                </span>
              </div>
            </li>
          </ul>
          <div className="relative flex justify-between items-center xl:col-span-3 lg:col-span-3 col-span-6 text-xl">
            {/* <div
            className="custom-next-arrow z-10 cursor-pointer p-4 "
            id="custom-prev"
          >
            <img
              src={arrow_left}
              alt=""
              className="xl:w-[200px] lg:w-[200px] md:w-[200px] sm:w-[160px] w-[120px] opacity-70 hover:opacity-100"
            />
          </div> */}
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
                bulletClass: "swiper-pagination-bullet", // Default bullet class
                bulletActiveClass: "swiper-pagination-bullet-active", // Active bullet class
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
                  alt="Slide 1"
                  className="xl:mb-0 lg:mb-0 md:mb-2 max-h-[350px] mx-auto"
                />
              </SwiperSlide>
              <div className="swiper-pagination"></div>
            </Swiper>

            {/* <div
            className="custom-next-arrow z-10 cursor-pointer p-4"
            id="custom-next"
          >
            <img
              src={arrow_right}
              alt=""
              className="xl:w-[200px] lg:w-[200px] md:w-[200px] sm:w-[160px] w-[120px] opacity-70 hover:opacity-100"
            />
          </div> */}
          </div>
        </div>
        {/* <div className="col-span-6 xl:mt-10 lg:mt-10 mx-auto">
            <img
              src={OurJourny}
              alt="Consultation_Section_Image"
              className="object-cover w-[300px]"
            />
          </div> */}
      </div>
    </div>
  );
};

export default OurJourney;
