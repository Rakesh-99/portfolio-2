import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { PiLaptopDuotone } from "react-icons/pi";
import Typography from '@mui/material/Typography';
import { internshipTechUsed, vgInfotecExp } from "../data/data";
import { IoLocationOutline } from "react-icons/io5";
import { useTheme, useMediaQuery } from "@mui/material";

const ExperienceTimeline = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isTablet = useMediaQuery(theme.breakpoints.down("lg"));

  const experiences = [
    {
      title: "Vg Infotec",
      fullTime: true,
      period: "Feb 2025 - Present",
      role: "Full-Stack Developer",
      location: "Rajkot, Gujarat",
      techStack: vgInfotecExp,
      achievements: [
        "Integrated external trading APIs (Charles Schwab, E*TRADE) to fetch real-time stock and options data.",
        "Implemented dynamic UI components using TradingView light weight charts API to visualize options metrics (strike price, premium, volume, open interest).",
        "Optimized ERP workflows by enhancing document handling (invoices, packing lists, contracts), reducing manual processing effort.",
        "Improved system reliability by refining API responses and synchronizing frontend-backend communication."
      ]
    },
    {
      title: "Website Vikreta",
      fullTime: false,
      period: "Sep 2024 - Dec 2024",
      role: "Mern-Stack Developer",
      location: "Maharashtra, India",
      techStack: internshipTechUsed,
      achievements: [
        "Designed a threaded comment system supporting nested replies, improving user engagement across posts.",
        "Developed a custom URL redirection system in Next.js, enabling Bitly link transformation into branded domain links with dynamic routing."
      ]
    }
  ];

  return (
    <Timeline 
      position={isMobile ? "right" : "alternate"}
      sx={{
        padding: isMobile ? '0' : 'initial',
        margin: isMobile ? '0' : 'initial',
        width: isMobile ? '100%' : 'initial',
      }}
    >
      {experiences.map((exp, index) => (
        <TimelineItem 
          key={index} 
          position={isMobile ? "right" : index % 2 === 0 ? "left" : "right"}
          sx={{
            minHeight: 'initial',
            paddingTop: isMobile ? '8px' : 'initial',
            paddingBottom: isMobile ? '8px' : 'initial',
          }}
        >
          {!isMobile && (
            <TimelineOppositeContent
              sx={{
                flex: 1,
                padding: 2,
                m: 'auto 0',
              }}
              align="right"
              variant="body2"
              className="text-gray-400"
            >
              <span className="text-xs sm:text-sm">{exp.period}</span>
            </TimelineOppositeContent>
          )}

          <TimelineSeparator >
            <TimelineConnector />
            <TimelineDot  sx={{ backgroundColor: "green" }}>
              <PiLaptopDuotone  sx={{ fontSize: isMobile ? 18 : 24 }} />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>

          <TimelineContent sx={{ 
            py: { xs: 1.5, sm: 3 }, 
            px: { xs: 0.5, sm: 2 },
            ...(isMobile && {
              flex: '1 1 100%',
              width: '100%',
            })
          }}>
            <div className="flex flex-col">
              {/* Title and Date for Mobile */}
              <div className="flex justify-between items-start gap-1 md:gap-2 mb-1 md:mb-2">
                <Typography
                  variant={isMobile ? "body1" : "h6"}
                  component="span"
                  className="font-extrabold"
                  sx={{ fontSize: { xs: "0.95rem", sm: "1.1rem", md: "1.25rem" } }}
                >
                  <span>{exp.title.split(' ')[0]} </span>
                  <span className='border-b-2 border-green-500 inline-block'>
                    {exp.title.split(' ').slice(1).join(' ')}
                  </span>
                </Typography>
                {isMobile && (
                  <span className='text-gray-400 text-[11px] sm:text-xs whitespace-nowrap'>
                    {exp.period}
                  </span>
                )}
              </div>

              {/* Location */}
              <div className="flex items-center gap-1.5 md:gap-2 mt-0.5 md:mt-1">
                <span className='inline-block w-4 h-4  text-red-500 flex-shrink-0'>
                  <IoLocationOutline />
                </span>
                <span className='text-[11px] sm:text-xs md:text-sm'>{exp.location}</span>
              </div>

              {/* Role */}
              <Typography
                variant="body2"
                className="mt-1 md:mt-4 text-left italic text-[11px] sm:text-xs md:text-sm"
              >
                {exp.role}
              </Typography>
              <Typography
                variant="body2"
                className="text-left text-[10px] sm:text-[11px] md:text-[12px] text-gray-400 mt-1"
              >
                {exp.fullTime ? "Full Time" : "Internship"}
              </Typography>
            </div>

            {/* Achievements */}
            <Typography>
              <ul className='flex flex-col gap-1.5 text-left sm:gap-2 md:gap-3 ml-3 sm:ml-4 md:ml-5 mt-2 sm:mt-3 md:mt-4'>
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx} className='list-disc text-[11px] sm:text-xs md:text-sm leading-relaxed'>
                    {achievement}
                  </li>
                ))}
              </ul>
            </Typography>

            {/* Tech Stack Section */}
            <div className="mt-3 sm:mt-4  text-left md:mt-5">
              <span className='font-bold border py-1 px-2 rounded-xl border-green-500 text-[11px] sm:text-xs md:text-sm'>
                Tech Stack
              </span>

              <div className="mt-1.5 sm:mt-2 md:mt-3">
                <div
                  className={`grid gap-1.5 sm:gap-2 px-0 sm:px-1 md:px-2 ${
                    isMobile ? "grid-cols-5" : isTablet ? "grid-cols-6" : "grid-cols-8"
                  }`}
                >
                  {exp.techStack.map((val, idx) => (
                    <div
                      className="flex flex-col items-center justify-center"
                      key={idx}
                    >
                      <p style={{ color: `${val.color}` }} className="flex items-center justify-center">
                        <val.icon size={isMobile ? 16 : isTablet ? 22 : 25} />
                      </p>
                      <p className='text-center mt-0.5 text-[9px] sm:text-[10px] md:text-xs line-clamp-2'>
                        {val.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default ExperienceTimeline;