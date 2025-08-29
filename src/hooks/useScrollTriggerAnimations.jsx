import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const useScrollTriggerAnimations = () => {
  const scrollRef = useRef();

  useGSAP(
    () => {
      // Animation for elements moving to the left
      const toTopLeft = gsap.utils.toArray(".toTopLeft");
      toTopLeft.forEach((box) => {
        gsap.fromTo(
          box,
          { x: 100 },
          {
            x: -100,
            y: -100,
            scrollTrigger: {
              trigger: box,
              start: "bottom bottom",
              end: "top -10%",
              scrub: true,
              // markers: true, // Uncomment for debugging
            },
          }
        );
      });

      // Animation for elements moving to the right
      const toRight = gsap.utils.toArray(".toBottomRight");
      toRight.forEach((box) => {
        gsap.fromTo(
          box,
          { x: -100 },
          {
            x: 100,
            y: 100,
            scrollTrigger: {
              trigger: box,
              start: "bottom bottom",
              end: "top -10%",
              scrub: true,
              // markers: true, // Uncomment for debugging
            },
          }
        );
      });

      // Animation for circle elements
      const fromLeftToTopRight = gsap.utils.toArray(".fromLeftToTopRight");
      gsap.fromTo(
        fromLeftToTopRight,
        { y: 400, x: -400 },
        {
          x: 0,
          y: 0,
          scrollTrigger: {
            trigger: fromLeftToTopRight,
            start: "bottom bottom",
            end: "top -10%",
            scrub: true,
            // markers: true, // Uncomment for debugging
          },
        }
      );
    },
    { scope: scrollRef }
  );

  return scrollRef; // Return the ref to attach to the parent element
};

export default useScrollTriggerAnimations;
