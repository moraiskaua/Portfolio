/* eslint-disable react/no-unknown-property */
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { technologies } from '../constants';
import { SectionWrapper } from '../hoc';
import { fadeIn } from '../utils/motion';

const TechCard = ({ index, name, icon }) => (
  <Tilt className="xs:w-[235px] w-full">
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[235px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">{name}</h3>
      </div>
    </motion.div>
  </Tilt>
);

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      <div>
        <p className={`${styles.sectionSubText}`}>Some technologies</p>
        <h2 className={`${styles.sectionHeadText}`}>That I&apos;m used to.</h2>
      </div>
      {technologies.map((tech, index) => (
        <TechCard key={tech.name} index={index} {...tech} />
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, '');
