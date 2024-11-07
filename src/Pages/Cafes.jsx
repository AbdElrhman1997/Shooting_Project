import GeneralFrame from "../Components/GeneralFrame";
import cafes_1 from "../assets/Images/Indusrty/Cafes/cafes_1.webp";
import cafes_2 from "../assets/Images/Indusrty/Cafes/cafes_2.webp";
import cafes_3 from "../assets/Images/Indusrty/Cafes/cafes_3.webp";
import cafes_4 from "../assets/Images/Indusrty/Cafes/cafes_4.webp";
import GIF_Logo from "../assets/Images/Icons/GIF_Logo.gif";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Cafes = () => {
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
                    الكافيهات
                  </p>
                  لدينا فريق متخصص لدعم تصميم وتجهيز مشروعكم الخاص لضبط معايير
                  الجودة في إطار ً يستجیب لاحتیاجات عملائكم التصنیع التعاقدي
                  نضمن لكم مكنا
                </p>

                <p className="text-black text-center font-extrabold xl:my-8 lg:my-8 md:my-8 my-4 2xl:text-3xl xl:text-3xl lg:text-3xl md:text-3xl text-2xl ">
                  مراحـــــــــــل الإنتــــــــاج
                </p>

                {/* Section 1 */}
                <div className="bg-white flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col font-bold items-start w-full rounded-[30px] 2xl:mt-12 xl:mt-12 lg:mt-12 md:mt-12 mt-6">
                  <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-8 xl:px-8 lg:px-8">
                    <div
                      className="2xl:text-justify xl:text-justify lg:text-justify md:text-justify text-center 2xl:text-lg xl:text-base lg:text-sm md:text-sm text-base font-bold 2xl:mx-0 xl:mx-0 lg:mx-0 mx-4 mb-6"
                      style={{ lineHeight: "1.6" }}
                    >
                      <p
                        className={`2xl:text-3xl xl:text-3xl lg:text-2xl md:text-lg text-xl font-bold mb-4`}
                      >
                        إختيار الموقع المناسب
                      </p>
                      وضع الكــافية في المنطقة أو الحي مستندا إلى فهم جيد
                      لجمهــــور الزبـــائن المستهدفين ونوع المشروبات والخدمات
                      التي تقدمها
                      <div className="mt-3">
                        تقييم المساحة المتاحة في الموقع المختار حسب حجم المشروع
                        أو العمليات الداخلية أو مكان للتوصيل والخدمة
                      </div>
                    </div>
                  </div>
                  <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-0 xl:px-0 lg:px-0 md:px-0">
                    <img
                      src={cafes_1}
                      alt=""
                      className="w-full 2xl:h-[350px] xl:h-[300px] lg:h-[300px] md:h-[300px] h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                    />
                  </div>
                </div>

                {/* Section 2 */}
                <div className="bg-white flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col font-bold items-start w-full rounded-[30px]">
                  <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-0 xl:px-0 lg:px-0 md:px-0 px-4 2xl:block xl:block lg:block md:block hidden">
                    <img
                      src={cafes_2}
                      alt=""
                      className="w-full 2xl:h-[350px] xl:h-[300px] lg:h-[300px] md:h-[300px] object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                    />
                  </div>
                  <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-8 xl:px-8 lg:px-8">
                    <div
                      className="2xl:text-justify xl:text-justify lg:text-justify md:text-justify text-center mt-3 2xl:text-lg xl:text-base lg:text-sm md:text-sm text-lg font-bold mb-6 2xl:mx-0 xl:mx-0 lg:mx-0 mx-4"
                      style={{ lineHeight: "1.6" }}
                    >
                      <p
                        className={`2xl:text-3xl xl:text-3xl lg:text-2xl md:text-lg text-xl font-bold mb-4`}
                      >
                        تصميم الهوية المكانية والديكور
                      </p>
                      بناء الهوية المكـــانية التي تعكس ظهـــورك مع الجمهور
                      لتعزز حضورك . . .
                      <div>
                        من التصميم ثلاثي الأبعـــــاد إلى جودة وإحترافية الشكل
                        الخارجي، ننئش حلـــــول مبتكرة خــــــاصة بالتصميم
                        والتخطيط والتنفيـذ الداخلي لوصـــــول علامتكم المكانية
                        إلى أعين محبيها
                      </div>
                    </div>
                  </div>
                  <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-0 xl:px-0 lg:px-0 md:px-0 2xl:hidden xl:hidden lg:hidden md:hidden inline">
                    <img
                      src={cafes_2}
                      alt=""
                      className="w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                    />
                  </div>
                </div>

                {/* Section 3 */}
                <div className="bg-white flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col font-bold items-start w-full rounded-[30px]">
                  <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-8 xl:px-8 lg:px-8">
                    <div
                      className="2xl:text-justify xl:text-justify lg:text-justify md:text-justify text-center mt-3 2xl:text-lg xl:text-base lg:text-sm md:text-sm text-lg font-bold mb-6 2xl:mx-0 xl:mx-0 lg:mx-0 mx-4"
                      style={{ lineHeight: "1.6" }}
                    >
                      <p
                        className={`2xl:text-3xl xl:text-3xl lg:text-2xl md:text-lg text-xl font-bold mb-4`}
                      >
                        تجهيز الأدوات والمعدات
                      </p>
                      تجهيز مستلزمات الكافية التي يجب توافرها بأعلى جودة فرن
                      الميكروويف - الثلاجات بمختلف انواعها - أواني الخبز وطهي
                      مقالي - قدور تحضير سلطات - الطاولات - ماكينة سلاش ماكينة
                      قهوة كابتشينو - ماكينة قهوة أمريكية معــدات التبريــد
                      والتجميـد - ماكينة عصير - عصارة كهربائية للبرتقال - ماكينة
                      لصنع الثلج - سخان ساندوتش مكبس ثلاجة تبريد وعرض العصائر
                      والفواكه والماء - قلاية بطاطس أكواب ورقية ثلاثة مقاسات -
                      فناجين شاي ، اكواب زجاجية أكواب كابتشينو وفناجين قهوة تركي
                      - ملاعق وشوك وسكاكين مجموعة من صحون التقديم مصنوعة من
                      البلاستيك المقوى
                    </div>
                  </div>
                  <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full">
                    <img
                      src={cafes_3}
                      alt=""
                      className="w-full 2xl:h-[350px] xl:h-[300px] lg:h-[300px] md:h-[300px] h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                    />
                  </div>
                </div>

                {/* Section 4 */}
                <div className="bg-white flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col font-bold items-start w-full rounded-[30px]">
                  <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-0 xl:px-0 lg:px-0 md:px-0 px-4 2xl:block xl:block lg:block md:block hidden">
                    <img
                      src={cafes_4}
                      alt=""
                      className="w-full 2xl:h-[350px] xl:h-[300px] lg:h-[300px] md:h-[300px] object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                    />
                  </div>
                  <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-8 xl:px-8 lg:px-8">
                    <div
                      className="2xl:text-justify xl:text-justify lg:text-justify md:text-justify text-center mt-3 2xl:text-lg xl:text-base lg:text-sm md:text-sm text-lg font-bold  mb-6 2xl:mx-0 xl:mx-0 lg:mx-0 mx-4"
                      style={{ lineHeight: "1.6" }}
                    >
                      <p
                        className={`2xl:text-3xl xl:text-3xl lg:text-2xl md:text-lg text-xl font-bold mb-4`}
                      >
                        تقييم الأداء والتحسين المستمر
                      </p>
                      <div>١-التدريب وتطوير الموظفي</div>
                      <div>٢-التخطيط الجيد والاهتمام بالتفاصيل</div>
                      <div>
                        ٣-وضع نظام مؤشرات الأداء لقياس مختلف الجوانب لرصد
                        ومراقبة أداء المطبخ وقيــــــــــاس الجودة
                      </div>
                      <div>
                        ٤-التكيف مع التغيرات لمواجه التحديات مثل ارتفاع تكاليف
                        المواد الخام أو تغييرات في الأمور القانونية
                      </div>
                    </div>
                  </div>
                  <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-0 xl:px-0 lg:px-0 md:px-0 2xl:hidden xl:hidden lg:hidden md:hidden inline">
                    <img
                      src={cafes_4}
                      alt=""
                      className="w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div
              className="text-center 2xl:text-xl xl:text-lg lg:text-sm md:text-sm text-lg mt-6 font-bold 2xl:mx-20 xl:mx-20 lg:mx-16 mx-4 mb-6"
              style={{ lineHeight: "2" }}
            >
              <p
                className={`2xl:text-4xl xl:text-4xl lg:text-2xl md:text-2xl text-2xl font-bold mb-4`}
              >
                خدمات شوت انج المساندة للكافيهات
              </p>
              ( تصميم العلامة التجارية - إنتاج المطبوعات - إدارة وسائل التواصل
              الإجتماعي - التصوير والإنتاج الفي تصميم الموقع الإلكتروني - تحسين
              محركات البحث - التسويق والإعلان )
              <div>
                إكتشف خدماتنا المساندة من خلال الخدمات الموجودة على موقعنا
              </div>
            </div>

            <Link
              to={`/${i18n.language}/services`}
              className="rounded-full text-white block bg-[#ec3237] w-fit px-16 py-[12px] font-bold 2xl:text-3xl xl:text-xl lg:text-xl md:text-xl text-md mx-auto"
            >
              الخدمات
            </Link>

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
              نؤسسس لكم مكانكم من بداية تصميم الهوية المكــــانية ثلاثية الأبعاد
              إلى تجهيز المكان بالكامل وتسليمكم المفتاح
            </p>
            <div className="grid grid-cols-12 gap-y-12 my-10 mx-4 text-center 2xl:text-xl xl:text-xl lg:text-xl md:text-xl text-lg justify-center items-center">
              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8 "></div>
                <p className="font-bold my-1 text-[#000]">
                  إختيار الموقع المناسب
                </p>
              </div>

              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8 "></div>
                <p className="font-bold my-1 text-[#000]">
                  تصميم الهوية المكانية
                </p>
              </div>

              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8 "></div>
                <p className="font-bold my-1 text-[#000]">
                  تجهيز الأدوات والمعدات
                </p>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-y-12 my-10 mx-4 text-center 2xl:text-xl xl:text-xl lg:text-xl md:text-xl text-lg justify-center items-center">
              <div className="flex flex-col justify-center items-center col-span-12 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8 "></div>
                <p className="font-bold my-1 text-[#000]">
                  إختيار الموقع المناسب
                </p>
              </div>
            </div>

            <div
              className="bg-[#333] xl:py-8 lg:py-8 md:py-8 pt-4 pb-8 xl:px-16 lg:px-16 md:px-8 px-4 text-white 2xl:text-3xl xl:text-3xl lg:text-3xl md:text-2xl text-lg font-bold"
              dir="rtl"
            >
              <p>تحتاج تأسيس للكافية أو للمقهى الخاص بك؟</p>
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

export default Cafes;
