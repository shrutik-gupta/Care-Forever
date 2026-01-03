import React from 'react';
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HeartHandshake, Stethoscope, Users } from "lucide-react";
import aboutBg from '../assets/owner.png'
const About = () => {
  const data = [
    {
      id: 1,
      icon: HeartHandshake,
      title: "Our Beginning",
      text: "Founded in 2023, our medical store began with a simple yet powerful vision—to make quality healthcare accessible and trustworthy for everyone. Started by a woman entrepreneur with a deep commitment to community well-being, the store was built on values of care, responsibility, and integrity. What began as a small initiative has grown into a reliable healthcare destination, driven by the belief that every individual deserves safe and affordable medicines."
    },
    {
      id: 2,
      icon: Stethoscope,
      title: "Care Beyond Medicines",
      text: "From the very beginning, our focus has been on more than just dispensing medicines. We believe in educating and guiding our customers with the right information, ensuring clarity on prescriptions, dosage, and usage. Our trained pharmacists take the time to listen, understand individual needs, and provide thoughtful support, creating a warm and trustworthy environment for every customer."
    },
    {
      id: 3,
      icon: Users,
      title: "Growing With the Community",
      text: "Today, we proudly serve our community with a wide range of prescription medicines, over-the-counter products, wellness essentials, and healthcare supplies. As we continue to grow, our mission remains the same—to combine professional healthcare service with compassion and personal care. We aim to evolve with changing healthcare needs while staying rooted in the values that inspired our journey in 2023."
    },
  ];

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".cards-wrapper",
        start: "top top",
        end: "bottom top",
        pin: true,
        scrub: 1,
      }
    });

    tl.to(".card", {
      height: 130,
      stagger: 0.5,
    });
  });

  return (
    <div
      className="
        cards-wrapper
        relative
        min-h-screen
        px-4 sm:px-8 md:px-16
        py-12 md:py-16
        bg-[#ffffe3]
        text-[#1f2937]
        overflow-hidden
      "
    >
     <div
  className="
   absolute inset-0
    bg-no-repeat
    opacity-30
    pointer-events-none
    [--bgSize:800px]
    md:[--bgSize:600px]
  "
  style={{
    backgroundImage: `url(${aboutBg})`,
    backgroundSize: "var(--bgSize)",
    backgroundPosition: "center bottom"
  }}
/>


      {/* 🔹 Content */}
      <div className="relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-12 md:mb-16">
          About Us
        </h1>

        {data.map((card) => {
          const Icon = card.icon;

          return (
            <div
              key={card.id}
              className="
                card
                p-4 sm:p-6
                border-b border-black/20
                overflow-hidden
              "
            >
              {/* Header */}
              <div className="flex gap-3 sm:gap-4 items-center h-16 sm:h-20">
                <h1 className="text-lg sm:text-xl -translate-y-3 sm:-translate-y-4 opacity-60">
                  {card.id}
                </h1>
                <h1 className="text-xl sm:text-3xl font-semibold">
                  {card.title}
                </h1>
              </div>

              {/* Content */}
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 sm:gap-8">
                <p className="max-w-2xl text-sm sm:text-base md:text-lg opacity-80">
                  {card.text}
                </p>

                {/* Icon */}
                <div
                  className="
                    w-32 h-32
                    sm:w-40 sm:h-40
                    md:w-56 md:h-56
                    flex items-center justify-center
                    rounded-full
                    border border-black/15
                    bg-white/60
                    shrink-0
                  "
                >
                  <Icon
                    size={48}
                    className="sm:size-16 md:size-24 text-[#6d8196]"
                    strokeWidth={1.5}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;
