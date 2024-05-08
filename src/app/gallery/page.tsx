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
import { bathroomRemodelSlides, deck_restoration_slides, basementRemodelingSlides } from '@/components/GalleryData';

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

const Gallery = () => {

  const [open, setOpen] = useState<boolean>(false);

  type LightboxKey = 'bathroomRemodeling' | 'deck_restoration' | 'basementRemodeling';

  // State variable to track open/close state of each Lightbox
  const [lightboxState, setLightboxState] = useState<{ [key in LightboxKey]: boolean }>({
    bathroomRemodeling: false,
    deck_restoration: false,
    basementRemodeling: false,
  });

  // Function to toggle the state of a specific Lightbox Gallery
  const toggleLightbox = (lightbox: LightboxKey) => {
    setLightboxState(prevState => ({
      ...prevState,
      [lightbox]: !prevState[lightbox]
    }));
  };

  return (
    <main className='mt-24 overflow-x-hidden'>

      {/* Gallery Hero Image Section */}
      <section>

        <div className={`${styles.gallery_background_img}`}>

          <div>
            <h1 className={`uppercase text-ivory text-center text-[5rem] lg:text-6xl md:text-6xl sm:text-5xl xs:text-4xl xxxs:text-3xl ${robotoFont.className}`}>Gallery</h1>
          </div>

        </div>

      </section>

      {/* Gallery Picture Section */}
      <section className='bg-customWhite py-16 xs:py-8'>
        <div className="grid grid-cols-3 gap-14 px-14 xl:px-8 xl:gap-8 md:grid-cols-1 md:gap-14 sm:px-12 xs:px-10 xs:gap-8 xxs:px-8 xxxs:px-6">

          {/* First Row */}
          <div className="flex flex-col min-h-full bg-matteblack text-white p-6 w-full rounded-xl xl:h-[85%] md:col-span-1">
            <div className='flex-grow cursor-pointer border-solid border-2 border-customBlue xl:h-[85%]'>
              <img src={basementRemodelingSlides[0].src} alt={basementRemodelingSlides[0].title} onClick={() => toggleLightbox('basementRemodeling')} className="w-full h-full object-cover grayscale transition-all duration-500 ease-out hover:grayscale-0" />
            </div>

            <Lightbox
              plugins={[Captions, Counter, Fullscreen, Slideshow, Thumbnails]}
              captions={{
                showToggle: true,
                descriptionTextAlign: 'center'
              }}
              counter={{ container: { style: { top: "unset", bottom: 0 } } }}
              open={lightboxState.basementRemodeling}
              slides={basementRemodelingSlides}
              close={() => toggleLightbox('basementRemodeling')}
            />
            
            <div>
              <p className={`text-3xl text-center whitespace-pre items-center pt-3 text-customMustardYellow xl:text-2xl lg:text-xl lg:truncate md:text-3xl sm:text-2xl xs:text-xl xxxs:text-lg ${mondaFont.className}`}>Basement Remodeling</p>
            </div>
            
          </div>

          <div className="flex flex-col min-h-full bg-matteblack text-white p-6 w-full rounded-xl xl:h-[85%] md:col-span-1">
            <div className='flex-grow cursor-pointer border-solid border-2 border-customBlue xl:h-[85%]'>
              <img src={deck_restoration_slides[0].src} alt={deck_restoration_slides[0].title} onClick={() => toggleLightbox('deck_restoration')} className="w-full h-full object-cover grayscale transition-all duration-500 ease-out hover:grayscale-0 overflow-hidden" />
            </div>
            

            <Lightbox
              plugins={[Captions, Counter, Fullscreen, Slideshow, Thumbnails]}
              captions={{
                showToggle: true,
                descriptionTextAlign: 'center'
              }}
              counter={{ container: { style: { top: "unset", bottom: 0 } } }}
              open={lightboxState.deck_restoration}
              slides={deck_restoration_slides}
              close={() => toggleLightbox('deck_restoration')}
            />

            <p className={`text-3xl text-center whitespace-pre items-center pt-3 text-customMustardYellow xl:text-2xl lg:text-xl lg:truncate md:text-3xl sm:text-2xl xs:text-xl xxxs:text-lg ${mondaFont.className}`}>Deck Restoration</p>
          </div>

          <div className="flex flex-col min-h-full bg-matteblack text-white p-6 w-full rounded-xl xl:h-[85%] md:col-span-1">

          </div>

          {/* Second Row */}
          <div className="flex flex-col min-h-full bg-matteblack text-white p-6 w-full rounded-xl xl:h-[85%] md:col-span-1">
          <div className='flex-grow cursor-pointer border-solid border-2 border-customBlue xl:h-[85%]'>
              <img src={deck_restoration_slides[0].src} alt={deck_restoration_slides[0].title} onClick={() => toggleLightbox('deck_restoration')} className="w-full h-full object-cover grayscale transition-all duration-500 ease-out hover:grayscale-0 overflow-hidden" />
            </div>
            

            <Lightbox
              plugins={[Captions, Counter, Fullscreen, Slideshow, Thumbnails]}
              captions={{
                showToggle: true,
                descriptionTextAlign: 'center'
              }}
              counter={{ container: { style: { top: "unset", bottom: 0 } } }}
              open={lightboxState.deck_restoration}
              slides={deck_restoration_slides}
              close={() => toggleLightbox('deck_restoration')}
            />

            <p className={`text-3xl text-center whitespace-pre items-center pt-3 text-customMustardYellow xl:text-2xl lg:text-xl lg:truncate md:text-3xl sm:text-2xl xs:text-xl xxxs:text-lg ${mondaFont.className}`}>Deck Restoration</p>
          </div>

          

        </div>
      </section>

    </main>
  );
};

export default Gallery;