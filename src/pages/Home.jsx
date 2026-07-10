
import TypeWriterEffect from 'react-typewriter-effect';
import { useSelector } from 'react-redux';
import HeroImg from '../assets/heroImg4.png';
import About from './About';
import Projects from './Projects';
// import Resume from './Resume';
import Contact from './Contact';











const Home = () => {

    const { theme } = useSelector((state) => state.themeToggle);


    return (
        <>
            {/* Home Section */}
            <section id="home" className="mx-auto flex lg:flex-row flex-col lg:place-items-start place-items-center  max-w-[70rem]">
                {/* left content  */}
                <div className="lg:mt-10 mt-10 xl:ml-0 mx-3">
                    <h1 className='lg:text-[4rem]  text-[2rem]'>Hi there! I'm Rakesh.</h1>
                    
                    <div className="lg:text-xl text-base flex flex-col gap-5 font-[400]">
                        <p className=' mb-8'></p>
                       <p>
                        I'm a <span className="text-yellow-400 mx-1 font-semibold">Full Stack Developer</span> with
                        <span className="text-yellow-400 mx-1 font-semibold">1.5+ years</span> of professional
                        experience building scalable and responsive web applications using the
                        <span className="text-yellow-400 mx-1 font-semibold">MERN stack</span>.
                        </p>

                        <p>
                        I have strong proficiency in <span className="text-yellow-400 mx-1 font-semibold">JavaScript, TypeScript, React.js, Node.js, Express.js, C++, Core Java, and Git</span>,
                        with a focus on writing clean, maintainable, and efficient code.
                        </p>

                        <p>
                        I have hands on experience  working with both
                        <span className="text-yellow-400 mx-1 font-semibold"> SQL and NoSQL databases</span>,
                        including <span className="text-yellow-400 mx-1 font-semibold">MySQL</span> and
                        <span className="text-yellow-400 mx-1 font-semibold"> MongoDB</span>, while building secure and scalable REST APIs.
                        </p>

                        <p>
                        I'm familiar with cloud technologies like
                        <span className="text-yellow-400 mx-1 font-semibold"> AWS</span> and have foundational knowledge of modern backend tools such as
                        <span className="text-yellow-400 mx-1 font-semibold"> Docker, Redis</span>,
                        which I'm actively expanding through continuous learning.
                        </p>


                    </div>
                </div>
                {/* right  */}
                <div className="">
                    <div className="">
                        <img src={HeroImg} className='lg:max-w-[450px] ' alt="heroImg" />
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="min-h-screen flex items-center"><About /></section>
            {/* Projects Section */}
            <section id="projects" className="min-h-screen flex flex-col items-center"><Projects /></section>
            {/* Resume Section */}
            {/* <section id="resume" className="min-h-screen flex items-center"><Resume /></section> */}
            {/* Contact Section */}
            <section id="contact" className="min-h-screen flex items-center"><Contact /></section>
        </>
    )
}

export default Home