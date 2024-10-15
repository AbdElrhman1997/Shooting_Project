import { IoPhonePortrait } from "react-icons/io5";
import Drak_Logo from "../assets/Images/HomeImages/Drak_Logo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaRegEnvelope,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";

import { FaLocationDot, FaSnapchat } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className={`bg-[#000000] md footer_lg_bg`} dir="rtl">
      <div className="xl:px-16 lg:px-16 md:px-12 px-4 mb-4">
        <div className="relative footer-logo-wrapper">
          <img
            src={Drak_Logo}
            className="w-[500px] mx-auto relative footer-logo"
          />
        </div>

        <p className="text-xl font-bold text-center mb-12">
          أول وكالة تدعم المنتج السعودي من الصناعة إلي التسويق لتضمن لكم فوزكم
          علي تحديات السوق
        </p>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h2 className="text-xl mb-4 text-main font-bold xl:text-right lg:text-right md:text-right text-center">
              العنوان
            </h2>
            <p className="text-sm mb-2 flex items-start xl:text-right lg:text-right md:text-right text-center justify-center gap-x-2 font-semibold">
              <div className="border-2 border-white rounded-full p-1 mt-1 mx-1">
                <FaLocationDot className="font-bold text-lg" />
              </div>
              <div className="text-lg">
                مكتب رقم 902 الدور التـــــــــاسع ممر النور حي العليا الرياض
                12222 المملكة العربيـــــة السعوديــــــة
              </div>
            </p>
          </div>

          <div className="text-center">
            <h2 className="text-xl mb-4 text-main font-bold xl:text-right lg:text-right md:text-right text-center">
              تواصل معانا
            </h2>
            <p className="text-sm mb-2 flex items-center xl:text-right lg:text-right md:text-right text-center xl:justify-start lg:justify-start md:justify-start justify-center gap-x-2">
              <div className="border-2 border-white rounded-full p-1 mt-1 mx-1">
                <IoPhonePortrait className="font-bold text-lg" />
              </div>
              <div className="text-lg">(+966)555992584</div>
            </p>
            <p className="text-sm mb-2 flex items-center xl:text-right lg:text-right md:text-right text-center xl:justify-start lg:justify-start md:justify-start justify-center gap-x-2">
              <div className="border-2 border-white rounded-full p-1 mt-1 mx-1">
                <FaRegEnvelope className="font-bold text-lg" />
              </div>
              <div className="text-lg">shootingstar.Creativity@gmail.com</div>
            </p>
          </div>

          {/* Links Section */}
          <div>
            <h2 className="text-xl mb-4 text-main font-bold text-center">
              وسائل التواصل
            </h2>
            <div className="flex justify-center gap-x-2">
              <div className="border-2 border-white rounded-full p-[6px] mt-1 mx-1 cursor-pointer">
                <FaWhatsapp className="font-bold " />
              </div>
              <div className="border-2 border-white rounded-full p-[6px] mt-1 mx-1 cursor-pointer">
                <FaTiktok className="font-bold " />
              </div>
              <div className="border-2 border-white rounded-full p-[6px] mt-1 mx- cursor-pointer">
                <FaSnapchat className="font-bold " />
              </div>
              <div className="border-2 border-white rounded-full p-[6px] mt-1 mx-1 cursor-pointer">
                <FaInstagram className="font-bold " />
              </div>
              <div className="border-2 border-white rounded-full p-[6px] mt-1 mx-1 cursor-pointer">
                <FaFacebookF className="font-bold" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="py-4 border-t-[1px] border-white text-center text-sm px-4 font-semibold">
        جميع الحقوق محفوظة لمؤسسة شوت انج للخدمات التسويقية ©
      </div>
    </footer>
  );
};

export default Footer;
