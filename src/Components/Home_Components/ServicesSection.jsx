import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

const ServicesSection = () => {
  const [Services, setServices] = useState([]);
  const { i18n, t } = useTranslation();
  const [loading, setLoading] = useState(false);

  const fetchServices = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://admin.shootingads.net/api/getBrand`,
        {
          params: { currentPage: 1, per_page: 12 },
        }
      );
      const { data } = response.data;
      setServices(data);
    } catch (error) {
      console.error("Error fetching posts", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  return (
    <section>
      <div
        className="bg-black xl:py-4 lg:py-4 md:py-4 py-2 xl:px-16 lg:px-16 md:px-8 px-4 2xl:rounded-bl-[100px] xl:rounded-bl-[100px] lg:rounded-bl-[100px] md:rounded-bl-[100px] rounded-bl-[50px] 2xl:rounded-br-[100px] xl:rounded-br-[100px] lg:rounded-br-[100px] md:rounded-br-[100px] rounded-br-[50px]"
        dir={i18n.language === "en" ? "ltr" : "rtl"}
      >
        <div className="flex flex-wrap justify-center xl:text-[1.8rem] lg:text-[1.6rem] md:text-[1rem] text-[11px] text-center leading-relaxed font-semibold">
          <Link
            to={`/${i18n.language}/brands_projects`}
            className="hover:text-[#ec3237] transition duration-400 cursor-pointer"
          >
            {t("services.brandBuilding")}
          </Link>
          <span className="text-[#ec3237] mx-[6px] font-bold">|</span>
          <Link
            to={`/${i18n.language}/spatial_identity`}
            className="hover:text-[#ec3237] transition duration-400 cursor-pointer"
          >
            {t("services.spatialIdentity")}
          </Link>
          <span className="text-[#ec3237] mx-[6px] font-bold">|</span>
          <Link
            to={`/${i18n.language}/websites_projects`}
            className="hover:text-[#ec3237] transition duration-400 cursor-pointer"
          >
            {t("services.websiteDesign")}
          </Link>
          <span className="text-[#ec3237] mx-[6px] font-bold">|</span>
          <Link
            to={`/${i18n.language}/markting`}
            className="hover:text-[#ec3237] transition duration-400 cursor-pointer"
          >
            {t("services.marketing")}
          </Link>
          <span className="text-[#ec3237] mx-[6px] font-bold">|</span>
          <Link
            to={`/${i18n.language}/photos_projects`}
            className="hover:text-[#ec3237] transition duration-400 cursor-pointer"
          >
            {t("services.photography")}
          </Link>
          <span className="text-[#ec3237] mx-[6px] font-bold">|</span>
          <Link
            to={`/${i18n.language}/social_media`}
            className="hover:text-[#ec3237] transition duration-400 cursor-pointer"
          >
            {t("services.socialMediaManagement")}
          </Link>
          <span className="text-[#ec3237] mx-[6px] font-bold">|</span>
          <Link
            to={`/${i18n.language}/seo`}
            className="hover:text-[#ec3237] transition duration-400 cursor-pointer"
          >
            {t("services.seo")}
          </Link>
          <span className="text-[#ec3237] mx-[6px] font-bold 2xl:block xl:block lg:block md:block hidden">
            |
          </span>
          <Link
            to={`/${i18n.language}/industry`}
            className="hover:text-[#ec3237] transition duration-400 cursor-pointer"
          >
            {t("services.industry")}
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-6 xl:px-16 lg:px-16 md:px-8 px-4 gap-4 my-8">
        {Services?.map((item, index) => {
          return (
            <Link
              key={index + 1}
              className="relative xl:col-span-2 lg:col-span-2 md:col-span-3 col-span-3 cursor-pointer overflow-hidden group"
              to={`/${i18n.language}/single_service/${item?.id}`}
            >
              <img
                src={`https://admin.shootingads.net/public/images/${item?.image}`}
                alt={
                  i18n.language === "en"
                    ? item?.brand_name_en
                    : item?.brand_name_ar
                }
                className="w-full 2xl:h-52 xl:h-56 lg:h-48 md:h-48 h-32 object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
              />
              <div className="service-hover w-full h-full absolute top-0 left-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              <div
                className={`absolute bottom-6 ${
                  i18n.language == "en"
                    ? "left-0 text-left"
                    : "right-0 text-right"
                } mx-4 font-bold transition-all duration-300 ease-in-out`}
              >
                <p className="text-white text-[17px] opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100">
                  {i18n.language === "en"
                    ? item?.brand_name_en
                    : item?.brand_name_ar}
                </p>
                <p className="text-white text-[13px] opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100">
                  {item?.categories?.map((project, index) => {
                    return (
                      <span key={index}>
                        {i18n.language === "en"
                          ? project?.name_en
                          : project?.name_ar}
                        {index < item?.categories?.length - 1 && (
                          <span
                            className={`${
                              i18n.language === "en" ? "none" : "inline"
                            }`}
                          >
                            {" - "}
                          </span>
                        )}
                      </span>
                    );
                  })}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
      <Link
        to={`/${i18n.language}/our_projects`}
        className="rounded-full block bg-[#ec3237] w-fit px-24 py-[10px] mt-4 font-bold xl:text-xl lg:text-xl md:text-xl text-md mx-auto my-16"
      >
        {t("services.creations")}
      </Link>
    </section>
  );
};

export default ServicesSection;
