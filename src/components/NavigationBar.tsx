"use client"

import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

import Logo from '../../public/images/logo.png'
//import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation'

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

            <span className={`h-[2.5px] inline-block w-0 bg-black absolute left-0 -bottom-1 group-hover:w-full transition-[width] ease duration-300 dark:bg-primary ${pathname === href ? 'w-full' : 'w-0'}`}>&nbsp;</span>
        </Link>
    );
};


const NavigationBar = () => {

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

    return (
        <header className={`w-full max-w-[1920px] fixed overflow-hidden top-0 h-24 ${isOnTop ? '' : 'shadow-xl'} bg-ivory`}>

            <div className='flex justify-between items-center px-4 w-full h-full'>
                <Link href='/'>
                    <Image src={Logo} alt='' width='140' height='75' className='cursor-pointer' priority />
                </Link>

                <nav>
                    <CustomLink href="/" title="home" className='mr-5 capitalize text-lg' />
                    <CustomLink href="/about" title="about" className='mr-5 capitalize text-lg' />
                    <CustomLink href="/services" title="services" className='mr-5 capitalize text-lg' />
                    <CustomLink href="/gallery" title="gallery" className='mr-5 capitalize text-lg' />
                    <CustomLink href="/locations" title="locations" className='mr-5 capitalize text-lg' />
                    <CustomLink href="/contact" title="contact" className='mr-5 capitalize text-lg' />
                </nav>

            </div>

        </header>
    );
};

// const NavigationBar = () => {
//     return (
//         <nav className='fixed w-full h-24 shadow-xl bg-ivory'>
//             <div className='flex justify-between items-center h-full w-full px-4 2xl:px-16'>
//                 <Link href='/'>
//                    <Image src={Logo} alt='' width='150' height='75' className='cursor-pointer' priority />
//                 </Link>
//                 <div>
//                     <ul>
//                         <Link href=''>
//                             <li>Home</li>
//                         </Link>

//                         <Link href=''>
//                             <li>About</li>
//                         </Link>

//                         <Link href=''>
//                             <li>Services</li>
//                         </Link>

//                         <Link href=''>
//                             <li>Gallery</li>
//                         </Link>

//                         <Link href=''>
//                             <li>Location</li>
//                         </Link>

//                         <Link href=''>
//                             <li>Contact</li>
//                         </Link>
//                     </ul>
//                 </div>
//             </div>
//         </nav>
//     );
// };

export default NavigationBar;