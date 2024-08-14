import React, { useState } from 'react'
import { AiOutlineHome } from "react-icons/ai";
import { FaRegUserCircle, FaRegFileCode } from "react-icons/fa";
import { TiContacts } from "react-icons/ti";
import { AiTwotoneProject } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { PiMoonStarsDuotone } from "react-icons/pi";
import { HiMiniSun } from "react-icons/hi2";
import { useLocation } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from '../redux/slice/ThemeSlice';
import { RiBloggerLine } from "react-icons/ri";


const NavBar = () => {

    const dispatch = useDispatch();
    const location = useLocation();
    const [toggleThemeIcon, setToggleIcon] = useState(false);
    const [hamBurger, setHamBurger] = useState(false);
    const { theme } = useSelector((state) => state.themeToggle)






    const navItems = [
        {
            navText: 'Home',
            path: '/',
            icon: AiOutlineHome

        },
        {
            navText: 'About',
            path: '/about',
            icon: FaRegUserCircle

        },
        {
            navText: 'Projects',
            path: '/projects',
            icon: AiTwotoneProject
        },
        {
            navText: 'Resume',
            path: '/resume',
            icon: FaRegFileCode
        },
        {
            navText: 'Blog',
            path: 'https://blogwizard.vercel.app/',
            icon: RiBloggerLine
        },

        {
            navText: 'Contact',
            path: '/contact',
            icon: TiContacts
        },

    ]

    const toggleThemeBtn = () => {
        setToggleIcon(!toggleThemeIcon);
        dispatch(changeTheme());
    }

    const handleHamToggle = () => {
        setHamBurger(!hamBurger);
    }


    return (
        <>
            <nav className={`w-full shadow-2xl border-b md:border-none lg:border-none sticky top-0 left-0 items-center md:h-20 lg:h-20 overflow-hidden    flex-col pl-5 md:pl-0 lg:flex-row md:flex-row  py-4  md:flex lg:flex  transition-all duration-1000 justify-evenly ${hamBurger === true ? 'h-80' : 'h-16'} ${theme === 'light' ? 'bg-blue-50 md:shadow-none lg:shadow-none shadow-blue-100 text-gray-800 ' : 'bg-zinc-800 border-zinc-700  text-gray-200 transition-all shadow-2xl md:shadow-none shadow-orange-900'}`}>


                <div className=" flex items-center md:gap-10 lg:gap-10 gap-0 justify-between">

                    <Link to={'/'} className={`font-bold`}>Rakesh's Portfolio</Link>

                    {/* hamburger icon  */}
                    <button onClick={() => toggleThemeBtn()} className='rounded-full px-1 py-1 transition-all duration-150'>
                        {
                            toggleThemeIcon === true
                                ?
                                <PiMoonStarsDuotone size={23} className='active:animate-spin' />
                                :
                                <HiMiniSun size={23} className='active:animate-spin' />
                        }
                    </button>

                    {/* Hamburger  */}
                    <button className='md:hidden lg:hidden active:bg-violet-500 rounded-full px-1 py-1 duration-1000 transition-all float-right mr-5' onClick={() => handleHamToggle()}>
                        {
                            hamBurger ? <RxCross2 size={23} className='active:animate-spin transition-all duration-1000' /> : <GiHamburgerMenu size={23} className='active:animate-spin transition-all duration-1000' />
                        }
                    </button>

                </div>

                {
                    navItems.map((values, i) => {
                        const { navText, path, icon: Icon } = values;
                        return (
                            <div
                                className={`z-20 md:flex lg:flex justify-start flex relative top-5 md:static lg:static my-5 lg:my-0 md:my-0  transition-all duration-100 gap-1 items-center   ${location.pathname === `${path}` && 'md:border-b  lg:border-b bg-clip-text bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline text-transparent'}`}
                                key={i}>

                                <span><Icon size={15} className={`${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`} /></span>
                                <Link
                                    onClick={handleHamToggle}
                                    to={`${path}`}
                                    className='text-sm active:scale-95 transition-all font-semibold'>{navText}</Link>
                            </div>
                        )
                    })
                }
            </nav >
        </>
    )
}

export default NavBar