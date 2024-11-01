import GeneralFrame from "../Components/GeneralFrame";
import perfumes_1 from "../assets/Images/Indusrty/Perfumes/Perf_1.webp";
import perfumes_2 from "../assets/Images/Indusrty/Perfumes/Perf_2.webp";
import perfumes_3 from "../assets/Images/Indusrty/Perfumes/Perf_3.webp";
import perfumes_4 from "../assets/Images/Indusrty/Perfumes/Perf_4.webp";
import perfumes_5 from "../assets/Images/Indusrty/Perfumes/Perf_5.webp";
import perfumes_6 from "../assets/Images/Indusrty/Perfumes/Perf_6.webp";
import perfumes_7 from "../assets/Images/Indusrty/Perfumes/Perf_7.webp";
import perfumes_8 from "../assets/Images/Indusrty/Perfumes/Perf_8.webp";
import perfumes_9 from "../assets/Images/Indusrty/Perfumes/Perf_9.webp";
import perfumes_10 from "../assets/Images/Indusrty/Perfumes/Perf_10.webp";
import perfumes_11 from "../assets/Images/Indusrty/Perfumes/Perf_11.webp";
import perfumes_12 from "../assets/Images/Indusrty/Perfumes/Perf_12.webp";
import perfumes_13 from "../assets/Images/Indusrty/Perfumes/Perf_13.webp";
import perfumes_14 from "../assets/Images/Indusrty/Perfumes/Perf_14.webp";
import perfumes_15 from "../assets/Images/Indusrty/Perfumes/Perf_15.webp";

import GIF_Logo from "../assets/Images/Icons/GIF_Logo.gif";
import { useTranslation } from "react-i18next";

