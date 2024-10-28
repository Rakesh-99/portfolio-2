import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import { FaLaptopCode } from "react-icons/fa";
import { internshipTechUsed } from "../data/data";






const ExperienceTimeline = () => {
    return (
        <>
            <VerticalTimeline className="my-10">

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#4B0082', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="Sep 2024 - Nov 2024"
                    iconStyle={{ background: '#4B0082', color: '#fff' }}
                    icon={<FaLaptopCode />}
                >
                    {/* Type  */}
                    <div className="flex justify-center">
                        <h1 className="text-2xl font-bold">Internship</h1>
                    </div>


                    {/* Role  */}
                    <div className="flex gap-2 mt-5">
                        <h1 className="font-medium">Position - </h1>
                        <h1 className=""> Mern Stack Developer</h1>
                    </div>

                    {/* Technology used  */}

                    <div className="">
                        <h1 className="mt-3 font-medium">Technology used</h1>

                        <div className="grid grid-cols-7 gap-2 px-2">
                            {
                                internshipTechUsed.map((val, idx) => {
                                    // const { icon: Icon } = val;
                                    return (
                                        <div className="flex flex-col items-center " key={idx}>
                                            <p style={{ color: `${val.color}` }}><val.icon size={25} /></p>
                                            {/* <p className="text-xs">{val.lable}</p> */}
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>

                    {/* Description  */}

                    <div className="mt-5">
                        <ul>
                            <li className="list-disc">Implemented a comment and reply comment feature using Next.js appication,handeling comment threads across mulitple posts and ensuring efficient API communication for smooth interactions.</li>
                            <li className="list-disc my-2">
                                Developed and managed REST apis using express.js for a React native application , enebling real time data synchronization between front-end and backend-systems.
                            </li>
                            <li></li>
                        </ul>
                    </div>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </>
    )
}

export default ExperienceTimeline