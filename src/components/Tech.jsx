import { BallCanvas } from "./canvas";
import SectionWrapper from "../hoc";
import {motion} from 'framer-motion'
import { technologies } from "../constants";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";

const Tech = () => {
  return (
    <>
    <motion.div variants={textVariant()} className = "mb-10" >
          <p className={styles.sectionSubText}>Learned so far</p>
          <h2 className={styles.sectionHeadText}>Tech Stacks</h2>
    </motion.div>
    <div className="flex flex-row justify-center flex-wrap gap-10">
      {
        technologies.map((technology) => (
          <div className="w-28 h-28" key = {technology.name}>
            <BallCanvas icon = {technology.icon} />
          </div>
        ))
      }
    </div>
    </>
  )
}

export default SectionWrapper(Tech, "");