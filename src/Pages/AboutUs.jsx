import GIF_Logo from "../assets/Images/Icons/GIF_Logo.gif";
import GeneralFrame from "../Components/GeneralFrame";

const AboutUs = () => {
  return (
    <section>
      <GeneralFrame
        content={
          <div className="bg-white flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col font-bold items-center w-f pb-10 2xl:pt-12 xl:pt-12 lg:pt-12 md:pt-8 pt-6 rounded-[30px]">
            <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-16 xl:px-16 lg:px-8  px-4">
              <p className="col-span-6 border-b-[#ec3237] border-b-[6px] w-fit xl:mx-0 lg:mx-0 md:mx-0 mx-auto pb-4 xl:text-5xl lg:text-5xl md:text-5xl text-3xl font-bold">
                من نحن
              </p>
              <p className="text-justify 2xl:my-6 xl:my-6 lg:my-6 md:my-6 my-0 mt-4 text-[17px] leading-8">
                نحن شـــوت انـــج لنـــا تـــاريخ قديم في تأسيـــس الشركات
                الناشئة و التسويــق الرقمي و الميديــا لأكثر من 150 برانتد
                تحدينـــــــــــا الصعوبــــــــــات الخـــــاصة بمشاريـــع
                العملاء بل وسجلنــا ارقــام ونتائج كبيرة برحلة التحويل الرقمي
                لنا بصمتنا الخاصة والأولي بالسوق التي استطعنا من خلالــــها{" "}
                <span className="text-main">
                  طرح مشـــــــاريع تصنيـــــــــع المنتج
                </span>{" "}
                بصورة مختلفة وجودة تنـافسية لــــدعم المنتـــج السعـــودي مما
                يسهل علينـــا تسويـــــق المنتج وفق معاييـــر النجاح والصنـــاعة
                تفاديا للمشاريع المقلدة واستنساخ المنتجات
              </p>
            </div>
            <div className="center-line 2xl:block xl:block lg:block md:block hidden mx-2"></div>
            <div className=" 2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-16 xl:px-16 lg:px-8 px-4 2xl:mt-16 xl:mt-16 lg:mt-16 md:mt-16 mt-0 ">
              <p className="text-justify 2xl:my-6 xl:my-6 lg:my-6 md:my-6 my-0 text-[17px] leading-8">
                نحن شـــوت انـــج لنـــا تـــاريخ قديم في تأسيـــس الشركات
                الناشئة و التسويــق الرقمي و الميديــا لأكثر من 150 برانتد
                تحدينـــــــــــا الصعوبــــــــــات الخـــــاصة بمشاريـــع
                العملاء بل وسجلنــا ارقــام ونتائج كبيرة برحلة التحويل الرقمي
                لنا بصمتنا الخاصة والأولي بالسوق التي استطعنا من خلالــــها{" "}
                <span className="text-main">
                  طرح مشـــــــاريع تصنيـــــــــع المنتج
                </span>{" "}
                بصورة مختلفة وجودة تنـافسية لــــدعم المنتـــج السعـــودي مما
                يسهل علينـــا تسويـــــق المنتج وفق معاييـــر النجاح والصنـــاعة
                تفاديا للمشاريع المقلدة واستنساخ المنتجات
              </p>
            </div>
          </div>
        }
      />
      <img src={GIF_Logo} alt="Shooting GIF Logo" className="mt-6 -mb-6" />
    </section>
  );
};

export default AboutUs;
