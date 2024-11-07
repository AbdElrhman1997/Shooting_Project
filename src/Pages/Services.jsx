import GeneralFrame from "../Components/GeneralFrame";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import service_1 from "../assets/Images/ServicesImages/Frame & icon-05.png";
import service_2 from "../assets/Images/ServicesImages/Frame & icon-02.png";
import service_3 from "../assets/Images/ServicesImages/Frame & icon-03.png";
import service_4 from "../assets/Images/ServicesImages/Frame & icon-06.png";
import service_5 from "../assets/Images/ServicesImages/Frame & icon-07.png";
import service_6 from "../assets/Images/ServicesImages/Frame & icon-08.png";
import service_7 from "../assets/Images/ServicesImages/Frame & icon-09.png";
import service_8 from "../assets/Images/ServicesImages/Frame & icon-10.png";

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
                <p className="col-span-6 text-[#000] border-b-[#ec3237] border-b-[6px] w-fit 2xl:mx-10 xl:mx-10 lg:mx-10 md:mx-10 mx-auto pb-4 xl:text-5xl lg:text-5xl md:text-5xl text-3xl font-bold">
                  {t("services_2.title")}
                </p>
                <div className="bg-white flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col font-bold items-center w-f 2xl:pb-0 xl:pb-0 lg:pb-0 md:pb-0 pb-10 2xl:pt-8 xl:pt-8 lg:pt-8 md:pt-6 rounded-[30px]">
                  <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-10 xl:px-10 lg:px-10 md:px-10 px-4">
                    <p className="text-justify 2xl:my-6 xl:my-6 lg:my-6 md:my-6 my-0 mt-4 text-[18px] leading-8 ">
                      {t("services_2.highlight_brand")}
                    </p>
                  </div>
                  <div className="center-line-services 2xl:block xl:block lg:block md:block hidden mx-2"></div>

                  <div className=" 2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-10 xl:px-10 lg:px-10 md:px-10 px-4  2xl:block xl:block lg:block md:block inline">
                    <p className="text-justify 2xl:my-6 xl:my-6 lg:my-6 md:my-6 my-0 text-[18px] leading-8 ">
                      {t("services_2.start_project")}
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-12 gap-y-12 2xl:px-10 xl:px-10 lg:px-10 md:px-10 px-4 2xl:mt-16 xl:mt-16 lg:mt-16 md:mt-12 mt-0">
                  <Link
                    to={`/${i18n.language}/brands_projects`}
                    className="xl:col-span-3 lg:col-span-3 col-span-6 2xl:-mx-[7.5px] xl:-mx-[6.6px] lg:-mx-[5.7px] md:-mx-[10px] -mx-[3.3px] hover:opacity-85"
                  >
                    <img src={service_1} className="" />
                  </Link>
                  <Link
                    to={`/${i18n.language}/spatial_identity`}
                    className="xl:col-span-3 lg:col-span-3 col-span-6 2xl:-mx-[7.5px] xl:-mx-[6.6px] lg:-mx-[5.7px] md:-mx-[10px] -mx-[3.3px] hover:opacity-85"
                  >
                    <img src={service_2} className="" />
                  </Link>
                  <Link
                    to={`/${i18n.language}/websites_projects`}
                    className="xl:col-span-3 lg:col-span-3 col-span-6 2xl:-mx-[7.5px] xl:-mx-[6.6px] lg:-mx-[5.7px] md:-mx-[10px] -mx-[3.3px] hover:opacity-85"
                  >
                    <img src={service_3} className="" />
                  </Link>
                  <Link
                    to={`/${i18n.language}/photos_projects`}
                    className="xl:col-span-3 lg:col-span-3 col-span-6 2xl:-mx-[7.5px] xl:-mx-[6.6px] lg:-mx-[5.7px] md:-mx-[10px] -mx-[3.3px] hover:opacity-85"
                  >
                    <img src={service_4} className="" />
                  </Link>
                </div>
                <div className="grid grid-cols-12 gap-y-12 2xl:px-10 xl:px-10 lg:px-10 md:px-10 px-4 2xl:mt-16 xl:mt-16 lg:mt-16 md:mt-12 mt-10">
                  <Link
                    to={`/${i18n.language}/markting`}
                    className="xl:col-span-3 lg:col-span-3 col-span-6 2xl:-mx-[7.5px] xl:-mx-[6.6px] lg:-mx-[5.7px] md:-mx-[10px] -mx-[3.3px] hover:opacity-85"
                  >
                    <img src={service_5} className="" />
                  </Link>
                  <Link
                    to={`/${i18n.language}/social_media`}
                    className="xl:col-span-3 lg:col-span-3 col-span-6 2xl:-mx-[7.5px] xl:-mx-[6.6px] lg:-mx-[5.7px] md:-mx-[10px] -mx-[3.3px] hover:opacity-85"
                  >
                    <img src={service_6} className="" />
                  </Link>
                  <Link
                    to={`/${i18n.language}/seo`}
                    className="xl:col-span-3 lg:col-span-3 col-span-6 2xl:-mx-[7.5px] xl:-mx-[6.6px] lg:-mx-[5.7px] md:-mx-[10px] -mx-[3.3px] hover:opacity-85"
                  >
                    <img src={service_7} className="" />
                  </Link>
                  <Link
                    to={`/${i18n.language}/industry`}
                    className="xl:col-span-3 lg:col-span-3 col-span-6 2xl:-mx-[7.5px] xl:-mx-[6.6px] lg:-mx-[5.7px] md:-mx-[10px] -mx-[3.3px] hover:opacity-85"
                  >
                    <img src={service_8} className="" />
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
