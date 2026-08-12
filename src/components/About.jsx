import React from "react";
import {
  FaWhatsapp,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import about from "../assets/about.png";

const About = () => {
  return (
    <section className="py-20 lg:py-28 bg-white" id="about">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ================= LEFT SIDE ================= */}
          <div className="relative flex justify-center items-center min-h-[500px]">

            {/* Orange Circle */}
            <div
  className="
    absolute
    w-[300px]
    h-[400px]
    sm:w-[350px]
    sm:h-[400px]
    lg:w-[400px]
    lg:h-[450px]
    bg-orange-500
    rounded-t-full
    bottom-[1px]
    left-1/2
    -translate-x-1/2
  "
></div>

            {/* Person Image */}
            <img
              src={about}
              alt="Subash AP - Android Developer"
              className="
                relative
                z-10
                w-[290px]
                sm:w-[340px]
                lg:w-[400px]
                object-contain
                mt-[-10px]
              "
            />

            {/* Completed Projects Card */}
            <div
              className="
                absolute
                z-20
                left-[5%]
                bottom-[55px]
                bg-white
                rounded-xl
                shadow-[0_10px_35px_rgba(0,0,0,0.12)]
                px-5
                py-4
                flex
                items-center
                gap-4
              "
            >
              <div className="text-3xl font-bold text-orange-500">
                5+
              </div>

              <div className="text-sm leading-5 text-gray-600">
                Completed
                <br />
                Projects
              </div>
            </div>

          </div>


          {/* ================= RIGHT SIDE ================= */}
          <div>

            {/* Small Heading */}
            <p
              className="
                text-orange-500
                uppercase
                tracking-[5px]
                font-semibold
                text-sm
                mb-3
              "
            >
              About Me
            </p>


            {/* Main Heading */}
            <h2
              className="
                text-4xl
                sm:text-5xl
                lg:text-[52px]
                leading-tight
                font-bold
                text-gray-900
              "
            >
              Who is{" "}
              <span className="text-orange-500">
                Subash AP?
              </span>
            </h2>


            {/* Description */}
            <p
              className="
                mt-6
                text-gray-500
                text-[16px]
                leading-8
                max-w-xl
              "
            >
              I’m an Android Developer with 1 year of experience
              building reliable and user-friendly mobile applications
              using Java and Android Studio. I enjoy turning ideas into
              clean, functional, and engaging mobile experiences.
            </p>


            {/* ================= STATS ================= */}
            <div
              className="
                grid
                grid-cols-3
                gap-6
                sm:gap-10
                mt-10
              "
            >

              {/* Projects */}
              <div>
                <h3 className="text-3xl sm:text-4xl font-bold text-gray-900">
                  5+
                </h3>

                <p className="mt-2 text-sm sm:text-base text-gray-500">
                  Projects Done
                </p>
              </div>


              {/* Experience */}
              <div>
                <h3 className="text-3xl sm:text-4xl font-bold text-gray-900">
                  1+
                </h3>

                <p className="mt-2 text-sm sm:text-base text-gray-500">
                  Years of Experience
                </p>
              </div>


              {/* Technologies */}
              <div>
                <h3 className="text-3xl sm:text-4xl font-bold text-gray-900">
                  10+
                </h3>

                <p className="mt-2 text-sm sm:text-base text-gray-500">
                  Technologies
                </p>
              </div>

            </div>


            {/* Divider */}
            <div className="border-t border-gray-200 my-9"></div>


            {/* ================= BOTTOM ================= */}
            <div
              className="
                flex
                flex-col
                sm:flex-row
                sm:items-center
                justify-between
                gap-6
              "
            >

              {/* Name */}
              <div>
                <h3
                  className="
                    text-2xl
                    font-bold
                    italic
                    text-orange-500
                  "
                >
                  Subash AP
                </h3>

                <p className="mt-1 text-gray-500">
                  Android Developer
                </p>
              </div>


              {/* Social Icons */}
              <div className="flex gap-3">

                {/* WhatsApp */}
                <a
                  href="#"
                  aria-label="WhatsApp"
                  className="
                    w-11 h-11
                    rounded-full
                    bg-orange-100
                    text-orange-500
                    flex
                    items-center
                    justify-center
                    transition-all
                    duration-300
                    hover:bg-orange-500
                    hover:text-white
                    hover:-translate-y-1
                  "
                >
                  <FaWhatsapp size={17} />
                </a>


                {/* Instagram */}
                <a
                  href="#"
                  aria-label="Instagram"
                  className="
                    w-11 h-11
                    rounded-full
                    bg-orange-100
                    text-orange-500
                    flex
                    items-center
                    justify-center
                    transition-all
                    duration-300
                    hover:bg-orange-500
                    hover:text-white
                    hover:-translate-y-1
                  "
                >
                  <FaInstagram size={17} />
                </a>


                {/* LinkedIn */}
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="
                    w-11 h-11
                    rounded-full
                    bg-orange-100
                    text-orange-500
                    flex
                    items-center
                    justify-center
                    transition-all
                    duration-300
                    hover:bg-orange-500
                    hover:text-white
                    hover:-translate-y-1
                  "
                >
                  <FaLinkedinIn size={17} />
                </a>


                {/* GitHub */}
                <a
                  href="#"
                  aria-label="GitHub"
                  className="
                    w-11 h-11
                    rounded-full
                    bg-orange-100
                    text-orange-500
                    flex
                    items-center
                    justify-center
                    transition-all
                    duration-300
                    hover:bg-orange-500
                    hover:text-white
                    hover:-translate-y-1
                  "
                >
                  <FaGithub size={17} />
                </a>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;