import mernImg1 from '../assets/mernBlogImages/image1.png';

import portfolioImg1 from '../assets/portfolio2Images/image1.png'

import JavaImg1 from '../assets/javaProject/javaProject.jpg'


// Mini projects images 

import petImg1 from '../assets/petImages/petImg1.png';
import weatherImg from '../assets/weatherImg/weatherAppImg.png'

import quoteImg1 from '../assets/quoteImg/quoteImg1.png';




// Skill Icons
import { FaCss3, FaCss3Alt, FaGitAlt } from "react-icons/fa6";
import { RiTailwindCssLine, RiJavascriptFill } from "react-icons/ri";
import { IoLogoReact } from "react-icons/io5";
import { FaNode, FaJava } from "react-icons/fa";
import { SiExpress, SiMongodb, SiFirebase } from "react-icons/si";
import { TiHtml5 } from "react-icons/ti";
import { BiLogoTypescript } from "react-icons/bi";
import { TbBrandRedux } from "react-icons/tb";


// Tool Icons : 
import { FcLinux } from "react-icons/fc";
import { TbBrandVscode } from "react-icons/tb";
import { SiPostman } from "react-icons/si";
import { RxVercelLogo } from "react-icons/rx";
import { SiIntellijidea } from "react-icons/si";


//Footer Links : 
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";







// Skills 
export const skillInfo = [
    {
        skillName: 'Core Java',
        icon: FaJava,
    },
    {
        skillName: 'JavaScript',
        icon: RiJavascriptFill,

    },
    {
        skillName: 'TypeScript',
        icon: BiLogoTypescript,

    },
    {
        skillName: 'React Js',
        icon: IoLogoReact,

    },
    {
        skillName: 'Redux',
        icon: TbBrandRedux
    },
    {
        skillName: 'Tailwind Css',
        icon: RiTailwindCssLine,

    },
    {
        skillName: 'MongoDB',
        icon: SiMongodb,

    },
    {
        skillName: 'Node Js',
        icon: FaNode,

    },
    {
        skillName: 'Express Js',
        icon: SiExpress,

    },
    {
        skillName: 'Git',
        icon: FaGitAlt,

    },
    {
        skillName: 'FireBase',
        icon: SiFirebase,

    },
    {
        skillName: 'CSS3',
        icon: FaCss3Alt,

    },
    {
        skillName: 'HTML5',
        icon: TiHtml5,

    },
]

// Tools 
export const toolsIUse = [
    {
        skillName: 'Linux',
        icon: FcLinux,
    },
    {
        skillName: 'Vs Code',
        icon: TbBrandVscode,
    },
    {
        skillName: 'PostMan',
        icon: SiPostman,
    },
    {
        skillName: 'Vercel',
        icon: RxVercelLogo,
    },
    {
        skillName: 'Intellij Idea',
        icon: SiIntellijidea,
    },
];

// Footer links 

export const footerLinks = [
    {
        link: 'https://github.com/Rakesh-99',
        icon: FaGithub

    },
    {
        link: 'https://www.linkedin.com/in/rakesh-kumar-parida-b142081a9/',
        icon: FaLinkedin
    },
    {
        link: 'https://www.instagram.com/_rakesh_ku_parida/',
        icon: FaInstagram
    },
    {
        link: 'https://x.com/kumar_pari23020',
        icon: FaTwitter
    },

]


