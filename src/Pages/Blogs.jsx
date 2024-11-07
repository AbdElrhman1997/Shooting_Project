import { useEffect, useState } from "react";
import blogsBg from "../assets/Images/HomeImages/blogs-bg.webp";
import GIF_Logo from "../assets/Images/Icons/GIF_Logo.gif";
import GeneralFrame from "../Components/GeneralFrame";
import axios from "axios";
import Pagination from "../Components/Pagination";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ReactHtmlParser from "react-html-parser";

const Blogs = () => {
  const [posts, setPosts] = useState([]);
  const { i18n, t } = useTranslation();
  const [pagination, setPagination] = useState({
    count: 0,
    current_page: 1,
    per_page: 6,
    total: 0,
    total_pages: 1,
  });
  const [loading, setLoading] = useState(false);

  const fetchPosts = async (page = 1) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://admin.shootingads.net/api/getBlog`,
        {
          params: { currentPage: page },
        }
      );
      const { data, pagination: paginationFromService } = response.data;
      setPosts(data);
      setPagination(paginationFromService);
    } catch (error) {
      console.error("Error fetching posts", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts(pagination.current_page);
  }, [pagination.current_page]);

  const handlePageChange = (page) => {
    setPagination((prev) => ({ ...prev, current_page: page }));
    fetchPosts(page);
  };

  return (
    <section>
      <GeneralFrame
        content={
          <div
            className="text-4xl text-black relative text-right bg-white rounded-[10px]"
            dir={i18n.language === "ar" ? "rtl" : "ltr"}
          >
            <div className="mx-auto">
              <div className="relative">
                <p
                  className="xl:text-8xl lg:text-8xl md:text-6xl text-5xl font-bold text-white absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 "
                  style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
                >
                  {t("blogs.title")}
                </p>
                <img
                  src={blogsBg}
                  className="w-full  h-full rounded-tr-[10px] rounded-tl-[10px]"
                />
              </div>
              <div className="flex flex-wrap justify-center xl:text-[1.8rem] lg:text-[1.6rem] md:text-[1rem] text-[11px] text-center leading-relaxed font-semibold px-4 py-4">
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
              <div className="grid grid-cols-12 xl:gap-12 lg:gap-12 md:gap-6 gap-y-6 pb-8 pt-4 px-4">
                {loading ? (
                  <>
                    <div
                      className="xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 bg-white shadow-lg animate-pulse"
                      style={{ borderRadius: "0 0 10px 10px" }}
                    >
                      {/* Image Skeleton */}
                      <div className="w-full h-40 bg-gray-200"></div>

                      {/* Content Skeleton */}
                      <div className="p-4">
                        {/* Title Skeleton */}
                        <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>

                        {/* Body Text Skeleton */}
                        <div className="space-y-2 mb-4">
                          <div className="h-4 bg-gray-200 rounded w-full"></div>
                          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                        </div>

                        {/* Button Skeleton */}
                        <div className="h-8 bg-gray-200 rounded w-1/3"></div>
                      </div>
                    </div>
                    <div
                      className="xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 bg-white shadow-lg animate-pulse"
                      style={{ borderRadius: "0 0 10px 10px" }}
                    >
                      {/* Image Skeleton */}
                      <div className="w-full h-40 bg-gray-200"></div>

                      {/* Content Skeleton */}
                      <div className="p-4">
                        {/* Title Skeleton */}
                        <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>

                        {/* Body Text Skeleton */}
                        <div className="space-y-2 mb-4">
                          <div className="h-4 bg-gray-200 rounded w-full"></div>
                          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                        </div>

                        {/* Button Skeleton */}
                        <div className="h-8 bg-gray-200 rounded w-1/3"></div>
                      </div>
                    </div>
                    <div
                      className="xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 bg-white shadow-lg animate-pulse"
                      style={{ borderRadius: "0 0 10px 10px" }}
                    >
                      {/* Image Skeleton */}
                      <div className="w-full h-40 bg-gray-200"></div>

                      {/* Content Skeleton */}
                      <div className="p-4">
                        {/* Title Skeleton */}
                        <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>

                        {/* Body Text Skeleton */}
                        <div className="space-y-2 mb-4">
                          <div className="h-4 bg-gray-200 rounded w-full"></div>
                          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                        </div>

                        {/* Button Skeleton */}
                        <div className="h-8 bg-gray-200 rounded w-1/3"></div>
                      </div>
                    </div>
                  </>
                ) : (
                  posts?.map((post) => (
                    <div
                      key={post?.id}
                      className="xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 bg-white shadow-lg "
                      style={{ borderRadius: "0 0 10px 10px" }}
                    >
                      <img
                        src={`https://admin.shootingads.net/images/${post?.thumbnail}`}
                        alt="Blog Image 1"
                        className="w-full h-40 object-cover"
                      />
                      <div className="p-4">
                        <h3 className="2xl:text-lg xl:text-xl lg:text-xl md:text-lg text-[14px] font-bold mb-2">
                          {ReactHtmlParser(
                            i18n.language == "en"
                              ? post?.title_en
                              : post?.title_ar
                          )}
                        </h3>
                        <p className="text-gray-600 mb-4 2xl:text-base xl:text-base lg:text-base md:text-base text-[10px] text-justify details-p">
                          {ReactHtmlParser(
                            i18n.language == "en"
                              ? post?.body_en
                              : post?.body_ar
                          )}
                        </p>
                        <Link
                          to={`/${i18n.language}/blogs/${post?.meta_title
                            ?.split(" ")
                            ?.join("_")}`}
                          onClick={() => {
                            localStorage.setItem("blog_id", post?.id);
                          }}
                          className="bg-main text-white px-3 py-1 text-[14px] rounded-md cursor-pointer hover:bg-[#c6282d] font-semibold"
                        >
                          {t("blogs.read_more")}
                        </Link>
                      </div>
                    </div>
                  ))
                )}
                <div className="col-span-12">
                  <Pagination
                    currentPage={pagination?.current_page}
                    totalPages={pagination?.total_pages}
                    onPageChange={handlePageChange}
                  />
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

export default Blogs;
