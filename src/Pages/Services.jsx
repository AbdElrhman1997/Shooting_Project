import GeneralFrame from "../Components/GeneralFrame";
import icon_1 from "../assets/Images/Icons/icon web-08.png";
import icon_2 from "../assets/Images/Icons/icon web-07.png";
import icon_3 from "../assets/Images/Icons/icon web-06.png";
import icon_4 from "../assets/Images/Icons/icon web-01.png";
import icon_5 from "../assets/Images/Icons/icon web-05.png";
import icon_6 from "../assets/Images/Icons/icon web-02.png";
import icon_7 from "../assets/Images/Icons/icon web-01.png";
import icon_8 from "../assets/Images/Icons/icon web-03.png";
import top_frame from "../assets/Images/top_frame.png";
import bottom_frame from "../assets/Images/bottom_frame.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const Services = () => {
  const { i18n, t } = useTranslation();

  return (
    <section>
      <GeneralFrame
        content={
          <div
            className="bg-white text-black rounded-[10px]  py-12"
            dir={i18n.language === "ar" ? "rtl" : "ltr"}
          >
            <div className="">
              <div className="bg-white">
                <p className="col-span-6 text-[#000] border-b-[#ec3237] border-b-[6px] w-fit 2xl:mx-12 xl:mx-12 lg:mx-12 md:mx-8 mx-auto pb-4 xl:text-5xl lg:text-5xl md:text-5xl text-3xl font-bold">
                  {t("services_2.title")}
                </p>
                <div className="bg-white flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col font-bold items-center w-f pb-10 2xl:pt-8 xl:pt-8 lg:pt-8 md:pt-6 rounded-[30px]">
                  <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-16 xl:px-16 lg:px-8  px-4">
                    <p className="text-justify 2xl:my-6 xl:my-6 lg:my-6 md:my-6 my-0 mt-4 text-[18px] leading-8 ">
                      {t("services_2.highlight_brand")}
                    </p>
                  </div>
                  <div className="center-line-services 2xl:block xl:block lg:block md:block hidden mx-2"></div>

                  <div className=" 2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-16 xl:px-16 lg:px-8 px-4  2xl:block xl:block lg:block md:block inline">
                    <p className="text-justify 2xl:my-6 xl:my-6 lg:my-6 md:my-6 my-0 text-[18px] leading-8 ">
                      {t("services_2.start_project")}
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-12 2xl:gap-x-8 xl:gap-x-8 2xl:px-16 xl:px-16 lg:px-8 gap-y-32 px-4 mt-16">
                  <Link
                    to={`/${i18n.language}/brands_projects`}
                    className=" relative h-[197.5px] shadow-xl xl:col-span-3 lg:col-span-6 md:col-span-6 col-span-6 flex flex-col justify-center items-center text-center p-12 rounded-2xl 2xl:w-full xl:w-full w-[230px] mx-auto hover:opacity-90"
                  >
                    <img
                      src={top_frame}
                      className=" -top-10  absolute 2xl:w-[290px] xl:w-[290px] w-[320px] img"
                    />
                    <p className="text-2xl font-bold leading-[1.6]">
                      {t("services_2.brand_identity")}
                    </p>
                    <p className=" font-bold text-[#000] my-2 flex items-center gap-x-2">
                      {t("industry.explore")}
                      {i18n.language == "en" ? (
                        <BsArrowRightCircleFill />
                      ) : (
                        <BsArrowLeftCircleFill />
                      )}
                    </p>
                    <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 bg-white rounded-full border-[8px] border-black">
                      <img src={icon_1} alt="icon_1" className="w-16" />
                    </div>
                  </Link>
                  <Link
                    to={`/${i18n.language}/spatial_identity`}
                    className="relative h-[197.5px] shadow-xl xl:col-span-3 lg:col-span-6 md:col-span-6 col-span-12 flex flex-col justify-center items-center text-center p-12 rounded-2xl 2xl:w-full xl:w-full w-[230px] mx-auto"
                  >
                    <img
                      src={bottom_frame}
                      className=" -bottom-8 absolute 2xl:w-[290px] xl:w-[290px] w-[320px] img"
                    />
                    <p className=" font-bold text-[#000] my-2 flex items-center gap-x-2">
                      {t("industry.explore")}
                      {i18n.language == "en" ? (
                        <BsArrowRightCircleFill />
                      ) : (
                        <BsArrowLeftCircleFill />
                      )}
                    </p>
                    <p className="text-2xl font-bold leading-[1.6]">
                      {t("services_2.spatial_identity")}
                    </p>
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white rounded-full border-[8px] border-black">
                      <img src={icon_2} alt="icon_1" className="w-16" />
                    </div>
                  </Link>
                  <Link
                    to={`/${i18n.language}/websites_projects`}
                    className=" relative h-[197.5px] shadow-xl xl:col-span-3 lg:col-span-6 md:col-span-6 col-span-12 flex flex-col justify-center items-center text-center p-12 rounded-2xl 2xl:w-full xl:w-full w-[230px] mx-auto hover:opacity-90"
                  >
                    <img
                      src={top_frame}
                      className=" -top-10  absolute 2xl:w-[290px] xl:w-[290px] w-[320px] img"
                    />
                    <p className="text-2xl font-bold leading-[1.3]">
                      {t("services_2.ecommerce")}
                    </p>
                    <p className=" font-bold text-[#000] my-2 flex items-center gap-x-2">
                      {t("industry.explore")}
                      {i18n.language == "en" ? (
                        <BsArrowRightCircleFill />
                      ) : (
                        <BsArrowLeftCircleFill />
                      )}
                    </p>
                    <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 bg-white rounded-full border-[8px] border-black">
                      <img src={icon_3} alt="icon_1" className="w-16" />
                    </div>
                  </Link>
                  <Link
                    to={`/${i18n.language}/photos_projects`}
                    className="relative h-[197.5px] shadow-xl xl:col-span-3 lg:col-span-6 md:col-span-6 col-span-12 flex flex-col justify-center items-center text-center p-12 rounded-2xl 2xl:w-full xl:w-full w-[230px] mx-auto"
                  >
                    <img
                      src={bottom_frame}
                      className=" -bottom-8 absolute 2xl:w-[290px] xl:w-[290px] w-[320px] img"
                    />
                    <p className=" font-bold text-[#000] my-2 flex items-center gap-x-2">
                      {t("industry.explore")}
                      {i18n.language == "en" ? (
                        <BsArrowRightCircleFill />
                      ) : (
                        <BsArrowLeftCircleFill />
                      )}
                    </p>
                    <p className="text-2xl font-bold leading-[1.6]">
                      {t("services_2.photography_production")}
                    </p>
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white rounded-full border-[8px] border-black">
                      <img src={icon_4} alt="icon_1" className="w-16" />
                    </div>
                  </Link>
                </div>
                <div className="grid grid-cols-12 2xl:gap-x-8 xl:gap-x-8 2xl:px-16 xl:px-16 lg:px-8 gap-y-32 px-4 my-32">
                  <Link
                    to={`/${i18n.language}/markting`}
                    className=" relative h-[197.5px] shadow-xl xl:col-span-3 lg:col-span-6 md:col-span-6 col-span-12 flex flex-col justify-center items-center text-center p-12 rounded-2xl 2xl:w-full xl:w-full w-[230px] mx-auto hover:opacity-90"
                  >
                    <img
                      src={top_frame}
                      className=" -top-10  absolute 2xl:w-[290px] xl:w-[290px] w-[320px] img"
                    />
                    <p className="text-2xl font-bold leading-[1.6]">
                      {t("services_2.marketing_advertising")}
                    </p>
                    <p className=" font-bold text-[#000] my-2 flex items-center gap-x-2">
                      {t("industry.explore")}
                      {i18n.language == "en" ? (
                        <BsArrowRightCircleFill />
                      ) : (
                        <BsArrowLeftCircleFill />
                      )}
                    </p>
                    <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 bg-white rounded-full border-[8px] border-black">
                      <img src={icon_5} alt="icon_1" className="w-16" />
                    </div>
                  </Link>
                  <Link
                    to={`/${i18n.language}/social_media`}
                    className="relative h-[197.5px] shadow-xl xl:col-span-3 lg:col-span-6 md:col-span-6 col-span-12 flex flex-col justify-center items-center text-center p-12 rounded-2xl 2xl:w-full xl:w-full w-[230px] mx-auto"
                  >
                    <img
                      src={bottom_frame}
                      className=" -bottom-8 absolute 2xl:w-[290px] xl:w-[290px] w-[320px] img"
                    />
                    <p className=" font-bold text-[#000] my-2 flex items-center gap-x-2">
                      {t("industry.explore")}
                      {i18n.language == "en" ? (
                        <BsArrowRightCircleFill />
                      ) : (
                        <BsArrowLeftCircleFill />
                      )}
                    </p>
                    <p className="text-2xl font-bold leading-[1.2]">
                      {t("services_2.social_media")}
                    </p>
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white rounded-full border-[8px] border-black">
                      <img src={icon_6} alt="icon_1" className="w-16" />
                    </div>
                  </Link>
                  <Link
                    to={`/${i18n.language}/seo`}
                    className=" relative h-[197.5px] shadow-xl xl:col-span-3 lg:col-span-6 md:col-span-6 col-span-12 flex flex-col justify-center items-center text-center p-12 rounded-2xl 2xl:w-full xl:w-full w-[230px] mx-auto hover:opacity-90"
                  >
                    <img
                      src={top_frame}
                      className=" -top-10  absolute 2xl:w-[290px] xl:w-[290px] w-[320px] img"
                    />
                    <p className="text-2xl font-bold leading-[1.2]">
                      {t("services_2.seo")}
                    </p>
                    <p className=" font-bold text-[#000] my-2 flex items-center gap-x-2">
                      {t("industry.explore")}
                      {i18n.language == "en" ? (
                        <BsArrowRightCircleFill />
                      ) : (
                        <BsArrowLeftCircleFill />
                      )}
                    </p>
                    <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 bg-white rounded-full border-[8px] border-black">
                      <img src={icon_7} alt="icon_1" className="w-16" />
                    </div>
                  </Link>
                  <Link
                    to={`/${i18n.language}/industry`}
                    className="relative h-[197.5px] shadow-xl xl:col-span-3 lg:col-span-6 md:col-span-6 col-span-12 flex flex-col justify-center items-center text-center p-12 rounded-2xl 2xl:w-full xl:w-full w-[230px] mx-auto"
                  >
                    <img
                      src={bottom_frame}
                      className=" -bottom-8 absolute 2xl:w-[290px] xl:w-[290px] w-[320px] img"
                    />
                    <p className=" font-bold text-[#000] my-2 flex items-center gap-x-2">
                      {t("industry.explore")}
                      {i18n.language == "en" ? (
                        <BsArrowRightCircleFill />
                      ) : (
                        <BsArrowLeftCircleFill />
                      )}
                    </p>
                    <p className="text-2xl font-bold leading-[1.6]">
                      {t("services_2.industry_support")}
                    </p>
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white rounded-full border-[8px] border-black">
                      <img src={icon_8} alt="icon_1" className="w-16" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        }
      />
    </section>
  );
};

export default Services;
