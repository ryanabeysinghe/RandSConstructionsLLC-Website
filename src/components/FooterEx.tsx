import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Righteous } from 'next/font/google';

import Logo from '../../public/images/logo.png';
import styles from '@/styles/Footer.module.css';

const righteousFont = Righteous({
    subsets: ['latin'],
    variable: '--font-righteous',
    weight: '400'
})

const Footer = () => {

    return (
        <header className='w-full overflow-hidden'>

            <div className={`bg-ivory`}>

                <div className={`${styles.container} flex justify-center items-center w-full h-full max-w-[1920px] mx-auto xl:items-start xl:justify-start xl:pb-20 md:pb-0 `}>

                    <div className={`text-black xl:flex-col-reverse xl:ml-[-1.1rem] lg:ml-[-1.85rem] md:ml-[-2.7rem] sm:ml-[-3rem] xs:ml-[-3.54rem] xxs:ml-[-3.75rem] ${styles.footer_primary_inner} ${righteousFont.className}`}>

                        {/* Footer Left */}
                        <div className='xl:w-full xl:pt-4'>

                            {/* Footer Wrapper */}
                            <div className='flex justify-between items-center xl:absolute md:relative'>

                                {/* Footer Logo Container */}
                                <div className={`${styles.footer_logo}`}>
                                    <Link href='/'>
                                        <Image src={Logo} alt='' width='140' height='75' className='cursor-pointer' priority />
                                    </Link>
                                </div>

                                <div className='flex md:flex-col'>

                                    {/* Footer Location Container */}
                                    <div className='ml-20'>
                                        <ul>
                                            <li>
                                                <h3 className='tracking-wider text-lg xl:text-[1.3rem] sm:text-lg xxs:text-base'>LOCATION</h3>
                                            </li>
                                            <li>
                                                <address className='text-base sm:text-base xxs:text-sm'>
                                                    9235 BROADWATER DRIVE <br /> GAITHERSBURG, MD 20879
                                                </address>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Footer Contact Container */}
                                    <div className='ml-28 xl:ml-20 md:py-4'>
                                        <ul>
                                            <li>
                                                <h3 className='tracking-wider text-lg xl:text-[1.3rem] sm:text-lg xxs:text-base'>CONTACT</h3>
                                            </li>
                                            <li>
                                                <Link href='mailto:randsconstructionsllc@hotmail.com' className='text-base transition-all duration-500 ease-out hover:text-customBlue sm:text-base xxs:text-sm'>RANDSCONSTRUCTIONSLLC@HOTMAIL.COM</Link>
                                            </li>
                                            <li>
                                                <Link href='tel:301-768-0298' className='text-base transition-all duration-500 ease-out hover:text-customBlue sm:text-base xxs:text-sm'>(301) 768-0298</Link>
                                            </li>
                                        </ul>
                                    </div>

                                </div>

                            </div>
                        </div>
                        {/* End Footer Left */}

                        {/* Footer Right */}
                        <div className='inline mr-[0] xl:w-full'>

                            {/* Footer Navbar Menu Container */}
                            <div className='flex justify-between items-center'>
                                <ul className='columns-2 m-0 list-none'>
                                    <li className='ml-4 xl:ml-0 xl:pr-[7.9rem] sm:pr-0 xs:mr-[-4rem]'>
                                        <Link href='/' className={`transition-all duration-500 ease-out hover:text-customBlue text-[1.125rem] xl:text-[1.3rem] sm:text-lg xxs:text-base ${styles.footer_link}`}>home</Link>
                                    </li>
                                    <li className='ml-4 xl:ml-0 xs:mr-[-4rem]'>
                                        <Link href='/about' className={`transition-all duration-500 ease-out hover:text-customBlue text-[1.125rem] xl:text-[1.3rem] sm:text-lg xxs:text-base ${styles.footer_link}`}>about</Link>
                                    </li>
                                    <li className='ml-4 xl:ml-0 xs:mr-[-4rem]'>
                                        <Link href='/services' className={`transition-all duration-500 ease-out hover:text-customBlue text-[1.125rem] xl:text-[1.3rem] sm:text-lg xxs:text-base ${styles.footer_link}`}>services</Link>
                                    </li>
                                    <li className='xs:mr-[-4rem]'>
                                        <Link href='/gallery' className={`transition-all duration-500 ease-out hover:text-customBlue text-[1.125rem] xl:text-[1.3rem] sm:text-lg xxs:text-base ${styles.footer_link}`}>gallery</Link>
                                    </li>
                                    <li className='xs:mr-[-4rem]'>
                                        <Link href='/testimonials' className={`transition-all duration-500 ease-out hover:text-customBlue text-[1.125rem] xl:text-[1.3rem] sm:text-lg xxs:text-base ${styles.footer_link}`}>testimonials</Link>
                                    </li>
                                    <li className='xs:mr-[-4rem]'>
                                        <Link href='/contact' className={`transition-all duration-500 ease-out hover:text-customBlue text-[1.125rem] xl:text-[1.3rem] sm:text-lg xxs:text-base ${styles.footer_link}`}>contact us</Link>
                                    </li>
                                </ul>
                            </div>

                        </div>


                    </div>
                </div>
            </div>

        </header>
    );
};

export default Footer;