
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
                <div className="lg:mt-32 mt-10 xl:ml-0 mx-3">
                    <h1 className='lg:text-[4rem]  text-[2rem]'>Hi there! I'm Rakesh.</h1>
                    
                    <div className="lg:text-xl text-base font-[400]">
                        <p className='mt-12 mb-8'>I started building on the web in 2022 and never stopped.</p>
                        <p className='my-5'>I'm fluent in classics like Java & Javascript</p>
                        <p>My field of Interests are building new Web Technologies and Products.
                            Whenever possible, I also apply my passion for developing products with Node.js and Modern Javascript Library and Frameworks like React.js and Next.js.</p>
                    </div>
                </div>
                {/* right  */}
                <div className="">
                    <div className="">
                        <img src={HeroImg} className='lg:max-w-[500px] max-h-[400px]' alt="heroImg" />
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