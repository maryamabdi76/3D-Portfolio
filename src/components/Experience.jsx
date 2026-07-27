import { useState } from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';

import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';

const VISIBLE_POINTS = 3;

const ExperienceCard = ({ experience }) => {
  const [expanded, setExpanded] = useState(false);
  const hasMore = experience.points.length > VISIBLE_POINTS;
  const visiblePoints = expanded
    ? experience.points
    : experience.points.slice(0, VISIBLE_POINTS);

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: 'rgba(22, 18, 50, 0.65)',
        backdropFilter: 'blur(18px)',
        WebkitBackdropFilter: 'blur(18px)',
        color: '#fff',
        border: '1px solid rgba(145, 94, 255, 0.22)',
        borderRadius: '16px',
        boxShadow:
          'inset 0 1px 0 rgba(255, 255, 255, 0.07), 0 8px 32px rgba(0, 0, 0, 0.35)',
      }}
      contentArrowStyle={{ borderRight: '7px solid rgba(22, 18, 50, 0.65)' }}
      dateClassName="!text-white !font-semibold !opacity-100"
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        {experience.projectUrl ? (
          <a
            href={experience.projectUrl}
            target="_blank"
            rel="noreferrer"
            className="text-[#915eff] hover:text-[#b08aff] text-[14px] font-medium"
          >
            {experience.project}
          </a>
        ) : (
          <p className="text-[#dfd9ff] text-[14px] m-0 font-medium">
            {experience.project}
          </p>
        )}
        <p className="text-[#c4bfe0] text-[16px] font-semibold m-0 mt-1">
          {experience.company_name}
        </p>
        <ul className="mt-5 list-disc ml-5 space-y-2">
          {visiblePoints.map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className="text-[#e8e6f0] text-[14px] pl-1 tracking-wide leading-relaxed"
            >
              {point}
            </li>
          ))}
        </ul>
        {hasMore ? (
          <button
            type="button"
            onClick={() => setExpanded((current) => !current)}
            className="mt-4 text-[#915eff] hover:text-[#b08aff] text-[14px] font-semibold transition-colors"
          >
            {expanded
              ? 'Show less'
              : `Show ${experience.points.length - VISIBLE_POINTS} more`}
          </button>
        ) : null}
      </div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <div className="relative z-20 mb-16">
        <p className={`${styles.sectionSubText} !text-[#c4bfe0]`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} !text-white`}>
          Work Experience<span className="text-gradient">.</span>
        </h2>
      </div>

      <div className="relative z-10 mt-4 flex flex-col">
        <VerticalTimeline lineColor="#915eff">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, 'experience');
