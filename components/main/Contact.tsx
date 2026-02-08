"use client";

import { StatefulButton } from "@/components/ui/stateful-button";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";
import { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import { RxGithubLogo, RxLinkedinLogo, RxTwitterLogo } from "react-icons/rx";
import { InView } from "react-intersection-observer";
import ContactText from "../sub/ContactText";

type ButtonState = "idle" | "loading" | "success" | "error";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [emailButtonState, setEmailButtonState] = useState<ButtonState>("idle");
    const [whatsappButtonState, setWhatsappButtonState] = useState<ButtonState>("idle");

    // Replace these with your actual values
    const EMAILJS_SERVICE_ID = 'service_224jnxl';
    const EMAILJS_TEMPLATE_ID = 'template_3ha8v3n';
    const EMAILJS_PUBLIC_KEY = 'rJ_ebiRC0wMzyY8Nj';
    const WHATSAPP_NUMBER = '905347987488';

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Handle Email submission
    const handleEmailSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setEmailButtonState("loading");

        try {
            await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                },
                EMAILJS_PUBLIC_KEY
            );

            setEmailButtonState("success");
            setFormData({ name: "", email: "", subject: "", message: "" });
            
            // Reset button after 3 seconds
            setTimeout(() => {
                setEmailButtonState("idle");
            }, 3000);
        } catch (error) {
            console.error('Error sending email:', error);
            setEmailButtonState("error");
            
            // Reset button after 3 seconds
            setTimeout(() => {
                setEmailButtonState("idle");
            }, 3000);
        }
    };

    // Handle WhatsApp submission
    const handleWhatsAppSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setWhatsappButtonState("loading");

        setTimeout(() => {
            const whatsappMessage = encodeURIComponent(
                `*New Contact Message*\n\n` +
                `*Name:* ${formData.name}\n` +
                `*Email:* ${formData.email}\n` +
                `*Subject:* ${formData.subject}\n\n` +
                `*Message:*\n${formData.message}`
            );
            const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

            window.open(whatsappUrl, '_blank');
            setWhatsappButtonState("success");
            setFormData({ name: "", email: "", subject: "", message: "" });

            // Reset button after 2 seconds
            setTimeout(() => {
                setWhatsappButtonState("idle");
            }, 2000);
        }, 500);
    };

    return (
        <section
            id="contact"
            className="flex flex-col items-center justify-center gap-6 md:gap-3 px-4 h-fit relative overflow-hidden py-40"
            style={{ transform: "scale(0.9)" }}
        >
            <ContactText />

            <div className="flex flex-col lg:flex-row items-start justify-center w-[95%] gap-6 relative z-10">
                {/* Contact Info */}
                <InView triggerOnce={false}>
                    {({ inView, ref }) => (
                        <motion.div
                            ref={ref}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={slideInFromLeft(0.5)}
                            className="w-full lg:w-1/2 rounded-md text-white py-6 px-8 border border-[#7042f88b] opacity-90 bg-[#10132E] bg-opacity-50 backdrop-blur-sm"
                        >
                            <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-2xl font-bold mb-6">
                                Contact Information
                            </h3>

                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-4">
                                    <FaEnvelope className="text-purple-500 text-2xl" />
                                    <div>
                                        <p className="text-gray-400 text-sm">Email</p>
                                        <a
                                            href="mailto:AE7_07@outlook.com"
                                            className="text-gray-200 hover:text-purple-500 transition-colors"
                                        >
                                            AE7_07@outlook.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <FaWhatsapp className="text-purple-500 text-2xl" />
                                    <div>
                                        <p className="text-gray-400 text-sm">WhatsApp</p>
                                        <a
                                            href={`https://wa.me/${WHATSAPP_NUMBER}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-200 hover:text-purple-500 transition-colors"
                                        >
                                            +1 (234) 567-890
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <FaMapMarkerAlt className="text-purple-500 text-2xl" />
                                    <div>
                                        <p className="text-gray-400 text-sm">Location</p>
                                        <p className="text-gray-200">Istanbul, Turkey</p>
                                    </div>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="mt-8">
                                <h4 className="text-gray-400 text-sm mb-4">Connect with me</h4>
                                <div className="flex gap-4">
                                    <a
                                        href="https://github.com/AE707"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 rounded-lg bg-[#7042f8] bg-opacity-20 border border-[#7042f8] border-opacity-30 hover:bg-opacity-40 transition-all"
                                    >
                                        <RxGithubLogo className="text-2xl" />
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/alaaelghoul"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 rounded-lg bg-[#7042f8] bg-opacity-20 border border-[#7042f8] border-opacity-30 hover:bg-opacity-40 transition-all"
                                    >
                                        <RxLinkedinLogo className="text-2xl" />
                                    </a>
                                    <a
                                        href="https://x.com/ae7_alaa"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 rounded-lg bg-[#7042f8] bg-opacity-20 border border-[#7042f8] border-opacity-30 hover:bg-opacity-40 transition-all"
                                    >
                                        <RxTwitterLogo className="text-2xl" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </InView>

                {/* Contact Form */}
                <InView triggerOnce={false}>
                    {({ inView, ref }) => (
                        <motion.div
                            ref={ref}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={slideInFromRight(0.5)}
                            className="w-full lg:w-1/2 rounded-md text-white py-6 px-8 border border-[#7042f88b] opacity-90 bg-[#10132E] bg-opacity-50 backdrop-blur-sm"
                        >
                            <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-2xl font-bold mb-6">
                                Send a Message
                            </h3>

                            <form className="flex flex-col gap-4 relative z-20">
                                <div>
                                    <label htmlFor="name" className="text-gray-400 text-sm mb-2 block">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                        className="w-full px-4 py-3 rounded-lg bg-[#0a0a0f] border border-[#7042f88b] focus:border-[#7042f8] outline-none text-white placeholder-gray-500 transition-colors"
                                        required
                                        disabled={emailButtonState === "loading" || whatsappButtonState === "loading"}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="text-gray-400 text-sm mb-2 block">
                                        Your Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="john@example.com"
                                        className="w-full px-4 py-3 rounded-lg bg-[#0a0a0f] border border-[#7042f88b] focus:border-[#7042f8] outline-none text-white placeholder-gray-500 transition-colors"
                                        required
                                        disabled={emailButtonState === "loading" || whatsappButtonState === "loading"}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="subject" className="text-gray-400 text-sm mb-2 block">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        placeholder="Project Collaboration"
                                        className="w-full px-4 py-3 rounded-lg bg-[#0a0a0f] border border-[#7042f88b] focus:border-[#7042f8] outline-none text-white placeholder-gray-500 transition-colors"
                                        required
                                        disabled={emailButtonState === "loading" || whatsappButtonState === "loading"}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="text-gray-400 text-sm mb-2 block">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={5}
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Your message here..."
                                        className="w-full px-4 py-3 rounded-lg bg-[#0a0a0f] border border-[#7042f88b] focus:border-[#7042f8] outline-none text-white placeholder-gray-500 transition-colors resize-none"
                                        required
                                        disabled={emailButtonState === "loading" || whatsappButtonState === "loading"}
                                    />
                                </div>

                                {/* Stateful Buttons */}
                                <div className="flex flex-col sm:flex-row gap-3">
                                    <StatefulButton
                                        type="button"
                                        onClick={handleEmailSubmit}
                                        state={emailButtonState}
                                        idleText="Send via Email"
                                        loadingText="Sending..."
                                        successText="Email Sent!"
                                        errorText="Failed to Send"
                                        icon={<FaEnvelope />}
                                        className="flex-1"
                                    />

                                    <StatefulButton
                                        type="button"
                                        onClick={handleWhatsAppSubmit}
                                        state={whatsappButtonState}
                                        idleText="Send via WhatsApp"
                                        loadingText="Opening..."
                                        successText="Opening WhatsApp!"
                                        errorText="Failed"
                                        icon={<FaWhatsapp />}
                                        className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 hover:opacity-90"
                                    />
                                </div>

                                <p className="text-gray-400 text-xs text-center">
                                    Choose your preferred contact method
                                </p>
                            </form>
                        </motion.div>
                    )}
                </InView>
            </div>

            {/* Background Video */}
            <div className="hidden md:block w-full h-full absolute top-24 pointer-events-none">
                <div className="w-full h-full z-[-10] opacity-60 absolute flex items-center justify-center bg-cover">
                    <video
                        className="w-full h-auto"
                        preload="false"
                        playsInline
                        loop
                        muted
                        autoPlay
                        src="/cards-video.webm"
                    />
                </div>
            </div>
        </section>
    );
};

export default Contact;
