import React from "react";

const ServicesSection = () => {
  return (
    <section
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
    </section>
  );
};

export default ServicesSection;
