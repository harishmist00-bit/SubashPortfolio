import { Play, Download } from "lucide-react";
import profile from "../assets/profile.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center">

      <div className="max-w-7xl mx-auto px-10 grid lg:grid-cols-2 gap-10 items-center">

        {/* Left */}

        <div>

          <h3 className="text-5xl lg:text-7xl font-black leading-tight">
            HI, I'M ZYAN!
          </h3>

          <h1 className="text-6xl lg:text-8xl font-black mt-2">
            CREATIVE
            <span className="text-[#57E6A8]">PLAYER</span>
          </h1>

          <p className="text-gray-400 mt-8 leading-9 text-lg max-w-xl">
            I'm a passionate UI/UX designer with a mission to create
            delightful digital experiences. With a strong foundation in
            design principles and a keen eye for detail.
          </p>

          <div className="flex items-center gap-8 mt-10">

            <button className="bg-[#57E6A8] text-black px-10 py-5 font-bold flex items-center gap-3 hover:scale-105 duration-300">
              Download CV
              <Download size={18} />
            </button>

            <div className="flex items-center gap-4 cursor-pointer">

              <div className="w-16 h-16 rounded-full bg-[#57E6A8] flex items-center justify-center">

                <Play
                  className="text-black ml-1"
                  fill="black"
                />

              </div>

              <span className="text-lg">
                Watch The Video
              </span>

            </div>

          </div>

        </div>

        {/* Right */}

        <div className="flex justify-center">

          <div className="relative">

            {/* Outer Hexagon */}

            <div
              className="w-[500px] h-[560px] border-[12px] border-[#57E6A8] overflow-hidden"
              style={{
                clipPath:
                  "polygon(25% 5%,75% 5%,100% 30%,100% 70%,75% 95%,25% 95%,0% 70%,0% 30%)",
              }}
            >

              <img
                src={profile}
                alt=""
                className="w-full h-full object-cover"
              />

            </div>

          </div>
        </div>

      </div>

    </section>
  );
};

export default Hero;