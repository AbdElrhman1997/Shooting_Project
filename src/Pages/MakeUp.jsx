import GeneralFrame from "../Components/GeneralFrame";
import make_up_1 from "../assets/Images/Indusrty/Make-up/make-up-1.webp";
import make_up_2 from "../assets/Images/Indusrty/Make-up/make-up-2.webp";
import make_up_3 from "../assets/Images/Indusrty/Make-up/make-up-3.webp";
import make_up_4 from "../assets/Images/Indusrty/Make-up/make-up-4.webp";
import make_up_5 from "../assets/Images/Indusrty/Make-up/make-up-5.webp";
import make_up_6 from "../assets/Images/Indusrty/Make-up/make-up-6.webp";
import GIF_Logo from "../assets/Images/Icons/GIF_Logo.gif";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const MakeUp = () => {
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
                    مستحضرات التجميل و مشتقاتها{" "}
                  </p>
                  لدينا فريق متخصص لدعم إنتاج وتصنیع مستحضرات التجميل ومنتجات
                  العناية ومشتقاتها لضبط معايير الجودة في إطار التصنیع ً
                  التعاقدي نضمن لكم مشروع يستجیب لاحتیاجات عملائكم
                </p>

                <p className="text-black text-center font-extrabold xl:my-8 lg:my-8 md:my-8 my-4 2xl:text-3xl xl:text-3xl lg:text-3xl md:text-3xl text-2xl ">
                  مراحـــــــــــــــــــــــــل
                  الإنتـــــــــــــــــــــــــاج
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
                        إختيار العبوة
                      </p>
                      مجموعة مختارة من أفضل أنواع العبوات الزجاجیة والبلاستیكیة
                      والأنابیــــب والقواریـــــر والاسبراي والكثیر من الحلول
                      الأخر
                    </div>
                  </div>
                  <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-0 xl:px-0 lg:px-0 md:px-0">
                    <img
                      src={make_up_1}
                      alt=""
                      className="w-full 2xl:h-[350px] xl:h-[300px] lg:h-[300px] md:h-[300px] h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                    />
                  </div>
                </div>

                {/* Section 2 */}
                <div className="bg-white flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col font-bold items-start w-full rounded-[30px]">
                  <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-0 xl:px-0 lg:px-0 md:px-0 px-4 2xl:block xl:block lg:block md:block hidden">
                    <img
                      src={make_up_2}
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
                        القوالب الخاصة
                      </p>
                      نستطيع صناعة قولب الزجـــــــــاج والبلاستيك بمجسمات
                      مختلفة وأفكار متعددة مما يجعلنا رواد للفكر لصنـــاعة الحدث
                    </div>
                  </div>
                  <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-0 xl:px-0 lg:px-0 md:px-0 2xl:hidden xl:hidden lg:hidden md:hidden inline">
                    <img
                      src={make_up_2}
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
                        إختيار الخامات والروائح
                      </p>
                      مجموعة الخامات العضوية عالية الجودة المصنعة من أجلك ذو
                      الروائح الفريدة التي تنـــاسب ذائقتك العطرية
                    </div>
                  </div>
                  <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full">
                    <img
                      src={make_up_3}
                      alt=""
                      className="w-full 2xl:h-[350px] xl:h-[300px] lg:h-[300px] md:h-[300px] h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                    />
                  </div>
                </div>

                {/* Section 4 */}
                <div className="bg-white flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col font-bold items-start w-full rounded-[30px]">
                  <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-0 xl:px-0 lg:px-0 md:px-0 px-4 2xl:block xl:block lg:block md:block hidden">
                    <img
                      src={make_up_4}
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
                        خلطات العطور الخاصة
                      </p>
                      استخلاص الزيوت العطرية وجمعها، بمجرد اختيار جميع المكونات
                      مثل النباتات والفواكه والأخشاب ً ثم يجب مزجها مع ً ا. ليتم
                      خلط الزيوت وفقا لصيغة ً معادلة تم تحديدها مسبقا لنقدم اكم
                      رائجة فريدة من نوعها
                    </div>
                  </div>
                  <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-0 xl:px-0 lg:px-0 md:px-0 2xl:hidden xl:hidden lg:hidden md:hidden inline">
                    <img
                      src={make_up_4}
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
                        طباعة المنتج
                      </p>
                      استخدام مواد طباعة مختلفة وقوالب بمجسمات جديـدة
                      وأفكــــــار طبــــــاعة حديثة لإبراز علامتكم التجارية
                    </div>
                  </div>
                  <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full">
                    <img
                      src={make_up_5}
                      alt=""
                      className="w-full 2xl:h-[350px] xl:h-[300px] lg:h-[300px] md:h-[300px] h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                    />
                  </div>
                </div>

                {/* Section 4 */}
                <div className="bg-white flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col font-bold items-start w-full rounded-[30px]">
                  <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-0 xl:px-0 lg:px-0 md:px-0 px-4 2xl:block xl:block lg:block md:block hidden">
                    <img
                      src={make_up_6}
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
                        التعبئة والتغليف
                      </p>
                      تعبئة تبرز نوعیة وجمال العطر وتحـافظ على ثبــاتة تغليف
                      المنتج بشكل إحترافي يحــافظ على مظهرة
                    </div>
                  </div>
                  <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-0 xl:px-0 lg:px-0 md:px-0 2xl:hidden xl:hidden lg:hidden md:hidden inline">
                    <img
                      src={make_up_6}
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
            <p className="text-[#000] text-center font-bold mt-2 2xl:text-xl xl:text-xl lg:text-xl md:text-xl text-lg 2xl:mx-12 xl:mx-12 lg:mx-12 md:mx-6 mx-2">
              إنتاج مجموعة واسعة من الاختیارات والأحجام المبتكرة والفریدة من
              العطور المختارة حسب ذائقتكم العطرية نعتمد على الفكـرة التي
              تقدمونھا فنقوم بإنجـاز العينـــات الأولیة لمعرفة ملاحظاتكم عنھا
              نتفق معكم على المتطلبات الأساسیة ونقوم بإنتاج التركیبات الأولیة
              نقوم بعملیات الاختبار وبعملیة اختبار الاستقرار للتأكد من اتباع
              كافة المعاییـر المطلوبة والتحقق من َمن تماشي الرائحة مع متطلباتكم
              ومن ثم نتولى عملیة التعبئة والتغلیف ومراجعة ضبط معايير الجودة
              لتسليمكم المنتج
            </p>
            <div className="grid grid-cols-12 gap-y-12 my-10 mx-4 text-center 2xl:text-xl xl:text-xl lg:text-xl md:text-xl text-[15px] justify-center items-center">
              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-6 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8 "></div>
                <p className="font-bold my-1 text-[#000]">عطور شخصية</p>
              </div>
              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-6 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8 "></div>
                <p className="font-bold my-1 text-[#000]">عطور الجسم</p>
              </div>
              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-6 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8 "></div>
                <p className="font-bold my-1 text-[#000]">عطور الأطفال</p>
              </div>
              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-6 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8 "></div>
                <p className="font-bold my-1 text-[#000]">عطور الشعر</p>
              </div>
              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-6 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8 "></div>
                <p className="font-bold my-1 text-[#000]">عطور الجو والمفارش</p>
              </div>
              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-6 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8 "></div>
                <p className="font-bold my-1 text-[#000]">الشموع العطرية</p>
              </div>
              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-6 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8 "></div>
                <p className="font-bold my-1 text-[#000]">الأمساك</p>
              </div>
              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-6 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8 "></div>
                <p className="font-bold my-1 text-[#000]">العود</p>
              </div>
              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-6 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8 "></div>
                <p className="font-bold my-1 text-[#000]">البخور</p>
              </div>
            </div>

            <div
              className="bg-[#333] xl:py-8 lg:py-8 md:py-8 pt-4 pb-8 xl:px-16 lg:px-16 md:px-8 px-4 text-white 2xl:text-3xl xl:text-3xl lg:text-3xl md:text-2xl text-lg font-bold"
              dir="rtl"
            >
              <p>تحتاج لإنتاج مستحضرات التجميل الخاصة بك؟</p>
              <p className="my-2">
                لا تتردد بالتواصل معنا لنقدم لك الإستشارة اللازمة
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

export default MakeUp;
