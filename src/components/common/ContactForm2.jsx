import React, { useContext } from "react";
import { ImPhone } from "react-icons/im";
import { Link, useNavigate } from "react-router-dom";
import { circleImg, companyDetails } from "../../content/constant";
import { IoLocation, IoMail } from "react-icons/io5";
import { SpinnerContext } from "./SpinnerContext";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const ContactForm2 = ({ isDark }) => {
  const { setLoading } = useContext(SpinnerContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      message: "",
    },
    mode: "all",
  });

  const onSubmit = async (values) => {
    setLoading(true);
    try {
      let body =
        "Full Name : " +
        values.fullName +
        "\n\n" +
        "Email : " +
        values.email +
        "\n\n" +
        "Phone : " +
        values.phone +
        "\n\n" +
        "Message : " +
        values.message +
        "\n\n";

      const data = {
        body,
        name: "AiBik Tech Solutions",
        subject: values.subject,
        to: companyDetails.email,
      };

      const res = await axios.post(
        "https://send-mail-redirect-boostmysites.vercel.app/send-email",
        data
      );

      if (res.data.success) {
        toast.success(res.data.message);
        reset();
        navigate("/thank-you");
      } else {
        toast.error(res.data.message);
      }
    } catch (err) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div
      id="contact"
      className={`${
        isDark ? "bg-black text-white" : "bg-white text-black"
      } text-black py-14 relative overflow-hidden`}
    >
      {isDark ? (
        <img
          data-aos="fade-up-right"
          loading="lazy"
          src={circleImg}
          width={150}
          height={150}
          className="object-contain absolute w-[10rem] h-[10rem] top-[2rem] right-[-2rem] -z-0"
          alt=""
        />
      ) : (
        <div
          data-aos="fade-up-right"
          className="z-0 w-[8rem] md:w-[12rem] h-[8rem] md:h-[12rem] rounded-full bg-[radial-gradient(circle,_#FFFFFF,_#FFFF82)] absolute -bottom-4 -right-4 drop-shadow-2xl"
        ></div>
      )}
      <div className="wrapper flex flex-col-reverse md:grid grid-cols-2 gap-7 relative z-[1]">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-black text-white p-7 border-[2px] border-primary rounded-[2.5rem] space-y-5"
        >
          <div className="grid sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2 gap-4">
            <div className="space-y-1 grid">
              <label className="text-sm">Full Name</label>
              <input
                type="text"
                className="p-3 rounded-[2rem] outline-none border-2 border-primary bg-transparent w-full"
                placeholder="Enter your full name"
                {...register("fullName", {
                  required: "Full Name is required",
                  validate: (value) => {
                    if (value.trim() === "") {
                      return "Full Name is required";
                    }
                  },
                })}
              />
              {errors.fullName && (
                <small className="text-red-500">
                  {errors.fullName.message}
                </small>
              )}
            </div>
            <div className="space-y-1 grid">
              <label className="text-sm">Email</label>
              <input
                type="email"
                className="p-3 rounded-[2rem] outline-none border-2 border-primary bg-transparent w-full"
                placeholder="Enter your email address"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <small className="text-red-500">{errors.email.message}</small>
              )}
            </div>
          </div>
          <div className="space-y-1 grid">
            <label className="text-sm">Phone Number</label>
            <input
              type="tel"
              className="p-3 rounded-[2rem] outline-none border-2 border-primary bg-transparent w-full"
              placeholder="Enter your phone number"
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^\+?[\d\s\-()]{6,14}\d$/,
                  message: "Entered phone number is invalid",
                },
              })}
            />
            <small className="text-red-500">{errors.phone?.message}</small>
          </div>
          <div className="space-y-1 grid">
            <label className="text-sm">Subject</label>
            <input
              type="text"
              className="p-3 rounded-[2rem] outline-none border-2 border-primary bg-transparent w-full"
              placeholder="Enter subject"
              {...register("subject", {
                required: "Subject is required",
                validate: (value) => {
                  if (value.trim() === "") {
                    return "Subject is required";
                  }
                },
              })}
            />
            {errors.subject && (
              <small className="text-red-500">{errors.subject.message}</small>
            )}
          </div>
          <div className="space-y-1 grid">
            <label className="text-sm">Message</label>
            <textarea
              className="p-3 rounded-[2rem] outline-none border-2 border-primary bg-transparent w-full"
              placeholder="Enter your message here"
              {...register("message", {
                required: "Message is required",
                validate: (value) => {
                  if (value.trim() === "") {
                    return "Message is required";
                  }
                },
              })}
            />
            {errors.message && (
              <small className="text-red-500">{errors.message.message}</small>
            )}
          </div>
          <button
            type="submit"
            className="btn w-full bg-white text-black hover:bg-primary border border-primary"
          >
            Submit
          </button>
        </form>
        <div className="space-y-4">
          <h2 className="text1">Ready to Transform Your Vision?</h2>
          <div className="h-2 w-[18rem] bg-black"></div>
          <h5 className="text2">
            Let's Build Something Extraordinary Together!
          </h5>
          <p className="desc">
            Your website is more than an online presence—it’s a gateway to
            success.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div
                className={`${
                  isDark ? "bg-white text-black" : "bg-black text-white"
                } w-12 h-12 rounded-full flex items-center justify-center`}
              >
                <ImPhone size={24} />
              </div>
              <Link
                to={`tel:${companyDetails.phone}`}
                className="desc hover:text-primary1"
              >
                {companyDetails.phone}
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <div
                className={`${
                  isDark ? "bg-white text-black" : "bg-black text-white"
                } w-12 h-12 rounded-full flex items-center justify-center`}
              >
                <IoMail size={24} />
              </div>
              <Link
                to={`mailto:${companyDetails.email}`}
                className="desc hover:text-primary1"
              >
                {companyDetails.email}
              </Link>
            </div>

            <div className="flex gap-2">
              <div
                className={`${
                  isDark ? "bg-white text-black" : "bg-black text-white"
                } w-12 h-12 rounded-full flex items-center justify-center`}
              >
                <IoLocation size={28} />
              </div>
              <p className="desc max-w-[16rem]">{companyDetails.location}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm2;
