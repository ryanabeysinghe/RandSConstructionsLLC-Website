import PageLayout from '@/components/PageLayout';
import Head from 'next/head'
import Image from 'next/image'
import HomeBackgroundImage from '../../public/images/home_hero_img.jpg'
import styles from '../styles/Home.module.css'
import { Righteous, Roboto } from 'next/font/google'
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

const righteousFont = Righteous({
  subsets: ['latin'],
  variable: '--font-righteous',
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

            <h1 className='uppercase text-4xl md:text-3xl'>Full-Service General Contractor</h1>

            <br /><br />

            <p className={`${styles.homeServicesHeroDescription}  `}>
              R &amp; S Constructions is a full-service residential design and build remodeling firm in Maryland. Specializing in 
              new construction, custom home building and residential renovations. Dream big, dream small or dream one project 
              at a time. R &amp; S Constructions has a diverse team of qualified professionals that can bring your vision to life.
              We have been in business for over 6 years and strive toward sustainable, eco-friendly
              construction using best practices. Our home remodeling contractors offer complete home remodeling, additions and
              alterations, kitchen remodeling, bathroom remodeling, basement finishing and much more for homes in Maryland. R &amp; S Constructions
              is a fully licensed and insured Certified General Contractor in the State of Maryland <strong>(MHIC #05-136714)</strong>.

              <br /><br />

              R &amp; S Constructions takes pride in quality craftsmanship, attention to detail, and provides full and open
              communication with each and every client. With each project, it is understood that this is not simply about
              remodeling bathrooms, kitchens, or basements - it is about establishing a vision with the client and applying that
              vision as the central focus throughout the construction process. We take great satisfaction in delivering a quality 
              project on schedule to every client. Our motivation is to provide you with the highest quality workmanship and complete customer satisfaction!

              {/* <Link href='/services' className='pb-[0.4rem] inline border-solid border-black border-b-[2px] hover:text-customOrange hover:border-customOrange'>Learn More</Link> */}
            </p>

            <br /><br />

            <Link href='/contact' target='_self'>
              <input type='button' value='Contact Us Today' className='w-[300px] h-[50px] border-none outline-none bg-black text-ivory cursor-pointer relative z-0 rounded-xl text-2xl uppercase font-righteous' />
            </Link>
          
          </div>

        </section>


      </main>
    </>
  );
};
