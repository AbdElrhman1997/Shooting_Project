import { useEffect, useState } from "react";
import GeneralFrame from "../Components/GeneralFrame";
import Spatial_Identity_1 from "../assets/Images/Spatial_Identity/spatial_identity_1.webp";
import Spatial_Identity_2 from "../assets/Images/Spatial_Identity/spatial_identity_2.webp";
import Spatial_Identity_3 from "../assets/Images/Spatial_Identity/spatial_identity_3.webp";
import GIF_Logo from "../assets/Images/Icons/GIF_Logo.gif";
import Pagination from "../Components/Pagination";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import axios from "axios";

const Websites_Projects = () => {
  const { i18n, t } = useTranslation();
  const [Services, setServices] = useState([]);
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
        `https://admin.shootingads.net/api/getBrandApiForService?service=3`,
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
            className={`bg-white text-black rounded-[10px]  py-12 text-center  ${
              i18n.language === "ar"
                ? "2xl:text-right xl:text-right lg:text-right md:text-right"
                : "2xl:text-left xl:text-left lg:text-left md:text-left"
            }`}
            dir={i18n.language === "ar" ? "rtl" : "ltr"}
          >
            <div className="">
              <div className="bg-white">
                <p className="2xl:text-2xl xl:text-2xl lg:text-2xl md:text-2xl text-xl font-bold 2xl:px-12 xl:px-12 lg:px-12 md:px-8 px-4 ">
                  {t("websites_projects.header_1")}{" "}
                  <span className="2xl:text-[42px] xl:text-[42px]lg:text-[42px] md:text-[42px] text-3xl">
                    {t("websites_projects.header_2")}
                  </span>{" "}
                  {t("websites_projects.header_3")}
                </p>
                <p className="2xl:text-2xl xl:text-2xl lg:text-2xl md:text-2xl text-xl mt-3 font-bold 2xl:px-12 xl:px-12 lg:px-12 md:px-8 px-4 ">
                  {t("websites_projects.subheader")}
                </p>
                <div className="w-full 2xl:px-0 xl:px-0 lg:px-0 md:px-0 px-4 2xl:block xl:block lg:block md:block inline mt-2">
                  <img
                    src={Spatial_Identity_1}
                    alt={""}
                    className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                  />
                </div>
                <div className="bg-white flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col font-bold items-center w-full rounded-[30px] 2xl:mt-8 xl:mt-8 lg:mt-8 md:mt-8 mt-4">
                  <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-16 xl:px-16 lg:px-8 ">
                    <p className="text-justify my-6 mt-4 2xl:text-2xl xl:text-2xl lg:text-lg md:text-base text-lg leading-loose font-bold 2xl:mx-0 xl:mx-0 lg:mx-0 mx-4">
                      {t("websites_projects.feature1")}
                    </p>
                  </div>
                  <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-0 xl:px-0 lg:px-0 md:px-0 px-4 2xl:block xl:block lg:block md:block inline">
                    <img
                      src={Spatial_Identity_2}
                      alt={""}
                      className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                    />
                  </div>
                </div>
                <div className="bg-white flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col font-bold items-center w-f rounded-[30px]">
                  <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-0 xl:px-0 lg:px-0 md:px-0 px-4 2xl:block xl:block lg:block md:block hidden">
                    <img
                      src={Spatial_Identity_3}
                      alt={""}
                      className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                    />
                  </div>
                  <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-16 xl:px-16 lg:px-8 ">
                    <p className="text-justify my-6 mt-4 2xl:text-2xl xl:text-2xl lg:text-lg md:text-base text-lg leading-loose font-bold 2xl:mx-0 xl:mx-0 lg:mx-0 mx-4">
                      {t("websites_projects.feature2")}
                    </p>
                  </div>
                  <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-0 xl:px-0 lg:px-0 md:px-0 px-4 2xl:hidden xl:hidden lg:hidden md:hidden inline">
                    <img
                      src={Spatial_Identity_3}
                      alt={""}
                      className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                    />
                  </div>
                </div>
              </div>
            </div>
            <p className="text-black text-center font-bold mt-10 2xl:text-3xl xl:text-3xl lg:text-3xl md:text-3xl text-xl ">
              {t("websites_projects.passion")}
            </p>
            <div className="2xl:mx-12 xl:mx-12 lg:mx-12 md:mx-6 mx-2 my-10">
              <video controls className="w-full rounded-lg shadow-lg ">
                <source src="/path-to-your-video/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <p className="text-[#000] font-bold 2xl:text-4xl xl:text-4xl lg:text-4xl md:text-4xl text-3xl text-center mt-8">
              {t("websites_projects.offer")}
            </p>
            <p className="text-[#000] text-center font-bold mt-2 2xl:text-xl xl:text-xl lg:text-xl md:text-xl text-lg 2xl:mx-12 xl:mx-12 lg:mx-12 md:mx-6 mx-2">
              {t("websites_projects.description")}
            </p>
            <div className="grid grid-cols-12 gap-y-12 my-10 mx-4 text-center 2xl:text-xl xl:text-xl lg:text-xl md:text-xl text-lg">
              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8 "></div>
                <p className="font-bold my-1 text-[#000]">
                  {t("websites_projects.clientRequirements")}
                </p>
              </div>
              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8 "></div>
                <p className="font-bold my-1 text-[#000]">
                  {t("websites_projects.designInterface")}
                </p>
              </div>
              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8 "></div>
                <p className="font-bold my-1 text-[#000]">
                  {t("websites_projects.userExperience")}
                </p>
              </div>
              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8 "></div>
                <p className="font-bold my-1 text-[#000]">
                  {t("websites_projects.storeDevelopment")}
                </p>
              </div>
              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8 "></div>
                <p className="font-bold my-1 text-[#000]">
                  {t("websites_projects.systemIntegration")}
                </p>
              </div>
              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8 "></div>
                <p className="font-bold my-1 text-[#000]">
                  {t("websites_projects.seo")}
                </p>
              </div>
              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8 "></div>
                <p className="font-bold my-1 text-[#000]">
                  {t("websites_projects.dataSecurity")}
                </p>
              </div>
              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8 "></div>
                <p className="font-bold my-1 text-[#000]">
                  {t("websites_projects.support")}
                </p>
              </div>
              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8 "></div>
                <p className="font-bold my-1 text-[#000]">
                  {t("websites_projects.socialMedia")}
                </p>
              </div>
            </div>
            <div
              className="bg-[#333] xl:py-8 lg:py-8 md:py-8 pt-4 pb-8 xl:px-16 lg:px-16 md:px-8 px-4 text-white 2xl:text-3xl xl:text-3xl lg:text-3xl md:text-2xl text-lg font-bold"
              dir="rtl"
            >
              <p>{t("websites_projects.contactUs_1")}</p>
              <p className="my-2">{t("websites_projects.contactUs_2")}</p>
            </div>
            <Link
              to={`/${i18n.language}/register_now`}
              className="block text-white bg-[#ec3237] w-fit px-8 py-2 font-bold xl:text-xl lg:text-xl md:text-xl text-md mx-auto -mt-[22px]"
            >
              {t("markting.contact.start_now")}
            </Link>
          </div>
        }
      />
      <p className="text-black text-center font-bold mt-10 2xl:text-3xl xl:text-3xl lg:text-3xl md:text-3xl text-xl ">
        {t("websites_projects.our_projects")}
      </p>
      <div
        className="grid grid-cols-6 xl:px-16 lg:px-16 md:px-8 px-4 gap-4 my-8"
        dir={i18n.language === "ar" ? "rtl" : "ltr"}
      >
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
                className="w-full h-52 object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
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
      <div className="col-span-12">
        <Pagination
          currentPage={pagination?.current_page}
          totalPages={pagination?.total_pages}
          onPageChange={handlePageChange}
        />
      </div>

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

export default Websites_Projects;
