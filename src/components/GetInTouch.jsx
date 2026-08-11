import React, { useEffect, useRef, useState } from "react";
import { FiMail, FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

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
      className="bg-[#FAFAFA] px-4 py-16"
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