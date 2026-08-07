import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import skills1 from "../assets/skills1.png";
import skills2 from "../assets/skills2.png";
import skills3 from "../assets/skills3.png";
import skills4 from "../assets/skills1.png";
import skills5 from "../assets/skills2.png";
import skills6 from "../assets/skills3.png";
import skills7 from "../assets/skills1.png";
import skills8 from "../assets/skills2.png";
import skills9 from "../assets/skills3.png";
import skills10 from "../assets/skills1.png";

import "./Skills.css";

const Skills = () => {

  const logos = [
        <img src={skills1} alt="" className="w-[100px] h-full object-cover"/>,
        <img src={skills2} alt="" className="w-[130px] h-full object-contain absolute top-[18px]"/>,
        <img src={skills3} alt="" className="w-[110px] h-full object-contain absolute top-[18px]"/>,
        <img src={skills4} alt="" className="w-[100px] h-full object-cover"/>,
        <img src={skills5} alt="" className="w-[100px] h-full object-cover"/>,
        <img src={skills6} alt="" className="w-[100px] h-full object-cover"/>,
        <img src={skills7} alt="" className="w-[100px] h-full object-cover"/>,
        <img src={skills8} alt="" className="w-[100px] h-full object-cover"/>,
        <img src={skills9} alt="" className="w-[100px] h-full object-cover"/>,
        <img src={skills10} alt="" className="w-[100px] h-full object-cover"/>,
    ];

    const [emblaRef] = useEmblaCarousel(
  {
    loop: true,
    dragFree: true,
    align: "start",
  },
  [
    AutoScroll({
      speed: 1.2,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
  ]
);

 return (
  <div className="max-w-7xl mx-auto px-6 py-16">
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {logos.map((logo, index) => (
          <div className="embla__slide" key={index}>
            {logo}
          </div>
        ))}
      </div>
    </div>
  </div>
);
};

export default Skills;