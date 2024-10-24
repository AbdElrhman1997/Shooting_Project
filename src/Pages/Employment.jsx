import GeneralFrame from "../Components/GeneralFrame";
import GIF_Logo from "../assets/Images/Icons/GIF_Logo.gif";
import banner from "../assets/Images/Banner.jpg";
import * as Yup from "yup";
import { useDropzone } from "react-dropzone";
import { useState } from "react";
import { ErrorMessage, Field, Form, Formik, useFormik } from "formik";
import { IoFileTrayOutline } from "react-icons/io5";
import { useTranslation } from "react-i18next"; // Import translation hook

const Employment = () => {
  const { t, i18n } = useTranslation(); // Initialize translation
  const [imageFile, setImageFile] = useState(null);

  // Validation schema with Yup
  const validationSchema = Yup.object({
    name: Yup.string().required(t("employment.validation.name")),
    email: Yup.string()
      .email(t("employment.validation.email.invalid"))
      .required(t("employment.validation.email.required")),
    phone: Yup.string().required(t("employment.validation.phone")),
    address: Yup.string().required(t("employment.validation.address")),
    description: Yup.string().required(t("employment.validation.description")),
    image: Yup.mixed().required(t("employment.validation.image")),
  });

  // Handling form submission
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      description: "",
      image: null,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  // Dropzone for handling image drag-and-drop
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];
      setImageFile(file);
      formik.setFieldValue("image", file);
    },
  });

  return (
    <section>
      <GeneralFrame
        content={
          <div
            className={`bg-white text-black rounded-[10px] py-12 text-center  ${
              i18n.language === "ar"
                ? "2xl:text-right xl:text-right lg:text-right md:text-right"
                : "2xl:text-left xl:text-left lg:text-left md:text-left"
            }`}
            dir={i18n.language === "ar" ? "rtl" : "ltr"}
          >
            <div className="">
              <div className="bg-white">
                <p className="2xl:text-3xl xl:text-3xl lg:text-2xl md:text-xl text-lg font-bold 2xl:px-12 xl:px-12 lg:px-12 md:px-8 px-4 mb-5">
                  {t("employment.welcome.message")}
                </p>

                <p className="col-span-6 text-[#000] border-b-[#ec3237] border-b-[6px] w-fit 2xl:mx-12 xl:mx-12 lg:mx-12 md:mx-8 mx-auto pb-4 xl:text-5xl lg:text-5xl md:text-5xl text-3xl font-bold">
                  {t("employment.welcome.title")}
                </p>
                <div className="bg-white flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col font-bold items-center w-f pb-4 2xl:pt-8 xl:pt-8 lg:pt-8 md:pt-6 rounded-[30px]">
                  <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-16 xl:px-16 lg:px-8">
                    <p className="text-justify mt-4 2xl:text-lg xl:text-lg lg:text-base md:text-base text-[14px] leading-loose font-bold 2xl:mx-0 xl:mx-0 lg:mx-0 mx-4 mb-2">
                      <p className="2xl:text-2xl xl:text-2xl lg:text-xl md:text-lg text-xl font-bold">
                        {t("employment.department.title")}
                      </p>
                      {t("employment.department.description")}
                    </p>
                  </div>
                  <div
                    className="center-line-services 2xl:block xl:block lg:block md:block hidden mx-2"
                    style={{ height: "230px" }}
                  ></div>

                  <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-16 xl:px-16 lg:px-8">
                    <p className="text-justify 2xl:text-lg xl:text-lg lg:text-base md:text-base text-[14px] leading-loose font-bold 2xl:mx-0 xl:mx-0 lg:mx-0 mx-4">
                      <p className="2xl:text-2xl xl:text-2xl lg:text-xl md:text-lg text-xl font-bold">
                        {t("employment.training.title")}
                      </p>
                      {t("employment.training.description")}
                    </p>
                  </div>
                </div>
                <img
                  src={banner}
                  className="w-full 2xl:px-16 xl:px-16 lg:px-8 px-4"
                />
                <Formik
                  initialValues={{
                    name: "",
                    email: "",
                    phone: "",
                    address: "",
                    description: "",
                    image: null,
                  }}
                  validationSchema={validationSchema}
                  onSubmit={(values) => {
                    values.image = imageFile;
                    console.log(values);
                  }}
                >
                  {({ setFieldValue }) => (
                    <Form className="2xl:px-16 xl:px-16 lg:px-8 px-4 py-8 2xl:gap-8 xl:gap-8 lg:gap-8 gap-y-8 gap-x-0 grid grid-cols-12 font-semibold text-black">
                      {/* Name */}
                      <div className="2xl:col-span-6 xl:col-span-6 lg:col-span-6 md:col-span-12 col-span-12">
                        <div className="2xl:col-span-6 xl:col-span-6 lg:col-span-6 md:col-span-12 col-span-12">
                          <Field
                            id="name"
                            name="name"
                            placeholder={t("employment.form.name.placeholder")}
                            type="text"
                            className="border-[1.5px] p-2 w-full border-gray-300 placeholder:text-gray-500"
                          />
                          <ErrorMessage
                            name="name"
                            component="div"
                            className="text-red-500"
                          />
                        </div>

                        {/* Email */}
                        <div className="mt-8">
                          <Field
                            id="email"
                            name="email"
                            type="email"
                            placeholder={t("employment.form.email.placeholder")}
                            className="border-[1.5px] p-2 w-full border-gray-300 placeholder:text-gray-500"
                          />
                          <ErrorMessage
                            name="email"
                            component="div"
                            className="text-red-500"
                          />
                        </div>

                        <div className="mt-8 mb-6">
                          <Field
                            id="address"
                            name="address"
                            type="text"
                            placeholder={t(
                              "employment.form.address.placeholder"
                            )}
                            className="border-[1.5px] border-gray-300 p-2 w-full placeholder:text-gray-500"
                          />
                          <ErrorMessage
                            name="address"
                            component="div"
                            className="text-red-500"
                          />
                        </div>
                        <div className="text-gray-700">
                          <label className="block font-bold mb-2 text-sm">
                            {t("employment.form.upload.label")}
                          </label>
                          <div
                            {...getRootProps()}
                            className="border border-gray-400 border-dashed p-8 cursor-pointer"
                          >
                            <input
                              {...getInputProps()}
                              onChange={(e) => {
                                setFieldValue(
                                  "image",
                                  e.currentTarget.files[0]
                                );
                              }}
                            />
                            {imageFile ? (
                              <p>{imageFile.name}</p>
                            ) : (
                              <div className="text-center font-bold text-black">
                                <IoFileTrayOutline className="mx-auto text-2xl mb-2" />
                                <p>{t("employment.form.upload.prompt")}</p>
                              </div>
                            )}
                          </div>
                          <ErrorMessage
                            name="image"
                            component="div"
                            className="text-red-500"
                          />
                        </div>
                      </div>

                      <div className="2xl:col-span-6 xl:col-span-6 lg:col-span-6 md:col-span-12 col-span-12">
                        <div className="2xl:col-span-6 xl:col-span-6 lg:col-span-6 md:col-span-12 col-span-12">
                          <Field
                            id="phone"
                            name="phone"
                            type="text"
                            placeholder={t("employment.form.phone.placeholder")}
                            className="border-[1.5px] p-2 w-full border-gray-300 placeholder:text-gray-500"
                          />
                          <ErrorMessage
                            name="phone"
                            component="div"
                            className="text-red-500"
                          />
                        </div>

                        {/* Textarea */}
                        <div className="mt-8 mb-6">
                          <Field
                            id="description"
                            name="description"
                            as="textarea"
                            rows="6"
                            placeholder={t(
                              "employment.form.description.placeholder"
                            )}
                            className="border-[1.5px] border-gray-300 p-2 w-full placeholder:text-gray-500"
                          />
                          <ErrorMessage
                            name="description"
                            component="div"
                            className="text-red-500"
                          />
                        </div>

                        <div>
                          <button
                            type="submit"
                            className="bg-main text-white py-1 px-6 hover:bg-[#d2282e] rounded-full"
                          >
                            {t("employment.form.submit.button")}
                          </button>
                        </div>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        }
      />
      <img src={GIF_Logo} alt="Shooting GIF Logo" className="mt-6 -mb-6" />
    </section>
  );
};

export default Employment;
