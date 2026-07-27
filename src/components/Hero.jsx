import { motion } from 'framer-motion';
import { styles } from '../styles.js';
import { LaptopCanvas, FloatingShapesCanvas } from './canvas';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      <FloatingShapesCanvas />

      <div className="hero-glow absolute top-1/4 -left-32 w-96 h-96 rounded-full blur-[120px] opacity-40 pointer-events-none" />
      <div className="hero-glow-teal absolute bottom-1/4 -right-32 w-80 h-80 rounded-full blur-[100px] opacity-30 pointer-events-none" />

      <div
        className={`relative z-10 inset-0 top-[90px] max-w-7xl mx-auto flex xl:flex-row flex-col-reverse items-center gap-10 px-6 sm:px-16`}
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-row items-start gap-5 flex-1"
        >
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915eff] shadow-glow" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>

          <div className="glass-panel p-6 sm:p-8 rounded-2xl max-w-xl">
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
              Senior Front-End Engineer with 6+ years of experience.{' '}
              <br className="sm:block hidden" />
              I build scalable web apps, PWAs, and reusable UI systems{' '}
              <br className="sm:block hidden" />
              with React, Next.js, TypeScript, and Vue.js.
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.9 }}
          className="xl:flex-1 xl:h-[min(70vh,720px)] h-[50vh] w-full relative overflow-hidden"
        >
          <LaptopCanvas />
        </motion.div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-10">
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
