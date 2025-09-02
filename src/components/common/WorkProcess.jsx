import React from "react";
import { circleImg } from "../../content/constant";

const workProcess = [
  {
    id: 1,
    title: "Vision Discovery",
    desc: "We dive deep into understanding your business vision, market challenges, and growth objectives to create a foundation for innovation.",
  },
  {
    id: 2,
    title: "Strategic Planning",
    desc: "Our team develops a comprehensive roadmap with clear milestones, technology stack recommendations, and success metrics tailored to your goals.",
  },
  {
    id: 3,
    title: "Design & Prototyping",
    desc: "We create intuitive user experiences and interactive prototypes, ensuring every design decision aligns with your brand and user needs.",
  },
  {
    id: 4,
    title: "Agile Development",
    desc: "Using cutting-edge technologies and agile methodologies, we build robust, scalable solutions with continuous testing and quality assurance.",
  },
  {
    id: 5,
    title: "Launch & Optimization",
    desc: "We ensure seamless deployment and provide ongoing support, monitoring, and optimization to maximize your solution's performance and ROI.",
  },
];

const WorkProcess = () => {
  return (
    <div className="py-14 relative">
      <img
        data-aos="fade-down-right"
        src={circleImg}
        className="z-[-1] absolute top-[2rem] left-[-2rem] w-[18rem] h-[18rem] object-contain aspect-square"
        alt=""
        loading="lazy"
      />
      <img
        data-aos="fade-up-right"
        src={circleImg}
        className="absolute bottom-0 right-[2rem] w-[11rem] h-[11rem] object-contain aspect-square z-[-1]"
        alt=""
        loading="lazy"
      />
      <div className="wrapper space-y-3">
        <h3 className="text1 text-center">
          Our Proven
          <br />
          <span className="text-primary">Development Journey</span>
        </h3>
        <p
         
          className="desc text-center max-w-4xl mx-auto text-[#FEFEFE]"
        >
          At AiBik Tech Solutions, we follow a proven methodology that transforms your ideas into powerful digital solutions. Our collaborative approach ensures transparency, quality, and measurable results at every stage of development.
        </p>
        <div className="pt-5 flex flex-wrap justify-center gap-5 sm:gap-7 max-w-5xl mx-auto">
          {workProcess.map((item) => (
            <div
             
              key={item.id}
              className="group hover:bg-gradient-to-b from-primary/30 to-primary/10 
              flex flex-col gap-3 p-5 sm:p-8 rounded-2xl border-2 border-white/40 
              transition-colors duration-500 sm:w-[calc(50%-1.5rem)] lg:w-[calc(33.5%-1.5rem)]"
            >
              <h4 className="text3 text-primary1 group-hover:text-white">
                {item.title}
              </h4>
              <p className="text-[#FEFEFE] group-hover:text-[#D6D6A6]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkProcess;
