import GeneralFrame from "../Components/GeneralFrame";
import markting_1 from "../assets/Images/Markting/markting_1.jpg";
import markting_2 from "../assets/Images/Markting/markting_2.jpg";
import markting_3 from "../assets/Images/Markting/markting_3.jpg";
import markting_4 from "../assets/Images/Markting/markting_4.jpg";
import markting_5 from "../assets/Images/Markting/markting_5.jpg";

import GIF_Logo from "../assets/Images/Icons/GIF_Logo.gif";

const Markting = () => {
  return (
    <section>
      <GeneralFrame
        content={
          <div className="bg-white text-black rounded-[10px]  py-12" dir="rtl">
            <div className="">
              <div className="bg-white">
                <p className="2xl:text-2xl xl:text-2xl lg:text-xl md:text-lg text-base font-bold 2xl:px-12 xl:px-12 lg:px-12 md:px-8 px-4 2xl:text-right xl:text-right lg:text-right md:text-right text-center mb-10 2xl:w-4/5 xl:w-4/5 lg:w-10/12 md:w-10/12 w-full">
                  فن عرض المنتجات أو الخدمات بطريقة تجذب المستهلك إلى السلعة أو
                  الخدمة ...{" "}
                  <p className="2xl:text-[42px] xl:text-[42px] lg:text-[34px] md:text-[30px] text-[26px] my-6">
                    التسويق والإعلان
                  </p>{" "}
                  تعزيز الوعي بالعلامة التجارية المبيعات من خلال استراتيجيات
                  مدروسة لتقديم خدمات تسويق وإعلان شاملة
                </p>

                <div className="bg-white flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col font-bold items-center w-full rounded-[30px] 2xl:mt-12 xl:mt-12 lg:mt-12 md:mt-12 mt-0">
                  <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-16 xl:px-16 lg:px-8 ">
                    <p className="text-justify 2xl:text-lg xl:text-lg lg:text-lg md:text-base text-lg leading-loose font-semibold 2xl:mx-0 xl:mx-0 lg:mx-0  mx-4 mb-6">
                      <p className="2xl:text-2xl xl:text-2xl lg:text-xl md:text-base text-lg font-bold">
                        التخطيط الإستراتيجي
                      </p>
                      وضع خطة تسويقية شاملة بناء على تحليل السوق والمنافسين ,
                      وتحديد الجمهور المستهدف
                      <p className="2xl:text-2xl xl:text-2xl lg:text-xl md:text-base text-lg 2xl:mt-[14px] xl:mt-[14px] lg:mt-[10px] md::mt-[4px] mt-[4px] font-bold">
                        إدارة الحملات الإعلانية
                      </p>
                      إنشاء وإدارة حملات إعلانية عبر الإنترنت والوسائط التقليدية
                      (مثل التلفزيون , الراديو , اللوحات الإعلانية)
                    </p>
                  </div>
                  <div className=" 2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-0 xl:px-0 lg:px-0 md:px-0 px-4  2xl:block xl:block lg:block md:block inline">
                    <img
                      src={markting_1}
                      alt={""}
                      className="w-full 2xl:h-[250px] xl:h-[250px] lg:h-[250px] md:h-[250px] h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110" // Added group-hover
                    />
                  </div>
                </div>
                <div className="bg-white flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col font-bold items-center w-f rounded-[30px]">
                  <div className=" 2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-0 xl:px-0 lg:px-0 md:px-0 px-4  2xl:block xl:block lg:block md:block hidden">
                    <img
                      src={markting_2}
                      alt={""}
                      className="w-full h-[250px] object-cover transition-transform duration-300 ease-in-out group-hover:scale-110" // Added group-hover
                    />
                  </div>
                  <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-16 xl:px-16 lg:px-8  ">
                    <p className="text-justify mt-4 2xl:text-lg xl:text-lg lg:text-base md:text-base text-lg leading-loose font-semibold 2xl:mx-0 xl:mx-0 lg:mx-0  mx-4 mb-6">
                      <p className="2xl:text-2xl xl:text-2xl lg:text-xl md:text-base text-lg font-bold">
                        التخطيط الإستراتيجي
                      </p>
                      وضع خطة تسويقية شاملة بناء على تحليل السوق والمنافسين ,
                      وتحديد الجمهور المستهدف
                      <p className="2xl:text-2xl xl:text-2xl lg:text-xl md:text-base text-lg 2xl:mt-[14px] xl:mt-[14px] lg:mt-[10px] md::mt-[4px] mt-[4px] font-bold">
                        إدارة الحملات الإعلانية
                      </p>
                      إنشاء وإدارة حملات إعلانية عبر الإنترنت والوسائط التقليدية
                      (مثل التلفزيون , الراديو , اللوحات الإعلانية)
                    </p>
                  </div>
                  <div className=" 2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-0 xl:px-0 lg:px-0 md:px-0 px-4  2xl:hidden xl:hidden lg:hidden md:hidden inline">
                    <img
                      src={markting_2}
                      alt={""}
                      className="w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110" // Added group-hover
                    />
                  </div>
                </div>
                <div className="bg-white flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col font-bold items-center w-full rounded-[30px] ">
                  <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-16 xl:px-16 lg:px-8 ">
                    <p className="text-justify 2xl:text-lg xl:text-lg lg:text-lg md:text-base text-lg leading-loose font-semibold 2xl:mx-0 xl:mx-0 lg:mx-0  mx-4 mb-6">
                      <p className="2xl:text-2xl xl:text-2xl lg:text-xl md:text-base text-lg font-bold">
                        التخطيط الإستراتيجي
                      </p>
                      وضع خطة تسويقية شاملة بناء على تحليل السوق والمنافسين ,
                      وتحديد الجمهور المستهدف
                      <p className="2xl:text-2xl xl:text-2xl lg:text-xl md:text-base text-lg 2xl:mt-[14px] xl:mt-[14px] lg:mt-[10px] md::mt-[4px] mt-[4px] font-bold">
                        إدارة الحملات الإعلانية
                      </p>
                      إنشاء وإدارة حملات إعلانية عبر الإنترنت والوسائط التقليدية
                      (مثل التلفزيون , الراديو , اللوحات الإعلانية)
                    </p>
                  </div>
                  <div className=" 2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-0 xl:px-0 lg:px-0 md:px-0 px-4  2xl:block xl:block lg:block md:block inline">
                    <img
                      src={markting_3}
                      alt={""}
                      className="w-full 2xl:h-[250px] xl:h-[250px] lg:h-[250px] md:h-[250px] h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110" // Added group-hover
                    />
                  </div>
                </div>
                <div className="bg-white flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col font-bold items-center w-f rounded-[30px]">
                  <div className=" 2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-0 xl:px-0 lg:px-0 md:px-0 px-4  2xl:block xl:block lg:block md:block hidden">
                    <img
                      src={markting_4}
                      alt={""}
                      className="w-full h-[250px] object-cover transition-transform duration-300 ease-in-out group-hover:scale-110" // Added group-hover
                    />
                  </div>
                  <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-16 xl:px-16 lg:px-8  ">
                    <p className="text-justify mt-4 2xl:text-lg xl:text-lg lg:text-base md:text-base text-lg leading-loose font-semibold 2xl:mx-0 xl:mx-0 lg:mx-0  mx-4 mb-6">
                      <p className="2xl:text-2xl xl:text-2xl lg:text-xl md:text-base text-lg font-bold">
                        التخطيط الإستراتيجي
                      </p>
                      وضع خطة تسويقية شاملة بناء على تحليل السوق والمنافسين ,
                      وتحديد الجمهور المستهدف
                      <p className="2xl:text-2xl xl:text-2xl lg:text-xl md:text-base text-lg 2xl:mt-[14px] xl:mt-[14px] lg:mt-[10px] md::mt-[4px] mt-[4px] font-bold">
                        إدارة الحملات الإعلانية
                      </p>
                      إنشاء وإدارة حملات إعلانية عبر الإنترنت والوسائط التقليدية
                      (مثل التلفزيون , الراديو , اللوحات الإعلانية)
                    </p>
                  </div>
                  <div className=" 2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-0 xl:px-0 lg:px-0 md:px-0 px-4  2xl:hidden xl:hidden lg:hidden md:hidden inline">
                    <img
                      src={markting_4}
                      alt={""}
                      className="w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110" // Added group-hover
                    />
                  </div>
                </div>
                <div className="bg-white flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col font-bold items-center w-full rounded-[30px] ">
                  <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-16 xl:px-16 lg:px-8 ">
                    <p className="text-justify 2xl:text-lg xl:text-lg lg:text-lg md:text-base text-lg leading-loose font-semibold 2xl:mx-0 xl:mx-0 lg:mx-0  mx-4 mb-6">
                      <p className="2xl:text-2xl xl:text-2xl lg:text-xl md:text-base text-lg font-bold">
                        التخطيط الإستراتيجي
                      </p>
                      وضع خطة تسويقية شاملة بناء على تحليل السوق والمنافسين ,
                      وتحديد الجمهور المستهدف
                      <p className="2xl:text-2xl xl:text-2xl lg:text-xl md:text-base text-lg 2xl:mt-[14px] xl:mt-[14px] lg:mt-[10px] md::mt-[4px] mt-[4px] font-bold">
                        إدارة الحملات الإعلانية
                      </p>
                      إنشاء وإدارة حملات إعلانية عبر الإنترنت والوسائط التقليدية
                      (مثل التلفزيون , الراديو , اللوحات الإعلانية)
                    </p>
                  </div>
                  <div className=" 2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-0 xl:px-0 lg:px-0 md:px-0 px-4  2xl:block xl:block lg:block md:block inline">
                    <img
                      src={markting_5}
                      alt={""}
                      className="w-full 2xl:h-[250px] xl:h-[250px] lg:h-[250px] md:h-[250px] h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110" // Added group-hover
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
            <div className="grid grid-cols-12 gap-y-12 my-10 mx-4 text-center 2xl:text-xl xl:text-xl lg:text-xl md:text-xl text-lg justify-center items-center">
              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8 "></div>
                <p className="font-bold my-1 text-[#000]">
                  التخطيط الاستراتيجي
                </p>
              </div>
              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8 "></div>
                <p className="font-bold my-1 text-[#000]">
                  إدارة الحملات الإعلانية
                </p>
              </div>
              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8 "></div>
                <p className="font-bold my-1 text-[#000]">
                  إعلانات الدفع مقابل النقرة
                </p>
              </div>
              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8 "></div>
                <p className="font-bold my-1 text-[#000]">التسويق بالمحتوى</p>
              </div>
              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8 "></div>
                <p className="font-bold my-1 text-[#000]">
                  التسويق عبر وسائل التواصل الاجتماعي
                </p>
              </div>
              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8 "></div>
                <p className="font-bold my-1 text-[#000]">
                  تحليل الأداء والتقارير
                </p>
              </div>
              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8 "></div>
                <p className="font-bold my-1 text-[#000]">
                  التسويق بالبريد الإلكتروني
                </p>
              </div>
              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8 "></div>
                <p className="font-bold my-1 text-[#000]">
                  التسويق بالعروض الترويجية والمسابقات
                </p>
              </div>
              <div className="flex flex-col justify-center items-center 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 mx-auto">
                <div className="border-[1.5px] border-[#000] rounded-full w-8 h-8 "></div>
                <p className="font-bold my-1 text-[#000]">التسويق المؤثر</p>
              </div>
            </div>
            <div
              className="bg-[#333] xl:py-8 lg:py-8 md:py-8 pt-4 pb-8 xl:px-16 lg:px-16 md:px-8 px-4 text-white 2xl:text-3xl xl:text-3xl lg:text-3xl md:text-2xl text-lg font-bold"
              dir="rtl"
            >
              <p>تحتاج تصوير فوتوغرافي أو إنتاج فيديو إعلاني أو سينيمائي ؟</p>
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

      <img src={GIF_Logo} alt="Shooting GIF Logo" className="mt-6 -mb-6" />
    </section>
  );
};

export default Markting;
