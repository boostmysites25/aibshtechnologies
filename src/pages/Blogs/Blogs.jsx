import React from "react";
import banner from "../../assets/images/banners/aboutus.png";
import { Link } from "react-router-dom";

const Blogs = () => {
  return (
    <>
      <section className="relative w-full aspect-video min-h-[60vh] max-h-[80vh]">
        <div className="absolute inset-0 h-full w-full bg-black/30 z-[-1]"></div>
        <img
          src={banner}
          className="object-cover w-full h-full absolute inset-0 z-[-2]"
          alt="Banner"
        />
        <div className="wrapper flex h-full py-[6rem] md:pt-[8rem] pb-16 items-end">
          <h1 data-aos="fade-right" className="text_xl text-white">
            Codexa Insights & Innovation
          </h1>
        </div>
      </section>
      <section className="py-14">
        <div className="wrapper space-y-[4rem]">
          <h5 className="text-xl text-center">Coming soon...</h5>
        </div>
      </section>
    </>
  );
};

export default Blogs;
