import React from 'react'
import { majorProjects, miniProjects } from '../data/data';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ProjectCard = () => {


    let { theme } = useSelector((state) => state.themeToggle)


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
                                    className={`flex border-2 shadow-md hover:-translate-y-1 duration-200 transition-all px-4 py-2 flex-col justify-center items-center rounded-md ${theme === 'dark' ? 'border-zinc-700' : 'border-gray-200'}`} key={val._id}>

                                    <img
                                        className='rounded-md transition-all duration-1000  border-2' src={val.projectImages[0]} alt="projectImg" />

                                    <h1
                                        className='font-semibold text-2xl line-clamp-1 my-2 bg-clip-text bg-gradient-to-r from-green-600 via-cyan-700 to-indigo-500 inline-block text-transparent'>
                                        {val.projectTitle}
                                    </h1>
                                    <p
                                        className=' leading-7 mt-1 text-sm'>
                                        {val.projectDescription}
                                    </p>


                                    {/* Tech used  */}
                                    <p className={` text-sm my-2 font-mono  ${theme === 'dark' ? 'text-yellow-400' : 'text-blue-400'}`}>Tech used</p>


                                    <div className="flex flex-wrap mb-5 justify-center  gap-2">
                                        {
                                            val.techIcons?.map((getIco, i) => {
                                                const { icon: Icon, iconName } = getIco;
                                                return (
                                                    <div className={`flex border rounded-full px-1 py-1 shadow-2xl justify-centr items-center flex-col ${theme === 'dark' ? 'border-gray-700' : 'border-r-gray-400'}`} key={i}>
                                                        <Icon color={getIco.color} size={25} />
                                                    </div>
                                                )

                                            })
                                        }
                                    </div>

                                    <div
                                        className={`flex justify-between w-full`}>

                                        <Link to={`${val.liveLink}`}
                                            className={`border duration-300  text-sm font-mono  shadow-md hover:-translate-y-1 rounded-md py-2 px-2  ${theme === 'dark' ? 'border-gray-600 hover:bg-yellow-500' : ' border-blue-200 hover:bg-indigo-700 hover:text-white'}`}>See Live</Link>

                                        <Link to={`${val.source}`}
                                            className={`border duration-300 text-sm font-mono  shadow-md hover:-translate-y-1 rounded-md py-2 px-5  ${theme === 'dark' ? 'border-gray-600 hover:bg-yellow-500' : ' border-blue-200 hover:bg-indigo-700 hover:text-white'}`}>Source</Link>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>


                {/* Mini Projects  */}
                <h1 className='font-semibold text-center'>Mini Projects</h1>
                <div className="my-5 gap-5 grid md:grid-cols-3 lg:grid-cols-3 grid-cols-1">
                    {
                        miniProjects.map((val) => {

                            return (
                                <div
                                    className={`flex border-2  shadow-md hover:-translate-y-1 duration-200 transition-all  py-2 px-5 flex-col justify-center items-center rounded-md ${theme === 'dark' ? 'border-zinc-700' : 'border-gray-200'}`} key={val._id}>

                                    <img
                                        className='rounded-md transition-all duration-1000  border-2' src={val.projectImages[0]} alt="projectImg" />
                                    <p
                                        className='leading-7 mt-3 text-sm'>
                                        {val.projectDescription}
                                    </p>


                                    {/* Tech used  */}
                                    <p
                                        className={` text-sm my-2 font-mono  ${theme === 'dark' ? 'text-yellow-400' : 'text-blue-400'}`}
                                    >Tech used</p>


                                    <div
                                        className="flex flex-wrap  justify-center  gap-2">
                                        {
                                            val.techIcons?.map((getIco, i) => {
                                                const { icon: Icon, iconName } = getIco;
                                                return (
                                                    <div className={`flex border rounded-full px-1 py-1 shadow-2xl justify-centr items-center flex-col ${theme === 'dark' ? 'border-gray-700' : 'border-r-gray-400'}`} key={i}>
                                                        <Icon color={getIco.color} size={25} />
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>

                                    <div
                                        className={`flex mt-3 justify-between w-full`}>

                                        <Link to={`${val.liveLink}`}
                                            className={`border duration-300  text-sm font-mono  shadow-md hover:-translate-y-1 rounded-md py-2 px-2  ${theme === 'dark' ? 'border-gray-600 hover:bg-yellow-500' : ' border-blue-200 hover:bg-indigo-700 hover:text-white'}`}>See Live</Link>

                                        <Link to={`${val.source}`}
                                            className={`border duration-300 text-sm font-mono  shadow-md hover:-translate-y-1 rounded-md py-2 px-5  ${theme === 'dark' ? 'border-gray-600 hover:bg-yellow-500' : ' border-blue-200 hover:bg-indigo-700 hover:text-white'}`}>Source</Link>
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