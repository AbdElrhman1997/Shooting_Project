import { useTranslation } from "react-i18next";
import consultation_section_image from "../../assets/Images/HomeImages/consultation_section_image.webp";
import { Link } from "react-router-dom";

const ConsultationSection = () => {
  const { t, i18n } = useTranslation();

  return (
    <section className="mt-6" dir="rtl">
      <div className="relative">
        {/* Top section */}
        <div className="xl:px-20 lg:px-20 md:px-20 px-8 relative z-10 2xl:mt-16 xl:mt-16 lg:mt-16 md:mt-16 mt-0">
          <div className="text-black font-bold xl:text-3xl lg:text-2xl md:text-xl text-[13.6px] 2xl:block xl:block lg:block md:block hidden">
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
          <div className="text-black font-bold xl:text-3xl lg:text-2xl md:text-xl text-[13.6px] 2xl:hidden xl:hidden lg:hidden md:hidden block">
            <p className="leading-relaxed text-justify text-[13px] w-11/12">
              {t("consultation.title")}{" "}
              <span className="font-extrabold text-base xl:text-[50px] lg:text-[50px] md:text-[40px] text-[18px]">
                {t("consultation.freeConsultation")}
              </span>
              <span className="inline-block">
                {t("consultation.experts_mobile")}
              </span>
            </p>
          </div>
          <Link
            to={`/${i18n.language}/register_now`}
            className="rounded-full block bg-[#ec3237] w-fit 2xl:px-12 xl:px-12 lg:px-12 md:px-8 px-4 2xl:py-6 xl:py-4 lg:py-4 md:py-4 py-2   mt-6 font-bold 2xl:text-3xl xl:text-3xl lg:text-xl md:text-xl text-[14px]"
          >
            {t("consultation.bookNow")}
          </Link>
          <div className="mt-4 text-black font-bold xl:text-3xl lg:text-2xl md:text-xl text-[13.6px]">
            <p className="leading-relaxed">
              <span className="block">{t("consultation.enjoyCoffee")}</span>
              <span className="block">{t("consultation.companyPark")}</span>
            </p>
          </div>
        </div>

        {/* Bottom section (image section) */}
        <div className="relative xl:-mt-[17rem] lg:-mt-[4.6rem] md:-mt-[4.6rem] -mt-[.6rem] z-0">
          <img
            src={consultation_section_image}
            alt="Consultation_Section_Image"
            className="relative z-0"
          />
        </div>
      </div>
    </section>
  );
};

export default ConsultationSection;
