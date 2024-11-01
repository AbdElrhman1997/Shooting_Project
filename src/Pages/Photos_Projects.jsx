import GeneralFrame from "../Components/GeneralFrame";
import photos_images_1 from "../assets/Images/PhotosImages/photos_images_1.webp";
import photos_images_2 from "../assets/Images/PhotosImages/photos_images_2.webp";
import photos_images_3 from "../assets/Images/PhotosImages/photos_images_3.webp";
import photos_images_4 from "../assets/Images/PhotosImages/photos_images_4.webp";
import photos_images_5 from "../assets/Images/PhotosImages/photos_images_5.webp";
import our_work_1 from "../assets/Images/Spatial_Identity/our_work_1.jpg";
import our_work_2 from "../assets/Images/Spatial_Identity/our_work_2.jpg";
import our_work_3 from "../assets/Images/Spatial_Identity/our_work_3.jpg";
import our_work_4 from "../assets/Images/Spatial_Identity/our_work_4.jpg";
import our_work_5 from "../assets/Images/Spatial_Identity/our_work_5.jpg";

import GIF_Logo from "../assets/Images/Icons/GIF_Logo.gif";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Photos_Projects = () => {
  const { i18n, t } = useTranslation();

  const ServicesItems = [
    {
      title: "AI-Shabout Seafood Restaurant",
      subTitle:
        "العلامات التجارية -  التصوير الفوتوغرافي -  وسائل التواصل الأجتماعي",
      image: our_work_1,
    },
    {
      title: "AI-Shabout Seafood Restaurant",
      subTitle:
        "العلامات التجارية -  التصوير الفوتوغرافي -  وسائل التواصل الأجتماعي",
      image: our_work_2,
    },
    { title: "", subTitle: "", image: our_work_3 },
    { title: "", subTitle: "", image: our_work_4 },
    { title: "", subTitle: "", image: our_work_5 },
  ];

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
                <p className="2xl:text-2xl xl:text-2xl lg:text-xl md:text-lg text-base font-bold 2xl:px-12 xl:px-12 lg:px-12 md:px-8 px-4  mb-10 2xl:w-4/5 xl:w-4/5 lg:w-10/12 md:w-10/12 w-full">
                  فن تجسيد الرؤى إلى واقع مرئي....
                  <p className="2xl:text-[42px] xl:text-[42px] lg:text-[34px] md:text-[30px] text-[26px] my-6">
                    التصوير الفوتوغرافي والإنتاج الفني
                  </p>{" "}
                  نحول الأفكار إلى صور حية تنبض بالحياة .. لتصل رسالتكم بوضوح
                </p>

                <div className="bg-white flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col font-bold items-center w-full rounded-[30px] 2xl:mt-12 xl:mt-12 lg:mt-12 md:mt-12 mt-0">
                  <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-16 xl:px-16 lg:px-8">
                    <div className="text-justify mt-4 2xl:text-lg xl:text-lg lg:text-base md:text-base text-lg leading-loose font-semibold 2xl:mx-0 xl:mx-0 lg:mx-0 mx-4 mb-6">
                      <p className="2xl:text-2xl xl:text-2xl lg:text-xl md:text-base text-lg font-bold">
                        التصوير الفوتوغرافي
                      </p>
                      نصنع التفاصيل التي تعكس جودتها، ونهتم بدقة التفاصيل لتمييز
                      مشروعكم بالجودة العالية، كما نهتم بالمكون الأساسي والخامات
                      لتعزيز صورة المشهد وتوصيل رسالتكم المستهدفة
                    </div>
                  </div>
                  <div className=" 2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-0 xl:px-0 lg:px-0 md:px-0 px-4  2xl:block xl:block lg:block md:block inline">
                    <img
                      src={photos_images_1}
                      alt={""}
                      className="w-full 2xl:h-[200px] xl:h-[200px] lg:h-[200px] md:h-[200px] h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110" // Added group-hover
                    />
                  </div>
                </div>
                <div className="bg-white flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col font-bold items-center w-f rounded-[30px]">
                  <div className=" 2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-0 xl:px-0 lg:px-0 md:px-0 px-4  2xl:block xl:block lg:block md:block hidden">
                    <img
                      src={photos_images_2}
                      alt={""}
                      className="w-full h-[200px] object-cover transition-transform duration-300 ease-in-out group-hover:scale-110" // Added group-hover
                    />
                  </div>
                  <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-16 xl:px-16 lg:px-8">
                    <div className="text-justify mt-4 2xl:text-lg xl:text-lg lg:text-base md:text-base text-lg leading-loose font-semibold 2xl:mx-0 xl:mx-0 lg:mx-0 mx-4 mb-6">
                      <p className="2xl:text-2xl xl:text-2xl lg:text-xl md:text-base text-lg 2xl:mt-[14px] xl:mt-[14px] lg:mt-[10px] md::mt-[4px] mt-[4px] font-bold">
                        المونتاج واللمسات الإحترافية
                      </p>
                      هي عملية تلوين المشاهد ودمجها مع بعضها البعض لتكوين
                      الرسالة وإخراج العمل بشكل متسق بصريًا وفنيًا؛ لذا فإن
                      المونتير يكتب العمل في غرفة المونتاج بعد قراءة ما كتبه
                      المخرج
                    </div>
                  </div>
                  <div className=" 2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-0 xl:px-0 lg:px-0 md:px-0 px-4  2xl:hidden xl:hidden lg:hidden md:hidden inline">
                    <img
                      src={photos_images_2}
                      alt={""}
                      className="w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110" // Added group-hover
                    />
                  </div>
                </div>
                <div className="bg-white flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col font-bold items-center w-full rounded-[30px] ">
                  <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-16 xl:px-16 lg:px-8">
                    <div className="text-justify mt-4 2xl:text-lg xl:text-lg lg:text-base md:text-base text-lg leading-loose font-semibold 2xl:mx-0 xl:mx-0 lg:mx-0 mx-4 mb-6">
                      <p className="2xl:text-2xl xl:text-2xl lg:text-xl md:text-base text-lg 2xl:mt-[14px] xl:mt-[14px] lg:mt-[10px] md::mt-[4px] mt-[4px] font-bold">
                        مساحة تصوير للإيجار
                      </p>
                      استديو داخلي يلهم الإبداع مع وجود أماكن تصوير خارجية ذو
                      الطبيعة الخضراء، تطل على قمة أبراج المملكة متعددة الزوايا؛
                      مما تمكن المصور من خلق صور تتناسب مع الفكرة والرسالة التي
                      يرغب بإيصالها.
                    </div>
                  </div>
                  <div className=" 2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-0 xl:px-0 lg:px-0 md:px-0 px-4  2xl:block xl:block lg:block md:block inline">
                    <img
                      src={photos_images_3}
                      alt={""}
                      className="w-full 2xl:h-[200px] xl:h-[200px] lg:h-[200px] md:h-[200px] h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110" // Added group-hover
                    />
                  </div>
                </div>
                <div className="bg-white flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col font-bold items-center w-f rounded-[30px]">
                  <div className=" 2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-0 xl:px-0 lg:px-0 md:px-0 px-4  2xl:block xl:block lg:block md:block hidden">
                    <img
                      src={photos_images_4}
                      alt={""}
                      className="w-full h-[200px] object-cover transition-transform duration-300 ease-in-out group-hover:scale-110" // Added group-hover
                    />
                  </div>
                  <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-16 xl:px-16 lg:px-8">
                    <div className="text-justify mt-4 2xl:text-lg xl:text-lg lg:text-base md:text-base text-lg leading-loose font-semibold 2xl:mx-0 xl:mx-0 lg:mx-0 mx-4 mb-6">
                      <p className="2xl:text-2xl xl:text-2xl lg:text-xl md:text-base text-lg 2xl:mt-[14px] xl:mt-[14px] lg:mt-[10px] md::mt-[4px] mt-[4px] font-bold">
                        الإنتاج والإخراج الفني
                      </p>
                      تصوير الفيديوهات السينمائية والإعلانات التجارية وأعمال
                      السوشيال ميديا، عن طريق ( رسم ستوري بورد للإخراج - اعتماد
                      الفكرة - تجهيز المعدات التنسيق - التصوير - المونتاج -
                      الإعتماد النهائي )
                    </div>
                  </div>
                  <div className=" 2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-0 xl:px-0 lg:px-0 md:px-0 px-4  2xl:hidden xl:hidden lg:hidden md:hidden inline">
                    <img
                      src={photos_images_4}
                      alt={""}
                      className="w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110" // Added group-hover
                    />
                  </div>
                </div>
                <div className="bg-white flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col font-bold items-center w-full rounded-[30px] ">
                  <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-16 xl:px-16 lg:px-8">
                    <div className="text-justify mt-4 2xl:text-lg xl:text-lg lg:text-base md:text-base text-lg leading-loose font-semibold 2xl:mx-0 xl:mx-0 lg:mx-0 mx-4 mb-6">
                      <p className="2xl:text-2xl xl:text-2xl lg:text-xl md:text-base text-lg 2xl:mt-[14px] xl:mt-[14px] lg:mt-[10px] md::mt-[4px] mt-[4px] font-bold">
                        الإنتاج الصوتي والهندسة الصوتية
                      </p>
                      تسجيل وتنقية الصوت عبر الأجهزة التقنية والهندسة الصوتية،
                      وإنتاج البودكاست والموسيقى والمؤثرات الصوتية، لخلق شعور
                      يحقق رؤيتكم
                    </div>
                  </div>
                  <div className=" 2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-0 xl:px-0 lg:px-0 md:px-0 px-4  2xl:block xl:block lg:block md:block inline">
                    <img
                      src={photos_images_5}
                      alt={""}
                      className="w-full 2xl:h-[200px] xl:h-[200px] lg:h-[200px] md:h-[200px] h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110" // Added group-hover
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
                <p className="font-bold my-1 text-[#000]">تصوير المنتجات</p>
              </div>

              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8 "></div>
                <p className="font-bold my-1 text-[#000]">
                  تصوير الفيديو السينمائي
                </p>
              </div>

              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8 "></div>
                <p className="font-bold my-1 text-[#000]">التعليق الصوتي</p>
              </div>

              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8 "></div>
                <p className="font-bold my-1 text-[#000]">التصوير الشخصي</p>
              </div>

              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8 "></div>
                <p className="font-bold my-1 text-[#000]">تصوير المؤتمرات</p>
              </div>

              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8 "></div>
                <p className="font-bold my-1 text-[#000]">الأفلام الوثائقية</p>
              </div>

              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8 "></div>
                <p className="font-bold my-1 text-[#000]">التسجيل والمكساج</p>
              </div>

              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8 "></div>
                <p className="font-bold my-1 text-[#000]">
                  تصوير المناسبات الخاصة
                </p>
              </div>

              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8 "></div>
                <p className="font-bold my-1 text-[#000]">
                  تصوير مناسبات الشركات
                </p>
              </div>

              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8 "></div>
                <p className="font-bold my-1 text-[#000]">
                  الإعلانات والدعاية التجارية
                </p>
              </div>

              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8 "></div>
                <p className="font-bold my-1 text-[#000]">المؤثرات الصوتية</p>
              </div>

              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8 "></div>
                <p className="font-bold my-1 text-[#000]">تصوير الأعراس</p>
              </div>

              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8 "></div>
                <p className="font-bold my-1 text-[#000]">
                  تصوير المعارض والفعاليات
                </p>
              </div>

              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8 "></div>
                <p className="font-bold my-1 text-[#000]">
                  الفيديوهات التعريفية
                </p>
              </div>

              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8 "></div>
                <p className="font-bold my-1 text-[#000]">الموسيقى التصويرية</p>
              </div>

              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8 "></div>
                <p className="font-bold my-1 text-[#000]">
                  تصوير البيوتي والفاشون
                </p>
              </div>

              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8 "></div>
                <p className="font-bold my-1 text-[#000]">
                  فديوهات الموشن جرافيك
                </p>
              </div>

              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8 "></div>
                <p className="font-bold my-1 text-[#000]">الكليبات الفنية</p>
              </div>

              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8 "></div>
                <p className="font-bold my-1 text-[#000]">
                  الإعداد وصناعة المحتوى
                </p>
              </div>

              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8 "></div>
                <p className="font-bold my-1 text-[#000]">
                  صناعة صندوق لألبوم الصور والحفر عليه
                </p>
              </div>

              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8 "></div>
                <p className="font-bold my-1 text-[#000]">
                  التصوير الجوي بالدرون
                </p>
              </div>

              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8 "></div>
                <p className="font-bold my-1 text-[#000]">
                  التصوير الرياضي والسباقات
                </p>
              </div>

              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8 "></div>
                <p className="font-bold my-1 text-[#000]">خدمات البث المباشر</p>
              </div>

              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8 "></div>
                <p className="font-bold my-1 text-[#000]">
                  صناعة البوم حراري للصور (30*30) أو (A4)
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
            <div className="text-white bg-[#ec3237] w-fit px-8 py-2 font-bold xl:text-xl lg:text-xl md:text-xl text-md mx-auto -mt-[22px]">
              {t("markting.contact.start_now")}
            </div>
          </div>
        }
      />
      <p className="text-black text-center font-bold mt-10 2xl:text-3xl xl:text-3xl lg:text-3xl md:text-3xl text-xl ">
        أعمالنا في التصوير الفوتوغرافي والإنتاج الفني
      </p>
      <div
        className="grid grid-cols-6 xl:px-16 lg:px-16 md:px-8 px-4 gap-4 my-8"
        dir="rtl"
      >
        {ServicesItems?.map((item, index) => {
          return (
            <Link
              key={index + 1}
              className="relative xl:col-span-2 lg:col-span-2 md:col-span-3 col-span-3 cursor-pointer overflow-hidden group" // Added 'group' for hover control
              to={"/services/1"}
            >
              <img
                src={item?.image}
                alt={item?.title}
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110" // Added group-hover
              />
              <div className="service-hover w-full h-full absolute top-0 left-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              <div className="absolute bottom-6 left-0 mx-4 text-right font-bold transition-all duration-300 ease-in-out">
                <p className="text-white text-[17px]  opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100">
                  {item?.title}
                </p>
                <p className="text-white text-[13px] opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100">
                  {item?.subTitle}
                </p>
              </div>
            </Link>
          );
        })}
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
