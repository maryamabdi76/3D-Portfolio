import { motion } from 'framer-motion';
import { styles } from '../styles.js';
import { contactInfo, profileTitle } from '../constants';
import { LaptopCanvas, FloatingShapesCanvas } from './canvas';

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen xl:h-screen mx-auto overflow-hidden">
      <FloatingShapesCanvas />

      <div className="hero-glow absolute top-1/4 -left-32 w-96 h-96 rounded-full blur-[120px] opacity-40 pointer-events-none" />
      <div className="hero-glow-teal absolute bottom-1/4 -right-32 w-80 h-80 rounded-full blur-[100px] opacity-30 pointer-events-none" />

      <div
        className={`relative z-10 max-w-7xl mx-auto flex xl:flex-row flex-col items-center gap-8 xl:gap-10 px-6 sm:px-16 pt-24 sm:pt-28 xl:pt-[90px] pb-20 sm:pb-24`}
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-row items-start gap-4 sm:gap-5 flex-1 w-full"
        >
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915eff] shadow-glow" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>

          <div className="glass-panel p-5 sm:p-8 rounded-2xl max-w-xl w-full">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className={`${styles.heroHeadText} text-white`}
            >
              Hi, I'm
              <span className="text-gradient"> Maryam</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className={`${styles.heroSubText} mt-3 text-white-100`}
            >
              {profileTitle} with 6+ years of experience.{' '}
              <br className="sm:block hidden" />I build scalable web apps, PWAs,
              and reusable UI systems <br className="sm:block hidden" />
              with React, Next.js, TypeScript, and Vue.js.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.7 }}
              className="mt-6 sm:mt-8 flex flex-col sm:flex-row sm:flex-wrap gap-3"
            >
              <a
                href="#projects"
                className="btn-glow py-3 px-6 rounded-xl text-[14px] font-semibold text-center"
              >
                View Projects
              </a>
              <a
                href={contactInfo.resume}
                download
                className="glass-btn py-3 px-6 rounded-xl text-[14px] text-white font-semibold text-center"
              >
                Download Resume
              </a>
              <a
                href="#contact"
                className="glass-btn py-3 px-6 rounded-xl text-[14px] text-white font-semibold text-center"
              >
                Contact Me
              </a>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.9 }}
          className="xl:flex-1 xl:h-[min(58vh,600px)] h-[28vh] sm:h-[38vh] w-full max-w-2xl mx-auto relative overflow-hidden"
        >
          <LaptopCanvas />
        </motion.div>
      </div>

      <div className="absolute bottom-10 w-full hidden sm:flex justify-center items-center z-10">
        <a href="#about" aria-label="Scroll to about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary/50 flex justify-center items-start p-2 backdrop-blur-sm">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="w-3 h-3 rounded-full bg-[#915eff] mb-1 shadow-glow"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
