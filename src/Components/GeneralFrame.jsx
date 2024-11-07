import {
  FaFacebookF,
  FaInstagram,
  FaSnapchat,
  FaTiktok,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const GeneralFrame = (params) => {
  return (
    <div className="bg-[#000]">
      <div>
        <div className="flex 2xl:h-10 xl:h-10 lg:h-14 md:14 h-10" dir="rtl">
          <div className="2xl:w-10 xl:w-10 lg:w-10 md:w-10 w-10 ">
            <div
              className="bg-white w-full h-full rounded-tr-[100px] 2xl:rounded-bl-[30px] xl:rounded-bl-[30px] lg:rounded-bl-[30px] md:rounded-bl-[30px] rounded-bl-[35px]"
              style={{
                borderBottom: "1px solid black",
              }}
            ></div>
          </div>
          <div className="w-full">
            <div
              className="bg-white w-full h-full 2xl:rounded-bl-[12px] xl:rounded-bl-[12px] lg:rounded-bl-[12px] md:rounded-bl-[12px] rounded-bl-[12px] 2xl:rounded-br-[12px] xl:rounded-br-[12px] lg:rounded-br-[12px] md:rounded-br-[12px] rounded-br-[12px]"
              style={{
                border: "1px solid black",
                borderTop: "none",
              }}
            ></div>
          </div>
          <div className="2xl:w-10 xl:w-10 lg:w-10 md:w-10 w-10">
            <div
              className="bg-white w-full h-full rounded-tl-[100px] 2xl:rounded-br-[32px] xl:rounded-br-[32px] lg:rounded-br-[32px] md:rounded-br-[30px] rounded-br-[35px]"
              style={{
                borderBottom: "1px solid black",
              }}
            ></div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex" dir="rtl">
          <div className="2xl:w-10 xl:w-10 lg:w-10 md:w-10 w-10">
            <div
              className="bg-white w-full h-full 2xl:rounded-bl-[12px] xl:rounded-bl-[12px] lg:rounded-bl-[11px] md:rounded-bl-[11px] rounded-bl-[15px] 2xl:rounded-tl-[10px] xl:rounded-tl-[10px] lg:rounded-tl-[10px] md:rounded-tl-[10px] rounded-tl-[10px]"
              style={{
                borderBottom: "1px solid black",
              }}
            ></div>
          </div>
          <div
            className=" w-full bg-[#000] text-black"
            style={{
              borderRadius: "10px",
              border: "1px solid black",
              borderTop: "none",
            }}
          >
            {params.content}
          </div>
          <div className="2xl:w-10 xl:w-10 lg:w-10 md:w-10 w-10">
            <div
              className="bg-white w-full h-full 2xl:rounded-tr-[10px] xl:rounded-tr-[10px] lg:rounded-tr-[10px] md:rounded-tr-[10px] rounded-tr-[10px] 2xl:rounded-br-[11px] xl:rounded-br-[11px] lg:rounded-br-[11px] md:rounded-br-[11px] rounded-br-[12px]"
              style={{
                borderBottom: "1px solid black",
              }}
            ></div>
          </div>
        </div>
      </div>
      {!params.our_projects && (
        <div>
          <div className="flex 2xl:h-12 xl:h-12 lg:h-12 md:h-12 h-12" dir="rtl">
            <div className="2xl:w-10 xl:w-10 lg:w-10 md:w-10 w-10">
              <div
                className="bg-white w-full h-full 2xl:rounded-bl-[11px] xl:rounded-bl-[11px] lg:rounded-bl-[11px] md:rounded-bl-[11px] rounded-bl-[11px] 2xl:rounded-tl-[11px] xl:rounded-tl-[11px] lg:rounded-tl-[11px] md:rounded-tl-[11px] rounded-tl-[11px]"
                style={{
                  borderBottom: "1px solid black",
                }}
              ></div>
            </div>
            <div className="w-full">
              <div
                className="bg-white w-full h-full 2xl:rounded-[11px] xl:rounded-[11px] lg:rounded-[10px] md:rounded-[10px] rounded-[10px]"
                style={{
                  border: "1px solid black",
                  borderTop: "none",
                  padding: "0 20px",
                }}
              >
                <div
                  className="flex justify-center items-center gap-x-6 text-[#000] h-full"
                  dir="rtl"
                >
                  <a
                    href="https://wa.me/966555992584"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-[#000] rounded-full p-1 mt-1"
                  >
                    <FaWhatsapp className="font-bold text-lg" />
                  </a>
                  <a
                    href="https://twitter.com/Shooting_agancy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-[#000] rounded-full p-1 mt-1"
                  >
                    <FaTwitter className="font-bold text-lg" />
                  </a>
                  <a
                    href="https://www.instagram.com/shooting.agency"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-[#000] rounded-full p-1 mt-1"
                  >
                    <FaInstagram className="font-bold text-lg" />
                  </a>
                  <a
                    href="https://www.snapchat.com/add/shooting.ads"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-[#000] rounded-full p-1 mt-1"
                  >
                    <FaSnapchat className="font-bold text-lg" />
                  </a>
                  <a
                    href="https://www.tiktok.com/@shooting.agency"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-[#000] rounded-full p-1 mt-1"
                  >
                    <FaTiktok className="font-bold text-lg" />
                  </a>
                </div>
              </div>
            </div>
            <div className="2xl:w-10 xl:w-10 lg:w-10 md:w-10 w-10 ">
              <div
                className="bg-white w-full h-full 2xl:rounded-br-[11px] xl:rounded-br-[11px] lg:rounded-br-[11px] md:rounded-br-[11px] rounded-br-[11px] 2xl:rounded-tr-[11px] xl:rounded-tr-[11px] lg:rounded-tr-[11px] md:rounded-tr-[11px] rounded-tr-[10px]"
                style={{
                  borderBottom: "1px solid black",
                }}
              ></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GeneralFrame;
