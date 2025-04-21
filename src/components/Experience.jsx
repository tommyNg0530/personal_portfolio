import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "15px solid  #232631" }}
      iconStyle={{
        background: experience.iconBg,
        width: "90px",
        height: "90px",
        boxShadow:
          "0 0 0 4px #fff, inset 0 2px 0 rgba(0,0,0,0.08), 0 3px 0 4px rgba(0,0,0,0.05)",
        marginLeft: "-45px", // Adjust to center the larger icon
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full p-2">
          {" "}
          {/* Added padding */}
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[85%] h-[85%] object-contain" // Increased from 70%
            style={{
              filter: experience.iconInvert ? "invert(1)" : "none", // Optional: add support for inverting icons if needed
              maxWidth: "100%",
              maxHeight: "100%",
            }}
          />
        </div>
      }
    >
      <div>
        <div className="flex justify-between items-center">
          <h3 className="text-white text-[24px] font-bold">
            {experience.company_name}
          </h3>
          <p className="text-white-100 text-[14px] font-semibold bg-tertiary py-1 px-3 rounded-md">
            {experience.date}
          </p>
        </div>
        <h3
          className="text-secondary text-[20px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.title}
        </h3>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline
          lineColor="#915EFF" // Added a custom line color to match your theme
        >
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
