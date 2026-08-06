import { Menu } from "lucide-react";
import { Play, Download } from "lucide-react";

const Navbar = () => {
  return (
    <header className="w-full flex justify-center pt-6 absolute top-0 left-0 z-50">
      <div className="w-[90%] max-w-7xl bg-[#171c27] flex items-center justify-between h-20">

        {/* Logo */}

        <div className="flex items-center">
          <div className="bg-[#57E6A8] h-20 w-20 flex items-center justify-center">
            <span className="text-4xl font-black text-black">S</span>
          </div>

          <h1 className="text-3xl font-bold px-6 tracking-wide">
            SUBASH
          </h1>
        </div>

        {/* Navigation */}

        <nav className="hidden lg:flex items-center gap-12 uppercase text-sm font-semibold tracking-wider">

          <a href="#" className="hover:text-[#57E6A8] transition">
            Home
          </a>

          <a href="#" className="hover:text-[#57E6A8] transition">
            About
          </a>

          <a href="#" className="hover:text-[#57E6A8] transition">
            Skills
          </a>

          <a href="#" className="hover:text-[#57E6A8] transition">
            Projects
          </a>

          <a href="#" className="hover:text-[#57E6A8] transition">
            Experience
          </a>

          <a href="#" className="hover:text-[#57E6A8] transition">
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