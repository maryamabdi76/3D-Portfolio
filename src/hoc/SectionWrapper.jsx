import { motion, useReducedMotion } from 'framer-motion';

import { styles } from '../styles';
import { staggerContainer } from '../utils/motion';

const SectionWrapper = (Component, idName) =>
  function HOC() {
    const reduceMotion = useReducedMotion();

    return (
      <motion.section
        variants={
          reduceMotion
            ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
            : staggerContainer(0.08, 0.06)
        }
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.12, margin: '0px 0px -10% 0px' }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-10`}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
