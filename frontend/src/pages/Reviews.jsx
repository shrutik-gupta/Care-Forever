import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Reviews = () => {
    const containerRef = useRef(null);
    const cardsRef = useRef([]);

    const data = [
        {
            name: "Amit Kadam",
            text: "The best pharmacy in Mira Road. The owner is incredibly polite and professional; she personally ensures that even hard-to-find medicines are procured within a few hours. Highly recommended for their dedication.",
            image: "https://i.pravatar.cc/150?img=52",
        },
        {
            name: "Sheiya Verma",
            text: "I’ve been coming here for months. The staff's behavior is very respectful, and the lady owner runs the place with such grace. They always explain the dosage clearly, which is very helpful for senior citizens.",
            image: "https://i.pravatar.cc/150?img=10",
        },
        {
            name: "Shrutik Mehta",
            text: "Superb availability of medicines! Even during peak hours, the service is fast. The pharmacist is very knowledgeable and helped me understand the difference between generic and branded options without any pressure.",
            image: "https://i.pravatar.cc/150?img=14",
        },
        {
            name: "Sneha Kulkarni",
            text: "A very clean and well-organized store. The owner is soft-spoken and always greets customers with a smile. It’s rare to find a chemist in Mumbai where the staff is this patient and helpful.",
            image: "https://i.pravatar.cc/150?img=16",
        },
        {
            name: "Aanya Ramchandani",
            text: "Reliable and honest pricing. They have a wide stock of both chronic and acute medications. The politeness of the team makes the whole experience stress-free. My go-to medical store in the locality!",
            image: "https://i.pravatar.cc/150?img=42",
        },
    ];

    useGSAP(() => {
        const cards = cardsRef.current;
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: `+=${cards.length * 800}`,
                pin: true,
                scrub: 1.5,
                anticipatePin: 1,
                invalidateOnRefresh: true,
            },
        });

        cards.forEach((card, index) => {
            tl.fromTo(
                card,
                {
                    x: index % 2 === 0 ? -300 : 300,
                    opacity: 0,
                    scale: 0.95,
                },
                {
                    x: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 1.6,
                    ease: "power2.out",
                }
            );

            tl.to({}, { duration: 1.2 });
        });
    }, []);



    return (
        <section id="reviews"
            ref={containerRef}
            className="h-screen bg-[#4a4a4a] overflow-hidden"
        >
            <div className="
      h-full
      flex flex-col
      lg:flex-row
      items-center
      justify-center
      gap-20
      px-6
      lg:px-20
    ">

                <h2
                    className="
    text-4xl
    sm:text-4xl
    lg:text-5xl
    font-bold
    text-[#fffdf4]
    text-center
    lg:text-left
    leading-tight
  "
                >
                    <span className="block">What our</span>

                    <span className="relative inline-block mt-2 italic text-[#ffffe3]">
                        Customers say
                        <span className="
      absolute
      left-0
      -bottom-2
      w-full
      h-0.75
      bg-[#fffdf4]
      rounded-full
    " />
                    </span>
                    <div>
                        <a
                            href="https://g.page/r/CetUwy70UWMvEBM/review"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 inline-block text-sm italic text-[#ffffe3]/80 hover:text-[#ffffe3] underline underline-offset-4"
                        >
                            Leave us a review
                        </a>
                    </div>
                </h2>

                <div
                    className="relative 
          w-80 h-115
          sm:w-90 sm:h-115
          md:w-105 md:h-130
          lg:w-120 lg:h-140
        "
                >
                    {data.map((item, index) => (
                        <div
                            key={index}
                            ref={(el) => (cardsRef.current[index] = el)}
                            className="
              absolute inset-0
              bg-[#fffdf4]
              rounded-2xl
              shadow-2xl
              p-8
              flex flex-col items-center text-center
              text-gray-800
              will-change-transform
            "
                            style={{ zIndex: index }}
                        >
                            <div className="absolute top-0 left-0 w-full h-6 bg-[#e5e1d8] rounded-t-2xl flex justify-center gap-2 pt-2">
                                <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
                                <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
                                <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
                            </div>

                            <img
                                src={item.image}
                                alt={item.name}
                                className="mt-10 w-20 h-20 rounded-full object-cover shadow-md"
                            />

                            <h3 className="mt-4 text-xl font-semibold">
                                {item.name}
                            </h3>

                            <p className="mt-4 text-lg leading-relaxed font-medium italic">
                                “{item.text}”
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            
        </section>
    );

};

export default Reviews;
