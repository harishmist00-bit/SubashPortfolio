import React, { useState } from "react";
import { FiEye, FiX, FiExternalLink } from "react-icons/fi";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const cards = [
    {
      id: 1,
      image:
        "https://assets.prebuiltui.com/components/feature-sections/ai-avatar-image1.png",
      title: "AI Character Maker",
      description: "Generate any character or images you want.",
      category: "AI Application",
      technologies: ["React", "Python", "OpenAI API"],
      details:
        "AI Character Maker is an AI-powered application that allows users to create unique characters and generate images based on their ideas. Users can enter a description and customize the generated character.",
      features: [
        "AI character generation",
        "Custom character prompts",
        "AI image generation",
        "Responsive user interface",
      ],
      projectLink: "#",
    },

    {
      id: 2,
      image:
        "https://assets.prebuiltui.com/components/feature-sections/ai-avatar-image2.png",
      title: "AI Influencers",
      description:
        "Create a model or AI influencer to grow your brands.",
      category: "AI Application",
      technologies: ["React", "Node.js", "AI API"],
      details:
        "AI Influencers helps users create virtual influencers for social media and digital marketing. The application provides tools for creating characters and generating visual content.",
      features: [
        "AI influencer creation",
        "Custom virtual models",
        "Image generation",
        "Social media content creation",
      ],
      projectLink: "#",
    },

    {
      id: 3,
      image:
        "https://assets.prebuiltui.com/components/feature-sections/ai-avatar-image3.png",
      title: "AI Paintings",
      description:
        "Draw or make a painting with the help of AI.",
      category: "AI Application",
      technologies: ["React", "JavaScript", "AI API"],
      details:
        "AI Paintings allows users to transform their creative ideas into digital artwork using artificial intelligence. Users can describe their artwork and generate unique paintings.",
      features: [
        "AI artwork generation",
        "Creative prompts",
        "Digital painting generation",
        "Simple user interface",
      ],
      projectLink: "#",
    },

    {
      id: 4,
      image:
        "https://assets.prebuiltui.com/components/feature-sections/ai-avatar-image4.png",
      title: "AI Image Upscaler",
      description:
        "Upscale your low quality image to make it in high quality.",
      category: "AI Application",
      technologies: ["React", "Python", "AI Image Processing"],
      details:
        "AI Image Upscaler improves the resolution and quality of low-resolution images using AI-powered image processing techniques.",
      features: [
        "Image resolution enhancement",
        "AI image processing",
        "High-quality image output",
        "Easy image upload",
      ],
      projectLink: "#",
    },

    {
      id: 5,
      image:
        "https://assets.prebuiltui.com/components/feature-sections/ai-avatar-image1.png",
      title: "AI Character Studio",
      description:
        "Create and customize unique AI characters.",
      category: "AI Application",
      technologies: ["React", "Tailwind CSS", "AI API"],
      details:
        "AI Character Studio provides a complete workspace for designing and customizing AI-generated characters.",
      features: [
        "Character customization",
        "AI image generation",
        "Modern dashboard",
        "Responsive design",
      ],
      projectLink: "#",
    },

    {
      id: 6,
      image:
        "https://assets.prebuiltui.com/components/feature-sections/ai-avatar-image2.png",
      title: "Virtual Creator",
      description:
        "Build virtual creators for digital platforms.",
      category: "AI Application",
      technologies: ["React", "Node.js", "MongoDB"],
      details:
        "Virtual Creator is designed to help users build and manage virtual characters for digital platforms and social media.",
      features: [
        "Virtual character creation",
        "Creator management",
        "Content generation",
        "Responsive interface",
      ],
      projectLink: "#",
    },

    {
      id: 7,
      image:
        "https://assets.prebuiltui.com/components/feature-sections/ai-avatar-image2.png",
      title: "Virtual Creator",
      description:
        "Build virtual creators for digital platforms.",
      category: "AI Application",
      technologies: ["React", "Node.js", "MongoDB"],
      details:
        "Virtual Creator is designed to help users build and manage virtual characters for digital platforms and social media.",
      features: [
        "Virtual character creation",
        "Creator management",
        "Content generation",
        "Responsive interface",
      ],
      projectLink: "#",
    },
  ];

  // Open modal
  const openModal = (project) => {
    setSelectedProject(project);
  };

  // Close modal
  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <div className="flex flex-col items-center bg-[#FAFAFA] px-4 pb-12 pt-0">

        {/* Heading */}
        <div className="mb-15 text-center">
          <h1 className="mb-2 text-[36px] font-medium text-slate-900">
            From Idea to App
          </h1>

          <p className="max-w-2xl pb-8 text-[15px] leading-relaxed text-black">
            I transform ideas into high quality Android applications using
            Java and Android Studio, focusing on clean design, performance,
            and user experience.
          </p>
        </div>

        {/* Cards */}
        <div className="flex w-full max-w-6xl flex-wrap items-center justify-center gap-6">

          {cards.map((card) => (
            <div
              key={card.id}
              className="flex cursor-pointer flex-col items-center overflow-hidden rounded-lg border border-zinc-200 bg-white p-4 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
            >
              {/* Image */}
              <img
                src={card.image}
                alt={card.title}
                className="mb-6 w-full max-w-56 object-cover"
              />

              <div className="flex h-full w-full max-w-56 flex-col">

                {/* Title */}
                <h3 className="mb-2 text-base font-medium text-slate-900">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="mb-3 text-xs leading-relaxed text-slate-700">
                  {card.description}
                </p>

                {/* View Button */}
                <div className="mt-auto flex justify-end">
                  <button
                    onClick={() => openModal(card)}
                    className="group inline-flex items-center gap-2 border-0 bg-transparent p-0 text-[15px] text-slate-700 transition-all hover:text-black"
                  >
                    View

                    <FiEye
                      size={18}
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                  </button>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>

      {/* ================= MODAL ================= */}

      {selectedProject && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 px-4 py-6 backdrop-blur-sm"
          onClick={closeModal}
        >
          {/* Modal Box */}
          <div
            className="relative max-h-[90vh] w-full max-w-[650px] overflow-y-auto rounded-2xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >

            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-700 shadow-md transition hover:bg-gray-100 hover:text-black"
            >
              <FiX size={20} />
            </button>

            {/* Project Image */}
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="h-[260px] w-full rounded-t-2xl object-cover"
            />

            {/* Modal Content */}
            <div className="p-6">

              {/* Category */}
              <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
                {selectedProject.category}
              </p>

              {/* Title */}
              <h2 className="mt-1 text-2xl font-semibold text-slate-900">
                {selectedProject.title}
              </h2>

              {/* Description */}
              <p className="mt-4 text-sm leading-7 text-gray-600">
                {selectedProject.details}
              </p>

              {/* Technologies */}
              <div className="mt-6">
                <h3 className="text-sm font-semibold text-slate-900">
                  Technologies
                </h3>

                <div className="mt-3 flex flex-wrap gap-2">
                  {selectedProject.technologies.map(
                    (technology, index) => (
                      <span
                        key={index}
                        className="rounded-full bg-gray-100 px-3 py-1.5 text-xs text-gray-700"
                      >
                        {technology}
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* Features */}
              <div className="mt-6">
                <h3 className="text-sm font-semibold text-slate-900">
                  Key Features
                </h3>

                <ul className="mt-3 space-y-2">
                  {selectedProject.features.map(
                    (feature, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-sm text-gray-600"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-black" />

                        {feature}
                      </li>
                    )
                  )}
                </ul>
              </div>

              {/* Project Button */}
              <div className="mt-7">
                <a
                  href={selectedProject.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800"
                >
                  View Project

                  <FiExternalLink size={16} />
                </a>
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;