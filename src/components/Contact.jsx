import { useState } from 'react';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { contactInfo } from '../constants';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
    );
    window.location.href = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} !text-[#c4bfe0]`}>
          Get in touch
        </p>
        <h2 className={`${styles.sectionHeadText} !text-white`}>
          Contact<span className="text-gradient">.</span>
        </h2>
      </motion.div>

      <div className="mt-10 xl:mt-14 grid xl:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] gap-6 xl:gap-10 items-start">
        <motion.div
          variants={fadeIn('right', 'tween', 0, 0.6)}
          className="relative order-2 xl:order-1 xl:sticky xl:top-28"
        >
          <div className="relative aspect-square w-full max-w-[400px] mx-auto">
            <EarthCanvas />
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn('left', 'tween', 0, 0.6)}
          className="order-1 xl:order-2"
        >
          <p className="text-[#c4bfe0] text-[16px] sm:text-[17px] leading-relaxed max-w-lg">
            Open to new roles, collaborations, and interesting front-end
            problems. Prefer email — or send a note below.
          </p>

          <div className="mt-6 flex flex-col gap-2.5 text-[15px] text-secondary">
            <a
              href={`mailto:${contactInfo.email}`}
              className="w-fit hover:text-white transition-colors"
            >
              {contactInfo.email}
            </a>
            <a
              href={`tel:${contactInfo.phone}`}
              className="w-fit hover:text-white transition-colors"
            >
              {contactInfo.phone}
            </a>
            <p>{contactInfo.location}</p>
            <div className="flex gap-5 mt-1">
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

          <form
            onSubmit={handleSubmit}
            className="mt-9 flex flex-col gap-5 max-w-lg"
          >
            <label className="flex flex-col gap-2">
              <span className="text-white/90 text-[13px] font-medium tracking-wide">
                Name
              </span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="glass-input py-3.5 px-5 placeholder:text-secondary/70 text-white rounded-xl outline-none text-[15px]"
                required
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-white/90 text-[13px] font-medium tracking-wide">
                Email
              </span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@company.com"
                className="glass-input py-3.5 px-5 placeholder:text-secondary/70 text-white rounded-xl outline-none text-[15px]"
                required
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-white/90 text-[13px] font-medium tracking-wide">
                Message
              </span>
              <textarea
                rows={6}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What are you working on?"
                className="glass-input py-3.5 px-5 placeholder:text-secondary/70 text-white rounded-xl outline-none text-[15px] resize-none"
                required
              />
            </label>

            <button
              type="submit"
              className="btn-glow mt-1 py-3.5 px-8 w-fit font-semibold rounded-full text-[14px] tracking-wide"
            >
              Send message
            </button>
          </form>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, 'contact');
