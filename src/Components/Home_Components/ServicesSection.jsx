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
        className="bg-[#333] xl:py-8 lg:py-8 md:py-8 py-2 xl:px-16 lg:px-16 md:px-8 px-4"
        style={{ borderRadius: "0 0 100px 100px" }}
        dir={i18n.language === "en" ? "ltr" : "rtl"}
      >
        <div className="flex flex-wrap justify-center xl:text-[1.7rem] lg:text-[1.2rem] md:text-[1rem] text-[10px] text-center leading-relaxed font-semibold">
          <p className="hover:text-[#ec3237] transition duration-400 cursor-pointer">
            {t("services.brandBuilding")}
          </p>
          <span className="text-[#ec3237] mx-[6px] font-bold">|</span>
          <p className="hover:text-[#ec3237] transition duration-400 cursor-pointer">
            {t("services.spatialIdentity")}
          </p>
          <span className="text-[#ec3237] mx-[6px] font-bold">|</span>
          <p className="hover:text-[#ec3237] transition duration-400 cursor-pointer">
            {t("services.websiteDesign")}
          </p>
          <span className="text-[#ec3237] mx-[6px] font-bold">|</span>
          <p className="hover:text-[#ec3237] transition duration-400 cursor-pointer">
            {t("services.marketing")}
          </p>
          <span className="text-[#ec3237] mx-[6px] font-bold">|</span>
          <p className="hover:text-[#ec3237] transition duration-400 cursor-pointer">
            {t("services.photography")}
          </p>
          <span className="text-[#ec3237] mx-[6px] font-bold">|</span>
          <p className="hover:text-[#ec3237] transition duration-400 cursor-pointer">
            {t("services.socialMediaManagement")}
          </p>
          <span className="text-[#ec3237] mx-[6px] font-bold">|</span>
          <p className="hover:text-[#ec3237] transition duration-400 cursor-pointer">
            {t("services.industry")}
          </p>
          <span className="text-[#ec3237] mx-[6px] font-bold">|</span>
          <p className="hover:text-[#ec3237] transition duration-400 cursor-pointer">
            {t("services.printing")}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-6 xl:px-16 lg:px-16 md:px-8 px-4 gap-4 my-8">
        {Services?.map((item, index) => {
          return (
            <Link
              key={index + 1}
              className="relative xl:col-span-2 lg:col-span-2 md:col-span-3 col-span-3 cursor-pointer overflow-hidden group"
              to={"/services/1"}
            >
              <img
                src={`https://admin.shootingads.net/public/images/${item?.image}`}
                alt={
                  i18n.language === "en"
                    ? item?.brand_name_en
                    : item?.brand_name_ar
                }
                className="w-full h-52 object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
              />
              <div className="service-hover w-full h-full absolute top-0 left-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              <div className="absolute bottom-6 left-0 mx-4 text-right font-bold transition-all duration-300 ease-in-out">
                <p className="text-white text-[17px] opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100">
                  {i18n.language === "en"
                    ? item?.brand_name_en
                    : item?.brand_name_ar}
                </p>
                <p className="text-white text-[13px] opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100">
                  {item?.subTitle}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="rounded-full bg-[#ec3237] w-fit px-24 py-[10px] mt-4 font-bold xl:text-xl lg:text-xl md:text-xl text-md mx-auto my-16">
        {t("services.creations")}
      </div>
    </section>
  );
};

export default ServicesSection;
