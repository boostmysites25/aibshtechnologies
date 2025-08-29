import React from "react";
import { circleImg } from "../../../content/constant";

const OurExpertise = ({ content }) => {
  if (!content) return null;
  return (
    <div className="py-14 lg:py-0 lg:-translate-y-[10rem] relative">
      <img
        data-aos="fade-down-right"
        loading="lazy"
        src={circleImg}
        width={150}
        height={150}
        className="object-contain absolute w-[12rem] h-[12rem] top-[2rem] right-[-2rem] -z-[1]"
        alt=""
      />
      <div className="wrapper">
        <div className="max-w-6xl mx-auto space-y-3">
          <h2 data-aos="fade-up" className="text2 text-primary text-center">
            Our Expertise
          </h2>
          <div data-aos="fade-up">
            {content.map((item, i) => (
              <div
                key={item.title}
                className="py-4 md:py-3 px-3 odd:bg-white even:bg-primary text-black flex flex-col md:odd:flex-row md:even:flex-row-reverse items-center gap-5 w-full first:rounded-t-3xl last:rounded-b-3xl"
              >
                <img
                  src={item.img}
                  className="object-cover rounded-full w-[12rem] aspect-[4/3.8]"
                  alt={item.title}
                />
                <div className="space-y-4 md:pl-5">
                  <h5
                    className={`text3 ${
                      i % 2 === 0 ? "text-start" : "md:text-end"
                    }`}
                  >
                    {item.title}
                  </h5>
                  <ul className="list-disc pl-5">
                    {item.list.map((text) => (
                      <li key={text}>{text}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurExpertise;