const Perfumes = () => {
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
                    العطور ومشتقاتها
                  </p>{" "}
                  لدينا فريق متخصص لدعم إنتاج وتصنیع العطــور والشمـــوع العطرية
                  والأمســـاك والبخور والعود لضبط معـايير الجودة في إطـــار
                  التصنیع التعاقدي نضمن لكم منت ًج يستجیب لاحتیاجات عملائكم
                </p>

                <p className="text-black text-center font-extrabold xl:my-8 lg:my-8 md:my-8 my-0 2xl:text-3xl xl:text-3xl lg:text-3xl md:text-3xl text-2xl ">
                  مراحـــــــــــل الإنتــــــــاج
                </p>

                <div className="bg-white flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col font-bold items-center w-full rounded-[30px] 2xl:mt-12 xl:mt-12 lg:mt-12 md:mt-12 mt-0">
                  <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-16 xl:px-16 lg:px-8">
                    <div className="text-justify mt-4 2xl:text-lg xl:text-lg lg:text-base md:text-base text-lg leading-loose font-semibold 2xl:mx-0 xl:mx-0 lg:mx-0 mx-4 mb-6">
                      <p className="2xl:text-2xl xl:text-2xl lg:text-xl md:text-base text-lg font-bold">
                        إختيار العبوة
                      </p>
                      مجموعة مختارة من أفضل أنواع العبوات الزجاجیة والبلاستیكیة
                      والأنابیــــب والقواریـــــر والاسبراي والكثیر من الحلول
                      الأخر
                    </div>
                  </div>
                  <div className=" 2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-0 xl:px-0 lg:px-0 md:px-0 px-4  2xl:block xl:block lg:block md:block inline">
                    <img
                      src={perfumes_1}
                      alt={""}
                      className="w-full 2xl:h-[250px] xl:h-[250px] lg:h-[250px] md:h-[250px] h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110" // Added group-hover
                    />
                  </div>
                </div>
                <div className="bg-white flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col font-bold items-center w-f rounded-[30px]">
                  <div className=" 2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-0 xl:px-0 lg:px-0 md:px-0 px-4  2xl:block xl:block lg:block md:block hidden">
                    <img
                      src={perfumes_2}
                      alt={""}
                      className="w-full h-[250px] object-cover transition-transform duration-300 ease-in-out group-hover:scale-110" // Added group-hover
                    />
                  </div>
                  <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-16 xl:px-16 lg:px-8">
                    <div className="text-justify mt-4 2xl:text-lg xl:text-lg lg:text-base md:text-base text-lg leading-loose font-semibold 2xl:mx-0 xl:mx-0 lg:mx-0 mx-4 mb-6">
                      <p className="2xl:text-2xl xl:text-2xl lg:text-xl md:text-base text-lg 2xl:mt-[14px] xl:mt-[14px] lg:mt-[10px] md::mt-[4px] mt-[4px] font-bold">
                        القوالب الخاصة
                      </p>
                      نستطيع صناعة قولب الزجــــاج بمجسمات مختلفة وأفكـار متعددة
                      مما يجعلنـــا رواد للفكر لصنـــاعة الحدث
                    </div>
                  </div>
                  <div className=" 2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-0 xl:px-0 lg:px-0 md:px-0 px-4  2xl:hidden xl:hidden lg:hidden md:hidden inline">
                    <img
                      src={perfumes_2}
                      alt={""}
                      className="w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110" // Added group-hover
                    />
                  </div>
                </div>
                <div className="bg-white flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col font-bold items-center w-full rounded-[30px] ">
                  <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-16 xl:px-16 lg:px-8">
                    <div className="text-justify mt-4 2xl:text-lg xl:text-lg lg:text-base md:text-base text-lg leading-loose font-semibold 2xl:mx-0 xl:mx-0 lg:mx-0 mx-4 mb-6">
                      <p className="2xl:text-2xl xl:text-2xl lg:text-xl md:text-base text-lg 2xl:mt-[14px] xl:mt-[14px] lg:mt-[10px] md::mt-[4px] mt-[4px] font-bold">
                        الزيوت العطرية
                      </p>
                      مجموعة من خامات الزيوت العطرية عالية الجودة الواردة من
                      فرنســا وإيطاليـــا وتركيا ذو الروائح الفريدة التي تناسب
                      مع ذائقتك العطرية
                    </div>
                  </div>
                  <div className=" 2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-0 xl:px-0 lg:px-0 md:px-0 px-4  2xl:block xl:block lg:block md:block inline">
                    <img
                      src={perfumes_3}
                      alt={""}
                      className="w-full 2xl:h-[250px] xl:h-[250px] lg:h-[250px] md:h-[250px] h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110" // Added group-hover
                    />
                  </div>
                </div>
                <div className="bg-white flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col font-bold items-center w-f rounded-[30px]">
                  <div className=" 2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-0 xl:px-0 lg:px-0 md:px-0 px-4  2xl:block xl:block lg:block md:block hidden">
                    <img
                      src={perfumes_4}
                      alt={""}
                      className="w-full h-[250px] object-cover transition-transform duration-300 ease-in-out group-hover:scale-110" // Added group-hover
                    />
                  </div>
                  <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-16 xl:px-16 lg:px-8">
                    <div className="text-justify mt-4 2xl:text-lg xl:text-lg lg:text-base md:text-base text-lg leading-loose font-semibold 2xl:mx-0 xl:mx-0 lg:mx-0 mx-4 mb-6">
                      <p className="2xl:text-2xl xl:text-2xl lg:text-xl md:text-base text-lg 2xl:mt-[14px] xl:mt-[14px] lg:mt-[10px] md::mt-[4px] mt-[4px] font-bold">
                        خلطات العطور الخاصة
                      </p>
                      استخلاص الزيوت العطرية وجمعها، بمجرد اختيار جميع المكونات
                      مثل النباتات والفواكه والأخشاب ً ثم يجب مزجها مع ً ا. ليتم
                      خلط الزيوت وفقا لصيغة ً معادلة تم تحديدها مسبقا لنقدم اكم
                      رائجة فريدة من نوعها
                    </div>
                  </div>
                  <div className=" 2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-0 xl:px-0 lg:px-0 md:px-0 px-4  2xl:hidden xl:hidden lg:hidden md:hidden inline">
                    <img
                      src={perfumes_4}
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
                      استخدام مواد طباعة مختلفة وقوالب بمجسمات جديـدة
                      وأفكــــــار طبــــــاعة حديثة لإبراز علامتكم التجارية
                    </div>
                  </div>
                  <div className=" 2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-0 xl:px-0 lg:px-0 md:px-0 px-4  2xl:block xl:block lg:block md:block inline">
                    <img
                      src={perfumes_5}
                      alt={""}
                      className="w-full 2xl:h-[250px] xl:h-[250px] lg:h-[250px] md:h-[250px] h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110" // Added group-hover
                    />
                  </div>
                </div>
                <div className="bg-white flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col font-bold items-center w-f rounded-[30px]">
                  <div className=" 2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-0 xl:px-0 lg:px-0 md:px-0 px-4  2xl:block xl:block lg:block md:block hidden">
                    <img
                      src={perfumes_6}
                      alt={""}
                      className="w-full h-[250px] object-cover transition-transform duration-300 ease-in-out group-hover:scale-110" // Added group-hover
                    />
                  </div>
                  <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-16 xl:px-16 lg:px-8">
                    <div className="text-justify mt-4 2xl:text-lg xl:text-lg lg:text-base md:text-base text-lg leading-loose font-semibold 2xl:mx-0 xl:mx-0 lg:mx-0 mx-4 mb-6">
                      <p className="2xl:text-2xl xl:text-2xl lg:text-xl md:text-base text-lg 2xl:mt-[14px] xl:mt-[14px] lg:mt-[10px] md::mt-[4px] mt-[4px] font-bold">
                        التعبئة والتغليف
                      </p>
                      تعبئة تبرز نوعیة وجمال العطر وتحـافظ على ثباتة تغليف
                      المنتج بشكل إحترافي يحــافظ على مظهرة
                    </div>
                  </div>
                  <div className=" 2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-0 xl:px-0 lg:px-0 md:px-0 px-4  2xl:hidden xl:hidden lg:hidden md:hidden inline">
                    <img
                      src={perfumes_6}
                      alt={""}
                      className="w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110" // Added group-hover
                    />
                  </div>
                </div>
                <p className="text-black text-center font-bold xl:my-8 lg:my-8 md:my-8 mt-6 2xl:text-3xl xl:text-3xl lg:text-3xl md:text-3xl text-2xl ">
                  المنتجـــــــات المصنعـــــــة
                </p>
                <div className="bg-white flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col font-bold items-center w-full rounded-[30px] ">
                  <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-16 xl:px-16 lg:px-8">
                    <div className="text-justify mt-4 2xl:text-lg xl:text-lg lg:text-base md:text-base text-lg leading-loose font-semibold 2xl:mx-0 xl:mx-0 lg:mx-0 mx-4 mb-6">
                      <p className="2xl:text-2xl xl:text-2xl lg:text-xl md:text-base text-lg 2xl:mt-[14px] xl:mt-[14px] lg:mt-[10px] md::mt-[4px] mt-[4px] font-bold">
                        عطور شخصية
                      </p>
                      تصنيع عطور شخصية للإستخدام اليومي والطلعات والمناسبات
                      والسهرات عطور مركزة فواحة ثابتة للجنسين حسب ذائقتكم
                      العطرية
                    </div>
                  </div>
                  <div className=" 2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-0 xl:px-0 lg:px-0 md:px-0 px-4  2xl:block xl:block lg:block md:block inline">
                    <img
                      src={perfumes_7}
                      alt={""}
                      className="w-full 2xl:h-[250px] xl:h-[250px] lg:h-[250px] md:h-[250px] h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110" // Added group-hover
                    />
                  </div>
                </div>
                <div className="bg-white flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col font-bold items-center w-f rounded-[30px]">
                  <div className=" 2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-0 xl:px-0 lg:px-0 md:px-0 px-4  2xl:block xl:block lg:block md:block hidden">
                    <img
                      src={perfumes_8}
                      alt={""}
                      className="w-full h-[250px] object-cover transition-transform duration-300 ease-in-out group-hover:scale-110" // Added group-hover
                    />
                  </div>
                  <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-16 xl:px-16 lg:px-8">
                    <div className="text-justify mt-4 2xl:text-lg xl:text-lg lg:text-base md:text-base text-lg leading-loose font-semibold 2xl:mx-0 xl:mx-0 lg:mx-0 mx-4 mb-6">
                      <p className="2xl:text-2xl xl:text-2xl lg:text-xl md:text-base text-lg 2xl:mt-[14px] xl:mt-[14px] lg:mt-[10px] md::mt-[4px] mt-[4px] font-bold">
                        عطور الجسم
                      </p>
                      تصنيع عطور للجسم خفيفة التركيز لرائحة أخف وأكثر ً انتعاشا
                      آمنه على البشرة تعطي الجسم رائحة هادئة لطيفة يشعر بها كل
                      من إقترب نحوك
                    </div>
                  </div>
                  <div className=" 2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-0 xl:px-0 lg:px-0 md:px-0 px-4  2xl:hidden xl:hidden lg:hidden md:hidden inline">
                    <img
                      src={perfumes_8}
                      alt={""}
                      className="w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110" // Added group-hover
                    />
                  </div>
                </div>
                <div className="bg-white flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col font-bold items-center w-full rounded-[30px] ">
                  <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-16 xl:px-16 lg:px-8">
                    <div className="text-justify mt-4 2xl:text-lg xl:text-lg lg:text-base md:text-base text-lg leading-loose font-semibold 2xl:mx-0 xl:mx-0 lg:mx-0 mx-4 mb-6">
                      <p className="2xl:text-2xl xl:text-2xl lg:text-xl md:text-base text-lg 2xl:mt-[14px] xl:mt-[14px] lg:mt-[10px] md::mt-[4px] mt-[4px] font-bold">
                        عطور الأطفال
                      </p>
                      تصنيع عطــور آمنه ضد التحسس تلائم بشرة طفلك ً وتتـرك لكي
                      أثرا قويـا يربط بينكي وبين طفـلك في إتفاق الروائح العطرية
                      حتى يكب
                    </div>
                  </div>
                  <div className=" 2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-0 xl:px-0 lg:px-0 md:px-0 px-4  2xl:block xl:block lg:block md:block inline">
                    <img
                      src={perfumes_9}
                      alt={""}
                      className="w-full 2xl:h-[250px] xl:h-[250px] lg:h-[250px] md:h-[250px] h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110" // Added group-hover
                    />
                  </div>
                </div>
                <div className="bg-white flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col font-bold items-center w-f rounded-[30px]">
                  <div className=" 2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-0 xl:px-0 lg:px-0 md:px-0 px-4  2xl:block xl:block lg:block md:block hidden">
                    <img
                      src={perfumes_10}
                      alt={""}
                      className="w-full h-[250px] object-cover transition-transform duration-300 ease-in-out group-hover:scale-110" // Added group-hover
                    />
                  </div>
                  <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-16 xl:px-16 lg:px-8">
                    <div className="text-justify mt-4 2xl:text-lg xl:text-lg lg:text-base md:text-base text-lg leading-loose font-semibold 2xl:mx-0 xl:mx-0 lg:mx-0 mx-4 mb-6">
                      <p className="2xl:text-2xl xl:text-2xl lg:text-xl md:text-base text-lg 2xl:mt-[14px] xl:mt-[14px] lg:mt-[10px] md::mt-[4px] mt-[4px] font-bold">
                        عطور الشعر
                      </p>
                      تصنيع عطور للشعر من الزيوت العطرية والمركبات الطبيعية
                      والكيميائية التي تمتاز برائحتها الفواحة والمميزة والني
                      يمكن أن نضيف عليها سيرم للشعر آو بروتين ومواد طبيعية حسب
                      رغبة العميل
                    </div>
                  </div>
                  <div className=" 2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-0 xl:px-0 lg:px-0 md:px-0 px-4  2xl:hidden xl:hidden lg:hidden md:hidden inline">
                    <img
                      src={perfumes_10}
                      alt={""}
                      className="w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110" // Added group-hover
                    />
                  </div>
                </div>
                <div className="bg-white flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col font-bold items-center w-full rounded-[30px] ">
                  <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-16 xl:px-16 lg:px-8">
                    <div className="text-justify mt-4 2xl:text-lg xl:text-lg lg:text-base md:text-base text-lg leading-loose font-semibold 2xl:mx-0 xl:mx-0 lg:mx-0 mx-4 mb-6">
                      <p className="2xl:text-2xl xl:text-2xl lg:text-xl md:text-base text-lg 2xl:mt-[14px] xl:mt-[14px] lg:mt-[10px] md::mt-[4px] mt-[4px] font-bold">
                        عطور الجو والمفارش
                      </p>
                      تصنيع عطور الجو والمفارش لإستخدامها في تطهير وتغيير
                      الروائح في الهواء لترك أثر جذاب كما يمكننا صناعة روائح
                      جديدة غير المعتادة تناسب عطور الجو والمفارش
                    </div>
                  </div>
                  <div className=" 2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-0 xl:px-0 lg:px-0 md:px-0 px-4  2xl:block xl:block lg:block md:block inline">
                    <img
                      src={perfumes_11}
                      alt={""}
                      className="w-full 2xl:h-[250px] xl:h-[250px] lg:h-[250px] md:h-[250px] h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110" // Added group-hover
                    />
                  </div>
                </div>
                <div className="bg-white flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col font-bold items-center w-f rounded-[30px]">
                  <div className=" 2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-0 xl:px-0 lg:px-0 md:px-0 px-4  2xl:block xl:block lg:block md:block hidden">
                    <img
                      src={perfumes_12}
                      alt={""}
                      className="w-full h-[250px] object-cover transition-transform duration-300 ease-in-out group-hover:scale-110" // Added group-hover
                    />
                  </div>
                  <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-16 xl:px-16 lg:px-8">
                    <div className="text-justify mt-4 2xl:text-lg xl:text-lg lg:text-base md:text-base text-lg leading-loose font-semibold 2xl:mx-0 xl:mx-0 lg:mx-0 mx-4 mb-6">
                      <p className="2xl:text-2xl xl:text-2xl lg:text-xl md:text-base text-lg 2xl:mt-[14px] xl:mt-[14px] lg:mt-[10px] md::mt-[4px] mt-[4px] font-bold">
                        الشموع العطرية
                      </p>
                      تصنيع الشموع العطرية من المكونات الطربيعية التي تترك أثر
                      للذكريات الجميلة وتجعلنا نتعلق برائحتها الناعمة
                    </div>
                  </div>
                  <div className=" 2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-0 xl:px-0 lg:px-0 md:px-0 px-4  2xl:hidden xl:hidden lg:hidden md:hidden inline">
                    <img
                      src={perfumes_12}
                      alt={""}
                      className="w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110" // Added group-hover
                    />
                  </div>
                </div>
                <div className="bg-white flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col font-bold items-center w-full rounded-[30px] ">
                  <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-16 xl:px-16 lg:px-8">
                    <div className="text-justify mt-4 2xl:text-lg xl:text-lg lg:text-base md:text-base text-lg leading-loose font-semibold 2xl:mx-0 xl:mx-0 lg:mx-0 mx-4 mb-6">
                      <p className="2xl:text-2xl xl:text-2xl lg:text-xl md:text-base text-lg 2xl:mt-[14px] xl:mt-[14px] lg:mt-[10px] md::mt-[4px] mt-[4px] font-bold">
                        الأمساك
                      </p>
                      تصنيع مجموعة من الامساك المختارة المنتقاه بعناية شديدة
                      لتناسب ذائقتكم العطرية
                    </div>
                  </div>
                  <div className=" 2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-0 xl:px-0 lg:px-0 md:px-0 px-4  2xl:block xl:block lg:block md:block inline">
                    <img
                      src={perfumes_13}
                      alt={""}
                      className="w-full 2xl:h-[250px] xl:h-[250px] lg:h-[250px] md:h-[250px] h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110" // Added group-hover
                    />
                  </div>
                </div>
                <div className="bg-white flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col font-bold items-center w-f rounded-[30px]">
                  <div className=" 2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-0 xl:px-0 lg:px-0 md:px-0 px-4  2xl:block xl:block lg:block md:block hidden">
                    <img
                      src={perfumes_14}
                      alt={""}
                      className="w-full h-[250px] object-cover transition-transform duration-300 ease-in-out group-hover:scale-110" // Added group-hover
                    />
                  </div>
                  <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-16 xl:px-16 lg:px-8">
                    <div className="text-justify mt-4 2xl:text-lg xl:text-lg lg:text-base md:text-base text-lg leading-loose font-semibold 2xl:mx-0 xl:mx-0 lg:mx-0 mx-4 mb-6">
                      <p className="2xl:text-2xl xl:text-2xl lg:text-xl md:text-base text-lg 2xl:mt-[14px] xl:mt-[14px] lg:mt-[10px] md::mt-[4px] mt-[4px] font-bold">
                        العود
                      </p>
                      توريد الأدهان الطبيعية والصناعية حسب اختياركم من جميع
                      الدول المشهورة باستخلاص دهن العود عالي الجودة ذو التعتيق
                      القديم
                    </div>
                  </div>
                  <div className=" 2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-0 xl:px-0 lg:px-0 md:px-0 px-4  2xl:hidden xl:hidden lg:hidden md:hidden inline">
                    <img
                      src={perfumes_14}
                      alt={""}
                      className="w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110" // Added group-hover
                    />
                  </div>
                </div>
                <div className="bg-white flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col font-bold items-center w-full rounded-[30px] ">
                  <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-16 xl:px-16 lg:px-8">
                    <div className="text-justify mt-4 2xl:text-lg xl:text-lg lg:text-base md:text-base text-lg leading-loose font-semibold 2xl:mx-0 xl:mx-0 lg:mx-0 mx-4 mb-6">
                      <p className="2xl:text-2xl xl:text-2xl lg:text-xl md:text-base text-lg 2xl:mt-[14px] xl:mt-[14px] lg:mt-[10px] md::mt-[4px] mt-[4px] font-bold">
                        البخور
                      </p>
                      تصنيع البخور والمعمول بخلطات شرقية عتيقة لها طابع فواح
                      ينشر الرائحة بكل مكان
                    </div>
                  </div>
                  <div className=" 2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-0 xl:px-0 lg:px-0 md:px-0 px-4  2xl:block xl:block lg:block md:block inline">
                    <img
                      src={perfumes_15}
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
              <p>تحتاج أن تصنع عطرك الخاص؟</p>
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

export default Perfumes;
