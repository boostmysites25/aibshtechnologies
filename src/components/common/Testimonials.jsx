import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { circleImg, testimonials } from "../../content/constant";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

export default function Testimonials() {
  const swiperRef = useRef(null);

  return (
    <div className="py-14 relative overflow-hidden">
      <img
        data-aos="fade-down-right"
        src={circleImg}
        className="z-[-1] absolute top-[-4rem] left-[-3rem] w-[18rem] h-[18rem] object-contain aspect-square"
        alt=""
      />
      <div data-aos="fade-up" className="wrapper text-center space-y-3 mb-8">
        <h2 className="text1 text-primary2">What People Say?</h2>
        <p className="desc max-w-4xl mx-auto">
          Our testimonials highlight the success stories of healthcare
          organizations that have transformed patient care and operations with
          our innovative, spec-driven solutions. See how Codexa delivers
          measurable results and exceeds client expectations.
        </p>
      </div>
      <Swiper
        data-aos="fade-up"
        effect={"coverflow"}
        modules={[EffectCoverflow, Autoplay]}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500, // Adjust delay (in ms)
          disableOnInteraction: false, // Ensure autoplay continues after interaction
        }}
        slidesPerView={3}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1.1,
            effect: "slide",
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2.5,
            effect: "coverflow",
            spaceBetween: 20,
          },
        }}
      >
        {testimonials.concat(testimonials, testimonials).map((item, index) => (
          <SwiperSlide key={index} className="text-white">
            <div className="flex flex-col justify-center items-center">
              <img
                src={item.image}
                className="z-[1] w-[6rem] h-[6rem] min-w-[6rem] object-cover rounded-full border-4 border-[#726F6F]"
                alt=""
                loading="lazy"
              />
              <div className="content space-y-2 md:min-h-[20rem] lg:min-h-[15rem] flex flex-col justify-between bg-[#726F6F] text-center -translate-y-[3rem] pt-[4rem] rounded-xl p-6">
                <p className="desc">{item.review}</p>
                <div className="space-y-1 pt-4">
                  <p className="text-primary2 text4 !font-medium">
                    {item.name}
                  </p>
                  <div className="text-uppercase">
                    {item.position}, {item.company}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div data-aos="fade-up" className="flex justify-center gap-3 md:mt-6">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="p-2 bg-white rounded-full text-black border-2 border-primary2 transition duration-300 hover:bg-black hover:text-primary2"
        >
          <GoArrowLeft size={20} />
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="p-2 bg-white rounded-full text-black border-2 border-primary2 transition duration-300 hover:bg-black hover:text-primary2"
        >
          <GoArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}
