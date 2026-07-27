import { useState } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  images = [],
  project_link,
  source_code_link,
}) => {
  const [activeImage, setActiveImage] = useState(0);
  const hasMultipleImages = images.length > 1;

  const showPrev = (e) => {
    e.stopPropagation();
    setActiveImage((current) => (current === 0 ? images.length - 1 : current - 1));
  };

  const showNext = (e) => {
    e.stopPropagation();
    setActiveImage((current) => (current === images.length - 1 ? 0 : current + 1));
  };

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} className="h-full">
      <Tilt
        options={{ max: 20, scale: 1.02, speed: 450 }}
        className="glass-card-wrap h-full w-full"
      >
        <div className="glass-card p-5 h-full w-full flex flex-col">
        <div className="relative w-full aspect-[16/10] shrink-0 glass-media rounded-2xl overflow-hidden">
          {images.map((img, imgIndex) => (
            <img
              key={`${name}-${imgIndex}`}
              src={img}
              alt={`${name} screenshot ${imgIndex + 1}`}
              className={`absolute inset-0 w-full h-full object-contain rounded-2xl transition-opacity duration-300 ${
                imgIndex === activeImage ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}

          {hasMultipleImages ? (
            <>
              <button
                type="button"
                onClick={showPrev}
                aria-label="Previous screenshot"
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full glass-btn text-white flex items-center justify-center"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={showNext}
                aria-label="Next screenshot"
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full glass-btn text-white flex items-center justify-center"
              >
                ›
              </button>
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-1.5">
                {images.map((_, imgIndex) => (
                  <button
                    key={`dot-${imgIndex}`}
                    type="button"
                    aria-label={`Show screenshot ${imgIndex + 1}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveImage(imgIndex);
                    }}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      imgIndex === activeImage ? "bg-white" : "bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </>
          ) : null}

          {source_code_link ? (
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover pointer-events-none">
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="glass-btn w-10 h-10 rounded-full flex justify-center items-center cursor-pointer pointer-events-auto"
              >
                <img
                  src={github}
                  alt="source"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ) : null}
        </div>

        <div className="mt-5 flex-1 flex flex-col">
          {project_link ? (
            <a
              href={project_link}
              target="_blank"
              rel="noreferrer"
              className="text-white font-bold text-[24px] hover:text-[#915eff] transition-colors underline-offset-4 hover:underline line-clamp-1"
            >
              {name}
            </a>
          ) : (
            <h3 className="text-white font-bold text-[24px] line-clamp-1">{name}</h3>
          )}
          <p className="mt-2 text-secondary text-[14px] leading-relaxed flex-1 min-h-[96px]">
            {description}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2 min-h-[52px] content-start">
          {tags.map((tag) => (
            <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>
          Projects<span className="text-gradient">.</span>
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Selected projects from my professional experience — spanning PWAs,
          micro-frontends, workflow platforms, CMS-driven apps, and React Native
          products built with React, Next.js, Vue, and TypeScript.
        </motion.p>
      </div>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 items-stretch">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
