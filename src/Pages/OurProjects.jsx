import GeneralFrame from "../Components/GeneralFrame";
import GIF_Logo from "../assets/Images/Icons/GIF_Logo.gif";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "../Components/Pagination";

const OurProjects = () => {
  const [Services, setServices] = useState([]);
  const { i18n, t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({
    count: 0,
    current_page: 1,
    per_page: 6,
    total: 0,
    total_pages: 1,
  });

  const fetchServices = async (page = 1) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://admin.shootingads.net/api/getBrand`,
        {
          params: { currentPage: page },
        }
      );
      const { data, pagination: paginationFromService } = response.data;
      setServices(data);
      setPagination(paginationFromService);
    } catch (error) {
      console.error("Error fetching posts", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices(pagination.current_page);
  }, [pagination.current_page]);

  const handlePageChange = (page) => {
    setPagination((prev) => ({ ...prev, current_page: page }));
    fetchServices(page);
  };

  return (
    <section>
      <GeneralFrame
        content={
          <div
            className="bg-white text-black rounded-[10px] py-12"
            dir={i18n.language === "ar" ? "rtl" : "ltr"}
          >
            <div>
              <div className="bg-white">
                <p className="col-span-6 text-[#000] border-b-[#ec3237] border-b-[6px] w-fit 2xl:mx-12 xl:mx-12 lg:mx-12 md:mx-8 mx-auto pb-4 xl:text-5xl lg:text-5xl md:text-5xl text-3xl font-bold">
                  {t("ourProjects.title")}
                </p>
                <p
                  className={`2xl:text-2xl xl:text-2xl lg:text-2xl md:text-2xl text-lg mt-8 font-bold 2xl:px-12 xl:px-12 lg:px-12 md:px-8 px-4 text-center  ${
                    i18n.language === "ar"
                      ? "2xl:text-right xl:text-right lg:text-right md:text-right"
                      : "2xl:text-left xl:text-left lg:text-left md:text-left"
                  }`}
                >
                  <span className="2xl:text-4xl xl:text-4xl lg:text-4xl md:text-4xl text-xl">
                    {t("ourProjects.subtitlePart1")}
                  </span>{" "}
                  {t("ourProjects.subtitlePart2")}
                </p>
                <div className="bg-white flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col font-bold items-center w-f pb-10 2xl:pt-12 xl:pt-12 lg:pt-12 md:pt-8 rounded-[30px]">
                  <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-16 xl:px-16 lg:px-8 px-4">
                    <p className="text-justify 2xl:my-6 xl:my-6 lg:my-6 md:my-6 my-0 mt-4 text-[20px] leading-8">
                      {t("ourProjects.contentLeft")}
                    </p>
                  </div>
                  <div
                    className="2xl:block xl:block lg:block md:block hidden mx-2"
                    style={{
                      height: "100px",
                      width: "1.35px",
                      backgroundColor: "black",
                    }}
                  ></div>
                  <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-16 xl:px-16 lg:px-8 px-4 2xl:block xl:block lg:block md:block inline">
                    <p className="text-justify 2xl:my-6 xl:my-6 lg:my-6 md:my-6 my-0 text-[20px] leading-8 ">
                      {t("ourProjects.contentRight")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
        our_projects={true}
      />
      <div
        className="bg-[#333] xl:py-8 lg:py-8 md:py-8 pt-4 pb-8 xl:px-16 lg:px-16 md:px-8 px-4"
        style={{ borderRadius: "0 0 100px 100px" }}
        dir="rtl"
      >
        <div className="flex flex-wrap justify-center xl:text-[1.7rem] lg:text-[1.2rem] md:text-[1rem] text-[14px] text-center leading-relaxed font-semibold">
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
            to={`/${i18n.language}/photos_projects`}
            className="hover:text-[#ec3237] transition duration-400 cursor-pointer"
          >
            {t("services.marketing")}
          </Link>
          <span className="text-[#ec3237] mx-[6px] font-bold">|</span>
          <Link
            to={`/${i18n.language}/markting`}
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
      <div className="col-span-12">
        <Pagination
          currentPage={pagination?.current_page}
          totalPages={pagination?.total_pages}
          onPageChange={handlePageChange}
        />
      </div>
      <div className="w-full h-full flex justify-center items-center text-black">
        <img
          src={GIF_Logo}
          alt="Shooting GIF Logo"
          className="xl:w-48 lg:w-48 md:w-48 w-40 xl:-mb-12 lg:-mb-12 md:-mb-12 -mb-[120px] xl:mt-12 lg:mt-12 md:mt-12 mt-12   "
        />
      </div>
    </section>
  );
};

export default OurProjects;
