"use client"

import { Monda, Roboto } from 'next/font/google';
import React, { useState } from 'react';
import Lightbox from "yet-another-react-lightbox";

import styles from '@/styles/Gallery.module.css';

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/counter.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import { Captions, Counter, Fullscreen, Slideshow, Thumbnails } from "yet-another-react-lightbox/plugins";
import {
  deck_restoration_slides, basement_remodeling_slides,
  roof_replacement_slides,
  blinds_installation_slides,
  kitchen_remodeling_slides,
  window_installation_slides
} from '@/components/GalleryData';

import kitchen_remodeling_cover_photo from "@/assets/kitchen_remodeling/kitchen_remodeling_cover_photo.jpg";
import blinds_installation_cover_photo from "@/assets/blinds_installation/blinds_installation_cover_photo.jpg";
import roof_replacement_cover_photo from "@/assets/roof_replacement/roof_replacement_cover_photo.jpg";
import deck_restoration_cover_photo from "@/assets/deck_restoration/deck_restoration_cover_photo.jpg";
import basement_remodeling_cover_photo from "@/assets/basement_remodeling/basement_remodeling_cover_photo.jpg";
import window_installation_cover_photo from "@/assets/window_installation/window_installation_cover_photo.jpg";

const robotoFont = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: '700'
})

const mondaFont = Monda({
  subsets: ['latin'],
  variable: '--font-monda',
  weight: '700'
})

interface GalleryComponentProps {
  imgSrc: { src: string; title: string; description: string }[];
  title: string;
  coverPhoto: string;
}

const GalleryComponent: React.FC<GalleryComponentProps> = ({ imgSrc, title, coverPhoto }) => {

  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className='w-full h-auto flex flex-col items-center justify-center rounded-2xl border-2 border-solid border-matteblack bg-coconut p-6 lg:p-4 md:p-6 relative xs:p-4'>

      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] rounded-br-3xl bg-black md:-right-3 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]' />

      <img src={coverPhoto} alt={imgSrc[0].title} onClick={() => setOpen(true)} className="w-full h-auto object-cover border-2 border-solid border-matteblack rounded-[0.5rem] cursor-pointer grayscale transition-all duration-500 ease-out hover:grayscale-0" />

      <Lightbox
        plugins={[Captions, Counter, Fullscreen, Slideshow, Thumbnails]}
        captions={{
          showToggle: true,
          descriptionTextAlign: 'center'
        }}
        counter={{ container: { style: { top: "unset", bottom: 0 } } }}
        open={open}
        slides={imgSrc}
        close={() => setOpen(false)}
      />

      <div className='w-full flex flex-col items-center justify-center mt-4'>

        <span className={`text-customMustardYellow text-3xl xl:text-2xl lg:text-xl md:text-4xl sm:text-3xl xs:text-2xl xxxs:text-xl ${mondaFont.className}`}>{title}</span>

      </div>

    </div>
  );
};


const Gallery = () => {

  return (
    <main className='mt-24 overflow-x-hidden'>

      {/* Gallery Hero Image Section */}
      <section>

        <div className={`${styles.galleryBackgroundImg}`}>

          <div>
            <h1 className={`uppercase text-ivory text-center text-[5rem] lg:text-6xl md:text-6xl sm:text-5xl xs:text-4xl xxxs:text-3xl ${robotoFont.className}`}>Gallery</h1>
          </div>

        </div>

      </section>

      {/* Gallery Picture Section */}
      <section className='bg-coconut py-16 xs:py-20 xxs:py-16'>

        <div className='w-full flex flex-col items-center justify-center'>

          <div className='w-full h-full inline-block z-0 px-16 xl:px-12 lg:px-8 sm:px-12 xs:px-10 xxs:px-8'>

            <div className='grid grid-cols-12 gap-x-16 gap-y-16 xl:gap-x-12 lg:gap-x-8 md:gap-x-0 md:gap-y-20 sm:gap-y-16'>

              {/* Row 1 */}
              <div className='col-span-4 md:col-span-12'>

                <GalleryComponent imgSrc={kitchen_remodeling_slides} title='Kitchen Remodeling' coverPhoto={kitchen_remodeling_cover_photo.src} />

              </div>

              <div className='col-span-4 md:col-span-12'>

                <GalleryComponent imgSrc={roof_replacement_slides} title='Roof Replacement' coverPhoto={roof_replacement_cover_photo.src} />

              </div>

              {/* Row 2 */}
              <div className='col-span-4 md:col-span-12'>

                <GalleryComponent imgSrc={blinds_installation_slides} title='Blinds Installation' coverPhoto={blinds_installation_cover_photo.src} />

              </div>

              <div className='col-span-4 md:col-span-12'>

                <GalleryComponent imgSrc={window_installation_slides} title='Window Installation' coverPhoto={window_installation_cover_photo.src} />

              </div>

              <div className='col-span-4 md:col-span-12'>

                <GalleryComponent imgSrc={deck_restoration_slides} title='Deck Restoration' coverPhoto={deck_restoration_cover_photo.src} />

              </div>

              <div className='col-span-4 md:col-span-12'>

                <GalleryComponent imgSrc={basement_remodeling_slides} title='Basement Remodeling' coverPhoto={basement_remodeling_cover_photo.src} />

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
};

export default Gallery;