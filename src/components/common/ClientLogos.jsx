import { useKeenSlider } from "keen-slider/react";
import img1 from "../../assets/images/brandlogos/1.png";
import img2 from "../../assets/images/brandlogos/2.png";
import img3 from "../../assets/images/brandlogos/3.png";
import img4 from "../../assets/images/brandlogos/4.png";
import img5 from "../../assets/images/brandlogos/5.png";
import img6 from "../../assets/images/brandlogos/6.png";
import img7 from "../../assets/images/brandlogos/7.png";
import img8 from "../../assets/images/brandlogos/8.png";
import img9 from "../../assets/images/brandlogos/9.png";
import img10 from "../../assets/images/brandlogos/10.png";

const animation = { duration: 10000, easing: (t) => t };

const ClientLogos = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: false,
    slides: {
      perView: 4,
      spacing: 30,
    },
    breakpoints: {
      "(max-width: 450px)": {
        slides: {
          perView: 2,
          spacing: 30,
        },
      },
      "(min-width: 1024px)": {
        slides: {
          perView: 5,
          spacing: 30,
        },
      },
      "(min-width: 1280px)": {
        slides: {
          perView: 6,
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
  return (
    <div className="py-14">
      <div className="absolute top-0 w-full h-full bg-background/70"></div>
      <div className="relative z-10">
        <div data-aos="fade-up" className="wrapper">
          <h2 className="text1 mx-auto text-center">
            Our <span className="text-primary">Trusted</span> Clients
          </h2>
        </div>
        <div data-aos="fade-up" ref={sliderRef} className="keen-slider mt-9">
          {[img1, img2, img3, img4, img5, img6, img7, img8, img9, img10].map(
            (img, index) => (
              <div
                key={index}
                className="keen-slider__slide flex justify-center px-3 bg-white rounded-full"
              >
                <img
                  width="200"
                  height="100"
                  loading="lazy"
                  src={img}
                  alt="Client Logo"
                  className="object-contain"
                />
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default ClientLogos;
