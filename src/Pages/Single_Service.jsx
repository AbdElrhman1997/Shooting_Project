import first_image from "../assets/Images/ServicesImages/Al-Shabout Seafood Restaurant/Al-Shabout01.jpg";
import second_image from "../assets/Images/ServicesImages/Al-Shabout Seafood Restaurant/Al-Shabout02.jpg";
import third_image from "../assets/Images/ServicesImages/Al-Shabout Seafood Restaurant/Al-Shabout03.jpg";
import fourth_image from "../assets/Images/ServicesImages/Al-Shabout Seafood Restaurant/Al-Shabout04.jpg";
import fifth_image from "../assets/Images/ServicesImages/Al-Shabout Seafood Restaurant/Al-Shabout05.jpg";
import sex_image from "../assets/Images/ServicesImages/Al-Shabout Seafood Restaurant/Al-Shabout06.jpg";
import seven_image from "../assets/Images/ServicesImages/Al-Shabout Seafood Restaurant/Al-Shabout07.jpg";

const Single_Service = () => {
  return (
    <section className="text-right">
      <img
        src={first_image}
        alt="first_image"
        className="w-full h-full object-cover"
      />{" "}
      <div className="grid grid-cols-2">
        <div className="2xl:col-span-1 xl:col-span-1 lg:col-span-1 md:col-span-1 col-span-2 bg-[#0b548b] px-8">
          <table className="text-center font-semibold text-white w-full">
            <thead className="relative thead-services">
              <tr>
                <th className="border-b-2 border-r-2 border-white py-2 2xl:text-lg xl:text-lg lg:text-lg md:text-lg text-[12px]">
                  2024
                </th>
                <th className="border-b-2  border-white py-2 2xl:text-lg xl:text-lg lg:text-lg md:text-lg text-[12px]">
                  السنة
                </th>
              </tr>
            </thead>
            <tbody className="tbody-services relative text-right">
              <tr>
                <td className="m-4">
                  <ul className="m-4 2xl:text-lg xl:text-lg lg:text-lg md:text-lg text-[12px]">
                    <li>العلامات التجارية</li>
                    <li>التصوير الفوتوغرافي</li>
                    <li>وسائل التواصل الإجتماعي</li>
                  </ul>
                </td>
                <td className="text-right  border-l-2 border-white font-bold 2xl:text-lg xl:text-lg lg:text-lg md:text-lg text-[12px]">
                  الخدمات المقدمة
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="2xl:col-span-1 xl:col-span-1 lg:col-span-1 md:col-span-1 col-span-2 text-[#0b548b] bg-white 2xl:text-4xl xl:text-4xl lg:text-4xl md:text-2xl text-xl font-bold 2xl:py-20 xl:py-20 lg:py-20 md:py-20 py-10 px-6 text-center">
          AL-Shabout Seafood Restaurant
        </div>
      </div>
      <img
        src={second_image}
        alt="first_image"
        className="w-full h-full object-cover"
      />{" "}
      <img
        src={third_image}
        alt="first_image"
        className="w-full h-full object-cover"
      />{" "}
      <img
        src={fourth_image}
        alt="first_image"
        className="w-full h-full object-cover"
      />{" "}
      <img
        src={fifth_image}
        alt="first_image"
        className="w-full h-full object-cover"
      />{" "}
      <img
        src={sex_image}
        alt="first_image"
        className="w-full h-full object-cover"
      />{" "}
      <img
        src={seven_image}
        alt="first_image"
        className="w-full h-full object-cover"
      />{" "}
    </section>
  );
};

export default Single_Service;
