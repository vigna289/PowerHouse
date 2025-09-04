import React, { useState, useRef } from 'react';
import AliceCarousel from 'react-alice-carousel';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import { Button } from '@headlessui/react';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const HomeSectionCarosel = ({data,sectionName}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  const slidePrev = () => {
    carouselRef.current.slidePrev();
  };

  const slideNext = () => {
    carouselRef.current.slideNext();
  };

  const items = data.products.slice(0, 10).map(product => (
    <HomeSectionCard product={product} key={product.id} />
  ));

  return (
    <div className='border'>
        <h2 className='text-2xl font-extrabold text-gray-800 py-5'>{sectionName}</h2>
      <div className='relative p-5'>
        <AliceCarousel
          ref={carouselRef}
          items={items}
          responsive={responsive}
          disableButtonsControls
          disableDotsControls
          activeIndex={activeIndex}
          onSlideChanged={({ item }) => setActiveIndex(item)}
        />

        {/* PREV BUTTON */}
        {activeIndex !==0 && <Button
          onClick={slidePrev}
          className="absolute top-1/2 left-0 -translate-y-1/2 z-50 bg-pink-400 hover:bg-pink-600 hover:scale-110 transition-all duration-200"
        >
          <KeyboardArrowLeftIcon />
        </Button>}

        {/* NEXT BUTTON */}
        {activeIndex !== items.length-1 && <Button
          onClick={slideNext}
          className="absolute top-1/2 right-0 -translate-y-1/2 z-50 bg-pink-400 hover:bg-pink-600 hover:scale-110 transition-all duration-200"
        >
          <KeyboardArrowRightIcon />
        </Button>}
        
      </div>
    </div>
  );
};

export default HomeSectionCarosel;
