import React, { useState } from "react";
import { faqs } from "../../content/constant";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import img from "../../assets/images/faq.jpeg";

const Faqs = () => {
  const [activeId, setActiveId] = useState(1);

  const toggleFaq = (id) => {
    setActiveId(id);
  };

  return (
    <div className="py-14 bg-white text-black">
      <div className="wrapper grid lg:grid-cols-[55%,1fr] lg:grid-rows-6 gap-7">
        <h2 data-aos="fade-up" className="text1 row-start-1 row-span-1">
          Answer for Questions
        </h2>

        <div className="lg:row-start-1 row-start-2 lg:row-span-6">
          <img
            data-aos="fade-up"
            src={img}
            alt="FAQ"
            loading="lazy"
            className="aspect-video w-full lg:aspect-square lg:h-full object-cover rounded-xl"
          />
        </div>

        <div className="space-y-3 col-start-1 row-start-3 lg:row-start-2 lg:row-span-5">
          {faqs.map((item) => (
            <div
              data-aos="fade-up"
              key={item.id}
              className="overflow-hidden transition-all duration-500"
            >
              <button
                onClick={() => toggleFaq(item.id)}
                className="flex justify-between gap-4 w-full py-1 lg:py-3"
              >
                <p className="desc !font-bold text-start">{item.question}</p>
                <div className="mt-1">
                  {item.id === activeId ? (
                    <AiFillMinusCircle size={20} />
                  ) : (
                    <AiFillPlusCircle size={20} />
                  )}
                </div>
              </button>
              <p
                className={`desc transition-all duration-500 ease-in-out overflow-hidden ${
                  activeId === item.id
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faqs;
