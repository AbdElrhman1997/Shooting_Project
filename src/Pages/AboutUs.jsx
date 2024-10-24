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
            className="bg-white flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col font-bold items-center w-f pb-10 2xl:pt-12 xl:pt-12 lg:pt-12 md:pt-8 pt-6 rounded-[10px]"
            dir={i18n.language === "ar" ? "rtl" : "ltr"}
          >
            <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-16 xl:px-16 lg:px-8  px-4">
              <p className="col-span-6 border-b-[#ec3237] border-b-[6px] w-fit xl:mx-0 lg:mx-0 md:mx-0 mx-auto pb-4 xl:text-5xl lg:text-5xl md:text-5xl text-3xl font-bold">
                {t("aboutUs.title")}
              </p>
              <p className="text-justify 2xl:my-6 xl:my-6 lg:my-6 md:my-6 my-0 mt-4 text-[17px] leading-8">
                {t("aboutUs.description1")}
                <span className="text-main">{t("aboutUs.highlight")}</span>
                {t("aboutUs.description2")}
              </p>
            </div>
            <div className="center-line 2xl:block xl:block lg:block md:block hidden mx-2"></div>
            <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-16 xl:px-16 lg:px-8 px-4 2xl:mt-16 xl:mt-16 lg:mt-16 md:mt-16 mt-0 ">
              <p className="text-justify 2xl:my-6 xl:my-6 lg:my-6 md:my-6 my-0 text-[17px] leading-8">
                {t("aboutUs.description1")}
                <span className="text-main">{t("aboutUs.highlight")}</span>
                {t("aboutUs.description2")}
              </p>
            </div>
          </div>
        }
      />
      <img src={GIF_Logo} alt={t("aboutUs.gifAlt")} className="mt-6 -mb-6" />
    </section>
  );
};

export default AboutUs;
