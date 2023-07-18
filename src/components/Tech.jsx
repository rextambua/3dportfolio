import React from 'react';
import {BallCanvas} from './canvas';
import {SectionWrapper} from '../hoc'
import {technologies} from "../constants";
import {styles} from "../styles.js";


const Tech = () => {
  return (
      <>
      <p className={styles.sectionHeadText}> Hard Skills</p>
      <div className='flex flex-row flex-wrap justify-center gap-10'>

        {technologies.map((technology) => (
            <div className='w-28 h-28' key={technology.name}>
              <BallCanvas icon={technology.icon} />
            </div>
        ))}
      </div>
      </>
  )
}

export default SectionWrapper(Tech, '')