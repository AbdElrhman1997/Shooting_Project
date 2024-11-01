import GeneralFrame from "../Components/GeneralFrame";
import GIF_Logo from "../assets/Images/Icons/GIF_Logo.gif";
import banner from "../assets/Images/Banner.jpg";
import * as Yup from "yup";
import { useDropzone } from "react-dropzone";
import { useState } from "react";
import { ErrorMessage, Field, Form, Formik, useFormik } from "formik";
import { IoFileTrayOutline } from "react-icons/io5";
import { useTranslation } from "react-i18next"; // Import translation hook
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const RegisterNow = () => {
  const { t, i18n } = useTranslation(); // Initialize translation
  const navigate = useNavigate();

  // Validation schema with Yup
  const validationSchema = Yup.object({
    name: Yup.string().required(t("employment.validation.name")),
    email: Yup.string()
      .email(t("employment.validation.email.invalid"))
      .required(t("employment.validation.email.required")),
    phone: Yup.string().required(t("employment.validation.phone")),
    message: Yup.string().required(t("employment.validation.description")),
  });

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    axios
      .post(
        `https://admin.shootingads.net/api/userRegisterStore`,
        { ...values, service_provider_id: values?.service_provider_id?.value },
        {
          headers: {
            "Accept-Language": i18n.language,
          },
        }
      )
      .then((response) => {
        console.log(response);
        toast.success(response?.data?.message);
        resetForm();
        navigate(`/`);
      })
      .catch((error) => {
        console.error("There was an error login!", error);
        toast.error(t("error.registrationFailed"));
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

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
                <p className="col-span-6 text-[#000] border-b-[#ec3237] border-b-[6px] w-fit 2xl:mx-12 xl:mx-12 lg:mx-12 md:mx-8 mx-auto pb-4 xl:text-5xl lg:text-5xl md:text-5xl text-3xl font-bold">
                  سجل الآن
                </p>
                <div className="bg-white flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col font-bold items-center w-f pb-4 2xl:pt-8 xl:pt-8 lg:pt-8 md:pt-6 rounded-[30px]">
                  <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full 2xl:px-16 xl:px-16 lg:px-8">
                    <p className="text-justify mt-4 2xl:text-lg xl:text-lg lg:text-base md:text-base text-[14px] leading-loose font-bold 2xl:mx-0 xl:mx-0 lg:mx-0 mx-4 mb-2">
                      سجل الآن واستفد بخدمتك المطلوبة أو المشروع المراد البدء
                      به، مع نخبة من أفضل خبراء إنشاء وإدارة المشاريع والتسويق.
                    </p>
                  </div>
                </div>
                <Formik
                  initialValues={{
                    name: "",
                    email: "",
                    phone: "",
                    message: "",
                  }}
                  validationSchema={validationSchema}
                  onSubmit={onSubmit}
                >
                  {({ setFieldValue, values }) => (
                    <Form className="2xl:px-16 xl:px-16 lg:px-8 px-4 py-8 2xl:gap-8 xl:gap-8 lg:gap-8 gap-y-8 gap-x-0 grid grid-cols-12 font-semibold text-black">
                      {/* Name */}
                      <div className="2xl:col-span-6 xl:col-span-6 lg:col-span-6 md:col-span-12 col-span-12">
                        <div className="2xl:col-span-6 xl:col-span-6 lg:col-span-6 md:col-span-12 col-span-12">
                          <Field
                            id="name"
                            name="name"
                            placeholder={t("employment.form.name.placeholder")}
                            type="text"
                            className="border-[1.5px] p-2 w-full border-gray-300 placeholder:text-gray-500 bg-white"
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
                            className="border-[1.5px] p-2 w-full border-gray-300 placeholder:text-gray-500 bg-white"
                          />
                          <ErrorMessage
                            name="email"
                            component="div"
                            className="text-red-500"
                          />
                        </div>

                        <div className="mt-8 mb-6">
                          <Field
                            id="phone"
                            name="phone"
                            type="text"
                            placeholder={t("employment.form.phone.placeholder")}
                            className="border-[1.5px] p-2 w-full border-gray-300 placeholder:text-gray-500 bg-white"
                          />
                          <ErrorMessage
                            name="phone"
                            component="div"
                            className="text-red-500"
                          />
                        </div>
                        <div className="mt-8 mb-6">
                          <Field
                            id="message"
                            name="message"
                            as="textarea"
                            rows="6"
                            placeholder={t("الرسالة أو الخدمة")}
                            className="border-[1.5px] border-gray-300 p-2 w-full placeholder:text-gray-500 bg-white"
                          />
                          <ErrorMessage
                            name="message"
                            component="div"
                            className="text-red-500"
                          />
                        </div>

                        <div>
                          <button
                            type="submit"
                            className="bg-main text-white py-1 px-6 hover:bg-[#d2282e] rounded-full"
                          >
                            تسجيل
                          </button>
                        </div>
                      </div>
                      <div className="2xl:col-span-6 xl:col-span-6 lg:col-span-6 md:col-span-12 col-span-12">
                        <div
                          style={{
                            width: "100%",
                            height: "450px",
                            border: "0",
                          }}
                        >
                          <iframe
                            title="Google Map"
                            src="https://maps.google.com/maps?q=24.693169,46.685471&z=15&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: "0" }}
                            allowFullScreen
                            loading="lazy"
                          />
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

export default RegisterNow;
