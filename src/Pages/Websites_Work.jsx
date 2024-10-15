import GeneralFrame from "../Components/GeneralFrame";
import Spatial_Identity_1 from "../assets/Images/Spatial_Identity/spatial_identity_1.jpg";
import Spatial_Identity_2 from "../assets/Images/Spatial_Identity/spatial_identity_2.jpg";
import Websites_Work_1 from "../assets/Images/Websites_Work/Websites_Work_1.jpg";
import Websites_Work_2 from "../assets/Images/Websites_Work/Websites_Work_2.jpg";
import Websites_Work_3 from "../assets/Images/Websites_Work/Websites_Work_3.jpg";
import Websites_Work_4 from "../assets/Images/Websites_Work/Websites_Work_4.jpg";
import Websites_Work_5 from "../assets/Images/Websites_Work/Websites_Work_5.jpg";
import Websites_Work_6 from "../assets/Images/Websites_Work/Websites_Work_6.jpg";
import Websites_Work_7 from "../assets/Images/Websites_Work/Websites_Work_7.jpg";
import Websites_Work_8 from "../assets/Images/Websites_Work/Websites_Work_8.jpg";
import Websites_Work_9 from "../assets/Images/Websites_Work/Websites_Work_9.jpg";
import Websites_Work_10 from "../assets/Images/Websites_Work/Websites_Work_10.jpg";
import Websites_Work_11 from "../assets/Images/Websites_Work/Websites_Work_11.jpg";
import Websites_Work_12 from "../assets/Images/Websites_Work/Websites_Work_12.jpg";
import Websites_Work_13 from "../assets/Images/Websites_Work/Websites_Work_13.jpg";

import GIF_Logo from "../assets/Images/Icons/GIF_Logo.gif";
import { Link } from "react-router-dom";

