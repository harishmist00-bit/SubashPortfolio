import React, { useEffect, useRef, useState } from "react";
import { FiMail, FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import {
  FiArrowRight,
  FiGlobe,
  FiLinkedin,
  FiGithub,
} from "react-icons/fi";
import reachImg from "../assets/reach.png";

const GetInTouch = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="bg-[#FAFAFA] px-4 pt-8 pb-12"
    >
      {/* Heading */}
      <div className="mb-15 text-center">

        <h1
          className={`mb-2 text-[36px] font-medium text-slate-900 ${
            visible
              ? "animate__animated animate__fadeInUp"
              : "opacity-0"
          }`}
        >
          Get in Touch
        </h1>

        <p
          className={`mx-auto max-w-xl pb-8 text-[15px] leading-relaxed text-slate-600 ${
            visible
              ? "animate__animated animate__fadeInUp"
              : "opacity-0"
          }`}
          style={{
            animationDelay: "0.2s",
          }}
        >
          Have a project or opportunity in mind? Feel free to reach out and
          let’s connect to build something meaningful together.
        </p>

      </div>
      <div className="mx-auto max-w-7xl px-5 pt-12 pb-12 sm:px-8 lg:px-24 lg:pb-8 lg:pt-0">

      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
      
                {/* ================= LEFT : ILLUSTRATION ================= */}
                <div className="flex items-center justify-center">
                  <img
        src={reachImg}
        alt="Get in touch"
        className="w-full max-w-[500px] object-contain"
      />
                </div>
      
                {/* ================= RIGHT : FORM ================= */}
                <div className="w-full max-w-[500px] justify-self-center rounded-[14px] border border-gray-200 bg-white p-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)] sm:p-7 lg:p-8">
      
                  <form className="space-y-4">
      
                    {/* Name + Email */}
                    <div className="grid gap-4 sm:grid-cols-2">
      
                      {/* Name */}
                      <div>
                        <label className="mb-2 block text-[14px] font-medium text-[#071b41]">
                          Your Name :
                        </label>
      
                        <input
                          type="text"
                          placeholder="Enter name"
                          className="h-[36px] w-full rounded-[10px] border border-gray-200 px-3 text-[14px] text-gray-700 outline-none transition placeholder:text-gray-500 focus:border-orange-400"
                        />
                      </div>
      
                      {/* Email */}
                      <div>
                        <label className="mb-2 block text-[14px] font-medium text-[#071b41]">
                          Mobile :
                        </label>
      
                        <input
                          type="mobile"
                          placeholder="Enter mobile"
                          className="h-[36px] w-full rounded-[10px] border border-gray-200 px-3 text-[14px] text-gray-700 outline-none transition placeholder:text-gray-500 focus:border-orange-400"
                        />
                      </div>
      
                    </div>

                    <div>
                      <label className="mb-2 block text-[14px] font-medium text-[#071b41]">
                        Email :
                      </label>
      
                      <input
                        type="text"
                        placeholder="Enter email"
                        className="h-[36px] w-full rounded-[10px] border border-gray-200 px-3 text-[14px] text-gray-700 outline-none transition placeholder:text-gray-500 focus:border-orange-400"
                      />
                    </div>
      
                    {/* Message */}
                    <div>
                      <label className="mb-2 block text-[14px] font-medium text-[#071b41]">
                        Your Comment :
                      </label>
      
                      <textarea
                        rows="4"
                        placeholder="Message :"
                        className="w-full resize-none rounded-[10px] border border-gray-200 px-3 py-3 text-[14px] text-gray-700 outline-none transition placeholder:text-gray-500 focus:border-orange-400"
                      />
                    </div>
      
                    {/* Button */}
                    <button
                      type="submit"
                      className="mt-1 inline-flex h-[38px] items-center gap-2 rounded-[10px] bg-orange-500 px-5 text-[14px] font-medium text-white transition duration-300 hover:bg-orange-600"
                    >
                      Send Message
                    </button>
      
                  </form>
                </div>
              </div>
       </div>

      {/* Cards */}
      <div className="flex flex-wrap items-center justify-center gap-[14px]">

        {/* Email */}
        <a
          href="mailto:developer.subashap17@gmail.com"
          className={`flex w-[350px] flex-col items-center justify-center rounded-[11px] border border-gray-200 bg-white p-12 transition duration-300 hover:-translate-y-1 hover:shadow-md ${
            visible
              ? "animate__animated animate__zoomIn smooth-animation"
              : "opacity-0"
          }`}
          style={{
            animationDelay: "0.3s",
          }}
        >
          <FiMail
            size={50}
            className="text-black"
          />

          <h3 className="mt-2 text-[18px] font-medium text-black">
            Email
          </h3>

          <p className="mt-2 text-[15px] text-gray-500">
            developer.subashap17@gmail.com
          </p>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/918072854180"
          target="_blank"
          rel="noopener noreferrer"
          className={`flex w-[350px] flex-col items-center justify-center rounded-[11px] border border-gray-200 bg-white p-12 transition duration-300 hover:-translate-y-1 hover:shadow-md ${
            visible
              ? "animate__animated animate__zoomIn smooth-animation"
              : "opacity-0"
          }`}
          style={{
            animationDelay: "0.5s",
          }}
        >
          <FaWhatsapp
            size={50}
            className="text-black"
          />

          <h3 className="mt-2 text-[18px] font-medium text-black">
            Whatsapp
          </h3>

          <p className="mt-2 text-[15px] text-gray-500">
            8072854180
          </p>
        </a>

        {/* Phone */}
        <a
          href="tel:+918072854180"
          className={`flex w-[350px] flex-col items-center justify-center rounded-[11px] border border-gray-200 bg-white p-12 transition duration-300 hover:-translate-y-1 hover:shadow-md ${
            visible
              ? "animate__animated animate__zoomIn smooth-animation"
              : "opacity-0"
          }`}
          style={{
            animationDelay: "0.7s",
          }}
        >
          <FiPhone
            size={50}
            className="text-black"
          />

          <h3 className="mt-2 text-[18px] font-medium text-black">
            Phone
          </h3>

          <p className="mt-2 text-[15px] text-gray-500">
            +91 80728 54180
          </p>
        </a>

      </div>
    </div>
  );
};

export default GetInTouch;