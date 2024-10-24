import { useTranslation } from "react-i18next";
import consultation_section_image from "../../assets/Images/HomeImages/consultation_section_image.webp";

const ConsultationSection = () => {
  const { t } = useTranslation();

  return (
    <section className="mt-6" dir="rtl">
      <div className="xl:px-20 lg:px-20 md:px-20 px-8">
        <div className="text-black font-bold xl:text-[27px] lg:text-[27px] md:text-[22px] text-[13.6px]">
          <p className="leading-relaxed">
            <span>
              {t("consultation.title")}{" "}
              <span className="font-extrabold text-3xl xl:text-[50px] lg:text-[50px] md:text-[40px] text-[18px]">
                {t("consultation.freeConsultation")}
              </span>
            </span>
            <span className="inline-block">{t("consultation.experts")}</span>
          </p>
        </div>
        <div className="rounded-full bg-[#ec3237] w-fit px-8 py-2 mt-4 font-bold xl:text-xl lg:text-xl md:text-xl text-md">
          {t("consultation.bookNow")}
        </div>
      </div>
      <div className="relative -z-10 xl:-mt-[4.6rem] lg:-mt-[4.6rem] md:-mt-[4.6rem] -mt-[.6rem]">
        <div className="absolute xl:top-24 lg:top-24 md:top-20 top-5 xl:right-20 lg:right-20 md:right-20 text-black font-bold xl:text-[27px] lg:text-[27px] md:text-[22px] text-[12px] xl:px-20 lg:px-20 md:px-20 px-8">
          <p className="leading-relaxed">
            <span className="block">{t("consultation.enjoyCoffee")}</span>
            <span className="block">{t("consultation.companyPark")}</span>
          </p>
        </div>
        <img
          src={consultation_section_image}
          alt="Consultation_Section_Image"
        />
      </div>
    </section>
  );
};

export default ConsultationSection;
