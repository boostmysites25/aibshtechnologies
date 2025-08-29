import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";
import { useKeenSlider } from "keen-slider/react";
import { createUrlParam } from "../../../utils/helper";
import { ourServices } from "../../../content/ourServices";
import useScrollTriggerAnimations from "../../../hooks/useScrollTriggerAnimations";

const animation = { duration: 40000, easing: (t) => t };

const ServicesSection = () => {
  const scrollRef = useScrollTriggerAnimations();
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: true,
    slides: {
      perView: 2,
      spacing: 30,
      origin: "auto",
    },
    breakpoints: {
      "(max-width: 650px)": {
        slides: {
          perView: 1,
          spacing: 10,
        },
      },
      "(min-width: 651px)": {
        slides: {
          perView: 1.5,
          spacing: 20,
        },
      },
      "(min-width: 1024px)": {
        slides: {
          perView: 2,
          spacing: 30,
        },
      },
    },
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });

  const prevClick = () => {
    if (instanceRef.current) {
      instanceRef.current.prev();
    }
  };

  const nextClick = () => {
    if (instanceRef.current) {
      instanceRef.current.next();
    }
  };

  return (
    <div className="bg-white text-black py-14">
      <div className="py-3 border-y border-y-black/20">
        <div
          data-aos="fade-right"
          className="wrapper flex justify-between items-center gap-7"
        >
          <p className="uppercase">services</p>
          <Link to="/services">
            <BsArrowRight
              className="text-primary1"
              strokeWidth={0.5}
              size={30}
            />
          </Link>
        </div>
      </div>
      <div
        ref={scrollRef}
        className="wrapper pt-20 grid md:grid-cols-[40%_1fr] gap-6"
      >
        <div className="relative space-y-4">
          <div className="w-[8rem] h-[8rem] rounded-full bg-[radial-gradient(circle,_#FFFFFF,_#FFFF82)] absolute bottom-[1rem] right-4 sm:right-[4rem] drop-shadow-2xl z-[1]"></div>
          <div
            data-aos="fade-right"
            className="flex items-center gap-4 z-[2] relative"
          >
            <div className="h-[2px] w-[4rem] bg-primary1"></div>
            <p className="font-semibold uppercase">Inspired Services</p>
          </div>
          <h2 data-aos="fade-right" className="text1 z-[2] relative">
            Crafting Digital <br />{" "}
            <span className="text-primary1">Solutions That Drive </span>
            Business Growth
            <br />
          </h2>
          <p>
            At Codexa, every project begins with understanding your unique vision and business objectives. We don't believe in generic solutions — we create custom, intelligent, and scalable digital products that are perfectly aligned with your goals. From concept to deployment, we ensure every solution is built to perform, adapt, and grow with your business.
          </p>
          <div data-aos="fade-right" className="flex gap-5 z-[2] relative">
            <button
              onClick={prevClick}
              className="h-[4rem] w-[4rem] flex items-center justify-center rounded-full p-2 btn bg-black text-gray-500 btn hover:bg-primary hover:text-black"
            >
              <GoArrowLeft size={35} />
            </button>
            <button
              onClick={nextClick}
              className="h-[4rem] w-[4rem] flex items-center justify-center rounded-full p-2 btn bg-white border-2 border-primary1 text-black btn hover:bg-primary1"
            >
              <GoArrowRight size={35} />
            </button>
          </div>
        </div>
        <div
          data-aos="fade-up"
          ref={sliderRef}
          className="keen-slider md:!w-[60vw] py-10 md:px-2"
        >
          {ourServices.map((item) => (
            <div key={item.title} className="keen-slider__slide rounded-2xl">
              <div className="bg-[#eeefef] h-full border border-white shadow-large p-7 rounded-xl space-y-3 hover:bg-primary transition-all duration-300 shadow-black/20">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="aspect-video object-cover rounded-xl"
                />
                <div className="space-y-2 pt-3">
                  <h6 className="text4">{item.title}</h6>
                  <p className="desc">{item.desc}</p>
                  <div className="pt-3">
                    <Link
                      to={`/services/${createUrlParam(item.title)}`}
                      className="btn border border-primary1 hover:border-black text-black uppercase hover:bg-primary1"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
