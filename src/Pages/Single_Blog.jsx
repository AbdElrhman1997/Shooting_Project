import { useEffect, useState } from "react";
import { FaBookmark } from "react-icons/fa";
import GIF_Logo from "../assets/Images/Icons/GIF_Logo.gif";
import { IoArrowRedo, IoArrowUndo } from "react-icons/io5";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const Single_Blog = () => {
  const [post, setPost] = useState({});
  const { id } = useParams();
  // const [loading, setLoading] = useState(false);

  console.log(id);

  const fetchPost = async () => {
    // setLoading(true);
    await axios
      .get(`https://admin.shootingads.net/api/getSingleBlog/${id}`)
      .then((res) => {
        const { data } = res.data;
        setPost(data);
      })
      .catch((error) => {
        console.error("Error fetching posts", error);
      });
  };

  useEffect(() => {
    fetchPost();
  }, [id]);

  return (
    <section className="text-black text-right" dir="rtl">
      <h1 className="text-4xl font-bold mx-auto w-fit mt-6 mb-12">
        {/* {post?.title_ar} */}
        ويُستخدم في صناعات المطابع ودور النشر
      </h1>
      <div className="grid grid-cols-2 ">
        <div className="2xl:col-span-1 xl:col-span-1 lg:col-span-1 md:col-span-1 col-span-2">
          <img
            src={`https://admin.shootingads.net/images/${post?.main_image}`}
            alt="single_article"
            className=" w-full h-full object-cover"
          />
        </div>
        <p className="bg-[#000] text-white 2xl:col-span-1 xl:col-span-1 lg:col-span-1 md:col-span-1 col-span-2 py-[24px]  px-14 leading-loose text-justify text-[18px] max-h-[470px] flex justify-center items-center">
          ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال
          المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص
          مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل أو
          مرجع شكلي لهذه الأحرف. خمسة قرون من الزمن لم تقضي على هذا النص
        </p>
      </div>
      <div className="grid grid-cols-12">
        <div className="2xl:col-span-9 xl:col-span-9 lg:col-span-9 md:col-span-7 col-span-12 ">
          <p
            className="blog-details text-justify px-12 py-6 font-semibold"
            style={{ fontSize: "16px" }}
          >
            {post?.body_ar}
          </p>
          <div className="flex justify-between items-center px-12 my-6 gap-x-5">
            <div
              className={`text-[#212529] bg-[#ECECECBD] px-4 py-2 ${
                id == 1
                  ? "opacity-50 cursor-not-allowed"
                  : "cursor-pointer hover:opacity-80"
              } 2xl:text-base lg:text-base md:text-base text-[12px]`}
            >
              {id == 1 ? (
                <div className="flex justify-center items-center  gap-x-1">
                  <IoArrowRedo />
                  <span className="font-semibold">المقال السابق</span>
                </div>
              ) : (
                <Link
                  to={`/blogs/${+id - 1}`}
                  className="flex justify-center items-center  gap-x-1"
                >
                  <IoArrowRedo />
                  <span className="font-semibold">المقال السابق</span>
                </Link>
              )}

              {/* <div className="h-[1.5px] bg-black xl:w-[120px] lg:w-[120px] md:w-[120px] w-[80px] mx-auto my-1" />
              <div className="text-center">
                <span className="font-semibold">طرق التسويق المبتكرة</span>
              </div> */}
            </div>

            <div
              className={`text-[#212529] bg-[#ECECECBD] px-4 py-2 ${
                id == 5
                  ? "opacity-50 cursor-not-allowed"
                  : "cursor-pointer hover:opacity-80"
              } 2xl:text-base lg:text-base md:text-base text-[12px]`}
            >
              {id == 5 ? (
                <div className="flex justify-center items-center  gap-x-1">
                  <IoArrowUndo />
                  <span className="font-semibold">المقال التالي</span>
                </div>
              ) : (
                <Link
                  to={`/blogs/${+id + 1}`}
                  className="flex justify-center items-center  gap-x-1"
                >
                  <IoArrowUndo />
                  <span className="font-semibold">المقال التالي</span>
                </Link>
              )}
              {/* <div className="h-[1.5px] bg-black xl:w-[120px] lg:w-[120px] md:w-[120px] w-[80px] mx-auto my-1" />
              <div className="text-center">
                <span className="font-semibold">طرق التسويق المبتكرة</span>
              </div> */}
            </div>
          </div>
        </div>
        <div className="2xl:col-span-3 xl:col-span-3 lg:col-span-3 md:col-span-5 col-span-12">
          <div className="my-10 mx-6">
            <div className="text-white bg-[#000] border-y-[3px] border-main text-[20px] text-center py-4 font-bold px-2">
              محتويات المقالة
            </div>
            <div className="bg-[#ecececbd] text-black font-semibold text-base p-4 flex flex-col gap-y-4">
              <p>الهوية التجارية</p>
              <p>الهوية المكانية</p>
              <p>الموقع الإلكتروني</p>
              <p>التسويق و الإعلان</p>
            </div>
          </div>
          <div className="my-10 mx-6">
            <div className="text-white bg-[#000] border-y-[3px] border-main text-[20px] text-center py-4 font-bold px-2">
              الخدمات
            </div>
            <div className="bg-[#ecececbd] text-black font-semibold text-base p-4 flex flex-col gap-y-4">
              <p>الهوية التجارية</p>
              <p>الهوية المكانية</p>
              <p>الموقع الإلكتروني</p>
              <p>التسويق و الإعلان</p>
              <p>التصوير و الإنتاج</p>
              <p>وسائل التواصل الإجتماعي</p>
              <p>الطباعة</p>
              <p>مجالات دعم الصناعة</p>
            </div>
          </div>
          <div className="my-10 mx-6">
            <div className="text-white bg-[#000] border-y-[3px] border-main text-[20px] text-center py-4 font-bold px-2">
              أحدث المقالات
            </div>
            <div className="bg-[#ecececbd] text-black font-semibold text-base p-4 flex flex-col gap-y-4">
              <p className="flex justify-between items-center">
                <div>الهوية المكانية</div>
                <FaBookmark />
              </p>
              <p className="flex justify-between items-center">
                <div>الهوية المكانية</div>
                <FaBookmark />
              </p>
              <p className="flex justify-between items-center">
                <div>الهوية المكانية</div>
                <FaBookmark />
              </p>
            </div>
          </div>
        </div>
      </div>
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

export default Single_Blog;
