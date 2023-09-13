import PageLayout from '@/components/PageLayout';
import Head from 'next/head'
import Image from 'next/image'
import HomeBackgroundImage from '../../public/images/home_hero_img.jpg'
import styles from '../styles/Home.module.css'
import { Roboto } from 'next/font/google'
import Link from 'next/link';

const robotoFont = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: '700'
})

const robotoFontThin = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: '400'
})

/* Represent Index or Home Page */
export default function Home() {
  return (
    <>
      <main className={`mt-24`}>


        {/* HOME Image Section */}
        <section>

          <div className={styles.homeBackgroundImage} >
            {/* <Image src={HomeBackgroundImage} alt="Home Background Image" /> */}

            <div>

              <h1 className={`uppercase text-ivory text-center text-[5rem] lg:text-6xl md:text-5xl sm:text-4xl xs:text-3xl xxxs:text-2xl ${robotoFont.className}`}>R &amp; S Constructions</h1>

              <br />

              <h2 className={`uppercase !font-thin text-ivory text-center text-4xl lg:text-3xl md:text-2xl sm:text-xl xs:text-lg xxxs:text-base ${robotoFontThin.className}`}>Serving Maryland &amp; DC Since 2016</h2>

              <br /><br />

              <div className='flex flex-row justify-center items-center'>
                <Link href='/services' target='_self'>
                  <input type='button' value='Our Services' className='w-[180px] h-[50px] border-solid border-ivory border-2 outline-none text-ivory text-xl cursor-pointer uppercase mx-5 transition-all duration-500 ease-in-out hover:bg-black-opacity-50 lg:text-lg lg:w-[160px] md:text-base md:w-[140px] md:h-[45px] sm:text-sm sm:w-[130px] sm:h-[40px] xs:text-xs xs:w-[110px] xxxs:h-[35px]' />
                </Link>

                <Link href='/contact' target='_self'>
                  <input type='button' value='Free Estimate' className='w-[180px] h-[50px] border-solid border-ivory border-2 outline-none text-ivory text-xl cursor-pointer uppercase mx-5 transition-all duration-500 ease-in-out hover:bg-black-opacity-50 lg:text-lg lg:w-[160px] md:text-base md:w-[140px] md:h-[45px] sm:text-sm sm:w-[130px] sm:h-[40px] xs:text-xs xs:w-[110px] xxxs:h-[35px]' />
                </Link>
              </div>


            </div>

          </div>

        </section>


        {/* NEW SECTION */}
        <section className='py-20 bg-customWhite'>

          <div className='text-center text-black'>

            <h1 className='uppercase text-4xl'>Full-Service General Contractor</h1>

            <br /><br />

            <p className={styles.homeServicesHeroDescription}>
              From conception to completion, our entire team of estimators, designers, project managers and experienced
              executives make our clients' needs a priority. We have experience in a wide variety of projects and delivery
              methods, and use both time-proven practices and cutting-edge techniques to make sure our customers' projects meet
              their maximum potential.

              <br /><br />

              <Link href='/services' className='pb-[0.4rem] inline border-solid border-black border-b-[2px] hover:text-customOrange hover:border-customOrange'>Learn More</Link>
            </p>
          
          </div>

        </section>


      </main>
    </>
  );
};
