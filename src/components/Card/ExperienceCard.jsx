import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion"; 

const ExperienceCard = ({ experience, index }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="bg-[#1d1836] p-5 rounded-2xl sm:w-[360px] w-full"
    >
      <div className="relative w-full h-[150px]">
        <div className="flex items-center gap-4 mb-4">
          <div className="flex justify-center items-center w-16 h-16 rounded-full bg-black overflow-hidden border-2 border-white/10">
            <img
              src={experience.icon}
              alt={experience.company_name}
              className="w-[60%] h-[60%] object-contain"
            />
          </div>
          <div className="flex flex-col">
            <h3 className="text-white text-[24px] font-bold">
              {experience.title}
            </h3>
            <p
              className="text-secondary text-[16px] font-semibold"
              style={{ margin: 0 }}
            >
              {experience.company_name}
            </p>
          </div>
        </div>
      </div>

      {/* List công việc */}
      <div className="mt-5">
        <ul className="mt-5 list-disc ml-5 space-y-2">
          {experience.points.map((point, i) => (
            <li
              key={`experience-point-${i}`}
              className="text-white-100 text-[14px] pl-1 tracking-wider"
            >
              {point}
            </li>
          ))}
        </ul>
        <p className="text-secondary text-[12px] mt-4 text-right">
          {experience.date}
        </p>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
