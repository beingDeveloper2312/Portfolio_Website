import { motion } from 'framer-motion'
import { useState , useEffect} from 'react'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 900px)');
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      // console.log(isMobile);
      setIsMobile(event.matches);
    }
    mediaQuery.addEventListener('change', handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  }, []);
  return (
    <section className='relative w-full h-screen mx-auto'>
  
       <div className={`${styles.paddingX} absolute inset-0 top-[120px]
        max-w-7xl mx-auto flex 
        flex items-start gap-5`}>
            <div className='flex flex-col justify-center items-center mt-5'>
                <div className='w-5 h-5 rounded-full bg-[#4F200D]' />
                <div className='w-1 sm:h-80 h-40 violet-gradient' />
            </div>
            <div className='mt-2'>
              <h1 className={`${styles.heroHeadText} text-white-100`}>
              Namaste, 
              <span className='text-black-100'>
                  Rohit  </span> here 
              </h1>
              <p className={`${styles.heroSubText} mt-2 text-black-100`}>
                I'm a CSE undergraduate
                 <br className="sm:block hidden"/>
                 pursuing B.Tech at NIT Raipur. 

              </p>
            </div>
     
      
      { (!isMobile) && <ComputersCanvas style = {{zIndex: "10"}}/> }
    
       </div>
       { (isMobile) && <ComputersCanvas /> }
       
       <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center '>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-[#4f200d] flex justify-center items-start p-2 '>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-[#4f200d] mb-1'
            />
          </div>
        </a>
      </div>

    </section>
  )
}

export default Hero