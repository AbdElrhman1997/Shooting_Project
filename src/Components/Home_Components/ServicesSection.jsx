import { Link } from "react-router-dom";
import Services_Images_1 from "../../assets/Images/ServicesImages/Services_Images-1.jpg";
import Services_Images_2 from "../../assets/Images/ServicesImages/Services_Images-2.jpg";
import Services_Images_3 from "../../assets/Images/ServicesImages/Services_Images-3.jpg";
import Services_Images_4 from "../../assets/Images/ServicesImages/Services_Images-4.jpg";
import Services_Images_5 from "../../assets/Images/ServicesImages/Services_Images-5.jpg";
import Services_Images_6 from "../../assets/Images/ServicesImages/Services_Images-6.jpg";
import Services_Images_7 from "../../assets/Images/ServicesImages/Services_Images-7.jpg";
import Services_Images_8 from "../../assets/Images/ServicesImages/Services_Images-8.jpg";
import Services_Images_9 from "../../assets/Images/ServicesImages/Services_Images-9.jpg";

const ServicesSection = () => {
  const ServicesItems = [
    {
      title: "AI-Shabout Seafood Restaurant",
      subTitle:
        "العلامات التجارية -  التصوير الفوتوغرافي -  وسائل التواصل الأجتماعي",
      image: Services_Images_1,
    },
    { title: "", subTitle: "", image: Services_Images_2 },
    {
      title: "AI-Shabout Seafood Restaurant",
      subTitle:
        "العلامات التجارية -  التصوير الفوتوغرافي -  وسائل التواصل الأجتماعي",
      image: Services_Images_3,
    },
    { title: "", subTitle: "", image: Services_Images_4 },
    { title: "", subTitle: "", image: Services_Images_5 },
    { title: "", subTitle: "", image: Services_Images_6 },
    { title: "", subTitle: "", image: Services_Images_7 },
    { title: "", subTitle: "", image: Services_Images_8 },
    { title: "", subTitle: "", image: Services_Images_9 },
  ];

  return (
    <section>
      <div
        className="bg-[#333] xl:py-8 lg:py-8 md:py-8 pt-4 pb-8 xl:px-16 lg:px-16 md:px-8 px-4"
        style={{ borderRadius: "0 0 100px 100px" }}
        dir="rtl"
      >
        <div className="flex flex-wrap justify-center xl:text-[1.7rem] lg:text-[1.2rem] md:text-[1rem] text-[14px] text-center leading-relaxed font-semibold">
          <p className="hover:text-[#ec3237] transition  duration-400 cursor-pointer">
            بناء العلامة التجارية
          </p>
          <span className="text-[#ec3237] mx-[6px] font-bold">|</span>
          <p className="hover:text-[#ec3237] transition  duration-400 cursor-pointer">
            بناء الهوية المكانية و المعارض
          </p>
          <span className="text-[#ec3237] mx-[6px] font-bold">|</span>
          <p className="hover:text-[#ec3237] transition  duration-400 cursor-pointer">
            تصميم المواقع الإلكترونية و المتاجر و برمجتها
          </p>
          <span className="text-[#ec3237] mx-[6px] font-bold">|</span>
          <p className="hover:text-[#ec3237] transition  duration-400 cursor-pointer">
            التسويق و الإعلان
          </p>
          <span className="text-[#ec3237] mx-[6px] font-bold">|</span>
          <p className="hover:text-[#ec3237] transition  duration-400 cursor-pointer">
            التصوير و الإنتاج
          </p>
          <span className="text-[#ec3237] mx-[6px] font-bold">|</span>
          <p className="hover:text-[#ec3237] transition  duration-400 cursor-pointer">
            إدارة وسائل التواصل الإجتماعي
          </p>
          <span className="text-[#ec3237] mx-[6px] font-bold">|</span>
          <p className="hover:text-[#ec3237] transition  duration-400 cursor-pointer">
            الصناعة
          </p>
          <span className="text-[#ec3237] mx-[6px] font-bold">|</span>
          <p className="hover:text-[#ec3237] transition  duration-400 cursor-pointer">
            الطباعة
          </p>
        </div>
      </div>
      <div className="grid grid-cols-6 xl:px-16 lg:px-16 md:px-8 px-4 gap-4 my-8">
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
      <div className="rounded-full bg-[#ec3237] w-fit px-24 py-[10px] mt-4 font-bold xl:text-xl lg:text-xl md:text-xl text-md mx-auto my-16">
        إبداعتنا
      </div>
    </section>
  );
};

export default ServicesSection;
