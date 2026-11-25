import { motion, useReducedMotion } from 'framer-motion';
import { styles } from '../styles.js';
import { contactInfo, profileTitle } from '../constants';
import { LaptopCanvas, FloatingShapesCanvas } from './canvas';
import { heroContainer, heroItem, heroVisual } from '../utils/motion';

const Hero = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative w-full min-h-screen mx-auto overflow-hidden">
      <FloatingShapesCanvas />

      <div className="hero-glow absolute top-[18%] -left-40 w-[28rem] h-[28rem] rounded-full blur-[140px] opacity-30 pointer-events-none" />
      <div className="hero-glow-teal absolute bottom-[12%] -right-36 w-[22rem] h-[22rem] rounded-full blur-[120px] opacity-20 pointer-events-none" />

      <div
        className={`relative z-10 max-w-7xl mx-auto grid xl:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] items-center gap-10 xl:gap-6 ${styles.paddingX} pt-28 sm:pt-32 xl:pt-28 pb-24 xl:pb-16 xl:min-h-screen`}
      >
        <motion.div
          variants={reduceMotion ? undefined : heroContainer}
          initial={reduceMotion ? false : 'hidden'}
          animate={reduceMotion ? undefined : 'show'}
          className="flex flex-col items-start w-full max-w-2xl"
        >
          <motion.p
            variants={reduceMotion ? undefined : heroItem}
            className="font-display text-[13px] sm:text-[14px] tracking-[0.22em] uppercase text-[#9d96c7]"
          >
            {profileTitle}
          </motion.p>

          <motion.h1
            variants={reduceMotion ? undefined : heroItem}
            className="font-display font-semibold text-white mt-4 text-[42px] xs:text-[52px] sm:text-[64px] lg:text-[76px] leading-[1.05] tracking-[-0.03em]"
          >
            Maryam
            <span className="text-gradient"> Abdi</span>
          </motion.h1>

          <motion.p
            variants={reduceMotion ? undefined : heroItem}
            className="mt-5 sm:mt-6 text-[#c9c3e6] text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.65] max-w-xl"
          >
            I design and ship scalable interfaces — PWAs, micro-frontends, and
            reusable UI systems — with React, Next.js, TypeScript, and Vue.
          </motion.p>

          <motion.div
            variants={reduceMotion ? undefined : heroItem}
            className="mt-8 sm:mt-10 flex flex-wrap items-center gap-3 sm:gap-4"
          >
            <a
              href="#projects"
              className="btn-glow py-3.5 px-7 rounded-full text-[14px] font-semibold tracking-wide"
            >
              View Projects
            </a>
            <a
              href={contactInfo.resume}
              download
              className="glass-btn py-3.5 px-7 rounded-full text-[14px] text-white font-medium tracking-wide"
            >
              Download Resume
            </a>
          </motion.div>

          <motion.div
            variants={reduceMotion ? undefined : heroItem}
            className="mt-10 sm:mt-12 flex items-center gap-6 text-[13px] text-[#8f88b5]"
          >
            <span className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-teal animate-pulse-soft" />
              6+ years
            </span>
            <span className="w-px h-3 bg-white/15" />
            <span>Tehran · Remote</span>
            <span className="w-px h-3 bg-white/15 hidden sm:block" />
            <a
              href="#contact"
              className="hidden sm:inline hover:text-white transition-colors duration-300"
            >
              Let&apos;s talk →
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          variants={reduceMotion ? undefined : heroVisual}
          initial={reduceMotion ? false : 'hidden'}
          animate={reduceMotion ? undefined : 'show'}
          className="relative w-full h-[32vh] sm:h-[42vh] xl:h-[min(62vh,640px)] max-w-2xl mx-auto xl:mx-0"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(145,94,255,0.18)_0%,transparent_65%)] pointer-events-none" />
          <LaptopCanvas />
        </motion.div>
      </div>

      <motion.div
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex z-10"
      >
        <a
          href="#about"
          aria-label="Scroll to about"
          className="group flex flex-col items-center gap-2 text-[#8f88b5] hover:text-white transition-colors duration-300"
        >
          <span className="text-[11px] tracking-[0.2em] uppercase font-medium">
            Scroll
          </span>
          <div className="w-[22px] h-[36px] rounded-full border border-white/25 group-hover:border-accent/60 flex justify-center items-start pt-1.5 transition-colors duration-300">
            <motion.div
              animate={
                reduceMotion
                  ? undefined
                  : { y: [0, 10, 0], opacity: [1, 0.35, 1] }
              }
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="w-1 h-1.5 rounded-full bg-accent"
            />
          </div>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
