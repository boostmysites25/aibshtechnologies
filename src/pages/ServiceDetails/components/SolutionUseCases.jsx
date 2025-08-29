import React from "react";
import { circleImg } from "../../../content/constant";

const SolutionUseCases = ({ content }) => {
  if (!content) return null;
  return (
    <div className="py-14 relative overflow-hidden">
      <img
        data-aos="fade-up-right"
        loading="lazy"
        src={circleImg}
        width={150}
        height={150}
        className="object-contain absolute w-[14rem] h-[14rem] bottom-[-2rem] left-[-2rem] -z-[1]"
        alt=""
      />
      <div className="wrapper">
        <h2 data-aos="fade-up" className="text2 text-primary">
          {content.heading}
        </h2>
        <div className="grid md:grid-cols-2 gap-7 pt-8">
          {content.contentArr.map((item, index, arr) => {
            const isLastItemOdd =
              arr.length % 2 !== 0 && index === arr.length - 1;
            return (
              <div
                key={item.title}
                data-aos="fade-up"
                className={`${
                  isLastItemOdd && "md:col-span-2 md:w-1/2 mx-auto"
                } w-full rounded-3xl text-center border border-white/50 p-5 space-y-4 bg-[#1d1d1d]`}
              >
                <h5 className="text4">{item.title}</h5>
                <div className="space-y-2 flex flex-col items-start max-w-lg mx-auto">
                  {item.list.map((text) => (
                    <div key={text} className="flex gap-2 text-start">
                      <div className="w-2 h-2 min-w-2 rounded-full bg-white mt-2" />{" "}
                      {text}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SolutionUseCases;
