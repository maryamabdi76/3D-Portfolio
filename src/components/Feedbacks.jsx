import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const education = [
  {
    degree: "Master of E-commerce",
    school: "K. N. Toosi University of Technology",
    date: "2020 – 2022",
    location: "Tehran, Iran",
  },
  {
    degree: "Bachelor of Information Technology",
    school: "Alzahra University",
    date: "2015 – 2019",
    location: "Tehran, Iran",
  },
];

const EducationCard = ({ index, degree, school, date, location }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    className="glass-card-wrap xs:w-[360px] w-full"
  >
    <div className="glass-card p-10 h-full">
      <p className="text-white font-bold text-[20px]">{degree}</p>
      <p className="mt-3 text-[#c4bfe0] text-[16px]">{school}</p>
      <p className="mt-2 text-[#e8e6f0] text-[14px]">
        {date} | {location}
      </p>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className="mt-12 glass-card-wrap rounded-[20px]">
      <div className={`glass-card ${styles.padding} min-h-[200px] relative rounded-[19px]`}>
        <div className="hero-glow absolute -top-20 -right-20 w-60 h-60 rounded-full blur-[80px] opacity-30 pointer-events-none" />
        <motion.div variants={textVariant()} className="relative z-10">
          <p className={`${styles.sectionSubText} !text-[#c4bfe0]`}>Academic background</p>
          <h2 className={`${styles.sectionHeadText} !text-white`}>
            Education<span className="text-gradient">.</span>
          </h2>
        </motion.div>
      </div>

      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7 relative z-10`}>
        {education.map((item, index) => (
          <EducationCard key={item.degree} index={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "education");
