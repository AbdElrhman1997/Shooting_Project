import GeneralFrame from "../Components/GeneralFrame";
import logo1 from "../assets/Images/Logos/Logos-01.png";
import logo2 from "../assets/Images/Logos/Logos-02.png";
import logo3 from "../assets/Images/Logos/Logos-03.png";
import logo4 from "../assets/Images/Logos/Logos-04.png";
import logo5 from "../assets/Images/Logos/Logos-05.png";
import logo6 from "../assets/Images/Logos/Logos-06.png";
import logo7 from "../assets/Images/Logos/Logos-07.png";
import logo8 from "../assets/Images/Logos/Logos-08.png";
import logo9 from "../assets/Images/Logos/Logos-09.png";
import GIF_Logo from "../assets/Images/Icons/GIF_Logo.gif";
import { useTranslation } from "react-i18next";

const OurClients = () => {
  const { i18n, t } = useTranslation();

  return (
    <section>
      <GeneralFrame
        content={
          <div
            className={`bg-white text-black rounded-[10px] py-12 text-center  ${
              i18n.language === "ar"
                ? "2xl:text-right xl:text-right lg:text-right md:text-right"
                : "2xl:text-left xl:text-left lg:text-left md:text-left"
            }`}
            dir={i18n.language === "en" ? "ltr" : "rtl"}
          >
            <div className="">
              <div className="bg-white">
                <p className="col-span-6 text-[#000] border-b-[#ec3237] border-b-[6px] w-fit 2xl:mx-12 xl:mx-12 lg:mx-12 md:mx-8 mx-auto pb-4 xl:text-5xl lg:text-5xl md:text-5xl text-3xl font-bold ">
                  {t("our_clients.title")}
                </p>
                <p className="2xl:text-3xl xl:text-3xl lg:text-3xl md:text-3xl text-xl mt-8 font-bold 2xl:px-12 xl:px-12 lg:px-12 md:px-8 px-4 ">
                  {t("our_clients.subtitle")}
                </p>
                <div className="relative flex justify-center bg-[#000] ">
                  <div className="flex flex-wrap justify-center border-b-2 2xl:px-12 xl:px-12 lg:px-12 md:px-8 px-4 border-[#000] bg-white rounded-bl-[30px] rounded-br-[30px] -mt-[1px]">
                    <img src={logo1} alt="logo1" className="w-52 h-52" />
                    <img src={logo2} alt="logo2" className="w-52 h-52" />
                    <img src={logo3} alt="logo3" className="w-52 h-52" />
                    <img src={logo4} alt="logo4" className="w-52 h-52" />
                    <img src={logo5} alt="logo5" className="w-52 h-52" />
                    <img src={logo6} alt="logo6" className="w-52 h-52" />
                    <img src={logo7} alt="logo7" className="w-52 h-52" />
                    <img src={logo8} alt="logo8" className="w-52 h-52" />
                    <img src={logo9} alt="logo9" className="w-52 h-52" />
                  </div>
                </div>
              </div>
              <div className="relative flex justify-center bg-[#000] ">
                <div className="bg-white rounded-[30px] px-1">
                  <p className="text-[#000] font-bold 2xl:text-4xl xl:text-4xl lg:text-4xl md:text-4xl text-3xl text-center mt-8">
                    {t("our_clients.achievement_title")}
                  </p>
                  <p className="text-black text-center font-bold mt-4 2xl:text-2xl xl:text-2xl lg:text-2xl md:text-2xl text-xl">
                    {t("our_clients.achievement_subtitle")}
                  </p>
                  <div className="flex flex-wrap justify-center border-b-2 px-12 border-[#000] ">
                    <img src={logo1} alt="logo1" className="w-52 h-52" />
                    <img src={logo2} alt="logo2" className="w-52 h-52" />
                    <img src={logo3} alt="logo3" className="w-52 h-52" />
                    <img src={logo4} alt="logo4" className="w-52 h-52" />
                    <img src={logo5} alt="logo5" className="w-52 h-52" />
                    <img src={logo6} alt="logo6" className="w-52 h-52" />
                    <img src={logo7} alt="logo7" className="w-52 h-52" />
                    <img src={logo8} alt="logo8" className="w-52 h-52" />
                    <img src={logo9} alt="logo9" className="w-52 h-52" />
                  </div>
                </div>
              </div>
              <div className="relative flex justify-center bg-[#000] ">
                <div className="bg-white rounded-[30px]">
                  <p className="text-black text-center font-bold mt-8 2xl:text-3xl xl:text-3xl lg:text-3xl md:text-3xl text-xl">
                    {t("our_clients.opportunity_title")}
                  </p>
                  <div className="flex flex-wrap justify-center border-b-2 px-12 border-[#000] ">
                    <img src={logo1} alt="logo1" className="w-52 h-52" />
                    <img src={logo2} alt="logo2" className="w-52 h-52" />
                    <img src={logo3} alt="logo3" className="w-52 h-52" />
                    <img src={logo4} alt="logo4" className="w-52 h-52" />
                    <img src={logo5} alt="logo5" className="w-52 h-52" />
                    <img src={logo6} alt="logo6" className="w-52 h-52" />
                    <img src={logo7} alt="logo7" className="w-52 h-52" />
                    <img src={logo8} alt="logo8" className="w-52 h-52" />
                    <img src={logo9} alt="logo9" className="w-52 h-52" />
                  </div>
                </div>
              </div>
              <div className="relative flex justify-center bg-[#000] ">
                <div className="bg-white rounded-tl-[30px] rounded-tr-[30px]">
                  <p className="text-black text-center font-bold mt-8 2xl:text-3xl xl:text-3xl lg:text-3xl md:text-3xl text-xl">
                    {t("our_clients.journey_title")}
                  </p>
                  <div className="flex flex-wrap justify-center px-12 border-[#000] ">
                    <img src={logo1} alt="logo1" className="w-52 h-52" />
                    <img src={logo2} alt="logo2" className="w-52 h-52" />
                    <img src={logo3} alt="logo3" className="w-52 h-52" />
                    <img src={logo4} alt="logo4" className="w-52 h-52" />
                    <img src={logo5} alt="logo5" className="w-52 h-52" />
                    <img src={logo6} alt="logo6" className="w-52 h-52" />
                    <img src={logo7} alt="logo7" className="w-52 h-52" />
                    <img src={logo8} alt="logo8" className="w-52 h-52" />
                    <img src={logo9} alt="logo9" className="w-52 h-52" />
                  </div>
                </div>
              </div>
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

export default OurClients;
