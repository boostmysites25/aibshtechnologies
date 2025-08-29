import { circleImg, industries, moonShapeImg } from "../../content/constant";
import useScrollTriggerAnimations from "../../hooks/useScrollTriggerAnimations";

const IndustriesSection = () => {
  const scrollRef = useScrollTriggerAnimations();
  return (
    <section
      ref={scrollRef}
      className="max-h-fit bg-[#242424] relative overflow-hidden"
    >
      <div className="pt-14 wrapper">
        <img
          loading="lazy"
          src={moonShapeImg}
          width={400}
          height={400}
          className="toTopLeft object-contain absolute w-[28rem] h-[20rem] top-[-7.5rem] left-[-10rem] -z-0"
          alt=""
        />
        <img
          loading="lazy"
          src={moonShapeImg}
          width={400}
          height={400}
          className="toBottomRight object-contain absolute w-[28rem] h-[20rem] bottom-[-7.5rem] right-[-9rem] scale-x-[-1] scale-y-[-1] -z-0"
          alt=""
        />
        <img
          data-aos="fade-down-right"
          loading="lazy"
          src={circleImg}
          width={150}
          height={150}
          className="fromLeftToTopRight object-contain absolute w-[10rem] h-[10rem] top-[2rem] right-[-2rem] -z-0"
          alt=""
        />
        <h2 data-aos="fade-up" className="text1 text-center">
          Transforming <span className="text-primary">Industries</span> Through Technology
        </h2>
      </div>
      <div className="relative h-full pb-7 xl:pb-10">
        <div className="z-0 absolute top-0 h-1/2 w-full"></div>
        <div className="z-0 absolute top-1/2 h-1/2 w-full bg-black"></div>
        <div className="wrapper grid sm:grid-cols-2 xl:grid-cols-4 gap-7 pt-10">
          {industries.slice(0, 4).map((item) => (
            <div key={item.id} data-aos="fade-up" className="h-full">
              <div className="relative group backdrop-blur-lg space-y-5 border border-white/20 p-5 rounded-[1rem] shadow-large shadow-black/20 hover:bg-primary hover:text-black transition-all duration-500 h-full">
                <div className="bg-white/5 flex justify-center items-center w-[3rem] h-[3rem] rounded-full border-2 border-white/10 group-hover:bg-black group-hover:border-white transition-all duration-500 ">
                  <img
                    loading="lazy"
                    alt={item.title}
                    src={item.image}
                    width={50}
                    height={50}
                    className="w-[1.5rem] h-[1.5rem] object-contain"
                  />
                </div>
                <h6 className="text4">{item.title}</h6>
                <p className="desc text-[#A4B4C3] group-hover:text-black">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-black lg:h-[30rem] pb-14 lg:pb-0">
        <div className="relative h-full">
          <div className="z-0 absolute top-0 h-1/3 w-full bg-[#242424]"></div>
          <div className="z-[-1] absolute top-1/2 h-2/3 w-full bg-black"></div>
          <div className="wrapper grid sm:grid-cols-2 xl:grid-cols-3 xl:max-w-5xl gap-7 xl:pt-4">
            {industries.slice(4, 7).map((item) => (
              <div key={item.id} data-aos="fade-up" className="h-full">
                <div className="relative group backdrop-blur-lg space-y-5 border border-white/20 p-5 rounded-[1rem] shadow-large shadow-black/20 hover:bg-primary hover:text-black transition-all duration-500 h-full">
                  <div className="bg-white/5 flex justify-center items-center w-[3rem] h-[3rem] rounded-full border-2 border-white/10 group-hover:bg-black group-hover:border-white transition-all duration-500">
                    <img
                      loading="lazy"
                      alt={item.title}
                      src={item.image}
                      width={50}
                      height={50}
                      className="w-[1.5rem] h-[1.5rem] object-contain"
                    />
                  </div>
                  <h6 className="text4">{item.title}</h6>
                  <p className="desc text-[#A4B4C3] group-hover:text-black">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
