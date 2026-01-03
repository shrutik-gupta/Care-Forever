import React, { useRef } from 'react';
import blacklogo from '../assets/blacklogo.png';
import whitelogo from '../assets/whitelogo.png';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ScrollComponent = () => {
  const containerRef = useRef(null);
  const darkLayerRef = useRef(null);

  useGSAP(() => {
    // We use matchMedia to adjust the "end" duration for shorter mobile screens
    let mm = gsap.matchMedia();

    mm.add({
      isDesktop: "(min-width: 1024px)",
      isMobile: "(max-width: 1023px)"
    }, (context) => {
      let { isMobile } = context.conditions;

      gsap.fromTo(
        darkLayerRef.current,
        { clipPath: "inset(0% 100% 0% 0%)" },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: isMobile ? "+=100%" : "+=150%", // Snappier on mobile
            scrub: true,
            pin: true,
            anticipatePin: 1,
          },
        }
      );
    });
  }, { scope: containerRef });

  const Content = ({ textColor, lineColor, logo }) => (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 w-full max-w-7xl mx-auto px-6">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-center text-center lg:text-left">
        <h1 className={`text-[1.8rem] sm:text-4xl lg:text-6xl font-bold ${textColor} leading-tight`}>
          Medicines <br /> & More
        </h1>
        
        <span className={`w-20 h-0.5 lg:w-0.75 lg:h-48 ${lineColor} opacity-50`}></span>
        
        <h1 className={`text-[1.8rem] sm:text-4xl lg:text-6xl font-bold ${textColor} leading-tight`}>
          At your <br /> doorsteps
        </h1>
      </div>

      <div className="w-32 sm:w-40 lg:w-64 shrink-0">
        <img src={logo} alt="logo" className="w-full h-auto object-contain" />
      </div>
    </div>
  );

  return (
    <div ref={containerRef} className="relative h-screen w-full overflow-hidden">
      
      <div className="absolute inset-0 flex items-center justify-center bg-[#f2f2f2]">
        <Content textColor="text-black" lineColor="bg-black" logo={blacklogo} />
      </div>

      <div 
        ref={darkLayerRef} 
        className="absolute inset-0 flex items-center justify-center bg-[#6d8196] z-10 will-change-[clip-path]"
      >
        <Content textColor="text-[#f2f2f2]" lineColor="bg-[#f2f2f2]" logo={whitelogo} />
      </div>
    </div>
  );
};

export default ScrollComponent;