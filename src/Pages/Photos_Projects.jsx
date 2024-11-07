import GeneralFrame from "../Components/GeneralFrame";
import photos_images_1 from "../assets/Images/PhotosImages/photos_images_1.webp";
import photos_images_2 from "../assets/Images/PhotosImages/photos_images_2.webp";
import photos_images_3 from "../assets/Images/PhotosImages/photos_images_3.webp";
import photos_images_4 from "../assets/Images/PhotosImages/photos_images_4.webp";
import photos_images_5 from "../assets/Images/PhotosImages/photos_images_5.webp";
import GIF_Logo from "../assets/Images/Icons/GIF_Logo.gif";
import Pagination from "../Components/Pagination";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Photos_Projects = () => {
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
        `https://admin.shootingads.net/api/getBrandApiForService?service=4`,
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
                <p className="2xl:text-2xl xl:text-2xl lg:text-xl md:text-lg text-base font-bold 2xl:px-12 xl:px-12 lg:px-12 md:px-8 px-4 2xl:mb-10 xl:mb-10 lg:mb-10 md:mb-10 mb-0 2xl:w-4/5 xl:w-4/5 lg:w-10/12 md:w-10/12 w-full">
                  {t("photos.header")}
                  <p
                    className="2xl:text-[42px] xl:text-[42px] lg:text-[34px] md:text-[30px] text-[26px] my-6"
                    style={{ lineHeight: "1.6" }}
                  >
                    {t("photos.title1")}
                  </p>
                  {t("photos.description1")}
                </p>

                {/* Section 1 */}
                <div className="bg-white flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col font-bold items-start w-full rounded-[30px] 2xl:mt-12 xl:mt-12 lg:mt-12 md:mt-12 mt-0">
                  <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-8 xl:px-8 lg:px-8">
                    <div
                      className="text-justify 2xl:text-xl xl:text-xl lg:text-lg md:text-lg text-lg font-bold 2xl:mx-0 xl:mx-0 lg:mx-0 mx-4 mb-6"
                      style={{ lineHeight: "2" }}
                    >
                      <p
                        className={`2xl:text-3xl xl:text-3xl lg:text-2xl md:text-xl text-2xl font-bold mb-4`}
                      >
                        {t("photos.section1.title")}
                      </p>
                      {t("photos.section1.content")}
                    </div>
                  </div>
                  <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-0 xl:px-0 lg:px-0 md:px-0">
                    <img
                      src={photos_images_1}
                      alt=""
                      className="w-full 2xl:h-[350px] xl:h-[300px] lg:h-[300px] md:h-[300px] h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                    />
                  </div>
                </div>

                {/* Section 2 */}
                <div className="bg-white flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col font-bold items-start w-full rounded-[30px]">
                  <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full">
                    <img
                      src={photos_images_2}
                      alt=""
                      className="w-full 2xl:h-[350px] xl:h-[300px] lg:h-[300px] md:h-[300px] object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                    />
                  </div>
                  <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-8 xl:px-8 lg:px-8">
                    <div
                      className="text-justify mt-6 2xl:text-xl xl:text-xl lg:text-lg md:text-lg text-lg font-bold mx-4 mb-6"
                      style={{ lineHeight: "2" }}
                    >
                      <p
                        className={`2xl:text-3xl xl:text-3xl lg:text-2xl md:text-xl text-2xl font-bold mb-4`}
                      >
                        {t("photos.section2.title")}
                      </p>
                      {t("photos.section2.content")}
                    </div>
                  </div>
                </div>

                {/* Section 3 */}
                <div className="bg-white flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col font-bold items-start w-full rounded-[30px]">
                  <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-8 xl:px-8 lg:px-8">
                    <div
                      className="text-justify mt-6 2xl:text-xl xl:text-xl lg:text-lg md:text-lg text-lg font-bold mx-4 mb-6"
                      style={{ lineHeight: "2" }}
                    >
                      <p
                        className={`2xl:text-3xl xl:text-3xl lg:text-2xl md:text-xl text-2xl font-bold mb-4`}
                      >
                        {t("photos.section3.title")}
                      </p>
                      {t("photos.section3.content")}
                    </div>
                  </div>
                  <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full">
                    <img
                      src={photos_images_3}
                      alt=""
                      className="w-full 2xl:h-[350px] xl:h-[300px] lg:h-[300px] md:h-[300px] h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                    />
                  </div>
                </div>

                {/* Section 4 */}
                <div className="bg-white flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col font-bold items-start w-full rounded-[30px]">
                  <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full">
                    <img
                      src={photos_images_4}
                      alt=""
                      className="w-full 2xl:h-[350px] xl:h-[300px] lg:h-[300px] md:h-[300px] object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                    />
                  </div>
                  <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-8 xl:px-8 lg:px-8">
                    <div
                      className="text-justify mt-6 2xl:text-xl xl:text-xl lg:text-lg md:text-lg text-lg font-bold mx-4 mb-6"
                      style={{ lineHeight: "2" }}
                    >
                      <p
                        className={`2xl:text-3xl xl:text-3xl lg:text-2xl md:text-xl text-2xl font-bold mb-4`}
                      >
                        {t("photos.section4.title")}
                      </p>
                      {t("photos.section4.content")}
                    </div>
                  </div>
                </div>

                {/* Section 5 */}
                <div className="bg-white flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col font-bold items-start w-full rounded-[30px]">
                  <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-8 xl:px-8 lg:px-8">
                    <div
                      className="text-justify mt-6 2xl:text-xl xl:text-xl lg:text-lg md:text-lg text-lg font-bold mx-4 mb-6"
                      style={{ lineHeight: "2" }}
                    >
                      <p
                        className={`2xl:text-3xl xl:text-[27px] lg:text-2xl md:text-xl text-2xl font-bold mb-4 `}
                      >
                        {t("photos.section5.title")}
                      </p>
                      {t("photos.section5.content")}
                    </div>
                  </div>
                  <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full">
                    <img
                      src={photos_images_5}
                      alt=""
                      className="w-full 2xl:h-[350px] xl:h-[300px] lg:h-[300px] md:h-[300px] h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                    />
                  </div>
                </div>
              </div>
            </div>
            <p className="text-black text-center font-bold mt-10 2xl:text-3xl xl:text-3xl lg:text-3xl md:text-3xl text-xl ">
              {t("markting.passion_statement")}
            </p>
            <div className="2xl:mx-12 xl:mx-12 lg:mx-12 md:mx-6 mx-2 my-10">
              <video controls className="w-full rounded-lg shadow-lg ">
                <source src="/path-to-your-video/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <p className="text-[#000] font-bold 2xl:text-4xl xl:text-4xl lg:text-4xl md:text-4xl text-3xl text-center mt-8">
              {t("markting.what_we_offer")}
            </p>
            <p className="text-[#000] text-center font-bold mt-2 2xl:text-xl xl:text-xl lg:text-xl md:text-xl text-lg 2xl:mx-12 xl:mx-12 lg:mx-12 md:mx-6 mx-2">
              {t("markting.brand_awareness")}
            </p>
            <div className="grid grid-cols-12 gap-y-12 my-10 mx-4 text-center 2xl:text-xl xl:text-xl lg:text-xl md:text-xl text-lg justify-center items-center">
              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8 "></div>
                <p className="font-bold my-1 text-[#000]">
                  {t("photos.product_photography")}
                </p>
              </div>

              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8 "></div>
                <p className="font-bold my-1 text-[#000]">
                  {t("photos.cinematic_video")}
                </p>
              </div>

              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8 "></div>
                <p className="font-bold my-1 text-[#000]">
                  {t("photos.voiceover")}
                </p>
              </div>

              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8 "></div>
                <p className="font-bold my-1 text-[#000]">
                  {t("photos.portrait_photography")}
                </p>
              </div>

              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8 "></div>
                <p className="font-bold my-1 text-[#000]">
                  {t("photos.conference_photography")}
                </p>
              </div>

              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8 "></div>
                <p className="font-bold my-1 text-[#000]">
                  {t("photos.documentaries")}
                </p>
              </div>

              {/* Add additional services in the same format */}
              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8 "></div>
                <p className="font-bold my-1 text-[#000]">
                  {t("photos.recording_mixing")}
                </p>
              </div>

              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8 "></div>
                <p className="font-bold my-1 text-[#000]">
                  {t("photos.special_event_photography")}
                </p>
              </div>

              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8 "></div>
                <p className="font-bold my-1 text-[#000]">
                  {t("photos.company_events")}
                </p>
              </div>
              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8 "></div>
                <p className="font-bold my-1 text-[#000]">
                  {t("photos.commercial_advertising")}
                </p>
              </div>

              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8 "></div>
                <p className="font-bold my-1 text-[#000]">
                  {" "}
                  {t("photos.sound_effects")}
                </p>
              </div>

              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8 "></div>
                <p className="font-bold my-1 text-[#000]">
                  {" "}
                  {t("photos.wedding_photography")}
                </p>
              </div>

              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8 "></div>
                <p className="font-bold my-1 text-[#000]">
                  {t("photos.exhibitions_events")}
                </p>
              </div>

              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8 "></div>
                <p className="font-bold my-1 text-[#000]">
                  {t("photos.introductory_videos")}
                </p>
              </div>

              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8 "></div>
                <p className="font-bold my-1 text-[#000]">
                  {" "}
                  {t("photos.soundtrack")}
                </p>
              </div>

              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8 "></div>
                <p className="font-bold my-1 text-[#000]">
                  {t("photos.beauty_fashion_photography")}
                </p>
              </div>

              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8 "></div>
                <p className="font-bold my-1 text-[#000]">
                  {t("photos.motion_graphics")}
                </p>
              </div>

              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8 "></div>
                <p className="font-bold my-1 text-[#000]">
                  {" "}
                  {t("photos.art_clips")}
                </p>
              </div>

              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8 "></div>
                <p className="font-bold my-1 text-[#000]">
                  {t("photos.content_creation")}
                </p>
              </div>

              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8 "></div>
                <p className="font-bold my-1 text-[#000]">
                  {t("photos.photo_album_box")}
                </p>
              </div>

              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8 "></div>
                <p className="font-bold my-1 text-[#000]">
                  {t("photos.drone_photography")}
                </p>
              </div>

              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8 "></div>
                <p className="font-bold my-1 text-[#000]">
                  {t("photos.sports_photography")}
                </p>
              </div>

              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8 "></div>
                <p className="font-bold my-1 text-[#000]">
                  {" "}
                  {t("photos.live_broadcast_services")}
                </p>
              </div>

              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8 "></div>
                <p className="font-bold my-1 text-[#000]">
                  {t("photos.album_creation")}
                </p>
              </div>
            </div>

            <div
              className="bg-[#333] xl:py-8 lg:py-8 md:py-8 pt-4 pb-8 xl:px-16 lg:px-16 md:px-8 px-4 text-white 2xl:text-3xl xl:text-3xl lg:text-3xl md:text-2xl text-lg font-bold"
              dir="rtl"
            >
              <p>{t("markting.contact.photo_video_request")}</p>
              <p className="my-2">{t("markting.contact.consultation_offer")}</p>
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
        {t("photos.our_projects")}
      </p>
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

export default Photos_Projects;
