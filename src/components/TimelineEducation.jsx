import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import { IoIosSchool } from "react-icons/io";



const TimelineEducation = () => {
    return (
        <>
            <VerticalTimeline className="my-10">

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'green', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="2021 - 2024 "
                    iconStyle={{ background: 'green', color: '#fff' }}
                    icon={<IoIosSchool />}
                >
                    <h1 className="font-bold mb-3  text-lg">Specialization</h1>
                    <h3 className="vertical-timeline-element-title font-medium">B.TECH in Computer Science & Engineering</h3>
                    <h4 className="vertical-timeline-element-subtitle  font-mono">Secured - 7.26 CGPA</h4>


                    <p className="">
                        Nalanda Institute of Technology, Bhubaneswar, Odisha.
                    </p>
                </VerticalTimelineElement>


                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#8B0000', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="2018 - 2021"
                    iconStyle={{ background: '#8B0000', color: '#fff' }}
                    icon={<IoIosSchool />}
                >
                    <h1 className="font-bold mb-3  text-lg">Specialization</h1>
                    <h3 className="vertical-timeline-element-title font-medium">Information Technology</h3>
                    <h4 className="vertical-timeline-element-subtitle  font-mono">Secured - 69%</h4>


                    <p className="">
                        Government Polytechnic Bhubaneswar, Odisha.
                    </p>
                </VerticalTimelineElement>

            </VerticalTimeline>
        </>
    )
};



export default TimelineEducation;
