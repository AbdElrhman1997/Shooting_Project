import GeneralFrame from "../Components/GeneralFrame";
import events_1 from "../assets/Images/Indusrty/Events/events_1.webp";
import events_2 from "../assets/Images/Indusrty/Events/events_2.webp";
import events_3 from "../assets/Images/Indusrty/Events/events_3.webp";
import events_4 from "../assets/Images/Indusrty/Events/events_4.webp";
import events_5 from "../assets/Images/Indusrty/Events/events_5.webp";
import events_6 from "../assets/Images/Indusrty/Events/events_6.webp";
import events_7 from "../assets/Images/Indusrty/Events/events_7.webp";
import events_8 from "../assets/Images/Indusrty/Events/events_8.webp";
import events_9 from "../assets/Images/Indusrty/Events/events_9.webp";
import events_10 from "../assets/Images/Indusrty/Events/events_10.webp";
import GIF_Logo from "../assets/Images/Icons/GIF_Logo.gif";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Events = () => {
  const { i18n, t } = useTranslation();

  return (
    <section>
      <GeneralFrame
        content={
          <div
            className={`bg-white text-black rounded-[10px] 2xl:py-12 xl:py-12 lg:py-12 md:py-12 py-6 text-center  ${
              i18n.language === "ar"
                ? "2xl:text-right xl:text-right lg:text-right md:text-right"
                : "2xl:text-left xl:text-left lg:text-left md:text-left"
            }`}
            dir={i18n.language === "ar" ? "rtl" : "ltr"}
          >
            <div className="">
              <div className="bg-white">
                <p className="2xl:text-2xl xl:text-2xl lg:text-xl md:text-lg text-base font-bold 2xl:px-12 xl:px-12 lg:px-12 md:px-8 px-4 2xl:mb-10 xl:mb-10 lg:mb-10 md:mb-10 mb-0 2xl:w-4/5 xl:w-4/5 lg:w-10/12 md:w-10/12 w-full">
                  <p
                    className="2xl:text-[42px] xl:text-[42px] lg:text-[34px] md:text-[30px] text-[26px] 2xl:my-6 xl:my-6 lg:my-6 md:my-6 my-0"
                    style={{ lineHeight: "1.6" }}
                  >
                    إدارة الفعاليات
                  </p>
                  لدينا فريق متخصص لدعم تنفذ إدارة الفاعليات لضبط معايير الجودة
                  في إطار التنفيذ التعاقدي لنضمن لكم حدث يستجیب لاحتیاجات
                  عملائكم
                </p>

                <p className="text-black text-center font-extrabold xl:my-8 lg:my-8 md:my-8 my-4 2xl:text-3xl xl:text-3xl lg:text-3xl md:text-3xl text-2xl ">
                  مراحـــــــــــــــل الإدارة
                </p>

                {/* Section 1 */}
                <div className="bg-white flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col font-bold items-start w-full rounded-[30px] 2xl:mt-12 xl:mt-12 lg:mt-12 md:mt-12 mt-6">
                  <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-8 xl:px-8 lg:px-8">
                    <div
                      className="2xl:text-justify xl:text-justify lg:text-justify md:text-justify text-center 2xl:text-3xl xl:text-xl lg:text-lg md:text-lg text-base font-bold 2xl:mx-0 xl:mx-0 lg:mx-0 mx-4 mb-6"
                      style={{ lineHeight: "2" }}
                    >
                      <p
                        className={`2xl:text-3xl xl:text-3xl lg:text-2xl md:text-lg text-xl font-bold mb-4`}
                      >
                        تحديد نوع الفعالية
                      </p>
                      فعاليات ترفيهية - فعاليات رسمية
                    </div>
                  </div>
                  <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-0 xl:px-0 lg:px-0 md:px-0">
                    <img
                      src={events_1}
                      alt=""
                      className="w-full 2xl:h-[350px] xl:h-[300px] lg:h-[300px] md:h-[300px] h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                    />
                  </div>
                </div>

                {/* Section 2 */}
                <div className="bg-white flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col font-bold items-start w-full rounded-[30px]">
                  <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-0 xl:px-0 lg:px-0 md:px-0 px-4 2xl:block xl:block lg:block md:block hidden">
                    <img
                      src={events_2}
                      alt=""
                      className="w-full 2xl:h-[350px] xl:h-[300px] lg:h-[300px] md:h-[300px] object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                    />
                  </div>
                  <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-8 xl:px-8 lg:px-8">
                    <div
                      className="2xl:text-justify xl:text-justify lg:text-justify md:text-justify text-center mt-3 2xl:text-3xl xl:text-xl lg:text-lg md:text-lg text-base font-bold mb-6 2xl:mx-0 xl:mx-0 lg:mx-0 mx-4"
                      style={{ lineHeight: "2" }}
                    >
                      <p
                        className={`2xl:text-3xl xl:text-3xl lg:text-2xl md:text-lg text-xl font-bold mb-4`}
                      >
                        تخطيط وتصميم الفعالية
                      </p>
                      تحديد أهداف الفعالية والغرض من إجراءها وكيفية الوصول لهذا
                      الهدف بالميزانية المناسبة
                    </div>
                  </div>
                  <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-0 xl:px-0 lg:px-0 md:px-0 2xl:hidden xl:hidden lg:hidden md:hidden inline">
                    <img
                      src={events_2}
                      alt=""
                      className="w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                    />
                  </div>
                </div>

                {/* Section 3 */}
                <div className="bg-white flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col font-bold items-start w-full rounded-[30px]">
                  <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-8 xl:px-8 lg:px-8">
                    <div
                      className="2xl:text-justify xl:text-justify lg:text-justify md:text-justify text-center mt-3 2xl:text-3xl xl:text-xl lg:text-lg md:text-lg text-base font-bold mb-6 2xl:mx-0 xl:mx-0 lg:mx-0 mx-4"
                      style={{ lineHeight: "2" }}
                    >
                      <p
                        className={`2xl:text-3xl xl:text-3xl lg:text-2xl md:text-lg text-xl font-bold mb-4`}
                      >
                        إختيار المكان والزمان المناسب لإجراء الفعالية
                      </p>
                      تحديد موعد يناسب الجمهور المستهدف، فلا تكون قصيرة غير
                      وافية ولا طويلة تسبب الملل للجمهور
                    </div>
                  </div>
                  <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full">
                    <img
                      src={events_3}
                      alt=""
                      className="w-full 2xl:h-[350px] xl:h-[300px] lg:h-[300px] md:h-[300px] h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                    />
                  </div>
                </div>

                {/* Section 4 */}
                <div className="bg-white flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col font-bold items-start w-full rounded-[30px]">
                  <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-0 xl:px-0 lg:px-0 md:px-0 px-4 2xl:block xl:block lg:block md:block hidden">
                    <img
                      src={events_4}
                      alt=""
                      className="w-full 2xl:h-[350px] xl:h-[300px] lg:h-[300px] md:h-[300px] object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                    />
                  </div>
                  <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-8 xl:px-8 lg:px-8">
                    <div
                      className="2xl:text-justify xl:text-justify lg:text-justify md:text-justify text-center mt-3 2xl:text-3xl xl:text-xl lg:text-lg md:text-lg text-base font-bold  mb-6 2xl:mx-0 xl:mx-0 lg:mx-0 mx-4"
                      style={{ lineHeight: "2" }}
                    >
                      <p
                        className={`2xl:text-3xl xl:text-3xl lg:text-2xl md:text-lg text-xl font-bold mb-4`}
                      >
                        إعداد المطبوعات والدعوات الخاصة بالفعالية
                      </p>
                      تنسيق التصميم مع طباعتة بشكل يليق بالحدث اذا كان فعاليات
                      ترفيهية او فعاليات رسمية
                    </div>
                  </div>
                  <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-0 xl:px-0 lg:px-0 md:px-0 2xl:hidden xl:hidden lg:hidden md:hidden inline">
                    <img
                      src={events_4}
                      alt=""
                      className="w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                    />
                  </div>
                </div>

                {/* Section 3 */}
                <div className="bg-white flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col font-bold items-start w-full rounded-[30px]">
                  <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-8 xl:px-8 lg:px-8">
                    <div
                      className="2xl:text-justify xl:text-justify lg:text-justify md:text-justify text-center mt-3 2xl:text-3xl xl:text-xl lg:text-lg md:text-lg text-base font-bold mb-6 2xl:mx-0 xl:mx-0 lg:mx-0 mx-4"
                      style={{ lineHeight: "2" }}
                    >
                      <p
                        className={`2xl:text-3xl xl:text-3xl lg:text-2xl md:text-lg text-xl font-bold mb-4`}
                      >
                        تجهيز المكان بالوسائل التكنولوجية المختلفة
                      </p>
                      يتضمن هذا التصويــــر والتسجيل، البث المبـــــاشر، الترجمة
                      الفورية، خدمات الإنترنت والاتصال، وغيرها
                    </div>
                  </div>
                  <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full">
                    <img
                      src={events_5}
                      alt=""
                      className="w-full 2xl:h-[350px] xl:h-[300px] lg:h-[300px] md:h-[300px] h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                    />
                  </div>
                </div>

                {/* Section 4 */}
                <div className="bg-white flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col font-bold items-start w-full rounded-[30px]">
                  <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-0 xl:px-0 lg:px-0 md:px-0 px-4 2xl:block xl:block lg:block md:block hidden">
                    <img
                      src={events_6}
                      alt=""
                      className="w-full 2xl:h-[350px] xl:h-[300px] lg:h-[300px] md:h-[300px] object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                    />
                  </div>
                  <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-8 xl:px-8 lg:px-8">
                    <div
                      className="2xl:text-justify xl:text-justify lg:text-justify md:text-justify text-center mt-3 2xl:text-3xl xl:text-xl lg:text-lg md:text-lg text-base font-bold  mb-6 2xl:mx-0 xl:mx-0 lg:mx-0 mx-4"
                      style={{ lineHeight: "2" }}
                    >
                      <p
                        className={`2xl:text-3xl xl:text-3xl lg:text-2xl md:text-lg text-xl font-bold mb-4`}
                      >
                        استقبال الوفود وتأمين الفعالية
                      </p>
                      توفير الحرس اللازم لتأمين الفاعلية وتحضير موظفي الإستقبال
                      والسائق لمصاحبة الزائر إلى مكان الفعالية
                    </div>
                  </div>
                  <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-0 xl:px-0 lg:px-0 md:px-0 2xl:hidden xl:hidden lg:hidden md:hidden inline">
                    <img
                      src={events_6}
                      alt=""
                      className="w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                    />
                  </div>
                </div>

                {/* Section 3 */}
                <div className="bg-white flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col font-bold items-start w-full rounded-[30px]">
                  <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-8 xl:px-8 lg:px-8">
                    <div
                      className="2xl:text-justify xl:text-justify lg:text-justify md:text-justify text-center mt-3 2xl:text-3xl xl:text-xl lg:text-lg md:text-lg text-base font-bold mb-6 2xl:mx-0 xl:mx-0 lg:mx-0 mx-4"
                      style={{ lineHeight: "2" }}
                    >
                      <p
                        className={`2xl:text-3xl xl:text-3xl lg:text-2xl md:text-lg text-xl font-bold mb-4`}
                      >
                        الأعمال اللوجستية
                      </p>
                      تقديــم المأكولات والمشروبــــات وأمـــاكن الصلاة
                      والاستعلامات وغيرها
                    </div>
                  </div>
                  <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full">
                    <img
                      src={events_7}
                      alt=""
                      className="w-full 2xl:h-[350px] xl:h-[300px] lg:h-[300px] md:h-[300px] h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                    />
                  </div>
                </div>

                {/* Section 4 */}
                <div className="bg-white flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col font-bold items-start w-full rounded-[30px]">
                  <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-0 xl:px-0 lg:px-0 md:px-0 px-4 2xl:block xl:block lg:block md:block hidden">
                    <img
                      src={events_8}
                      alt=""
                      className="w-full 2xl:h-[350px] xl:h-[300px] lg:h-[300px] md:h-[300px] object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                    />
                  </div>
                  <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-8 xl:px-8 lg:px-8">
                    <div
                      className="2xl:text-justify xl:text-justify lg:text-justify md:text-justify text-center mt-3 2xl:text-3xl xl:text-xl lg:text-lg md:text-lg text-base font-bold  mb-6 2xl:mx-0 xl:mx-0 lg:mx-0 mx-4"
                      style={{ lineHeight: "2" }}
                    >
                      <p
                        className={`2xl:text-3xl xl:text-3xl lg:text-2xl md:text-lg text-xl font-bold mb-4`}
                      >
                        خدمات الضيافة
                      </p>
                      نضمن لك تجربة استثنائية مليئة باكرام الضيف على الأصول
                      السعودية
                    </div>
                  </div>
                  <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-0 xl:px-0 lg:px-0 md:px-0 2xl:hidden xl:hidden lg:hidden md:hidden inline">
                    <img
                      src={events_8}
                      alt=""
                      className="w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                    />
                  </div>
                </div>

                {/* Section 3 */}
                <div className="bg-white flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col font-bold items-start w-full rounded-[30px]">
                  <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-8 xl:px-8 lg:px-8">
                    <div
                      className="2xl:text-justify xl:text-justify lg:text-justify md:text-justify text-center mt-3 2xl:text-3xl xl:text-xl lg:text-lg md:text-lg text-base font-bold mb-6 2xl:mx-0 xl:mx-0 lg:mx-0 mx-4"
                      style={{ lineHeight: "2" }}
                    >
                      <p
                        className={`2xl:text-3xl xl:text-3xl lg:text-2xl md:text-lg text-xl font-bold mb-4`}
                      >
                        اليد العاملة
                      </p>
                      توفير العمالة والخدم والحرس وسائقي السيارات وموظفي
                      الإستقبال لتلبية إحتياجاتكم
                    </div>
                  </div>
                  <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full">
                    <img
                      src={events_9}
                      alt=""
                      className="w-full 2xl:h-[350px] xl:h-[300px] lg:h-[300px] md:h-[300px] h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                    />
                  </div>
                </div>

                {/* Section 4 */}
                <div className="bg-white flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col font-bold items-start w-full rounded-[30px]">
                  <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-0 xl:px-0 lg:px-0 md:px-0 px-4 2xl:block xl:block lg:block md:block hidden">
                    <img
                      src={events_10}
                      alt=""
                      className="w-full 2xl:h-[350px] xl:h-[300px] lg:h-[300px] md:h-[300px] object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                    />
                  </div>
                  <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-8 xl:px-8 lg:px-8">
                    <div
                      className="2xl:text-justify xl:text-justify lg:text-justify md:text-justify text-center mt-3 2xl:text-3xl xl:text-xl lg:text-lg md:text-lg text-base font-bold  mb-6 2xl:mx-0 xl:mx-0 lg:mx-0 mx-4"
                      style={{ lineHeight: "2" }}
                    >
                      <p
                        className={`2xl:text-3xl xl:text-3xl lg:text-2xl md:text-lg text-xl font-bold mb-4`}
                      >
                        مراقبة الفعالية
                      </p>
                      مسؤل العناية بالحفل المسؤل عن الجودة والعناية برأي الحضور
                      والاستعداد لتنظيم الفعاليات المقبلة لديكم
                    </div>
                  </div>
                  <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-0 xl:px-0 lg:px-0 md:px-0 2xl:hidden xl:hidden lg:hidden md:hidden inline">
                    <img
                      src={events_10}
                      alt=""
                      className="w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                    />
                  </div>
                </div>
              </div>
            </div>

            <p className="text-black text-center font-bold mt-6 2xl:text-3xl xl:text-3xl lg:text-3xl md:text-3xl text-xl ">
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
            <p className="text-[#000] text-center font-bold mt-2 2xl:text-xl xl:text-xl lg:text-xl md:text-xl text-lg 2xl:mx-12 xl:mx-12 lg:mx-12 md:mx-6 mx-4">
              نصنع لكم الزخم الإعلامي الذي يترك بصمة في تاريخ علامتك التجارية،
              أن تكون فعالية شركتك مميزة غير مسبوقة
            </p>
            <div className="grid grid-cols-12 gap-y-12 my-10 mx-4 text-center 2xl:text-xl xl:text-xl lg:text-xl md:text-xl text-lg justify-center items-center">
              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8 "></div>
                <p className="font-bold my-1 text-[#000]">تحديد نوع الفعالية</p>
              </div>

              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8 "></div>
                <p className="font-bold my-1 text-[#000]">
                  تخطيط وتصميم الفعالية
                </p>
              </div>

              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8 "></div>
                <p className="font-bold my-1 text-[#000]">
                  ختيار المكان والزمان المناسب لإجراء الفعالية
                </p>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-y-12 my-10 mx-4 text-center 2xl:text-xl xl:text-xl lg:text-xl md:text-xl text-lg justify-center items-center">
              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8 "></div>
                <p className="font-bold my-1 text-[#000]">
                  إعداد المطبوعات والدعوات الخاصة بالفعالية
                </p>
              </div>

              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8 "></div>
                <p className="font-bold my-1 text-[#000]">
                  تجهيز المكان بالوسائل التكنولوجية المختلفة
                </p>
              </div>

              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8 "></div>
                <p className="font-bold my-1 text-[#000]">
                  استقبال الوفود وتأمين الفعالية
                </p>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-y-12 my-10 mx-4 text-center 2xl:text-xl xl:text-xl lg:text-xl md:text-xl text-lg justify-center items-center">
              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8 "></div>
                <p className="font-bold my-1 text-[#000]">الأعمال اللوجستية</p>
              </div>

              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8 "></div>
                <p className="font-bold my-1 text-[#000]">خدمات الضيافة</p>
              </div>

              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8 "></div>
                <p className="font-bold my-1 text-[#000]">اليد العاملة</p>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-y-12 my-10 mx-4 text-center 2xl:text-xl xl:text-xl lg:text-xl md:text-xl text-lg justify-center items-center">
              <div className="flex flex-col justify-center items-center col-span-12 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8 "></div>
                <p className="font-bold my-1 text-[#000]">مراقبة الفعالية</p>
              </div>
            </div>

            <div
              className="bg-[#333] xl:py-8 lg:py-8 md:py-8 pt-4 pb-8 xl:px-16 lg:px-16 md:px-8 px-4 text-white 2xl:text-3xl xl:text-3xl lg:text-3xl md:text-2xl text-lg font-bold"
              dir="rtl"
            >
              <p>تحتاج إدارة فعاليتك؟</p>
              <p className="my-2">
                اتتردد بالتواصل معنا لنقدم لك الإستشارة اللازمة
              </p>
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
      <div className="w-full h-full flex justify-center items-center ">
        <img
          src={GIF_Logo}
          alt="Shooting GIF Logo"
          className="xl:w-48 lg:w-48 md:w-48 w-40 xl:-mb-12 lg:-mb-12 md:-mb-12 -mb-[170px] xl:mt-12 lg:mt-12 md:mt-12 mt-12   "
        />
      </div>
    </section>
  );
};

export default Events;