export const majorProjects = [
    {
        _id: 121,
        projectTitle: 'MERN Stack Blog App',
        projectDescription: 'A fullstack blog app using MERN. It has features including an Admin panel, advanced authentication using JSON Web Token, sorting, searching, password hashing, theme preference, and much more.',
        projectImages: [mernImg1],
        techIcons: [
            {
                iconName: 'React.Js',
                icon: IoLogoReact,
                color: '#61dbfb'
            },
            {
                iconName: 'Tailwind',
                icon: RiTailwindCssLine,
                color: '#61dbfb'
            },
            {
                iconName: 'Redux',
                icon: TbBrandRedux,
                color: '#764abc'
            },

            {
                iconName: 'Express.Js',
                icon: SiExpress,
            },
            {
                iconName: 'Firebase',
                icon: SiFirebase,
                color: '#F6820D'
            },
            {
                iconName: 'MongoDB',
                icon: SiMongodb,
                color: '#4db33d'
            },
            {
                iconName: 'Node.Js',
                icon: FaNode,
                color: '#68a063'
            }
        ],
        liveLink: 'https://blogwizard.vercel.app/',
        source: 'https://github.com/Rakesh-99/Fullstack-Blog-App'
    },
    {
        _id: 122,
        projectTitle: 'React Portfolio',
        projectDescription: 'My personal portfolio showcases my skills and accomplishments as a web developer. It was built using React, a powerful JavaScript library for building user interfaces, to create an interactive and visually appealing web presence.',
        projectImages: [portfolioImg1],
        techIcons: [
            {
                iconName: 'React.Js',
                icon: IoLogoReact,
                color: '#61dbfb'
            },
            {
                iconName: 'Tailwind',
                icon: RiTailwindCssLine,
                color: '61dbfb'
            },
            {
                iconName: 'Css3',
                icon: FaCss3Alt,
                color: 'blue'
            }
        ],
        liveLink: 'https://rakesh99.vercel.app/',
        source: 'https://github.com/Rakesh-99/Portfolio'
    },
    {
        _id: 123,
        projectTitle: 'School Management System',
        projectDescription: 'Developed a core Java-based school management system implementing object oriented principles. The system tracks students and teachers, including total earnings from students and total salary expenses for teachers.',
        projectImages: [JavaImg1],
        techIcons: [
            {
                iconName: 'Java',
                icon: FaJava,
                color: 'orange'
            },

        ],
        // liveLink: 'https://rakesh99.vercel.app/',
        source: 'https://github.com/Rakesh-99/School-management-system'
    },
];

export const miniProjects = [
    {
        _id: 201,
        projectTitle: 'Pet listing',
        projectDescription: 'Developed a pet listing app that provides a comprehensive list of pets available. It includes features like pagination for easy navigation through the list of pets, filtration by animal type to help users find specific pets, and detailed information about each pet.',
        projectImages: [petImg1],
        techIcons: [
            {
                iconName: 'React.Js',
                icon: IoLogoReact,
                color: '#61dbfb'
            },
            {
                iconName: 'Tailwind',
                icon: RiTailwindCssLine,
                color: '#61dbfb'
            },
            {
                iconName: 'Redux',
                icon: TbBrandRedux,
                color: '#764abc'
            },
        ],
        liveLink: 'https://pet-listing-assignment.vercel.app/',
        source: 'https://github.com/Rakesh-99/pet-listing-assignment'
    },
    {
        _id: 202,
        projectTitle: 'Quote generater',
        projectDescription: 'Developed a quote app using React and Redux Toolkit. The app generates a new quote each time a button is clicked, providing users with fresh and inspiring content.',
        projectImages: [quoteImg1],
        techIcons: [
            {
                iconName: 'React.Js',
                icon: IoLogoReact,
                color: '#61dbfb'
            },
            {
                iconName: 'Tailwind',
                icon: RiTailwindCssLine,
                color: '#61dbfb'
            },
            {
                iconName: 'Redux',
                icon: TbBrandRedux,
                color: '#764abc'
            },
        ],
        liveLink: 'https://quote-generator-ten-rust.vercel.app/',
        source: 'https://github.com/Rakesh-99/quote-generator'
    },
    {
        _id: 203,
        projectTitle: 'Weather App',
        projectDescription: 'Developed a React-based weather app that provides detailed real-time weather information, including country, wind speed, humidity, pressure, temperature, weather conditions, and visibility. The app also features a dynamic weather image that changes based on the current weathe',
        projectImages: [weatherImg],
        techIcons: [
            {
                iconName: 'React.Js',
                icon: IoLogoReact,
                color: '#61dbfb'
            },
            {
                iconName: 'Css3',
                icon: FaCss3Alt,
                color: 'blue'
            },
        ],
        liveLink: 'https://weather-app-tau-dun.vercel.app/',
        source: 'https://github.com/Rakesh-99/Weather-App-React'
    },
];
