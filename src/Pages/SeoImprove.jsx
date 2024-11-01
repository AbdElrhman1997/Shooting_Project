import GeneralFrame from "../Components/GeneralFrame";
import seo_1 from "../assets/Images/ServicesImages/seo_1.webp";
import seo_2 from "../assets/Images/ServicesImages/seo_2.webp";
import seo_3 from "../assets/Images/ServicesImages/seo_3.webp";

import GIF_Logo from "../assets/Images/Icons/GIF_Logo.gif";
import { useTranslation } from "react-i18next";

const SeoImprove = () => {
  const { i18n, t } = useTranslation();

  return (
    <section>
      <GeneralFrame
        content={
          <div
            className={`bg-white text-black rounded-[10px]  py-12 text-center  ${
              i18n.language === "ar"
                ? "2xl:text-right xl:text-right lg:text-right md:text-right"
                : "2xl:text-left xl:text-left lg:text-left md:text-left"
            }`}
            dir={i18n.language === "ar" ? "rtl" : "ltr"}
          >
            <div className="">
              <div className="bg-white">
                <p className="2xl:text-2xl xl:text-2xl lg:text-xl md:text-lg text-base font-bold 2xl:px-12 xl:px-12 lg:px-12 md:px-8 px-4 mb-10 2xl:w-4/5 xl:w-4/5 lg:w-10/12 md:w-10/12 w-full">
                  <p className="2xl:text-[42px] xl:text-[42px] lg:text-[34px] md:text-[30px] text-[26px] my-6 leading-loose">
                    {t("seo_improve.title")}
                  </p>
                  {t("seo_improve.description")}
                </p>

                <div className="bg-white flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col font-bold items-center w-full rounded-[30px] 2xl:mt-12 xl:mt-12 lg:mt-12 md:mt-12 mt-0">
                  <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-16 xl:px-16 lg:px-8">
                    <div className="text-justify mt-4 2xl:text-lg xl:text-lg lg:text-base md:text-base text-lg leading-loose font-semibold 2xl:mx-0 xl:mx-0 lg:mx-0 mx-4 mb-6">
                      <p className="2xl:text-2xl xl:text-2xl lg:text-xl md:text-base text-lg font-bold">
                        {t("seo_improve.onPage.title")}
                      </p>
                      {t("seo_improve.onPage.content")}
                    </div>
                  </div>
                  <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-0 xl:px-0 lg:px-0 md:px-0 px-4 2xl:block xl:block lg:block md:block inline">
                    <img
                      src={seo_1}
                      alt=""
                      className="w-full 2xl:h-[250px] xl:h-[250px] lg:h-[250px] md:h-[250px] h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                    />
                  </div>
                </div>

                <div className="bg-white flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col font-bold items-center w-full rounded-[30px]">
                  <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-0 xl:px-0 lg:px-0 md:px-0 px-4 2xl:block xl:block lg:block md:block hidden">
                    <img
                      src={seo_2}
                      alt=""
                      className="w-full h-[250px] object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                    />
                  </div>
                  <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-16 xl:px-16 lg:px-8">
                    <div className="text-justify mt-4 2xl:text-lg xl:text-lg lg:text-base md:text-base text-lg leading-loose font-semibold 2xl:mx-0 xl:mx-0 lg:mx-0 mx-4 mb-6">
                      <p className="2xl:text-2xl xl:text-2xl lg:text-xl md:text-base text-lg 2xl:mt-[14px] xl:mt-[14px] lg:mt-[10px] md::mt-[4px] mt-[4px] font-bold">
                        {t("seo_improve.offPage.title")}
                      </p>
                      {t("seo_improve.offPage.content")}
                    </div>
                  </div>
                  <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-0 xl:px-0 lg:px-0 md:px-0 px-4 2xl:hidden xl:hidden lg:hidden md:hidden inline">
                    <img
                      src={seo_2}
                      alt=""
                      className="w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                    />
                  </div>
                </div>

                <div className="bg-white flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col font-bold items-center w-full rounded-[30px]">
                  <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-16 xl:px-16 lg:px-8">
                    <div className="text-justify mt-4 2xl:text-lg xl:text-lg lg:text-base md:text-base text-lg leading-loose font-semibold 2xl:mx-0 xl:mx-0 lg:mx-0 mx-4 mb-6">
                      <p className="2xl:text-2xl xl:text-2xl lg:text-xl md:text-base text-lg 2xl:mt-[14px] xl:mt-[14px] lg:mt-[10px] md::mt-[4px] mt-[4px] font-bold">
                        {t("seo_improve.writingArticles.title")}
                      </p>
                      {t("seo_improve.writingArticles.content")}
                    </div>
                  </div>
                  <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-0 xl:px-0 lg:px-0 md:px-0 px-4 2xl:block xl:block lg:block md:block inline">
                    <img
                      src={seo_3}
                      alt=""
                      className="w-full 2xl:h-[250px] xl:h-[250px] lg:h-[250px] md:h-[250px] h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                    />
                  </div>
                </div>
              </div>
            </div>

            <p className="text-black text-center font-bold mt-10 2xl:text-3xl xl:text-3xl lg:text-3xl md:text-3xl text-xl">
              {t("seo_improve.passion_statement")}
            </p>
            <div className="2xl:mx-12 xl:mx-12 lg:mx-12 md:mx-6 mx-2 my-10">
              <video controls className="w-full rounded-lg shadow-lg">
                <source src="/path-to-your-video/video.mp4" type="video/mp4" />
                {t("seo_improve.video_unavailable")}
              </video>
            </div>
            <p className="text-[#000] font-bold 2xl:text-4xl xl:text-4xl lg:text-4xl md:text-4xl text-3xl text-center mt-8">
              {t("seo_improve.offer_title")}
            </p>
            <p className="text-[#000] text-center font-bold mt-2 2xl:text-xl xl:text-xl lg:text-xl md:text-xl text-lg 2xl:mx-12 xl:mx-12 lg:mx-12 md:mx-6 mx-2">
              {t("seo_improve.offer_description")}
            </p>
            <div className="grid grid-cols-12 gap-y-12 my-10 mx-4 text-center 2xl:text-xl xl:text-xl lg:text-xl md:text-xl text-lg justify-center items-center">
              {/* Previous items */}
              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8"></div>
                <p className="font-bold my-1 text-[#000]">
                  {t("seo_improve.technical_structure")}
                </p>
              </div>
              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8"></div>
                <p className="font-bold my-1 text-[#000]">
                  {t("seo_improve.link_building")}
                </p>
              </div>
              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8"></div>
                <p className="font-bold my-1 text-[#000]">
                  {t("seo_improve.user_experience")}
                </p>
              </div>
              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8"></div>
                <p className="font-bold my-1 text-[#000]">
                  {t("seo_improve.media_optimization")}
                </p>
              </div>
              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8"></div>
                <p className="font-bold my-1 text-[#000]">
                  {t("seo_improve.site_speed")}
                </p>
              </div>
              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8"></div>
                <p className="font-bold my-1 text-[#000]">
                  {t("seo_improve.local_seo")}
                </p>
              </div>
              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8"></div>
                <p className="font-bold my-1 text-[#000]">
                  {t("seo_improve.mobile_seo")}
                </p>
              </div>
              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8"></div>
                <p className="font-bold my-1 text-[#000]">
                  {t("seo_improve.backlink_analysis")}
                </p>
              </div>
              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8"></div>
                <p className="font-bold my-1 text-[#000]">
                  {t("seo_improve.google_core_vitals")}
                </p>
              </div>
              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8"></div>
                <p className="font-bold my-1 text-[#000]">
                  {t("seo_improve.sitemap_optimization")}
                </p>
              </div>
              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8"></div>
                <p className="font-bold my-1 text-[#000]">
                  {t("seo_improve.meta_tags_optimization")}
                </p>
              </div>
              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8"></div>
                <p className="font-bold my-1 text-[#000]">
                  {t("seo_improve.keyword_performance_monitoring")}
                </p>
              </div>
              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8"></div>
                <p className="font-bold my-1 text-[#000]">
                  {t("seo_improve.algorithm_updates")}
                </p>
              </div>
              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8"></div>
                <p className="font-bold my-1 text-[#000]">
                  {t("seo_improve.click_through_rate")}
                </p>
              </div>
              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8"></div>
                <p className="font-bold my-1 text-[#000]">
                  {t("seo_improve.visitor_behavior")}
                </p>
              </div>
              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8"></div>
                <p className="font-bold my-1 text-[#000]">
                  {t("seo_improve.structured_data")}
                </p>
              </div>
              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8"></div>
                <p className="font-bold my-1 text-[#000]">
                  {t("seo_improve.result_analysis")}
                </p>
              </div>
            </div>
            <div
              className="bg-[#333] xl:py-8 lg:py-8 md:py-8 pt-4 pb-8 xl:px-16 lg:px-16 md:px-8 px-4 text-white 2xl:text-3xl xl:text-3xl lg:text-3xl md:text-2xl text-lg font-bold"
              dir="rtl"
            >
              <p>{t("seo_improve.contactUs_1")}</p>
              <p className="my-2">{t("seo_improve.contactUs_2")}</p>
            </div>
            <div className="text-white bg-[#ec3237] w-fit px-8 py-2 font-bold xl:text-xl lg:text-xl md:text-xl text-md mx-auto -mt-[22px]">
              {t("seo_improve.startNow")}
            </div>
          </div>
        }
      />

      <div className="w-full h-full flex justify-center items-center ">
        <img
          src={GIF_Logo}
          alt="Shooting GIF Logo"
          className="xl:w-48 lg:w-48 md:w-48 w-40 xl:-mb-12 lg:-mb-12 md:-mb-12 -mb-[120px] xl:mt-12 lg:mt-12 md:mt-12 mt-12   "
        />
      </div>
    </section>
  );
};

export default SeoImprove;
