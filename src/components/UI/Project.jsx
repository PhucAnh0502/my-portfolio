import React from 'react'
import ProjectCard from "../Card/ProjectCard"
import { projects } from '../../constants'
import {SectionWrapper} from '../../hoc'
import {motion} from 'framer-motion'
import {fadeIn, textVariant} from '../../utils/motion'
import {styles} from '../../styles'

const Project = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>My work</p>
                <h2 className={styles.sectionHeadText}>Projects.</h2>
            </motion.div>

            <div className='w-full flex'>
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
                >
                    Following projects showcases my skills and experience through
                    real-world examples. Each project is briefly described with
                    links to code repositories. It reflects my
                    ability to solve complex problems, work with different technologies,
                    and manage projects effectively.
                </motion.p>
            </div>

            <div className='mt-20 flex flex-wrap gap-7'>
                {projects.map((project, index) => (
                    <ProjectCard key={index} index={index} {...project} />
                ))}
            </div>
        </>
    )
}

const ProjectSection = SectionWrapper(Project, "project")

export default ProjectSection