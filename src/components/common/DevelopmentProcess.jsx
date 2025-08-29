import iconImg from "../../assets/images/curved-icon-black.png";

const DevelopmentProcess = ({ content }) => {
  return (
    <section className="relative py-14 text-black bg-white h-[calc(100%+3rem)] overflow-hidden">
      <div
        data-aos="fade-up-right"
        className="z-0 w-[8rem] h-[8rem] rounded-full bg-[radial-gradient(circle,_#FFFFFF,_#FFFF82)] absolute top-[10rem] left-[5rem] drop-shadow-2xl"
      ></div>
      <div
        data-aos="fade-up-right"
        className="z-0 w-[10rem] h-[10rem] rounded-full bg-[radial-gradient(circle,_#FFFFFF,_#FFFF82)] absolute -bottom-4 -right-4 drop-shadow-2xl"
      ></div>
      <div className="wrapper text-center space-y-3 z-[1] relative">
        <h2 data-aos="fade-up" className="text2">
          Our Development Process
        </h2>
        <p data-aos="fade-up" className="desc max-w-4xl mx-auto">
          At Codexa, our development approach ensures precision, efficiency,
          and innovation at every stage. Our process is structured to bring your
          vision to life with a streamlined workflow:
        </p>
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-[6rem] md:gap-7 pt-[5rem] md:pt-[8rem]">
          {content.map((item) => (
            <div
              data-aos="fade-up"
              key={item.title}
              className="bg-primary relative md:first:translate-y-[-4rem] md:last:translate-y-[-4rem] rounded-2xl"
            >
              <img
                src={item.img}
                className="w-[7rem] h-[7rem] rounded-full border-8 border-black absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                alt={item.title}
              />
              <div className="space-y-3 pt-[4.5rem] px-5 pb-5">
                <h3 className="text3">{item.title}</h3>
                <ul className="desc pl-5 list-disc text-start">
                  {item.list.map((text) => (
                    <li key={text}>{text}</li>
                  ))}
                </ul>
                <img
                  src={iconImg}
                  className="w-[2.5rem] mx-auto object-contain"
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevelopmentProcess;
