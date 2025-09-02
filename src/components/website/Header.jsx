import React, { useState } from "react";
import { Divide as Hamburger } from "hamburger-react";
import { companyDetails, logo } from "../../content/constant";
import Drawer from "react-modern-drawer";
import { Link, useLocation } from "react-router-dom";
import { IoClose } from "react-icons/io5";

// Website links
export const websiteLinks = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "About AiBik Tech Solutions", url: "/about-us" },
  { id: 3, title: "Services", url: "/services" },
  { id: 5, title: "Blogs", url: "/blogs" },
  { id: 6, title: "Contact", url: "/contact-us" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  const toggleDrawer = () => setIsOpen((prevState) => !prevState);

  return (
    <>
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

          {/* Desktop Navigation */}
          <div
            data-aos="fade-down"
            className="hidden lg:flex items-center gap-10"
          >
            {websiteLinks.map((link) => (
              <Link
                key={link.id}
                to={link.url}
                className={`${
                  pathname === link.url ? "text-primary" : "text-white"
                } uppercase text-sm link`}
              >
                {link.title}
              </Link>
            ))}
          </div>
          {/* <div data-aos="fade-down" className="hidden lg:flex">
            <Link
              to={`tel:${companyDetails.phone}`}
              className="group relative w-[70px] h-[70px]"
            >
              <div className="group-hover:bg-[#b81e23] z-[1] flex items-center justify-center absolute top-1/2 left-0 -translate-y-1/2 h-[31px] w-full bg-[#E41B23] rounded-[6px] text-sm transition duration-300">
                Call Us
              </div>
              <div className="group-hover:bg-[#b81e23] absolute left-1/2 top-0 -translate-x-1/2 w-[31px] h-full bg-[#E41B23] rounded-[6px] transition duration-300"></div>
            </Link>
          </div> */}

          {/* Mobile Hamburger Button */}
          <button data-aos="fade-down" className="lg:hidden">
            <Hamburger toggled={isOpen} toggle={setIsOpen} size={28} />
          </button>
        </div>

        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction="right"
          className="py-4 px-10 z-10"
        >
          <div className="mb-6 flex items-center justify-end pr-[.7rem] py-[.4rem]">
            <button onClick={toggleDrawer} className="text-white text-[2.2rem]">
              <IoClose />
            </button>
          </div>
          <div className="flex flex-col gap-6">
            {websiteLinks.map(({ title, url, id }) => (
              <Link
                key={id}
                className="text-3xl text-white font-medium transition-colors duration-300 link"
                to={url}
                onClick={toggleDrawer}
              >
                {title}
              </Link>
            ))}
          </div>
        </Drawer>
      </div>
    </>
  );
};

export default Header;
