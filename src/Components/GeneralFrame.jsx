import {
  FaFacebookF,
  FaInstagram,
  FaSnapchat,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";

const GeneralFrame = (params) => {
  return (
    <div className="bg-[#000]">
      <div>
        <div
          className="grid grid-cols-12 2xl:h-20 xl:h-20 lg:h-20 md:h-16 h-16"
          dir="rtl"
        >
          <div className="col-span-1">
            <div
              className="bg-white w-full h-full rounded-tr-[100px] 2xl:rounded-bl-[35px] xl:rounded-bl-[35px] lg:rounded-bl-[35px] md:rounded-bl-[35px] rounded-bl-[80px]"
              style={{
                borderBottom: "2px solid black",
              }}
            ></div>
          </div>
          <div className=" col-span-10">
            <div
              className="bg-white w-full h-full"
              style={{
                border: "2px solid black",
                borderRadius: "0 0 30px 30px",
                borderBottom: "none",
                borderTop: "none",
              }}
            ></div>
          </div>
          <div className="col-span-1">
            <div
              className="bg-white w-full h-full rounded-tl-[100px] 2xl:rounded-br-[35px] xl:rounded-br-[35px] lg:rounded-br-[35px] md:rounded-br-[35px] rounded-br-[80px]"
              style={{
                borderBottom: "2px solid black",
              }}
            ></div>
          </div>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-12" dir="rtl">
          <div className="col-span-1">
            <div
              className="bg-white w-full h-full"
              style={{
                borderRadius: "30px 0 0 30px",
                borderBottom: "2px solid black",
              }}
            ></div>
          </div>
          <div
            className=" col-span-10 bg-[#000] text-black"
            style={{
              borderRadius: "30px 30px 30px 30px",
              border: "2px solid black",
            }}
          >
            {params.content}
          </div>
          <div className="col-span-1">
            <div
              className="bg-white w-full h-full"
              style={{
                borderRadius: "0 30px 30px 0",
                borderBottom: "2px solid black",
              }}
            ></div>
          </div>
        </div>
      </div>
      {!params.our_projects && (
        <div>
          <div
            className="grid grid-cols-12 2xl:h-20 xl:h-20 lg:h-20 md:h-16 h-16"
            dir="rtl"
          >
            <div className="col-span-1">
              <div
                className="bg-white w-full h-full"
                style={{
                  borderRadius: "30px 0 0 30px",
                  borderBottom: "2px solid black",
                }}
              ></div>
            </div>
            <div className=" col-span-10">
              <div
                className="bg-white w-full h-full"
                style={{
                  border: "2px solid black",
                  borderRadius: "30px 30px 30px 30px",
                  borderTop: "none",
                  padding: "0 20px",
                }}
              >
                <div
                  className="flex justify-center items-center gap-x-6 text-[#000] h-full"
                  dir="ltr"
                >
                  <a
                    href=""
                    target="_blank"
                    className="border-2 border-[#000] rounded-full p-1 mt-1"
                  >
                    <FaFacebookF className="font-bold text-lg" />
                  </a>
                  <a
                    href=""
                    target="_blank"
                    className="border-2 border-[#000] rounded-full p-1 mt-1"
                  >
                    <FaInstagram className="font-bold text-lg" />
                  </a>
                  <a
                    href=""
                    target="_blank"
                    className="border-2 border-[#000] rounded-full p-1 mt-1"
                  >
                    <FaSnapchat className="font-bold text-lg" />
                  </a>
                  <a
                    href=""
                    target="_blank"
                    className="border-2 border-[#000] rounded-full p-1 mt-1"
                  >
                    <FaTiktok className="font-bold text-lg" />
                  </a>
                  <a
                    href=""
                    target="_blank"
                    className="border-2 border-[#000] rounded-full p-1 mt-1"
                  >
                    <FaWhatsapp className="font-bold text-lg" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div
                className="bg-white w-full h-full"
                style={{
                  borderRadius: "0 30px 30px 0",
                  borderBottom: "2px solid black",
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
