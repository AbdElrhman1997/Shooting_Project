import { useTranslation } from "react-i18next";

const Shooting_Team = () => {
  const { t, i18n } = useTranslation();

  return (
    <section
      className="bg-[#000000] text-white py-12 xl:px-16 lg:px-16 md:px-12 px-4 2xl:text-center xl:text-center lg:text-center md:text-center text-justify"
      dir={i18n.language === "en" ? "ltr" : "rtl"}
    >
      <p className="xl:text-[32px] lg:text-[32px] md:text-[32px] text-[28px] mb-12 font-medium text-center">
        <span className="text-in-cottetion relative">
          {t("shootingTeam.title")}
        </span>
      </p>
      <p className="xl:text-[27px] lg:text-[27px] md:text-[27px] font-semibold leading-loose">
        {t("shootingTeam.expertise")}
      </p>
      <p className="xl:text-[27px] lg:text-[27px] md:text-[27px] font-semibold leading-loose">
        {t("shootingTeam.projectManagement")}
      </p>
    </section>
  );
};

export default Shooting_Team;
