import our_goals_1 from "../../assets/Images/HomeImages/our_goals_1.webp";
import our_goals_3 from "../../assets/Images/HomeImages/Star-01.webp";

import { GoDotFill } from "react-icons/go";
import { useTranslation } from "react-i18next";

const OurGoals = () => {
  const { t } = useTranslation();

  return (
    <div dir="rtl">
      <div className="-z-10 xl:-mt-[4.6rem] lg:-mt-[4.6rem] md:-mt-[4.6rem] -mt-[2rem]">
        <div className="grid grid-cols-6 text-black">
          <div className="xl:col-span-4 lg:col-span-4 md:col-span-4 col-span-6 xl:px-16 lg:px-16 md:px-16 px-4 xl:mt-10 lg:mt-10 md:mt-10">
            <p className="border-b-[#ec3237] border-b-[6px] w-fit text-center xl:mx-0 lg:mx-0 md:mx-0 mx-auto pb-4 xl:text-6xl lg:text-5xl md:text-5xl text-4xl font-bold">
              {t("goals.title")}
            </p>
            <ul className="leading-relaxed mt-0 xl:mx-0 lg:mx-0 md:mx-0 mx-auto">
              <li className="relative flex gap-x-2 items-center text-lg">
                <GoDotFill className="text-black text-base my-6" />
                <span className="font-bold 2xl:text-3xl xl:text-3xl lg:text-2xl md:text-xl text-[15px] leading-relaxed">
                  {t("goals.goal1")}
                </span>
              </li>
              <li className="relative flex gap-x-2 items-center text-lg">
                <GoDotFill className="text-black text-base 2xl:my-6 xl:my-6 lg:my-6 md:my-6 my-0" />
                <span className="font-bold 2xl:text-3xl xl:text-3xl lg:text-2xl md:text-xl text-[15px] leading-relaxed">
                  {t("goals.goal2")}
                </span>
              </li>
              <li className="relative flex gap-x-2 items-center text-lg">
                <GoDotFill className="text-black text-base my-6" />
                <span className="font-bold 2xl:text-3xl xl:text-3xl lg:text-2xl md:text-xl text-[15px] leading-relaxed">
                  {t("goals.goal3")}
                </span>
              </li>
            </ul>
          </div>
          <div className="xl:col-span-2 lg:col-span-2 md:col-span-2 col-span-6 xl:mt-10 lg:mt-10 mx-auto">
            <img
              src={our_goals_1}
              alt="Our Goals Image 1"
              className="object-cover 2xl:w-[300px] xl:w-[300px] lg:w-[300px] md:w-[300px] w-[240px]"
            />
          </div>
        </div>
        <div className="relative xl:block lg:block md:block hidden">
          <div className="absolute xl:top-3 lg:top-0 md:-top-6 -right-[14px] text-black font-bold xl:text-[27px] lg:text-[27px] md:text-[22px] text-[12px] xl:px-20 lg:px-20 md:px-20 px-8">
            <p className="border-b-[#ec3237] border-b-[6px] w-fit text-right pb-4 text-6xl mt-16">
              {t("goals.visionTitle")}
            </p>
            <ul className="leading-relaxed xl:mt-10 lg:mt-10 md:mt-4">
              <li className="relative flex gap-x-2 items-center">
                <span className="font-bold 2xl:text-3xl xl:text-3xl lg:text-2xl md:text-xl text-[15px] xl:text-right lg:text-right text-center">
                  {t("goals.vision")}
                </span>
              </li>
            </ul>
          </div>
          <div className="pr-[70px]">
            <img
              src={our_goals_3}
              alt="Our Goals Image 2"
              className="object-cover "
            />
          </div>
        </div>
        <div className="grid grid-cols-6 text-black xl:hidden lg:hidden md:hidden">
          <div className="xl:col-span-4 lg:col-span-4 md:col-span-4 col-span-6 xl:mt-10 lg:mt-10 md:mt-10 px-6">
            <p className="border-b-[#ec3237] border-b-[6px] w-fit text-center xl:mx-0 lg:mx-0 md:mx-0 mx-auto pb-4 text-3xl font-bold">
              {t("goals.visionTitle")}
            </p>
            <ul className="leading-relaxed my-4 md:mx-0 mx-auto">
              <li className="relative flex gap-x-2 items-center text-lg">
                <span className="font-bold text-lg leading-relaxed text-center">
                  {t("goals.vision")}
                </span>
              </li>
            </ul>
          </div>
          <div className="col-span-6 pr-6">
            <img
              src={our_goals_3}
              alt="Our Goals Image 2"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurGoals;
