import { useSelector } from 'react-redux';




const SkillsAndTools = ({ skillsAndToolsData }) => {

    const { theme } = useSelector((state) => state.themeToggle);







    return (
        <>
            <div className="grid gap-3 lg:grid-cols-6 grid-cols-3 md:grid-cols-4 my-14">

                {
                    skillsAndToolsData && skillsAndToolsData.map((val, i) => {
                        const { skillName, icon: Icon } = val;

                        return (
                            <div
                                key={i}
                                className={`flex transition-all rounded-lg duration-100 hover:shadow-lg py-2 cursor-pointer  flex-col justify-center items-center ${theme === 'dark' ? ' hover:shadow-yellow-900' : ' hover:shadow-yellow-200'}`}
                            >

                                <Icon size={30} />
                                <p className='font-medium  lg:text-sm text-sm'>{skillName}</p>
                            </div>
                        )
                    })
                }
            </div >
        </>
    )
}

export default SkillsAndTools;