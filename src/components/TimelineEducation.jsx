import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import SchoolTwoToneIcon from '@mui/icons-material/SchoolTwoTone';
import Typography from '@mui/material/Typography';
import { useTheme, useMediaQuery } from "@mui/material";

const TimelineEducation = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const education = [
    {
      year: "2021 - 2024",
      degree: "Computer Science and Engineering",
      institution: "Nalanda Institute of Technology Bhubaneswar, Odisha",
      icon: SchoolOutlinedIcon,
      color: "green.500"
    },
    {
      year: "2018 - 2021",
      degree: "Diploma in Information Technology",
      institution: "Government Polytechnic Bhubaneswar, Odisha",
      icon: SchoolTwoToneIcon,
      color: "primary"
    }
  ];

  return (
    <Timeline 
      position="right"
      sx={{
        padding: isMobile ? '0' : 'initial',
        margin: isMobile ? '0' : 'initial',
        width: isMobile ? '100%' : 'initial',
      }}
    >
      {education.map((edu, index) => {
        const IconComponent = edu.icon;
        return (
          <TimelineItem 
            key={index}
            position="right"
            sx={{
              minHeight: 'initial',
              paddingTop: isMobile ? '8px' : 'initial',
              paddingBottom: isMobile ? '8px' : 'initial',
            }}
          >
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot sx={{ backgroundColor: "green" }}>
                <IconComponent sx={{ fontSize: isMobile ? 18 : 24 }} />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            
            <TimelineContent sx={{ 
              py: { xs: 1.5, sm: 3 }, 
              px: { xs: 0.5, sm: 2 },
              flex: '1 1 100%',
              width: '100%',
            }}>
              <div className="flex justify-between items-start gap-1 md:gap-2 mb-1 md:mb-2">
                <Typography 
                  variant={isMobile ? "body1" : "h6"} 
                  component="span"
                  sx={{ fontSize: { xs: "0.95rem", sm: "1.1rem", md: "1.25rem" } }}
                  className="font-semibold"
                >
                  {edu.degree}
                </Typography>
                <span className='text-gray-400 text-[11px] sm:text-xs whitespace-nowrap text-right md:text-sm'>
                  {edu.year}
                </span>
              </div>
              <Typography 
                sx={{ fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" } }}
                className="text-gray-400"
              >
                {edu.institution}
              </Typography>
            </TimelineContent>
          </TimelineItem>
        );
      })}
    </Timeline>
  );
};

export default TimelineEducation;
