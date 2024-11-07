import { useEffect, useState } from "react";
import { FaBookmark } from "react-icons/fa";
import GIF_Logo from "../assets/Images/Icons/GIF_Logo.gif";
import { IoArrowRedo, IoArrowUndo } from "react-icons/io5";
import axios from "axios";
import { Link } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import { useTranslation } from "react-i18next";

const Single_Blog = () => {
  const { t, i18n } = useTranslation();
  const [post, setPost] = useState({});
  // const [loading, setLoading] = useState(false);
  const id = localStorage.getItem("blog_id");

  const fetchPost = async () => {
    // setLoading(true);
    await axios
      .get(`https://admin.shootingads.net/api/getSingleBlog/${id}`)
      .then((res) => {
        const { data } = res.data;
        setPost(data);
      })
      .catch((error) => {
        console.error("Error fetching posts", error);
      });
  };

  useEffect(() => {
    fetchPost();
  }, [id]);

  return (
    <section
      className="text-black text-right"
      dir={i18n.language === "ar" ? "rtl" : "ltr"}
    >
      <h1 className="text-4xl font-bold mx-auto w-fit mt-6 mb-12">
        {i18n.language == "en" ? post?.title_en : post?.title_ar}
      </h1>
      <div className="grid grid-cols-2 h-full 2xl:pr-12 xl:pr-12 lg:pr-12 md:pr-12 pr-0 pl-7 2xl:pl-7 xl:pl-7 lg:pl-7 md:pl-7 pl-0  ">
        <div className="2xl:col-span-1 xl:col-span-1 lg:col-span-1 md:col-span-1 col-span-2">
          <img
            src={`https://admin.shootingads.net/images/${post?.main_image}`}
            alt="single_article"
            className="w-full object-cover"
          />
        </div>
        <p className=" bg-[#000] 2xl:col-span-1 xl:col-span-1 lg:col-span-1 md:col-span-1 col-span-2 py-6 2xl:px-14 xl:px-14 lg:px-14 md:px-14 px-4  text-justify 2xl:text-[18px] xl:text-[18px] lg:text-[18px] md:text-[18px] text-[14px] flex items-center overflow-hidden 2xl:leading-[1.7] xl:leading-[1.7] lg:leading-[1.2] md:leading-[1.7] leading-[2]">
          <span className="line-clamp-6 text-white">
            {post?.meta_description}
          </span>
        </p>
      </div>

      <div className="grid grid-cols-12">
        <div className="2xl:col-span-9 xl:col-span-9 lg:col-span-9 md:col-span-7 col-span-12 ">
          <p
            className="blog-details text-justify px-12 py-6 font-semibold"
            style={{ fontSize: "16px" }}
          >
            {ReactHtmlParser(
              i18n.language === "en" ? post?.body_en : post?.body_ar
            )}
          </p>
          <div className="flex justify-between items-center px-12 my-6 gap-x-5">
            <div
              className={`text-[#212529] bg-[#ECECECBD] px-4 py-2 ${
                id === 1
                  ? "opacity-50 cursor-not-allowed"
                  : "cursor-pointer hover:opacity-80"
              } 2xl:text-base lg:text-base md:text-base text-[12px]`}
            >
              {id === 1 ? (
                <div className="flex justify-center items-center gap-x-1">
                  {i18n.language == "en" ? <IoArrowUndo /> : <IoArrowRedo />}
                  <IoArrowRedo />
                  <span className="font-semibold">
                    {t("blogs.previous_article")}
                  </span>
                </div>
              ) : (
                <Link
                  to={`/blogs/${+id - 1}`}
                  className="flex justify-center items-center gap-x-1"
                >
                  {i18n.language == "en" ? <IoArrowUndo /> : <IoArrowRedo />}
                  <span className="font-semibold">
                    {t("blogs.previous_article")}
                  </span>
                </Link>
              )}
            </div>

            <div
              className={`text-[#212529] bg-[#ECECECBD] px-4 py-2 ${
                id === 5
                  ? "opacity-50 cursor-not-allowed"
                  : "cursor-pointer hover:opacity-80"
              } 2xl:text-base lg:text-base md:text-base text-[12px]`}
            >
              {id === 5 ? (
                <div className="flex justify-center items-center gap-x-1">
                  <span className="font-semibold">
                    {t("blogs.next_article")}
                  </span>
                  {i18n.language == "en" ? <IoArrowRedo /> : <IoArrowUndo />}
                </div>
              ) : (
                <Link
                  to={`/blogs/${+id + 1}`}
                  className="flex justify-center items-center gap-x-1"
                >
                  <span className="font-semibold">
                    {t("blogs.next_article")}
                  </span>
                  {i18n.language == "en" ? <IoArrowRedo /> : <IoArrowUndo />}
                </Link>
              )}
            </div>
          </div>
        </div>

        <div className="2xl:col-span-3 xl:col-span-3 lg:col-span-3 md:col-span-5 col-span-12">
          <div className="my-10 mx-6">
            <div className="text-white bg-[#000] border-y-[3px] border-main text-[20px] text-center py-4 font-bold px-2">
              {t("blogs.article_contents")}
            </div>
            <div className="bg-[#ecececbd] text-black font-semibold text-base p-4 flex flex-col gap-y-4">
              <p>{t("blogs.topics.brand_identity")}</p>
              <p>{t("blogs.topics.spatial_identity")}</p>
              <p>{t("blogs.topics.website")}</p>
              <p>{t("blogs.topics.marketing")}</p>
            </div>
          </div>

          <div className="my-10 mx-6">
            <div className="text-white bg-[#000] border-y-[3px] border-main text-[20px] text-center py-4 font-bold px-2">
              {t("blogs.services")}
            </div>
            <div className="bg-[#ecececbd] text-black font-semibold text-base p-4 flex flex-col gap-y-4">
              <p>{t("blogs.topics.brand_identity")}</p>
              <p>{t("blogs.topics.spatial_identity")}</p>
              <p>{t("blogs.topics.website")}</p>
              <p>{t("blogs.topics.marketing")}</p>
              <p>{t("blogs.topics.photography")}</p>
              <p>{t("blogs.topics.social_media")}</p>
              <p>{t("blogs.topics.printing")}</p>
              <p>{t("blogs.topics.industry_support")}</p>
            </div>
          </div>

          <div className="my-10 mx-6">
            <div className="text-white bg-[#000] border-y-[3px] border-main text-[20px] text-center py-4 font-bold px-2">
              {t("blogs.latest_articles")}
            </div>
            <div className="bg-[#ecececbd] text-black font-semibold text-base p-4 flex flex-col gap-y-4">
              {[...Array(3)].map((_, index) => (
                <p key={index} className="flex justify-between items-center">
                  <div>{t("blogs.topics.spatial_identity")}</div>
                  <FaBookmark />
                </p>
              ))}
            </div>
          </div>
        </div>
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

export default Single_Blog;
