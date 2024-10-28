import TypeWriterEffect from 'react-typewriter-effect';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import HeroImg from '../assets/heroImg4.png';











const Home = () => {

    const { theme } = useSelector((state) => state.themeToggle);


    return (
        <>

            <div className="duration-500 py-5 transition-all select-none grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1">

                {/* left content  */}
                <div className="flex flex-col gap-10">


                    {/* first section  */}
                    <div className="flex md:mt-20 lg:mt-20 mt-10 flex-col justify-center">

                        <div className="flex  md:w-[70%] lg:w-[70%] w-[90%] m-auto items-center gap-5">
                            <h1 className={` md:text-4xl lg:text-4xl text-2xl  font-extrabold ${theme === 'dark' ? 'text-white' : 'text-gray-800 '}`}> Hi There!
                            </h1>
                            <span className='scale-[230%] '>👋</span>
                        </div>

                        <div className=" md:w-[70%] lg:w-[70%] w-[90%] m-auto">
                            <h1 className='flex font-mono items-center gap-1 lg:text-2xl text-xl md:text-2xl font-medium'>
                                I am
                                <span
                                    className='mt-2 bg-clip-text bg-gradient-to-r from-cyan-600 via-cyan-500 to-yellow-400 inline-block text-transparent'> RAKESH KUMAR PARIDA.
                                </span>
                            </h1>

                            <TypeWriterEffect
                                textStyle={{
                                    color: 'rgb(255, 191, 0)',
                                    fontWeight: 500,
                                    fontSize: '20px',
                                }}
                                startDelay={0}
                                cursorColor="rgb(255, 191, 0)"

                                multiText={[
                                    'Fullstack Stack Developer',
                                ]}
                                multiTextDelay={1000}
                                typeSpeed={100}
                                multiTextLoop
                            />
                        </div>

                    </div>



                    {/* second section  */}
                    <div className="flex flex-col">

                        <div className="flex font-[500] text-3xl items-center  md:w-[70%] lg:w-[70%] w-[95%] m-auto gap-2 ">
                            <h1 className=''>Let me  </h1>
                            <h1
                                className=' bg-clip-text bg-gradient-to-r from-cyan-600 via-yellow-500 to-indigo-400 inline-block text-transparent'> introduce
                            </h1>
                            <h1 className=''>myself</h1>
                        </div>

                        <p className='mt-3  md:w-[70%] lg:w-[70%] w-[95%] text-sm md:text-base lg:text-base m-auto  font-mono leading-7'>
                            I fell in love with programming and I have at least learnt something,I think..🤷‍♂️
                            I am fluent in classics like Java & Javascript
                            My field of Interests are building new Web Technologies and Products.
                            Whenever possible, I also apply my passion for developing products with Node.js and Modern Javascript Library and Frameworks like React.js and Next.js.
                        </p>
                    </div>

                </div>


                {/* right  */}
                <div className="">
                    <div className="flex w-full justify-center">
                        <img src={HeroImg} className='md:w-[500px] w-full' alt="heroImg" />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home