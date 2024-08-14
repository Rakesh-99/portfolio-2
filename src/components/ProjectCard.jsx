import React from 'react'
import { majorProjects, miniProjects } from '../data/data';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ProjectCard = () => {


    let { theme } = useSelector((state) => state.themeToggle)


    const getId = (i) => {
        console.log(i);

    }


    return (
        <>
            <div className="w-[80%] select-none m-auto">
                {/* Major Project  */}
                <h1 className='font-semibold text-center'>Major Projects</h1>
                <div className="my-10 gap-5 grid md:grid-cols-3 lg:grid-cols-3 grid-cols-1">
                    {
                        majorProjects.map((val) => {

                            return (
                                <div
                                    className={`flex border-2 shadow-md hover:-translate-y-1 duration-200 transition-all  py-5 px-5 flex-col justify-center items-center rounded-md ${theme === 'dark' ? 'border-zinc-700' : 'border-gray-200'}`} key={val._id}>
                                    <img className='rounded-md transition-all duration-1000  border-2' src={val.projectImages[0]} alt="projectImg" />

                                    <h1 className='font-semibold text-2xl line-clamp-1 my-2'>{val.projectTitle}</h1>
                                    <p className=' leading-7 my-3 text-sm'>{val.projectDescription}</p>


                                    <div
                                        className={`flex justify-between w-full`}>

                                        <Link to={`${val.liveLink}`}
                                            className={`text-sm hover:bg-slate-600 transition-all duration-500 shadow-sm border px-5 my-4 py-2 rounded-md font-semibold ${theme === 'dark' ? 'border-zinc-700 text-yellow-400' : 'border-gray-200 text-blue-400'}`}>See Live</Link>

                                        <Link to={`${val.source}`}
                                            className={`text-sm my-4 hover:bg-slate-600 transition-all duration-500 shadow-sm border px-5 py-2 rounded-md font-semibold ${theme === 'dark' ? 'border-zinc-700 text-yellow-400' : 'border-gray-200 text-blue-400'}`}>Source</Link>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>


                {/* Mini Projects  */}
                <h1 className='font-semibold text-center'>Mini Projects</h1>
                <div className="my-10 gap-5 grid md:grid-cols-3 lg:grid-cols-3 grid-cols-1">
                    {
                        miniProjects.map((val) => {

                            return (
                                <div
                                    className={`flex border-2  shadow-md hover:-translate-y-1 duration-200 transition-all  py-5 px-5 flex-col justify-center items-center rounded-md ${theme === 'dark' ? 'border-zinc-700' : 'border-gray-200'}`} key={val._id}>
                                    <img className='rounded-md transition-all duration-1000  border-2' src={val.projectImages[0]} alt="projectImg" />
                                    <p className='leading-7 my-3 text-sm'>{val.projectDescription}</p>


                                    <div
                                        className={`flex justify-between w-full`}>

                                        <Link to={`${val.liveLink}`}
                                            className={`text-sm hover:bg-slate-600 transition-all duration-500 shadow-sm border px-5 my-4 py-2 rounded-md font-semibold ${theme === 'dark' ? 'border-zinc-700 text-yellow-400' : 'border-gray-200 text-blue-400'}`}>See Live</Link>

                                        <Link to={`${val.source}`}
                                            className={`text-sm my-4 hover:bg-slate-600 transition-all duration-500 shadow-sm border px-5 py-2 rounded-md font-semibold ${theme === 'dark' ? 'border-zinc-700 text-yellow-400' : 'border-gray-200 text-blue-400'}`}>Source</Link>
                                    </div>

                                </div>
                            )
                        })
                    }
                </div>

            </div >
        </>
    )
}
export default ProjectCard;