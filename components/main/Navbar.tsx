"use client";

import { Socials } from "@/constants";
import Image from "next/image";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

const navLinks = [
    { href: "#about", label: "About Me" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Reach Me" },
];

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    return (
        <>
        <div className="w-full h-[65px] fixed top-0 left-0 right-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-4 md:px-10 m-0 max-w-[1855px] mx-auto items-center rounded-full">
            <div className="w-full h-full flex flex-row items-center justify-between m-auto px-0 md:px-[10px]">
                <a
                    href="#home"
                    className="h-auto w-auto flex flex-row items-center"
                    onClick={() => setMobileMenuOpen(false)}
                >
                    <Image
                        src="/logo.png"
                        alt="logo"
                        width={50}
                        height={50}
                        className="cursor-pointer hover:animate-spin w-10"
                    />
                    <span className="font-bold ml-[10px] block text-gray-300 z-50 text-sm md:text-lg">
                        Alaa ElGhoul
                    </span>
                </a>

                {/* Desktop nav */}
                <div className="hidden w-3/6 lg:w-3/6 h-full md:flex flex-row items-center justify-between md:mx-auto lg:pr-20">
                    <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
                        {navLinks.map((link) => (
                            <a key={link.href} href={link.href} className="cursor-pointer">
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="flex flex-row items-center gap-3 md:gap-5 text-white">


                    {Socials.map((social) => (
                        <a
                            href={social.link}
                            key={social.name}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={social.name}
                            aria-label={social.name}
                        >
                            <Image
                                src={social.src}
                                alt={social.name}
                                key={social.name}
                                width={24}
                                height={24}
                                className="cursor-pointer hover:animate-spin"
                            />
                        </a>
                    ))}
                                        {/* Hamburger - mobile only */}
                                        <button
                        type="button"
                        className="md:hidden p-2 rounded-lg border border-[#7042f861] bg-[#0300145e] text-gray-200 hover:bg-[#7042f820] transition-colors"
                        aria-label="Toggle menu"
                        onClick={() => setMobileMenuOpen((prev) => !prev)}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {mobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

        </div>

        {/* Blur overlay + menu via portal so fixed covers viewport (navbar's backdrop-blur would trap them) */}
        {mounted && mobileMenuOpen && createPortal(
            <div className="md:hidden fixed left-0 right-0 bottom-0 z-[40]" style={{ top: 65 }}>
                {/* Blur overlay - covers entire content area */}
                <div
                    className="absolute inset-0 backdrop-blur-xl bg-black/30"
                    aria-hidden
                    onClick={() => setMobileMenuOpen(false)}
                />
                {/* Menu drawer on top */}
                <div className="absolute inset-0 flex flex-col items-center pt-10 px-4 pointer-events-none">
                    <div className="flex flex-col items-center justify-start gap-6 pointer-events-auto">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-gray-200 text-lg font-medium py-2 px-4 rounded-lg border border-[#7042f861] bg-[#0300145e] w-full max-w-[200px] text-center hover:bg-[#7042f820] transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>,
            document.body
        )}
        </>
    );
};

export default Navbar;
