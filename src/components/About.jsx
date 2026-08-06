import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaDribbble,
} from "react-icons/fa";

const About = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left Side */}

          <div className="relative flex justify-center">

            {/* Orange Background */}

            <div className="absolute w-[330px] h-[330px] bg-orange-500 rounded-full left-8 top-10"></div>

            {/* Image */}

            <img
              src="/about.png"
              alt="About"
              className="relative w-[330px] z-10"
            />

            {/* Experience Card */}

            <div className="absolute left-0 bottom-8 bg-white shadow-xl rounded-xl px-5 py-3 flex items-center gap-4 z-20">

              <div className="text-3xl font-bold text-orange-500">
                450+
              </div>

              <div className="text-sm text-gray-600">
                Completed <br /> Projects
              </div>

            </div>

          </div>

          {/* Right Side */}

          <div>

            <p className="text-orange-500 uppercase tracking-[5px] font-semibold mb-2">
              About Me
            </p>

            <h2 className="text-5xl font-bold text-gray-900">
              Who is
              <span className="text-orange-500">
                {" "}Oliver Scott?
              </span>
            </h2>

            <p className="text-gray-500 leading-8 mt-6">
              I’m a creative UI/UX designer with years of experience
              creating beautiful websites and digital products.
              I love solving problems through design while delivering
              amazing user experiences.
            </p>

            {/* Stats */}

            <div className="grid grid-cols-3 gap-10 mt-10">

              <div>
                <h3 className="text-4xl font-bold text-gray-900">
                  750+
                </h3>

                <p className="text-gray-500 mt-2">
                  Projects Done
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-gray-900">
                  25Y
                </h3>

                <p className="text-gray-500 mt-2">
                  Experience
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-gray-900">
                  35+
                </h3>

                <p className="text-gray-500 mt-2">
                  Awards Won
                </p>
              </div>

            </div>

            {/* Divider */}

            <div className="border-t my-10"></div>

            {/* Bottom */}

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">

              {/* Signature */}

              <div>
                <h3 className="text-2xl font-bold text-orange-500 italic">
                  Oliver Scott
                </h3>

                <p className="text-gray-500">
                  UI / UX Designer
                </p>
              </div>

              {/* Social */}

              <div className="flex gap-4">

                <a
                  href="#"
                  className="w-11 h-11 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center hover:bg-orange-500 hover:text-white duration-300"
                >
                  <FaFacebookF />
                </a>

                <a
                  href="#"
                  className="w-11 h-11 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center hover:bg-orange-500 hover:text-white duration-300"
                >
                  <FaTwitter />
                </a>

                <a
                  href="#"
                  className="w-11 h-11 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center hover:bg-orange-500 hover:text-white duration-300"
                >
                  <FaInstagram />
                </a>

                <a
                  href="#"
                  className="w-11 h-11 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center hover:bg-orange-500 hover:text-white duration-300"
                >
                  <FaDribbble />
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