import { useSelector } from 'react-redux';




const SkillsAndTools = ({ skillsAndToolsData }) => {

    const { theme } = useSelector((state) => state.themeToggle);







    return (
        <>
            <div className="grid gap-10 lg:grid-cols-4 grid-cols-2 md:grid-cols-4 my-14">

                {
                    skillsAndToolsData && skillsAndToolsData.map((val, i) => {
                        const { skillName, icon: Icon } = val;

                        return (
                            <div
                                key={i}
                                className={`flex  rounded-2xl hover:shadow-2xl py-2 px-2 hover:animate-pulse hover:scale-95 duration-500 cursor-pointer  flex-col justify-center items-center ${theme === 'dark' ? ' hover:green-600 hover:shadow-green-500' : ' hover:shadow-blue-500'}`}
                            >

                                <Icon size={60} />
                                <p className='font-semibold text-lg bg-clip-text bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent'>{skillName}</p>
                            </div>
                        )
                    })
                }
            </div >
        </>
    )
}

export default SkillsAndTools;