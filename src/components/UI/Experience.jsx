import React from "react";
import { motion } from "framer-motion";

import { styles } from "../../styles"; 
import { experiences } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { textVariant } from "../../utils/motion";
import ExperienceCard from "../Card/ExperienceCard";

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

      <div className="mt-20 flex flex-col gap-10">
        {experiences.map((experience, index) => (
          <TimelineItem 
            key={`experience-${index}`} 
            experience={experience} 
            index={index} 
          />
        ))}
      </div>
    </>
  );
};

const TimelineItem = ({ experience, index }) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 w-full">
      
      <div className="hidden md:flex w-full justify-end items-start md:w-[45%]">
        {index % 2 === 0 ? (
           <ExperienceCard experience={experience} index={index} />
        ) : (
           <div className="text-right pr-10 pt-4">
             <p className="text-white font-bold text-[20px]">{experience.date}</p>
           </div>
        )}
      </div>

      <div className="relative flex flex-col items-center md:w-[10%]">
        <div className="w-4 h-4 rounded-full bg-[#915EFF] border-2 border-[#1d1836] z-10"></div>
        <div className="h-full w-1 bg-white sm:flex hidden absolute top-0"></div>
        <div className="h-full w-1 bg-white flex sm:hidden absolute top-0 left-2"></div>
      </div>

      <div className="flex w-full justify-start items-start md:w-[45%] pl-8 md:pl-0">
        {index % 2 !== 0 ? (
           <ExperienceCard experience={experience} index={index} />
        ) : (
           <div className="hidden md:block text-left pl-10 pt-4">
             <p className="text-white font-bold text-[20px]">{experience.date}</p>
           </div>
        )}

        <div className="md:hidden w-full">
             <ExperienceCard experience={experience} index={index} />
        </div>
      </div>
    </div>
  );
};

const ExperienceSection = SectionWrapper(Experience, "work");

export default ExperienceSection;