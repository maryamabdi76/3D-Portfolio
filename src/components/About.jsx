import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const SerrviceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="w-[250px]">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Intorduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] leading-[30px]"
      >
        I am a seasoned Frontend Developer with over 4 years of hands-on
        experience, specializing in React, Next.js, and Vue.js. Throughout my
        career, I have successfully delivered over 5 user-centric web
        applications, consistently exceeding client expectations and meeting
        project deadlines.
        <br />
        In addition to my technical skills, I am proficient in utilizing
        effective project management tools such as Jira. This allows me to
        ensure smooth project execution, maintain clear communication channels
        with stakeholders, and uphold high coding standards.
        <br />
        I take pride in producing clean, well-documented code that not only
        meets functional requirements but also contributes to the overall
        efficiency and scalability of web applications. My dedication to
        excellence has led to positive feedback from clients and team members
        alike.
        <br />I am passionate about staying updated with the latest trends and
        best practices in frontend development, continuously honing my skills to
        deliver cutting-edge solutions. I am eager to leverage my expertise and
        contribute to innovative projects at Teanab.
      </motion.p>

      <div className="justify-center mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <SerrviceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
