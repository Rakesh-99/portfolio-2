import React from 'react'
import ResumePDF from '../assets/resume/RKP.pdf';
import ResumeIMG from '../assets/resume/RKP.png';
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';



const Resume = () => {


    const { theme } = useSelector((state) => state.themeToggle);


    const notify = () => {
        setTimeout(() => {
            toast.success('Thanks for downloading my Resume')
        }, 1000);
    }

    return (

        <div className="min-h-screen w-[95%] lg:w-[70%] md:w-[70%] m-auto my-5">

            <div className="my-10 text-center">
                <button onClick={notify} className={`border duration-300 text-sm font-semibold  shadow-md hover:-translate-y-1 rounded-md py-2 px-2  ${theme === 'dark' ? 'border-yellow-500 hover:bg-yellow-500' : ' border-blue-500 hover:bg-indigo-700 hover:text-white'}`}>
                    <a href={ResumePDF} download='RakeshResumePdf'>Download CV</a>
                </button>
            </div>

            <div className={`showResume border rounded-2xl px-5 py-5 ${theme === 'dark' ? 'border-gray-700 shadow-2xl shadow-yellow-800' : 'border-gray-200 shadow-xl shadow-blue-300 '} `}>
                <img src={ResumeIMG} alt="Resume" className='rounded-2xl' />
            </div>

            <div className="w-full hidden md:block lg:block text-center my-10">
                <button onClick={notify} className={`border duration-300 text-sm font-semibold  shadow-md hover:-translate-y-1 rounded-md py-2 px-2  ${theme === 'dark' ? 'border-yellow-500 hover:bg-yellow-500' : ' border-blue-500 hover:bg-indigo-700 hover:text-white'}`}>
                    <a href={ResumePDF} download='RakeshResumePdf'>Download CV</a>
                </button>
            </div>

        </div>
    )
}

export default Resume;