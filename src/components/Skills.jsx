import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

import skills1 from "../assets/skills1.png";
import skills2 from "../assets/skills2.png";
import skills3 from "../assets/skills3.png";
import skills4 from "../assets/skills4.png";
import skills5 from "../assets/skills5.png";
import skills6 from "../assets/skills6.png";
import skills7 from "../assets/skills7.png";
import skills8 from "../assets/skills8.png";
import skills9 from "../assets/skills9.png";
import skills10 from "../assets/skills10.png";
import skills11 from "../assets/skills11.png";

import "./Skills.css";

const Skills = () => {
  const logos = [
    skills1,
    skills2,
    skills3,
    skills4,
    skills5,
    skills6,
    skills7,
    skills8,
    skills9,
    skills10,
    skills11,
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
    <section className="max-w-7xl mx-auto skills-section pt-28 pb-16">
      <div className="skills-embla" ref={emblaRef}>
        <div className="skills-container">
          {logos.map((logo, index) => (
            <div className="skills-slide" key={index}>
              <img src={logo} alt={`Skill ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;