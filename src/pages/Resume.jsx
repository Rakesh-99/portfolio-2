import React from 'react'
import ResumePDF from '../assets/resume/RakeshUpdatedResume.pdf';
import ResumeIMG from '../assets/resume/RakeshUpdatedResume.png';
import { useSelector } from 'react-redux';



const Resume = () => {


    const { theme } = useSelector((state) => state.themeToggle);



    return (

        <div className="min-h-screen w-[90%] lg:w-[50%] md:w-[50%] m-auto">

            <div className="my-10 text-center">
                <button className={`border duration-300 text-sm font-semibold  shadow-md hover:-translate-y-1 rounded-md py-2 px-2  ${theme === 'dark' ? 'border-gray-500 hover:bg-yellow-500' : 'border-gray-300 hover:bg-indigo-700 hover:text-white'}`}>
                    <a href={ResumePDF} download='RakeshResumePdf'>Download CV</a>
                </button>
            </div>

            <div className="showResume ">
                <img src={ResumeIMG} alt="Resume" />
            </div>
        </div>


    )
}

export default Resume;