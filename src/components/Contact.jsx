import { useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { contactInfo } from "../constants";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] glass-card-wrap"
      >
        <div className="glass-card p-8 h-full">
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>
          Contact<span className="text-gradient">.</span>
        </h3>

        <div className="mt-4 flex flex-col gap-2 text-secondary text-[15px]">
          <a
            href={`mailto:${contactInfo.email}`}
            className="hover:text-[#915eff] transition-colors"
          >
            {contactInfo.email}
          </a>
          <a
            href={`tel:${contactInfo.phone}`}
            className="hover:text-[#915eff] transition-colors"
          >
            {contactInfo.phone}
          </a>
          <p>{contactInfo.location}</p>
          <div className="flex gap-4 mt-1">
            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#915eff] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={contactInfo.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#915eff] transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-8">
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="glass-input py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none font-medium"
              required
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="glass-input py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none font-medium"
              required
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="glass-input py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none font-medium resize-none"
              required
            />
          </label>

          <button type="submit" className="btn-glow py-3 px-8 w-fit font-bold rounded-xl">
            Send
          </button>
        </form>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] glass-card-wrap"
      >
        <div className="glass-card h-full w-full overflow-hidden rounded-[19px]">
          <EarthCanvas />
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
