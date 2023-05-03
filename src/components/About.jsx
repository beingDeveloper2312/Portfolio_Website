import React from 'react'
import { styles } from '../styles'
import {motion} from 'framer-motion'
import Tilt from 'react-tilt'
import { fadeIn, textVariant } from '../utils/motion'
import { services } from '../constants'
import SectionWrapper from '../hoc'

const ServiceCard = ({index , title, icon }) => {
   return (
    <Tilt className="xs:w-[250px] w-full">
       <motion.div
          variants={fadeIn("right", "spring", 0.5*index, 0.75)}
          className = "w-full brown-white-gradient p-1 rounded-[20px] shadow-card"
       >
        <div
          options={{
            max:45,
            scale: 1,
            speed: 450
          }}
          className = "bg-[#f2ede9] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"

        >
        <img src = {icon} alt = {title} 
        className = "w-16 h-16 object-contain" />
          <h3 className='text-[#4f200d] text-[20px] font-bold text-center'>
            {title}
          </h3>
        </div>
       </motion.div>
    </Tilt>
   )
}


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)}
      className = "mt-4 text-[#4f200d] font-[15px] leading-[30px]">
         I'm currently pursuing my B.Tech in Computer Science and 
         Engineering at NIT Raipur. I do a bit of competitive programming 
         and I'm a Knight at Leetcode, 4⭐ at codechef, specialist 
         at codeforces. Apart from this I'm also trying my hands on 
         web development. Particularly front-end web development 
         using front-end frameworks and libraries like React.js, Three.js. CSS 
         frameworks like tailwindcss, bootstrap etc....
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {
          services.map((service, index) => (
            <ServiceCard key={service.title} index = {index}
            {...service}
            />
          ))
        }
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")