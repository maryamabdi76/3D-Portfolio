import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services, profileTitle } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn('up', 'tween', index * 0.08, 0.4)}
      className="glass-card-wrap w-[250px] service-card"
    >
      <div className="glass-card-perf py-8 px-10 min-h-[280px] flex justify-evenly items-center flex-col group">
        <div className="glass-icon-ring flex items-center justify-center w-20 h-20 rounded-2xl mb-2">
          <img
            src={icon}
            alt={title}
            className="w-14 h-14 object-contain group-hover:scale-105 transition-transform duration-200 ease-out"
          />
        </div>
        <h3 className="text-white text-[18px] font-semibold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} !text-[#c4bfe0]`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText} !text-white`}>
          Overview<span className="text-gradient">.</span>
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', 'tween', 0.1, 0.5)}
        className="mt-4 text-[#c4bfe0] text-[17px] leading-[30px] max-w-3xl"
      >
        {profileTitle} with 6+ years of experience building
        scalable web applications using React, Next.js, and TypeScript.
        <br />
        Experienced in designing frontend architecture, reusable UI systems,
        authentication flows, Progressive Web Apps, and enterprise-scale
        applications.
        <br />
        Passionate about building maintainable software, improving developer
        experience, and delivering high-performance user interfaces.
        <br />
        <span className="text-[#e8e6f0]">Languages: Persian, English.</span>
      </motion.p>

      <div className="justify-center mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
