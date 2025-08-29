import React from "react";
import { Link } from "react-router-dom";
import { companyDetails, logo } from "../content/constant";
import { IoLocation, IoMail } from "react-icons/io5";
import { ImPhone } from "react-icons/im";
import {
  SlSocialFacebook,
  SlSocialInstagram,
  SlSocialLinkedin,
  SlSocialTwitter,
  SlSocialYoutube,
} from "react-icons/sl";

const ThankYou = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div className="bg-[#1D1D1D] fixed top-0 h-[5rem] sm:h-[6.5rem] flex items-center py-2 left-0 w-full z-[100]">
        <div className="wrapper w-full h-fit flex items-center justify-between gap-10">
          <a data-aos="fade-down" href="/" className="flex items-center gap-2">
            <img
              src={logo}
              alt="logo"
              width={150}
              height={38}
              className="w-[8rem] sm:w-[10rem]"
            />
          </a>
        </div>
      </div>
      <div className="flex-1 flex items-center min-h-[80vh]">
        <div className="wrapper flex flex-col gap-2 items-center translate-y-[3rem]">
          <h1 className="text1 text-primary2">Thank You</h1>
          <p className="text4">Your message has been sent successfully</p>
          <p className="pb-4 text4">We will get back to you soon</p>
          <Link
            to="/"
            className="btn bg-primary text-black hover:bg-black hover:text-white border border-primary"
          >
            Go to Home
          </Link>
        </div>
      </div>
      <div className="bg-white/10 py-12">
        <div className="wrapper flex md:flex-row flex-col flex-wrap justify-between gap-10 md:gap-7">
          <div className="flex flex-col md:items-center gap-3">
            <img src={logo} alt="Logo" className="w-[14rem] object-contain" />
            <div className="flex gap-3">
              <Link
                to={companyDetails.linkedin}
                className="w-8 h-8 flex items-center justify-center bg-primary rounded-full transition-all duration-300 hover:bg-primary/80 text-black"
              >
                <SlSocialLinkedin size={18} strokeWidth={0.5} className="" />
              </Link>
              <Link
                to={companyDetails.instagram}
                className="w-8 h-8 flex items-center justify-center bg-primary rounded-full transition-all duration-300 hover:bg-primary/80 text-black"
              >
                <SlSocialInstagram size={18} strokeWidth={0.5} className="" />
              </Link>
              <Link
                to={companyDetails.facebook}
                className="w-8 h-8 flex items-center justify-center bg-primary rounded-full transition-all duration-300 hover:bg-primary/80 text-black"
              >
                <SlSocialFacebook size={18} strokeWidth={0.5} className="" />
              </Link>
              <Link
                to={companyDetails.x}
                className="w-8 h-8 flex items-center justify-center bg-primary rounded-full transition-all duration-300 hover:bg-primary/80 text-black"
              >
                <SlSocialTwitter size={18} strokeWidth={0.5} className="" />
              </Link>
              <Link
                to={companyDetails.youtube}
                className="w-8 h-8 flex items-center justify-center bg-primary rounded-full transition-all duration-300 hover:bg-primary/80 text-black"
              >
                <SlSocialYoutube size={18} strokeWidth={0.5} className="" />
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h6 className="text4">Contact Us</h6>
            <div className="space-y-4">
              <Link
                to={`mailto:${companyDetails.email}`}
                className="flex items-center gap-2 hover:text-primary"
              >
                <IoMail size={20} className="text-primary" />
                <p className="desc">{companyDetails.email}</p>
              </Link>
              <Link
                to={`tel:${companyDetails.phone}`}
                className="flex items-center gap-2 hover:text-primary"
              >
                <ImPhone size={20} className="text-primary" />
                <p className="desc">{companyDetails.phone}</p>
              </Link>
              <div className="flex gap-2">
                <IoLocation size={23} className="text-primary" />
                <p className="desc max-w-[16rem]">{companyDetails.location}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
