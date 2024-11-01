import GeneralFrame from "../Components/GeneralFrame";
import printing_1 from "../assets/Images/Indusrty/Printing/Print 1 copy.webp";
import printing_2 from "../assets/Images/Indusrty/Printing/Print ٢ copy.webp";
import printing_3 from "../assets/Images/Indusrty/Printing/Print 3 copy.webp";
import printing_4 from "../assets/Images/Indusrty/Printing/Print ٤ copy.webp";
import printing_5 from "../assets/Images/Indusrty/Printing/Print ٥ copy.webp";
import printing_6 from "../assets/Images/Indusrty/Printing/Print 6 copy.webp";
import printing_7 from "../assets/Images/Indusrty/Printing/Print 7 copy.webp";
import printing_8 from "../assets/Images/Indusrty/Printing/Untitled-4 copy.webp";
import printing_9 from "../assets/Images/Indusrty/Printing/Print 9 copy.webp";

import GIF_Logo from "../assets/Images/Icons/GIF_Logo.gif";
import { useTranslation } from "react-i18next";

const Printing = () => {
  const { i18n, t } = useTranslation();

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
                  <p className="2xl:text-[42px] xl:text-[42px] lg:text-[34px] md:text-[30px] text-[26px] my-6">
                    الطباعة
                  </p>{" "}
                  لدينا فريق متخصص لدعم إنتاج وطباعة المطبوعات التجارية والهداية
                  الدعائية لضبط معايير الجودة ً في إطار التصنیع التعاقدي لنضمن
                  لكم منتج يستجیب لاحتیاجات عملائكم
                </p>

                <p className="text-black text-center font-extrabold xl:my-8 lg:my-8 md:my-8 my-0 2xl:text-3xl xl:text-3xl lg:text-3xl md:text-3xl text-2xl ">
                  مراحـــــــــــل الإنتــــــــاج
                </p>

                <div className="bg-white flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col font-bold items-center w-full rounded-[30px] 2xl:mt-12 xl:mt-12 lg:mt-12 md:mt-12 mt-0">
                  <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-16 xl:px-16 lg:px-8">
                    <div className="text-justify mt-4 2xl:text-lg xl:text-lg lg:text-base md:text-base text-lg leading-loose font-semibold 2xl:mx-0 xl:mx-0 lg:mx-0 mx-4 mb-6">
                      <p className="2xl:text-2xl xl:text-2xl lg:text-xl md:text-base text-lg font-bold">
                        تجهيز التصميم وفصل الألوان
                      </p>
                      بعد الإنتهاء من عملية التصميم والمراجعة نقوم بفرز
                      التأثيرات الخــــاصة مثل ما سيكــــون بارز عند الملمس وما
                      سيكـــــون لامع عند الملمس وأيضا المنـــاطق اللامعة
                      والمنـــاطق المطفية ومن ثم فصل الألوان
                    </div>
                  </div>
                  <div className=" 2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-0 xl:px-0 lg:px-0 md:px-0 px-4  2xl:block xl:block lg:block md:block inline">
                    <img
                      src={printing_1}
                      alt={""}
                      className="w-full 2xl:h-[250px] xl:h-[250px] lg:h-[250px] md:h-[250px] h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110" // Added group-hover
                    />
                  </div>
                </div>
                <div className="bg-white flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col font-bold items-center w-f rounded-[30px]">
                  <div className=" 2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-0 xl:px-0 lg:px-0 md:px-0 px-4  2xl:block xl:block lg:block md:block hidden">
                    <img
                      src={printing_2}
                      alt={""}
                      className="w-full h-[250px] object-cover transition-transform duration-300 ease-in-out group-hover:scale-110" // Added group-hover
                    />
                  </div>
                  <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-16 xl:px-16 lg:px-8">
                    <div className="text-justify mt-4 2xl:text-lg xl:text-lg lg:text-base md:text-base text-lg leading-loose font-semibold 2xl:mx-0 xl:mx-0 lg:mx-0 mx-4 mb-6">
                      <p className="2xl:text-2xl xl:text-2xl lg:text-xl md:text-base text-lg 2xl:mt-[14px] xl:mt-[14px] lg:mt-[10px] md::mt-[4px] mt-[4px] font-bold">
                        مونتاج الطباعة
                      </p>
                      هي عملية فصل الالوان وتحويــــل التصميـــــم إلى تصميم أخر
                      تقرأة الماكينة وفرز بلتات الطباعة للفني ماكينة الطباعة
                    </div>
                  </div>
                  <div className=" 2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-0 xl:px-0 lg:px-0 md:px-0 px-4  2xl:hidden xl:hidden lg:hidden md:hidden inline">
                    <img
                      src={printing_2}
                      alt={""}
                      className="w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110" // Added group-hover
                    />
                  </div>
                </div>
                <div className="bg-white flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col font-bold items-center w-full rounded-[30px] ">
                  <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-16 xl:px-16 lg:px-8">
                    <div className="text-justify mt-4 2xl:text-lg xl:text-lg lg:text-base md:text-base text-lg leading-loose font-semibold 2xl:mx-0 xl:mx-0 lg:mx-0 mx-4 mb-6">
                      <p className="2xl:text-2xl xl:text-2xl lg:text-xl md:text-base text-lg 2xl:mt-[14px] xl:mt-[14px] lg:mt-[10px] md::mt-[4px] mt-[4px] font-bold">
                        طباعة المنتج
                      </p>
                      تجهيز عمليات الانتاج والكليشـات والبلتات وجميع مواد
                      الطبــاعة مع مسؤل الجودة لتنسيــج وترتيب العمليات وإخراج
                      المنتج النهائي
                    </div>
                  </div>
                  <div className=" 2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-0 xl:px-0 lg:px-0 md:px-0 px-4  2xl:block xl:block lg:block md:block inline">
                    <img
                      src={printing_3}
                      alt={""}
                      className="w-full 2xl:h-[250px] xl:h-[250px] lg:h-[250px] md:h-[250px] h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110" // Added group-hover
                    />
                  </div>
                </div>
                <div className="bg-white flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col font-bold items-center w-f rounded-[30px]">
                  <div className=" 2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-0 xl:px-0 lg:px-0 md:px-0 px-4  2xl:block xl:block lg:block md:block hidden">
                    <img
                      src={printing_4}
                      alt={""}
                      className="w-full h-[250px] object-cover transition-transform duration-300 ease-in-out group-hover:scale-110" // Added group-hover
                    />
                  </div>
                  <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-16 xl:px-16 lg:px-8">
                    <div className="text-justify mt-4 2xl:text-lg xl:text-lg lg:text-base md:text-base text-lg leading-loose font-semibold 2xl:mx-0 xl:mx-0 lg:mx-0 mx-4 mb-6">
                      <p className="2xl:text-2xl xl:text-2xl lg:text-xl md:text-base text-lg 2xl:mt-[14px] xl:mt-[14px] lg:mt-[10px] md::mt-[4px] mt-[4px] font-bold">
                        تغليف المطبوعات
                      </p>
                      ترتيب كمية المطبوعـــات بشكل منـــاسب وتغليف الأوردر
                      كـــامل لحمــايته من التعرض لعوامل الاتربة لتسليمة اليكم
                    </div>
                  </div>
                  <div className=" 2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-0 xl:px-0 lg:px-0 md:px-0 px-4  2xl:hidden xl:hidden lg:hidden md:hidden inline">
                    <img
                      src={printing_4}
                      alt={""}
                      className="w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110" // Added group-hover
                    />
                  </div>
                </div>
                <p className="text-black text-center font-bold xl:my-8 lg:my-8 md:my-8 mt-6 2xl:text-3xl xl:text-3xl lg:text-3xl md:text-3xl text-2xl ">
                  خدمــــــــــات الطبــــــــــاعة
                </p>
                <div className="bg-white flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col font-bold items-center w-full rounded-[30px] ">
                  <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-16 xl:px-16 lg:px-8">
                    <div className="text-justify mt-4 2xl:text-lg xl:text-lg lg:text-base md:text-base text-lg leading-loose font-semibold 2xl:mx-0 xl:mx-0 lg:mx-0 mx-4 mb-6">
                      <p className="2xl:text-2xl xl:text-2xl lg:text-xl md:text-base text-lg 2xl:mt-[14px] xl:mt-[14px] lg:mt-[10px] md::mt-[4px] mt-[4px] font-bold">
                        الطباعة الأوفست
                      </p>
                      العلب الورقيـــة - العلب الهـــــــارد كفر - المجلات الكتب
                      - الفواتيـــــــــــر - الكروت الشخصيــــــــــــة الأوراق
                      الرسمية ... الخ
                    </div>
                  </div>
                  <div className=" 2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-0 xl:px-0 lg:px-0 md:px-0 px-4  2xl:block xl:block lg:block md:block inline">
                    <img
                      src={printing_5}
                      alt={""}
                      className="w-full 2xl:h-[250px] xl:h-[250px] lg:h-[250px] md:h-[250px] h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110" // Added group-hover
                    />
                  </div>
                </div>
                <div className="bg-white flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col font-bold items-center w-f rounded-[30px]">
                  <div className=" 2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-0 xl:px-0 lg:px-0 md:px-0 px-4  2xl:block xl:block lg:block md:block hidden">
                    <img
                      src={printing_6}
                      alt={""}
                      className="w-full h-[250px] object-cover transition-transform duration-300 ease-in-out group-hover:scale-110" // Added group-hover
                    />
                  </div>
                  <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-16 xl:px-16 lg:px-8">
                    <div className="text-justify mt-4 2xl:text-lg xl:text-lg lg:text-base md:text-base text-lg leading-loose font-semibold 2xl:mx-0 xl:mx-0 lg:mx-0 mx-4 mb-6">
                      <p className="2xl:text-2xl xl:text-2xl lg:text-xl md:text-base text-lg 2xl:mt-[14px] xl:mt-[14px] lg:mt-[10px] md::mt-[4px] mt-[4px] font-bold">
                        الطباعة الديجيتال
                      </p>
                      تقنية حديثة تمكننا من طباعة معظم الاشياء بجودة عالية ووقت
                      قيــــــاسي مثل الطبــــــاعة الرقميــــة الاستيكرات -
                      العلب ... الخ
                    </div>
                  </div>
                  <div className=" 2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-0 xl:px-0 lg:px-0 md:px-0 px-4  2xl:hidden xl:hidden lg:hidden md:hidden inline">
                    <img
                      src={printing_6}
                      alt={""}
                      className="w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110" // Added group-hover
                    />
                  </div>
                </div>
                <div className="bg-white flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col font-bold items-center w-full rounded-[30px] ">
                  <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-16 xl:px-16 lg:px-8">
                    <div className="text-justify mt-4 2xl:text-lg xl:text-lg lg:text-base md:text-base text-lg leading-loose font-semibold 2xl:mx-0 xl:mx-0 lg:mx-0 mx-4 mb-6">
                      <p className="2xl:text-2xl xl:text-2xl lg:text-xl md:text-base text-lg 2xl:mt-[14px] xl:mt-[14px] lg:mt-[10px] md::mt-[4px] mt-[4px] font-bold">
                        اللوحات الاعلانية (داخلي وخارجي)
                      </p>
                      فلكس - بنر - لوحات زنكورر - رول أب - بوب أب ... الخ
                    </div>
                  </div>
                  <div className=" 2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-0 xl:px-0 lg:px-0 md:px-0 px-4  2xl:block xl:block lg:block md:block inline">
                    <img
                      src={printing_9}
                      alt={""}
                      className="w-full 2xl:h-[250px] xl:h-[250px] lg:h-[250px] md:h-[250px] h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110" // Added group-hover
                    />
                  </div>
                </div>
                <div className="bg-white flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col font-bold items-center w-f rounded-[30px]">
                  <div className=" 2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-0 xl:px-0 lg:px-0 md:px-0 px-4  2xl:block xl:block lg:block md:block hidden">
                    <img
                      src={printing_7}
                      alt={""}
                      className="w-full h-[250px] object-cover transition-transform duration-300 ease-in-out group-hover:scale-110" // Added group-hover
                    />
                  </div>
                  <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-16 xl:px-16 lg:px-8">
                    <div className="text-justify mt-4 2xl:text-lg xl:text-lg lg:text-base md:text-base text-lg leading-loose font-semibold 2xl:mx-0 xl:mx-0 lg:mx-0 mx-4 mb-6">
                      <p className="2xl:text-2xl xl:text-2xl lg:text-xl md:text-base text-lg 2xl:mt-[14px] xl:mt-[14px] lg:mt-[10px] md::mt-[4px] mt-[4px] font-bold">
                        القوالب الخاصة
                      </p>
                      نستطيع صناعة قولب الطباعة بمجسمات مختلفة وأفكـار متعددة
                      مما يجعلنـــا رواد للفكر لصنـــاعة الحدث
                    </div>
                  </div>
                  <div className=" 2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-0 xl:px-0 lg:px-0 md:px-0 px-4  2xl:hidden xl:hidden lg:hidden md:hidden inline">
                    <img
                      src={printing_7}
                      alt={""}
                      className="w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110" // Added group-hover
                    />
                  </div>
                </div>
                <div className="bg-white flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col font-bold items-center w-full rounded-[30px] ">
                  <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-16 xl:px-16 lg:px-8">
                    <div className="text-justify mt-4 2xl:text-lg xl:text-lg lg:text-base md:text-base text-lg leading-loose font-semibold 2xl:mx-0 xl:mx-0 lg:mx-0 mx-4 mb-6">
                      <p className="2xl:text-2xl xl:text-2xl lg:text-xl md:text-base text-lg 2xl:mt-[14px] xl:mt-[14px] lg:mt-[10px] md::mt-[4px] mt-[4px] font-bold">
                        الهدايا الدعائية
                      </p>
                      الاجندات - النوتــات - الاكواب - الاقلام - التشيرتـات
                      الكابــات - الفلاشـات - الدورع - المداليــات - الأعلام
                      الكاسات ... الخ
                    </div>
                  </div>
                  <div className=" 2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-0 xl:px-0 lg:px-0 md:px-0 px-4  2xl:block xl:block lg:block md:block inline">
                    <img
                      src={printing_8}
                      alt={""}
                      className="w-full 2xl:h-[250px] xl:h-[250px] lg:h-[250px] md:h-[250px] h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110" // Added group-hover
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
              تصميم الشكل النهائي المطبوع مثل شكل التصميم على الكمبيوتر وضمان
              جودة المنتج وإحترافية الأداء ومهارة الأيد العاملة لرسم صورة الهوية
              التجارية في أذهان العملاء
            </p>
            <div className="grid grid-cols-12 gap-y-12 my-10 mx-4 text-center 2xl:text-xl xl:text-xl lg:text-xl md:text-xl text-lg justify-center items-center">
              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8 "></div>
                <p className="font-bold my-1 text-[#000]">الطباعة الأوفست</p>
              </div>
              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8 "></div>
                <p className="font-bold my-1 text-[#000]">الطباعة الديجيتال</p>
              </div>
              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8 "></div>
                <p className="font-bold my-1 text-[#000]">
                  اللوحات الإعلانية ( داخلي و خارجي )
                </p>
              </div>
              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8 "></div>
                <p className="font-bold my-1 text-[#000]">القوالب الخاصة</p>
              </div>
              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8 "></div>
                <p className="font-bold my-1 text-[#000]">الهدايا الدعائية</p>
              </div>
            </div>
            <div
              className="bg-[#333] xl:py-8 lg:py-8 md:py-8 pt-4 pb-8 xl:px-16 lg:px-16 md:px-8 px-4 text-white 2xl:text-3xl xl:text-3xl lg:text-3xl md:text-2xl text-lg font-bold"
              dir="rtl"
            >
              <p>تحتاج إلى خدمات الطباعة؟</p>
              <p className="my-2">{t("markting.contact.consultation_offer")}</p>
            </div>
            <div className="text-white bg-[#ec3237] w-fit px-8 py-2 font-bold xl:text-xl lg:text-xl md:text-xl text-md mx-auto -mt-[22px]">
              {t("markting.contact.start_now")}
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

export default Printing;
