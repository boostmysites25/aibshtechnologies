import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { useKeenSlider } from "keen-slider/react";
import { circleImg } from "../../content/constant";

const animation = { duration: 40000, easing: (t) => t };

const ServicesSlider = ({ service, data }) => {
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
    <div id='services' className="py-14 relative">
      <img
        data-aos="fade-down-right"
        src={circleImg}
        className="absolute top-0 left-[2rem] w-[13rem] h-[13rem] object-contain aspect-square z-[-1]"
        alt=""
        loading="lazy"
      />
      <div className="wrapper pt-20 grid md:grid-cols-[40%_1fr] gap-6">
        <div className="space-y-4">
          <div
            data-aos="fade-right"
            className="flex items-center gap-4 z-[2] relative"
          >
            <div className="h-[2px] w-[4rem] bg-primary"></div>
            <p className="font-semibold uppercase">our services</p>
          </div>
          <h2 data-aos="fade-right" className="text1 z-[2] relative">
            Our <br />
            <span className="text-primary">{service} Development</span> <br />
            Services
          </h2>
          <div data-aos="fade-right" className="flex gap-5 z-[2] relative">
            <button
              onClick={prevClick}
              className="h-[4rem] w-[4rem] flex items-center justify-center rounded-full p-2 btn bg-black border-2 border-primary text-gray-500 btn hover:bg-primary hover:text-black"
            >
              <GoArrowLeft size={35} />
            </button>
            <button
              onClick={nextClick}
              className="h-[4rem] w-[4rem] flex items-center justify-center rounded-full p-2 btn bg-white border-2 border-primary text-black btn hover:bg-primary1"
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
          {data.map((item) => (
            <div key={item.title} className="keen-slider__slide rounded-2xl">
              <div className="bg-[#1a1a1a] h-full shadow-large p-7 rounded-xl space-y-3">
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  className="aspect-[4/3] object-cover rounded-xl"
                  // className="aspect-[19/9] object-cover rounded-xl"
                />
                <div className="space-y-2 pt-3">
                  <h6 className="text4">{item.title}</h6>
                  {/* <p className="desc">{item.desc}</p> */}
                  <ul className="list-disc pl-5">
                    {item.list.map((text) => (
                      <li key={text}>{text}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSlider;
