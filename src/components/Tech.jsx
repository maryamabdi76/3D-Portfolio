import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { technologies } from "../constants";
import { fadeIn } from "../utils/motion";

const TechCard = ({ technology }) => (
  <Tilt
    options={{ max: 10, scale: 1.02, speed: 550 }}
    className="w-full"
  >
    <motion.div
      variants={fadeIn("up", "tween", 0, 0.4)}
      className="glass-card-wrap group w-full card-lift"
    >
      <div className="glass-card flex flex-col items-center justify-center gap-3 p-5 min-h-[130px]">
        <div className="tech-icon-bg flex items-center justify-center w-16 h-16 rounded-2xl transition-colors duration-300">
          <img
            src={technology.icon}
            alt={technology.name}
            className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
            loading="lazy"
          />
        </div>
        <p className="text-[#e8e6f0] text-[13px] font-medium text-center leading-tight group-hover:text-white transition-colors duration-300">
          {technology.name}
        </p>
      </div>
    </motion.div>
  </Tilt>
);

const Tech = () => {
  return (
    <div className="relative">
      <div className="tech-section-glow pointer-events-none" aria-hidden="true" />

      <motion.div
        variants={fadeIn("", "tween", 0, 0.5)}
        className="relative z-10 mb-12"
      >
        <p className={`${styles.sectionSubText} !text-[#c4bfe0]`}>
          What I work with
        </p>
        <h2 className={`${styles.sectionHeadText} !text-white`}>
          Technologies<span className="text-gradient">.</span>
        </h2>
        <p className="mt-4 text-secondary text-[16px] max-w-3xl leading-relaxed">
          Core stack across languages, frameworks, and architecture — including
          feature-based design, micro-frontends, PWA, SSR, Nx monorepos, TanStack
          Query, Zustand, Redux, shadcn/ui, Radix UI, React Hook Form, and Zod.
        </p>
      </motion.div>

      <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
        {technologies.map((technology) => (
          <TechCard key={technology.name} technology={technology} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
