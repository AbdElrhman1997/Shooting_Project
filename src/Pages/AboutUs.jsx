import GIF_Logo from "../assets/Images/Icons/GIF_Logo.gif";
import GeneralFrame from "../Components/GeneralFrame";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { i18n, t } = useTranslation();

  return (
    <section>
      <GeneralFrame
        content={
          <div
            className="bg-white flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col font-bold items-center w-f pb-10 2xl:pt-0 xl:pt-10 lg:pt-10 md:pt-8 pt-6 rounded-[10px]"
            dir={i18n.language === "ar" ? "rtl" : "ltr"}
          >
            <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-10 xl:px-10 lg:px-8  px-4 h-full">
              <p className="col-span-6 border-b-[#ec3237] border-b-[6px] w-fit xl:mx-0 lg:mx-0 md:mx-0 mx-auto pb-4 xl:text-5xl lg:text-5xl md:text-5xl text-3xl font-bold">
                {t("aboutUs.title")}
              </p>
              <p className="text-justify 2xl:my-4 xl:my-4 lg:my-4 md:my-4 my-0 mt-4 text-[17px] leading-8">
                {t("aboutUs.description1")}
              </p>
              <p className="text-justify 2xl:my-4 xl:my-4 lg:my-4 md:my-4 my-0 text-[17px] leading-8">
                {t("aboutUs.description2_1")}
                <span className="text-main">{t("aboutUs.highlight")}</span>
                {t("aboutUs.description2_2")}
              </p>
            </div>
            <div className="center-line 2xl:block xl:block lg:block md:block hidden mx-2 mt-12"></div>
            <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-10 xl:px-10 lg:px-10 px-4 2xl:mt-32 xl:mt-16 lg:mt-16 md:mt-16 mt-0 ">
              <p className="text-justify 2xl:my-6 xl:my-4 lg:my-4 md:my-4 my-0 text-[17px] leading-8">
                {t("aboutUs.description3")}
              </p>
              <p className="text-justify 2xl:my-6 xl:my-4 lg:my-4 md:my-4 my-0 text-[17px] leading-8">
                {t("aboutUs.description4")}
              </p>{" "}
              <p className="text-justify 2xl:my-6 xl:my-4 lg:my-4 md:my-4 my-0 text-[17px] leading-8">
                {t("aboutUs.description5")}
              </p>
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

export default AboutUs;
