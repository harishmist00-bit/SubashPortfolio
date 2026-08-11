import React, { useState } from "react";
import {
  FaGraduationCap,
  FaBriefcase,
} from "react-icons/fa";
import { FiCalendar } from "react-icons/fi";

const Qualification = () => {
  const [activeTab, setActiveTab] = useState("education");

  return (
    <section
      id="qualification"
      className="bg-[#FAFAFA] px-4 py-16"
    >
      {/* Heading */}
      <div className="text-center">
        <h1 className="text-[36px] font-semibold text-slate-900">
          My personal journey
        </h1>

        <p className="mt-1 text-[13px] text-slate-500">
          My personal journey
        </p>
      </div>

      {/* Tabs */}
      <div className="mt-16 flex justify-center gap-8">
        <button
          onClick={() => setActiveTab("education")}
          className={`flex items-center gap-2 text-[18px] font-medium transition ${
            activeTab === "education"
              ? "text-black"
              : "text-slate-500"
          }`}
        >
          <FaGraduationCap size={20} />
          Education
        </button>

        <button
          onClick={() => setActiveTab("experience")}
          className={`flex items-center gap-2 text-[18px] font-medium transition ${
            activeTab === "experience"
              ? "text-black"
              : "text-slate-500"
          }`}
        >
          <FaBriefcase size={20} />
          Experience
        </button>
      </div>

      {/* Timeline */}
      <div className="mx-auto mt-10 max-w-[620px]">

        {activeTab === "education" ? (
          <div className="relative">

            {/* Vertical Line */}
            <div className="absolute left-1/2 top-0 h-[235px] w-[1px] -translate-x-1/2 bg-gray-400" />

            {/* Education 1 */}
            <div className="relative grid min-h-[74px] grid-cols-2">

              <div className="pr-8 text-right">
                <h3 className="text-[14px] font-medium text-slate-900">
                  B.Tech in CSE
                </h3>

                <p className="mt-1 text-[12px] text-slate-500">
                  VTU – Bangalore
                </p>

                <div className="mt-3 flex items-center justify-end gap-1 text-[12px] text-slate-500">
                  <FiCalendar size={12} />
                  2019 – 2023
                </div>
              </div>

              {/* Dot */}
              <span className="absolute left-1/2 top-0 h-[12px] w-[12px] -translate-x-1/2 rounded-full bg-gray-500" />

              <div />
            </div>

            {/* Education 2 */}
            <div className="relative grid min-h-[74px] grid-cols-2">

              <div />

              <div className="pl-8 pt-1">
                <h3 className="text-[14px] font-medium text-slate-900">
                  Higher Secondary
                </h3>

                <p className="mt-1 text-[12px] text-slate-500">
                  Kerala Board
                </p>

                <div className="mt-3 flex items-center gap-1 text-[12px] text-slate-500">
                  <FiCalendar size={12} />
                  2017 – 2019
                </div>
              </div>

              {/* Dot */}
              <span className="absolute left-1/2 top-0 h-[12px] w-[12px] -translate-x-1/2 rounded-full bg-gray-500" />
            </div>

            {/* Education 3 */}
            <div className="relative grid min-h-[74px] grid-cols-2">

              <div className="pr-8 pt-1 text-right">
                <h3 className="text-[14px] font-medium text-slate-900">
                  SSLC
                </h3>

                <p className="mt-1 text-[12px] text-slate-500">
                  A K M – Kerala
                </p>

                <div className="mt-3 flex items-center justify-end gap-1 text-[12px] text-slate-500">
                  <FiCalendar size={12} />
                  2016 – 2017
                </div>
              </div>

              {/* Dot */}
              <span className="absolute left-1/2 top-0 h-[12px] w-[12px] -translate-x-1/2 rounded-full bg-gray-500" />

              <div />
            </div>
          </div>
        ) : (
          /* Experience */
          <div className="relative">

            <div className="absolute left-1/2 top-0 h-[235px] w-[1px] -translate-x-1/2 bg-gray-400" />

            {/* Experience 1 */}
            <div className="relative grid min-h-[90px] grid-cols-2">

              <div className="pr-8 text-right">
                <h3 className="text-[14px] font-medium text-slate-900">
                  Android Developer
                </h3>

                <p className="mt-1 text-[12px] text-slate-500">
                  Software Company
                </p>

                <div className="mt-3 flex items-center justify-end gap-1 text-[12px] text-slate-500">
                  <FiCalendar size={12} />
                  2024 – Present
                </div>
              </div>

              <span className="absolute left-1/2 top-0 h-[12px] w-[12px] -translate-x-1/2 rounded-full bg-gray-500" />

              <div />
            </div>

            {/* Experience 2 */}
            <div className="relative grid min-h-[90px] grid-cols-2">

              <div />

              <div className="pl-8">
                <h3 className="text-[14px] font-medium text-slate-900">
                  Junior Developer
                </h3>

                <p className="mt-1 text-[12px] text-slate-500">
                  Software Company
                </p>

                <div className="mt-3 flex items-center gap-1 text-[12px] text-slate-500">
                  <FiCalendar size={12} />
                  2023 – 2024
                </div>
              </div>

              <span className="absolute left-1/2 top-0 h-[12px] w-[12px] -translate-x-1/2 rounded-full bg-gray-500" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Qualification;