import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import { motion } from "framer-motion"
import 'react-vertical-timeline-component/style.min.css'

import { styles } from "../styles"
import { experiences } from "../constants"
import  SectionWrapper  from '../hoc'
import { textVariant } from "../utils/motion"


const ExperienceCard = ({experience}) => (
  <VerticalTimelineElement
     contentStyle={{ background:'#f2ede9', color:'#4f200d'}}
     contentArrow={{ borderRight: '7px solid'}}
     date = {experience.date}
     iconStyle={{ background: experience.iconBg}}
     icon = {
      <div className="flex justify-center items-center w-full h-full">
        <img 
          src = {experience.icon}
          alt = {experience.company_name}
          className = "w-[100%] h-[100%] rounded-full object-contain bg-white"
        />
      </div>
     }
  >
    <div>
      <h3 className="text-[#4f200d] text-[24px]">{experience.title}</h3>
      <p className="text-secondary text-[16px] font-semibold" style={{ margin:0}}>{experience.company_name}</p>
    </div>

    <ul className="mt-5 list-disc ml-5 space-y-2">
        {
          experience.points.map((point, index) => (
            <li
               key = {`experience-point-${index}`}
              className="text-white-200 text-[14px] pl-1 tracking-wider"
            >
              {point}
            </li>
          ))
        }
    </ul>
  </VerticalTimelineElement>
)
const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What I have done so far</p>
          <h2 className={styles.sectionHeadText}>Work Experience</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
          <VerticalTimeline className="custom-line">
            {experiences.map((experience, index) => (
              <ExperienceCard key = {index} experience = {experience} />
            ))}
          </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, "work");