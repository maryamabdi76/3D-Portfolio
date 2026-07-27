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
    className="bg-black-200 p-10 rounded-3xl xs:w-[360px] w-full"
  >
    <p className="text-white font-bold text-[20px]">{degree}</p>
    <p className="mt-3 text-secondary text-[16px]">{school}</p>
    <p className="mt-2 text-white text-[14px]">
      {date} | {location}
    </p>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div
        className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Academic background</p>
          <h2 className={styles.sectionHeadText}>Education.</h2>
        </motion.div>
      </div>

      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
        {education.map((item, index) => (
          <EducationCard key={item.degree} index={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "education");
