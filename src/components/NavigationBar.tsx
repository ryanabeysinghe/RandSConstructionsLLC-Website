"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import Logo from '../../public/images/logo.png'
import { motion } from 'framer-motion';
import { FacebookIcon, LinkedInIcon } from './SocialMediaIcons';
//import { useRouter } from 'next/router';


interface CustomLinkProps {
    href: string;
    title: string;
    className?: string;
}

const CustomLink: React.FC<CustomLinkProps> = ({ href, title, className = '' }) => {
    const pathname = usePathname();

    return (
        <Link href={href} className={`${className} relative group`}>
            {title}

            <span className={`h-[2.5px] inline-block w-0 bg-customBlue absolute left-0 -bottom-1 group-hover:w-full transition-[width] ease duration-300 dark:bg-primary ${pathname === href ? 'w-full' : 'w-0'}`}>&nbsp;</span>
        </Link>
    );
};


const NavigationBar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const [isOnTop, setIsOnTop] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = document.documentElement.scrollTop;
            const isOnTop = scrollTop === 0;
            setIsOnTop(isOnTop);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    return (
        <header className={`w-full fixed z-10 overflow-hidden top-0 h-24 bg-ivory ${isOnTop ? '' : 'shadow-xl'}`}>

            <div className='flex justify-between items-center w-full h-full pl-16 pr-24 max-w-[1920px] mx-auto sm:pl-2 sm:pr-14'>
                <Link href='/'>
                    <Image src={Logo} alt='' width='140' height='75' className='cursor-pointer' priority />
                </Link>

                {/* Responsive Mobile Nav Bar Icon */}

                <button className='flex-col justify-between items-center hidden lg:flex' onClick={handleClick} title='Mobile Navigation Bar Button'>
                    <span className={`bg-matteblack block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
                    <span className={`bg-matteblack block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                    <span className={`bg-matteblack block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
                </button>

                <nav className='lg:hidden'>
                    <CustomLink href="/" title="home" className='mr-5 capitalize text-lg' />
                    <CustomLink href="/about" title="about" className='mx-5 capitalize text-lg' />
                    <CustomLink href="/services" title="services" className='mx-5 capitalize text-lg' />
                    <CustomLink href="/gallery" title="gallery" className='mx-5 capitalize text-lg' />
                    <CustomLink href="/locations" title="locations" className='mx-5 capitalize text-lg' />
                    <CustomLink href="/contact" title="contact" className='ml-5 capitalize text-lg' />
                </nav>

            </div>

            {/* Mobile Navigation Menu */}

            {
                isOpen ?
                    <motion.div initial={{ scale: 0, opacity: 0, x: '-50%', y: '-50%' }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5 }} className='min-w-[70vw] flex flex-col justify-between z-30 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg backdrop-blur-md py-10 bg-matteblack/90'>
                        <nav className='flex items-center flex-col justify-center text-ivory'>
                            <CustomLink href="/" title="home" className='my-3 uppercase text-base' />
                            <CustomLink href="/about" title="about" className='my-3 uppercase text-base' />
                            <CustomLink href="/services" title="services" className='my-3 uppercase text-base' />
                            <CustomLink href="/gallery" title="gallery" className='my-3 uppercase text-base' />
                            <CustomLink href="/locations" title="locations" className='my-3 uppercase text-base' />
                            <CustomLink href="/contact" title="contact" className='my-3 uppercase text-base' />
                        </nav>

                        <nav className='flex items-center justify-center flex-wrap my-3'>
                            <motion.a href="https://www.linkedin.com/company/r-and-s-constructions/" target={"_blank"} rel="noopener noreferrer" whileTap={{ scale: 0.8 }} className='w-7 mx-3' aria-label='LinkedIn Icon'>
                                <LinkedInIcon />
                            </motion.a>
                            <motion.a href="https://www.facebook.com/RandSCONSTRUCTIONSLLC/" target={"_blank"} rel="noopener noreferrer" whileTap={{ scale: 0.8 }} className='w-7 mx-3' aria-label='Facebook Icon'>
                                <FacebookIcon />
                            </motion.a>
                        </nav>

                    </motion.div>

                    : null
            }

        </header>
    );
};

export default NavigationBar;