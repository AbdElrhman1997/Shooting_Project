import GeneralFrame from "../Components/GeneralFrame";
import industry_1 from "../assets/Images/Indusrty/Frame & icon-11.png";
import industry_2 from "../assets/Images/Indusrty/Frame & icon-12.png";
import industry_3 from "../assets/Images/Indusrty/Frame & icon-13.png";
import industry_4 from "../assets/Images/Indusrty/Frame & icon.png";
import industry_5 from "../assets/Images/Indusrty/Frame & icon-15.png";
import industry_6 from "../assets/Images/Indusrty/Frame & icon-17.png";
import industry_7 from "../assets/Images/Indusrty/Frame & icon-14.png";
import industry_8 from "../assets/Images/Indusrty/Frame & icon-18.png";
import GIF_Logo from "../assets/Images/Icons/GIF_Logo.gif";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Industry = () => {
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
                  {t("industry.title")}
                </p>
                <div className="bg-white flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col font-bold items-center w-f pb-10 2xl:pt-8 xl:pt-8 lg:pt-8 md:pt-6 rounded-[30px]">
                  <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-16 xl:px-16 lg:px-8  px-4">
                    <p className="text-justify 2xl:my-6 xl:mb-6 lg:mb-6 md:mb-6 xl:mt-0 lg:mt-0 md:mt-0 mt-6 text-[18px] leading-8 ">
                      {t("industry.description1")}
                    </p>
                  </div>
                  <div
                    className="center-line-services 2xl:block xl:block lg:block md:block hidden mx-2"
                    style={{ height: "230px" }}
                  ></div>

                  <div className=" 2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-16 xl:px-16 lg:px-8 px-4  2xl:block xl:block lg:block md:block inline">
                    <p className="text-justify 2xl:my-6 xl:my-6 lg:my-6 md:my-6 my-0 text-[18px] leading-8 ">
                      {t("industry.description2")}
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-12 gap-y-12 2xl:px-10 xl:px-10 lg:px-10 md:px-10 px-4 2xl:mt-16 xl:mt-16 lg:mt-16 md:mt-12 mt-0">
                  <Link
                    to={`/${i18n.language}/printing`}
                    className="xl:col-span-3 lg:col-span-3 col-span-6 2xl:-mx-[7.5px] xl:-mx-[6.6px] lg:-mx-[5.7px] md:-mx-[10px] -mx-[3.3px] hover:opacity-85"
                  >
                    <img src={industry_1} className="" />
                  </Link>
                  <Link
                    to={`/${i18n.language}/theatres`}
                    className="xl:col-span-3 lg:col-span-3 col-span-6 2xl:-mx-[7.5px] xl:-mx-[6.6px] lg:-mx-[5.7px] md:-mx-[10px] -mx-[3.3px] hover:opacity-85"
                  >
                    <img src={industry_2} className="" />
                  </Link>
                  <Link
                    to={`/${i18n.language}/events`}
                    className="xl:col-span-3 lg:col-span-3 col-span-6 2xl:-mx-[7.5px] xl:-mx-[6.6px] lg:-mx-[5.7px] md:-mx-[10px] -mx-[3.3px] hover:opacity-85"
                  >
                    <img src={industry_3} className="" />
                  </Link>
                  <Link
                    to={`/${i18n.language}/perfumes`}
                    className="xl:col-span-3 lg:col-span-3 col-span-6 2xl:-mx-[7.5px] xl:-mx-[6.6px] lg:-mx-[5.7px] md:-mx-[10px] -mx-[3.3px] hover:opacity-85"
                  >
                    <img src={industry_4} className="" />
                  </Link>
                </div>
                <div className="grid grid-cols-12 gap-y-12 2xl:px-10 xl:px-10 lg:px-10 md:px-10 px-4 2xl:mt-16 xl:mt-16 lg:mt-16 md:mt-12 mt-10">
                  <Link
                    to={`/${i18n.language}/make-up`}
                    className="xl:col-span-3 lg:col-span-3 col-span-6 2xl:-mx-[7.5px] xl:-mx-[6.6px] lg:-mx-[5.7px] md:-mx-[10px] -mx-[3.3px] hover:opacity-85"
                  >
                    <img src={industry_5} className="" />
                  </Link>
                  <Link
                    to={`/${i18n.language}/clothes`}
                    className="xl:col-span-3 lg:col-span-3 col-span-6 2xl:-mx-[7.5px] xl:-mx-[6.6px] lg:-mx-[5.7px] md:-mx-[10px] -mx-[3.3px] hover:opacity-85"
                  >
                    <img src={industry_6} className="" />
                  </Link>
                  <Link
                    to={`/${i18n.language}/resturant`}
                    className="xl:col-span-3 lg:col-span-3 col-span-6 2xl:-mx-[7.5px] xl:-mx-[6.6px] lg:-mx-[5.7px] md:-mx-[10px] -mx-[3.3px] hover:opacity-85"
                  >
                    <img src={industry_7} className="" />
                  </Link>
                  <Link
                    to={`/${i18n.language}/cafes`}
                    className="xl:col-span-3 lg:col-span-3 col-span-6 2xl:-mx-[7.5px] xl:-mx-[6.6px] lg:-mx-[5.7px] md:-mx-[10px] -mx-[3.3px] hover:opacity-85"
                  >
                    <img src={industry_8} className="" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        }
        our_projects={true}
      />
      <div className="w-full h-full flex justify-center items-center ">
        <img
          src={GIF_Logo}
          alt="Shooting GIF Logo"
          className="xl:w-48 lg:w-48 md:w-48 w-40 xl:-mb-12 lg:-mb-12 md:-mb-12 -mb-[120px] xl:mt-12 lg:mt-12 md:mt-12 mt-12   "
        />
      </div>{" "}
    </section>
  );
};

export default Industry;
