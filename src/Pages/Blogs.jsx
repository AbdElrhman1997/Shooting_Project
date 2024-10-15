import React from "react";
import blogsFrame from "../assets/Images/Frame/المدونات.png";
import blogsBg from "../assets/Images/HomeImages/blogs-bg.png";
import card_photo from "../assets/Images/Blogs/card_photo.jpg";
import GIF_Logo from "../assets/Images/Icons/GIF_Logo.gif";

const Blogs = () => {
  return (
    <section>
      <div
        className="text-4xl text-black relative 2xl:py-[104px] xl:py-[104px] lg:py-[104px] md:py-[124px] py-[200px] text-right"
        dir="rtl"
      >
        <img
          src={blogsFrame}
          className="absolute top-0 left-0 w-full h-full z-50"
          style={{ height: "100%" }} // Ensures the image fills the parent container
        />
        <div className="w-[84.3%] mx-auto">
          <div className="relative">
            <p
              className="xl:text-8xl lg:text-8xl md:text-6xl text-5xl font-bold text-white absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 "
              style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
            >
              المدونات
            </p>
            <img src={blogsBg} className="w-full  h-full " />
          </div>
          <div className="grid grid-cols-12 xl:gap-12 lg:gap-12 md:gap-6 gap-y-6 p-8">
            <div
              className="xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 bg-white shadow-lg "
              style={{ borderRadius: "0 0 10px 10px" }}
            >
              <img
                src={card_photo}
                alt="Blog Image 1"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">طرق التسويق المبتكرة</h3>
                <p className="text-gray-600 mb-4 text-sm text-justify">
                  طرق التسويق المبتكرة طرق التسويق المبتكرة طرق التسويق المبتكرة
                  طرق التسويق المبتكرة طرق التسويق المبتكرة طرق التسويق المبتكرة
                  طرق التسويق المبتكرة طرق التسويق المبتكرة
                </p>
                <button className="bg-main text-white px-3 py-1 text-lg rounded-md cursor-pointer hover:bg-[#3241ec71] font-semibold">
                  قراءة المزيد
                </button>
              </div>
            </div>
            <div
              className="xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 bg-white shadow-lg "
              style={{ borderRadius: "0 0 10px 10px" }}
            >
              <img
                src={card_photo}
                alt="Blog Image 1"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">طرق التسويق المبتكرة</h3>
                <p className="text-gray-600 mb-4 text-sm text-justify">
                  طرق التسويق المبتكرة طرق التسويق المبتكرة طرق التسويق المبتكرة
                  طرق التسويق المبتكرة طرق التسويق المبتكرة طرق التسويق المبتكرة
                  طرق التسويق المبتكرة طرق التسويق المبتكرة
                </p>
                <button className="bg-main text-white px-3 py-1 text-lg rounded-md cursor-pointer hover:bg-[#3241ec71] font-semibold">
                  قراءة المزيد
                </button>
              </div>
            </div>
            <div
              className="xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 bg-white shadow-lg "
              style={{ borderRadius: "0 0 10px 10px" }}
            >
              <img
                src={card_photo}
                alt="Blog Image 1"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">طرق التسويق المبتكرة</h3>
                <p className="text-gray-600 mb-4 text-sm text-justify">
                  طرق التسويق المبتكرة طرق التسويق المبتكرة طرق التسويق المبتكرة
                  طرق التسويق المبتكرة طرق التسويق المبتكرة طرق التسويق المبتكرة
                  طرق التسويق المبتكرة طرق التسويق المبتكرة
                </p>
                <button className="bg-main text-white px-3 py-1 text-lg rounded-md cursor-pointer hover:bg-[#3241ec71] font-semibold">
                  قراءة المزيد
                </button>
              </div>
            </div>
            <div
              className="xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 bg-white shadow-lg "
              style={{ borderRadius: "0 0 10px 10px" }}
            >
              <img
                src={card_photo}
                alt="Blog Image 1"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">طرق التسويق المبتكرة</h3>
                <p className="text-gray-600 mb-4 text-sm text-justify">
                  طرق التسويق المبتكرة طرق التسويق المبتكرة طرق التسويق المبتكرة
                  طرق التسويق المبتكرة طرق التسويق المبتكرة طرق التسويق المبتكرة
                  طرق التسويق المبتكرة طرق التسويق المبتكرة
                </p>
                <button className="bg-main text-white px-3 py-1 text-lg rounded-md cursor-pointer hover:bg-[#3241ec71] font-semibold">
                  قراءة المزيد
                </button>
              </div>
            </div>
            <div
              className="xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 bg-white shadow-lg "
              style={{ borderRadius: "0 0 10px 10px" }}
            >
              <img
                src={card_photo}
                alt="Blog Image 1"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">طرق التسويق المبتكرة</h3>
                <p className="text-gray-600 mb-4 text-sm text-justify">
                  طرق التسويق المبتكرة طرق التسويق المبتكرة طرق التسويق المبتكرة
                  طرق التسويق المبتكرة طرق التسويق المبتكرة طرق التسويق المبتكرة
                  طرق التسويق المبتكرة طرق التسويق المبتكرة
                </p>
                <button className="bg-main text-white px-3 py-1 text-lg rounded-md cursor-pointer hover:bg-[#3241ec71] font-semibold">
                  قراءة المزيد
                </button>
              </div>
            </div>
            <div
              className="xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 bg-white shadow-lg "
              style={{ borderRadius: "0 0 10px 10px" }}
            >
              <img
                src={card_photo}
                alt="Blog Image 1"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">طرق التسويق المبتكرة</h3>
                <p className="text-gray-600 mb-4 text-sm text-justify">
                  طرق التسويق المبتكرة طرق التسويق المبتكرة طرق التسويق المبتكرة
                  طرق التسويق المبتكرة طرق التسويق المبتكرة طرق التسويق المبتكرة
                  طرق التسويق المبتكرة طرق التسويق المبتكرة
                </p>
                <button className="bg-main text-white px-3 py-1 text-lg rounded-md cursor-pointer hover:bg-[#3241ec71] font-semibold">
                  قراءة المزيد
                </button>
              </div>
            </div>
            <div className="w-1/2 mx-auto bg-main h-10"></div>
          </div>
        </div>
      </div>
      <img src={GIF_Logo} alt="Shooting GIF Logo" className="mt-6 -mb-6" />
    </section>
  );
};

export default Blogs;
