import React from "react";
import { motion } from "framer-motion";

import { styles } from "../../styles";
import { services } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { fadeIn, textVariant } from "../../utils/motion";
import ServiceCard from "../Card/ServiceCard";

const About = () => {
    return (
    <>
        <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>Introduction</p>
            <h2 className={styles.sectionHeadText}>Overview.</h2>
        </motion.div>

        <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
            I'm a software developer with experience in TypeScript and JavaScript,
            using frameworks like ReactJS, NodeJS, NextJS and ThreeJS. I'm a quick
            learner and collaborate closely with clients to create efficient,
            scalable, and user-friendly solutions that solve real-world problems.
        </motion.p>

        <div className="mt-20 flex gap-10">
            {services.map((service, index) => (
                <ServiceCard key={service.title} index={index} {...service} />
            ))}
        </div>
    </>
    );
};

const AboutSection = SectionWrapper(About, "about");

export default AboutSection;