const Websites_Work = () => {
  const ServicesItems = [
    {
      title: "AI-Shabout Seafood Restaurant",
      subTitle:
        "العلامات التجارية -  التصوير الفوتوغرافي -  وسائل التواصل الأجتماعي",
      image: Websites_Work_1,
    },
    {
      title: "AI-Shabout Seafood Restaurant",
      subTitle:
        "العلامات التجارية -  التصوير الفوتوغرافي -  وسائل التواصل الأجتماعي",
      image: Websites_Work_2,
    },
    { title: "", subTitle: "", image: Websites_Work_3 },
    { title: "", subTitle: "", image: Websites_Work_4 },
    { title: "", subTitle: "", image: Websites_Work_5 },
    { title: "", subTitle: "", image: Websites_Work_6 },
    { title: "", subTitle: "", image: Websites_Work_7 },
    { title: "", subTitle: "", image: Websites_Work_8 },
    { title: "", subTitle: "", image: Websites_Work_9 },
    { title: "", subTitle: "", image: Websites_Work_10 },
    { title: "", subTitle: "", image: Websites_Work_11 },
    { title: "", subTitle: "", image: Websites_Work_12 },
    { title: "", subTitle: "", image: Websites_Work_13 },
  ];

  return (
    <section>
      <GeneralFrame
        content={
          <div className="bg-white text-black rounded-[30px]  py-12" dir="rtl">
            <div className="">
              <div className="bg-white">
                <p className="2xl:text-2xl xl:text-2xl lg:text-2xl md:text-2xl text-xl font-bold 2xl:px-12 xl:px-12 lg:px-12 md:px-8 px-4 2xl:text-right xl:text-right lg:text-right md:text-right text-center">
                  إنشاء{" "}
                  <span className="2xl:text-[42px] xl:text-[42px]lg:text-[42px] md:text-[42px] text-3xl">
                    المتاجر و المواقع الإلكترونية
                  </span>{" "}
                  وبرمجتها
                </p>
                <p className="2xl:text-2xl xl:text-2xl lg:text-2xl md:text-2xl text-xl mt-3 font-bold 2xl:px-12 xl:px-12 lg:px-12 md:px-8 px-4 2xl:text-right xl:text-right lg:text-right md:text-right text-center">
                  نحول أفكارك إلى واقع رقمي متكامل عبر بناء منصات تجارة
                  إلكترونية قوية وسريعة
                </p>
                <div className="bg-white flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col font-bold items-center w-full rounded-[30px] 2xl:mt-12 xl:mt-12 lg:mt-12 md:mt-12 mt-0">
                  <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-16 xl:px-16 lg:px-8 ">
                    <p className="text-justify my-6 mt-4 2xl:text-2xl xl:text-2xl lg:text-lg md:text-base text-lg leading-loose font-bold 2xl:mx-0 xl:mx-0 lg:mx-0  mx-4">
                      إنشاء تجربة رقمية مميزة تلبي إحتياجاتك وتصميم واجهة جذابة
                      وسهلة الإستخدام تتماشى مع هوية العلامة التجارية لتلبي
                      توقعات العملاء
                    </p>
                  </div>
                  <div className=" 2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-0 xl:px-0 lg:px-0 md:px-0 px-4  2xl:block xl:block lg:block md:block inline">
                    <img
                      src={Spatial_Identity_1}
                      alt={""}
                      className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110" // Added group-hover
                    />
                  </div>
                </div>
                <div className="bg-white flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col font-bold items-center w-f rounded-[30px]">
                  <div className=" 2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-0 xl:px-0 lg:px-0 md:px-0 px-4  2xl:block xl:block lg:block md:block hidden">
                    <img
                      src={Spatial_Identity_2}
                      alt={""}
                      className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110" // Added group-hover
                    />
                  </div>
                  <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-16 xl:px-16 lg:px-8  ">
                    <p className="text-justify my-6 mt-4 2xl:text-2xl xl:text-2xl lg:text-lg md:text-base text-lg leading-loose font-bold  2xl:mx-0 xl:mx-0 lg:mx-0  mx-4">
                      بناء منصة تجارة إلكترونية متكاملة , تشمل إدارة المنتجات ,
                      نظام الدفع , إعدادات الشحن وتقديم خدمات الدعم الفني
                      والصيانة الدورية لضمان إستمرارية الأداءالعالي للموقع
                    </p>
                  </div>
                  <div className=" 2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-0 xl:px-0 lg:px-0 md:px-0 px-4  2xl:hidden xl:hidden lg:hidden md:hidden inline">
                    <img
                      src={Spatial_Identity_2}
                      alt={""}
                      className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110" // Added group-hover
                    />
                  </div>
                </div>
              </div>
            </div>
            <p className="text-black text-center font-bold mt-10 2xl:text-3xl xl:text-3xl lg:text-3xl md:text-3xl text-xl ">
              نعمل بشغف . . لنصيب الهدف
            </p>
            <div className="2xl:mx-12 xl:mx-12 lg:mx-12 md:mx-6 mx-2 my-10">
              <video controls className="w-full rounded-lg shadow-lg ">
                <source src="/path-to-your-video/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <p className="text-[#000] font-bold 2xl:text-4xl xl:text-4xl lg:text-4xl md:text-4xl text-3xl text-center mt-8">
              ما نقدمة لكم
            </p>
            <p className="text-[#000] text-center font-bold mt-2 2xl:text-xl xl:text-xl lg:text-xl md:text-xl text-lg 2xl:mx-12 xl:mx-12 lg:mx-12 md:mx-6 mx-2">
              ربط المتجر أو الموقع بأنظمة أخرى مثل أنظمة إدراة العلاقات مع
              العملاء (CRM) أنظمة المخزون وأدوات التسويق وطرق الدفع وشركات الشحن
              ودعم متطلباتكم عن طريق
            </p>
            <div className="grid grid-cols-12 gap-y-12 my-10 mx-4 text-center 2xl:text-xl xl:text-xl lg:text-xl md:text-xl text-lg">
              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8 "></div>
                <p className="font-bold my-1 text-[#000]">
                  تحليل متطلبات العميل
                </p>
              </div>
              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8 "></div>
                <p className="font-bold my-1 text-[#000]">
                  تصميم واجهة المستخدم
                </p>
              </div>
              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8 "></div>
                <p className="font-bold my-1 text-[#000]">تجربة المستخدم</p>
              </div>
              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8 "></div>
                <p className="font-bold my-1 text-[#000]">
                  تطوير المتجر الإلكتروني
                </p>
              </div>
              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8 "></div>
                <p className="font-bold my-1 text-[#000]">تكامل الأنظمة</p>
              </div>
              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8 "></div>
                <p className="font-bold my-1 text-[#000]">تحسين محركات البحث</p>
              </div>
              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8 "></div>
                <p className="font-bold my-1 text-[#000]">
                  الأمن وحماية البيانات
                </p>
              </div>
              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8 "></div>
                <p className="font-bold my-1 text-[#000]">الدعم والصيانة</p>
              </div>
              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8 "></div>
                <p className="font-bold my-1 text-[#000]">
                  التكامل مع وسائل التواصل الإجتماعي
                </p>
              </div>
            </div>
            <div
              className="bg-[#333] xl:py-8 lg:py-8 md:py-8 pt-4 pb-8 xl:px-16 lg:px-16 md:px-8 px-4 text-white 2xl:text-3xl xl:text-3xl lg:text-3xl md:text-2xl text-lg font-bold"
              dir="rtl"
            >
              <p>تحتاج تصميم لهويتك المكانية ثلاثي الأبعاد ؟</p>
              <p className="my-2">
                لا تتردد في التواصل معنا لتقديم الإستشارة اللازمة
              </p>
            </div>
            <div className="text-white bg-[#ec3237] w-fit px-8 py-2 font-bold xl:text-xl lg:text-xl md:text-xl text-md mx-auto -mt-[22px]">
              إبدأ الان
            </div>
          </div>
        }
      />
      <p className="text-black text-center font-bold mt-10 2xl:text-3xl xl:text-3xl lg:text-3xl md:text-3xl text-xl ">
        أعمالنا في المتاجر والمواقع الإلكترونية
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
      <img src={GIF_Logo} alt="Shooting GIF Logo" className="mt-6 -mb-6" />
    </section>
  );
};

export default Websites_Work;
