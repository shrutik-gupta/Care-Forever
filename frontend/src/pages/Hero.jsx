import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import herovideo from "../assets/herovideo.mp4";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(
  () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=250%", 
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    });

    tl.to(cardRef.current, {
      width: "100vw",
      height: "100vh",
      maxWidth: "100%",
      borderRadius: 0,
      ease: "power2.inOut",
    }, 0);

    tl.to(textRef.current, {
      y: -200, 
      opacity: 0, 
      ease: "power1.inOut",
    }, 0); 

    // 3. THE "HOLD"
    // Adding an empty tween at the end of the timeline 
    // This forces the video to stay at its final state (100%) for the remaining scroll
    tl.to({}, { duration: 0.5 }); 
  },
  { scope: sectionRef }
);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#ffffe3]"
    >
      <div
        ref={cardRef}
        className="
          relative
          z-10
          w-[85%] md:w-[90%]
          max-w-6xl
          h-[50vh] md:h-[75vh]
          rounded-4xl md:rounded-[3rem]
          overflow-hidden
          shadow-2xl
          will-change-transform
        "
      >
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={herovideo} type="video/mp4" />
        </video>
      </div>

      <h1
        ref={textRef}
        className="
          pointer-events-none
          absolute
          z-20
          top-1/2 left-1/2
          -translate-x-1/2 -translate-y-1/2
          w-full
          px-4
          text-center
          leading-tight
          text-[2.5rem] 
          sm:text-[4rem] 
          md:text-[6rem] 
          lg:text-[8rem]
          font-extrabold
          text-white 
          drop-shadow-sm
        "
      >
        Care Forever <br/> Chemist & Mart
      </h1>
    </section>
  );
};

export default Hero;  