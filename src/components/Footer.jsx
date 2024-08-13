import React from 'react'
import { footerLinks } from '../data/data';
import { Link } from 'react-router-dom';



const Footer = () => {




    return (
        <>
            <div className="h-32  flex items-center flex-col md:flex-row lg:flex-row  justify-around  shadow-2xl">
                <p
                    className='text-sm'>Designed and Developed by
                    <Link to={'https://github.com/Rakesh-99'} className='font-medium hover:text-blue-400'> Rakesh Kumar Parida</Link>
                </p>
                <div className="flex md:gap-20 lg:gap-20 gap-5">
                    {
                        footerLinks.map((val, i) => {
                            const { link, icon: Icon } = val;
                            return (
                                <div className="flex rounded-full items-center hover:scale-90 hover:shadow-2xl hover:shadow-green-500 py-4 px-4 transition-all" key={i}>
                                    <Link target='_blank' className='' to={`${link}`}><Icon size={30} /></Link>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Footer