import React from 'react'
import { FaInstagram, FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";

const Footer = () => {
  return (
        <footer className="w-full bg-gradient-to-b from-[#F1EAFF] to-[#FFFFFF] text-gray-800">
            <div className="max-w-7xl mx-auto px-6 pt-16 pb-4 flex flex-col items-center">
                <div className="flex items-center space-x-3 mb-6">
                    <img alt="" className="h-11"
                        src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/dummyLogo/prebuiltuiLogoSquareShapeDark.svg" />
                </div>

                <p className="text-center max-w-xl text-sm font-normal leading-relaxed pb-4">
                    Empowering creators worldwide with the most advanced AI content creation tools. Transform your ideas
                    into reality.
                </p>
                
                {/* Footer Navigation */}
        <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">

          <a
            href="#about"
            className="flex items-center gap-1 text-sm font-semibold uppercase hover:text-[#57E6A8] transition"
          >
            <FiChevronRight size={16} />
            <span>About</span>
          </a>

          <a
            href="#projects"
            className="flex items-center gap-1 text-sm font-semibold uppercase hover:text-[#57E6A8] transition"
          >
            <FiChevronRight size={16} />
            <span>Projects</span>
          </a>

          <a
            href="#skills"
            className="flex items-center gap-1 text-sm font-semibold uppercase hover:text-[#57E6A8] transition"
          >
            <FiChevronRight size={16} />
            <span>Skills</span>
          </a>

          <a
            href="#contact"
            className="flex items-center gap-1 text-sm font-semibold uppercase hover:text-[#57E6A8] transition"
          >
            <FiChevronRight size={16} />
            <span>Contact</span>
          </a>

          <a
            href="#home"
            className="flex items-center gap-1 text-sm font-semibold uppercase hover:text-[#57E6A8] transition"
          >
            <FiChevronRight size={16} />
            <span>Home</span>
          </a>

        </nav>             
            </div>

            <div className="flex items-center justify-center gap-3 mt-6 mb-8">

              {/* Instagram */}
              <a
                href="https://instagram.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-md bg-gray-800 text-white hover:bg-black transition-all duration-300"
              >
                <FaInstagram size={18} />
              </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/919567080872"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="w-10 h-10 flex items-center justify-center rounded-md bg-gray-800 text-white hover:bg-black transition-all duration-300"
                >
                  <FaWhatsapp size={18} />
                </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-md bg-gray-800 text-white hover:bg-black transition-all duration-300"
              >
                <FaLinkedinIn size={18} />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-md bg-gray-800 text-white hover:bg-black transition-all duration-300"
              >
                <FaGithub size={18} />
              </a>

            </div>
            <div className="border-t border-slate-200">
                <div className="max-w-7xl mx-auto px-6 py-6 text-center text-sm font-normal">
                    <a href="https://prebuiltui.com">© Subash AP.</a> All rights reserved
                </div>
            </div>
        </footer>
    );
}

export default Footer