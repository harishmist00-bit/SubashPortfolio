import { useEffect, useState } from "react";
import { Download } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`
        w-full
        flex justify-center
        fixed left-0 z-50
        text-white
        transition-all duration-300
        ${scrolled ? "top-0 pt-0" : "top-0 pt-6"}
      `}
    >
      <div
        className={`
          w-[90%] max-w-7xl
          bg-[#171c27]
          flex items-center justify-between
          h-20
          transition-all duration-300
          ${scrolled ? "rounded-none w-full max-w-none" : ""}
        `}
      >

        {/* Logo */}
        <div className="flex items-center">
          <div className="bg-[#57E6A8] h-20 w-20 flex items-center justify-center">
            <span className="text-4xl font-black text-black">
              S
            </span>
          </div>

          <h1 className="text-3xl font-bold px-6 tracking-wide">
            SUBASH
          </h1>
        </div>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-12 uppercase text-sm font-semibold tracking-wider">

          <a
            href="#"
            className="hover:text-[#57E6A8] transition"
          >
            Home
          </a>

          <a
            href="#about"
            className="hover:text-[#57E6A8] transition"
          >
            About
          </a>

          <a
            href="#skills"
            className="hover:text-[#57E6A8] transition"
          >
            Skills
          </a>

          <a
            href="#projects"
            className="hover:text-[#57E6A8] transition"
          >
            Projects
          </a>

          <a
            href="#experience"
            className="hover:text-[#57E6A8] transition"
          >
            Experience
          </a>

          <a
            href="#contact"
            className="hover:text-[#57E6A8] transition"
          >
            Contact
          </a>

          <button className="bg-[#57E6A8] text-black px-10 py-5 font-bold flex items-center gap-3 hover:scale-105 duration-300">
            Hire Me
            <Download size={18} />
          </button>

        </nav>

      </div>
    </header>
  );
};

export default Navbar;