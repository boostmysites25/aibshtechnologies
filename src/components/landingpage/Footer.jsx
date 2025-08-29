import React from "react";
import { companyDetails, logo } from "../../content/constant";
import { websiteLinks } from "./Header";
import { Link } from "react-router-dom";
import { IoLocation, IoMail } from "react-icons/io5";
import { ImPhone } from "react-icons/im";
import {
  SlSocialFacebook,
  SlSocialInstagram,
  SlSocialLinkedin,
  SlSocialTwitter,
  SlSocialYoutube,
} from "react-icons/sl";

const Footer = () => {
  return (
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
          <h6 className="text4">Quick Links</h6>
          <ul className="space-y-3">
            {websiteLinks.map((item) => (
              <li
                className="hover:text-primary cursor-pointer desc"
                key={item.id}
              >
                <Link to={item.url}>{item.title}</Link>
              </li>
            ))}
          </ul>
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
  );
};

export default Footer;
