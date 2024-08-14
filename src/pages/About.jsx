import AboutImg from '../assets/AboutImg.png';
import { useSelector } from 'react-redux';
import EducationCard from '../components/EducationCard';
import SkillsAndTools from '../components/SkillsAndTools';
import { skillInfo, toolsIUse } from '../data/data';





const About = () => {



    const educationSlice = useSelector((state) => state.educationSlice);

    const { theme } = useSelector((state) => state.themeToggle);




    return (

        <div className="select-none px-5 flex flex-col w-[95%] md:w-[75%] m-auto">

            <div className="heroImg w-full  flex justify-center py-5">
                <img src={AboutImg} alt="aboutImg" className=' md:w-1/2 lg:h-1/2  w-[500px]:w-56' />
            </div>

            <div className="into flex justify-center py-3">
                <h1 className=' text-2xl font-bold max-[500px]:text-sm'>Hi, <span className='bg-clip-text bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent py-1 px-4 rounded-md max-[500px]:text-sm'>I’m Rakesh Kumar Parida.</span>Nice to meet you.</h1>
            </div>

            <div className="description flex leading-10 w-full justify-center flex-col items-center mt-5">
                <p className='font-normal  text-justify '>
                    I am a Mern Stack developer with a passion for creating <span className='font-medium'>beautiful</span>  and <span className='font-medium'>user-friendly</span>  websites. I have a strong understanding of <span className='font-medium'>front-end</span> development and familiar with Backend technologies like <span className='font-medium'>Node,Express</span>  and <span className='font-medium'>MongoDB</span>. Additionally, I have expertise in implementing <span className='font-medium'>user Authentication,authorization </span>and  creating <span className='font-semibold'>REST APIs</span>  with real time <span className='font-medium'>Database integration</span>  using <span className='font-medium'>MongoDB Atlas</span> . I am experienced in deploying MERN Stack applications on platforms such as <span className='font-medium'>Aws, Vercel, Render</span> .

                    <br />

                    I am excited to put my skills to use in a professional setting. I am a quick learner and a team player, and I am confident that I can be a valuable asset to any web development team.
                    Thank You.
                </p>
            </div>

            {/* Education details  */}
            <hr className='my-10' />

            <h1 className='text-center md:text-8xl lg:text-8xl  text-2xl font-bold  bg-clip-text bg-gradient-to-r from-orange-500 via-green-500 to-violet-600 inline-block text-transparent '>Education</h1>


            <div className=" grid-cols-1 grid md:grid-cols-2 min-h-80 lg:grid-cols-2 my-10 rounded-2xl">

                {
                    educationSlice && educationSlice.map((values, i) => {
                        return (

                            <div className=" mx-2" key={i}>
                                <EducationCard {...values} />
                            </div>
                        )

                    })
                }
            </div>

            {/* Skills  */}
            <h1 className='text-center md:text-8xl lg:text-8xl  text-2xl font-bold bg-clip-text bg-gradient-to-r from-orange-500 via-green-500 to-violet-600 inline-block text-transparent'>Skills</h1>

            <div className="skill-card">
                <SkillsAndTools skillsAndToolsData={skillInfo} />
            </div>


            {/* Tools  */}
            <h1 className='text-center md:text-8xl lg:text-8xl  text-2xl font-bold bg-clip-text bg-gradient-to-r from-orange-500 via-green-500 to-violet-600 inline-block text-transparent'>Tools I use</h1>

            <div className="skill-card">
                <SkillsAndTools skillsAndToolsData={toolsIUse} />
            </div>

        </div>

    )
}

export default About;