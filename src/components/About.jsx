import React from 'react';
import {Tilt} from "react-tilt";
import {motion} from "framer-motion";
import {styles} from "../styles.js";
import {services} from "../constants/index.js";
import {fadeIn, textVariant} from "../utils/motion.js";
import {SectionWrapper} from "../hoc/index.js";

const ServiceCard = ({title, index, icon}) =>{
    return(
        <Tilt className='xs:w-[250px] w-full'>
            <motion.div
                variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
                className= 'w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
                <div
                options={{
                    max:45,
                    scale:1,
                    speed:450
                }} className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
                    <img src={icon} alt={title}
                         className='w-16 h-16 object-contain' />
                    <h3 className='text-white text-[20px] font-bold'> {title}</h3>
                </div>

            </motion.div>
        </Tilt>
    )
}


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText} style={{paddingTop: "3rem"}}>Introduction</p>
          <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className='text-[#915eff]'> Rex</span>
          </h1>
        {/*<h2 className={styles.sectionHeadText}>Overview</h2>*/}
      </motion.div>
        <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className='mt-4 text-secondary text-[20px] max-w-5xl leading-[30px]'
        >
            I am a skilled front-end web developer with a master’s degree
            in Applied Mathematics and Computer Science seeking new
            opportunities to utilize and enhance technical skills in a dynamic work environment.
            I have experience in web development technologies like
            HTLM, CSS, Javascript and TypeScript, expertise in frameworks like
            React, Vue, Node.js and many more. I'm a quick learner and collaborate
            closely with team members to create efficient,
            scalable and user-friendly solutions that solve real-world
            problems.Lets work together to bring your ideas to life!
        </motion.p>
        <div className='mt-20 flex flex-wrap gap-10'>
            {services.map((service, index) =>(
                <ServiceCard key ={service.title} index={index} {...service} />
                )
            )}
        </div>
    </>
  )
}

export default SectionWrapper(About, 'about')