import { contactInfo, profileTitle } from '../constants';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#050816]/90">
      <div className="max-w-7xl mx-auto px-6 sm:px-16 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <p className="text-white font-semibold text-[18px]">Maryam Abdi</p>
          <p className="text-secondary text-[14px] mt-1">{profileTitle}</p>
          <p className="text-secondary text-[13px] mt-3">
            © {year} Maryam Abdi. All rights reserved.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href={contactInfo.resume}
            download
            className="btn-glow py-2.5 px-5 rounded-xl text-[14px] font-semibold"
          >
            Download Resume
          </a>
          <a
            href={contactInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="glass-btn py-2.5 px-5 rounded-xl text-[14px] text-white font-medium"
          >
            LinkedIn
          </a>
          <a
            href={contactInfo.github}
            target="_blank"
            rel="noreferrer"
            className="glass-btn py-2.5 px-5 rounded-xl text-[14px] text-white font-medium"
          >
            GitHub
          </a>
          <a
            href={`mailto:${contactInfo.email}`}
            className="glass-btn py-2.5 px-5 rounded-xl text-[14px] text-white font-medium"
          >
            Email
          </a>
        </div>
      </div>

      <div className="pb-6 flex justify-center">
        <a
          href="#about"
          className="text-secondary hover:text-[#915eff] text-[13px] transition-colors"
          aria-label="Back to top"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
};

export default Footer;
