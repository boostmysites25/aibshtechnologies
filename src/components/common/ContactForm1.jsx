import React, { useContext } from "react";
import { circleImg, companyDetails } from "../../content/constant";
import contactImg from "../../assets/images/contact.png";
import { SpinnerContext } from "./SpinnerContext";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import axios from "axios";

const ContactForm1 = () => {
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
    <div id="contact" className="relative pt-14 pb-4 overflow-hidden">
      <img
        loading="lazy"
        src={circleImg}
        className="z-[-1] absolute top-[-2rem] left-[-2rem] w-[18rem] h-[18rem] object-contain aspect-square"
        alt=""
      />
      <img
        loading="lazy"
        src={circleImg}
        className="absolute bottom-1/4 right-[2rem] w-[11rem] h-[11rem] object-contain aspect-square z-[-1]"
        alt=""
      />
      <div className="wrapper space-y-3">
        <p className="uppercase text-primary text-center">Contact Us</p>
        <h2 className="text1 text-center">Get a Quote Today</h2>
        <div>
          <p className="desc max-w-3xl text-center mx-auto capitalize">
            Contact us today to create a website that transforms the way you
            connect with patients and delivers value at every interaction.
          </p>
        </div>
        <div className="lg:pt-8 grid lg:grid-cols-[55%_1fr]">
          <div className="flex flex-col justify-end h-full">
            <img
              loading="lazy"
              src={contactImg}
              className="object-contain h-full aspect-[6/5]"
              alt="Contact Us"
            />
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="p-5 sm:p-8 border-2 border-primary flex flex-col items-center space-y-5 rounded-xl"
          >
            <div className="flex flex-col gap-1 w-full">
              <label className="text-sm">Full Name</label>
              <input
                type="text"
                className="outline-none p-3 bg-white text-black rounded-lg w-full"
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
            <div className="grid sm:grid-cols-2 gap-5 w-full">
              <div className="flex flex-col gap-1 w-full">
                <label className="text-sm">Email</label>
                <input
                  type="email"
                  className="outline-none p-3 bg-white text-black rounded-lg"
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
              <div className="flex flex-col gap-1 w-full">
                <label className="text-sm">Phone Number</label>
                <input
                  type="tel"
                  className="outline-none p-3 bg-white text-black rounded-lg"
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
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label className="text-sm">Subject</label>
              <input
                type="text"
                className="outline-none p-3 bg-white text-black rounded-lg"
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
            <div className="flex flex-col gap-1 w-full">
              <label className="text-sm">Message</label>
              <textarea
                rows="5"
                className="outline-none p-3 bg-white text-black rounded-lg"
                placeholder="Enter message"
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
              className="btn w-full sm:w-fit bg-primary text-black hover:bg-black hover:text-white border border-primary"
            >
              Book Appointment Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm1;
