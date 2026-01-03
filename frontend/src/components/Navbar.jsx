import React, { useState, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import blacklogo from "../assets/blacklogo.png";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);
    const linksRef = useRef([]);

    useGSAP(() => {
        if (isOpen) {
            gsap.to(menuRef.current, {
                clipPath: "circle(150% at 100% 0%)",
                duration: 0.8,
                ease: "power3.inOut",
                pointerEvents: "all",
            });
            gsap.fromTo(
                linksRef.current,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, delay: 0.3 }
            );
        } else {
            gsap.to(menuRef.current, {
                clipPath: "circle(0% at 100% 0%)",
                duration: 0.6,
                ease: "power3.inOut",
                pointerEvents: "none",
            });
        }
    }, [isOpen]);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },  
        { name: "Reviews", href: "/reviews" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <>
            <nav className="fixed top-0 left-0 w-full z-120 px-6 py-2 md:py-0 md:px-12 flex items-center justify-between">

                <div className="relative z-130">
                    <img
                        src={blacklogo}
                        alt="Logo"
                        className={`transition-all duration-300 h-24 object-contain ${isOpen ? "invert brightness-0" : ""}`}
                    />
                </div>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="relative flex flex-col items-end gap-2 z-130 group focus:outline-none p-2 cursor-pointer"
                    aria-label="Toggle Menu"
                >
                    {/* Top Bar */}
                    <span className={`h-0.5 transition-all duration-300 bg-black ${isOpen ? "w-8 bg-white rotate-45 translate-y-2.5" : "w-10"}`} />
                    {/* Middle Bar */}
                    <span className={`h-0.5 w-8 bg-black transition-all duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`} />
                    {/* Bottom Bar */}
                    <span className={`h-0.5 transition-all duration-300 bg-black ${isOpen ? "w-8 bg-white -rotate-45 -translate-y-2.5" : "w-6"}`} />
                </button>
            </nav>

            <div
                ref={menuRef}
                className="fixed inset-0 bg-[#4a4a4a] z-110 flex flex-col items-center justify-center"
                style={{ clipPath: "circle(0% at 100% 0%)", pointerEvents: "none" }}
            >
                <ul className="text-center space-y-6 md:space-y-10">
                    {navLinks.map((link, index) => (
                        <li key={link.name} className="overflow-hidden">
                            <a
                                ref={(el) => (linksRef.current[index] = el)}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="w-screen block text-5xl md:text-8xl font-black text-[#ffffe3] hover:text-[#4a4a4a] hover:bg-[#ffffe3] transition-colors duration-500 ease-in-out uppercase tracking-tighter"
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Navbar;