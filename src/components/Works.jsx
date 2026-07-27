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
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full aspect-[16/10] bg-black-100 rounded-2xl overflow-hidden">
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
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={showNext}
                aria-label="Next screenshot"
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80"
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
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer pointer-events-auto"
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

        <div className="mt-5">
          {project_link ? (
            <a
              href={project_link}
              target="_blank"
              rel="noreferrer"
              className="text-white font-bold text-[24px] hover:text-[#915eff] transition-colors underline-offset-4 hover:underline"
            >
              {name}
            </a>
          ) : (
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
          )}
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
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
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Selected projects from my professional experience — spanning PWAs,
          micro-frontends, workflow platforms, CMS-driven apps, and mobile
          products built with React, Next.js, Vue, and React Native.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
