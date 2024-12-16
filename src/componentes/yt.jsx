import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

const items = [
  {
    src: 'https://img.youtube.com/vi/YcSP1ZUf1eQ/maxresdefault.jpg',
    key: 1,
    link: 'https://www.youtube.com/watch?v=YcSP1ZUf1eQ', 
  },
  {
    src: 'https://img.youtube.com/vi/kLbn61Z4LDI/maxresdefault.jpg',
    key: 2,
    link: 'https://www.youtube.com/watch?v=kLbn61Z4LDI', 
  },
  {
    src: 'https://img.youtube.com/vi/1YUBbF24H44/maxresdefault.jpg',
    key: 3,
    link: 'https://www.youtube.com/watch?v=1YUBbF24H44', 
  },
  {
    src: 'https://img.youtube.com/vi/Gla5AzlHnS4/maxresdefault.jpg',
    key: 4,
    link: 'https://www.youtube.com/watch?v=Gla5AzlHnS4', 
  },
  {
    src: 'https://img.youtube.com/vi/8EisGrIHH04/maxresdefault.jpg',
    key: 5,
    link: 'https://www.youtube.com/watch?v=8EisGrIHH04', 
  },
];

function YTcarrusel(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <a href={item.link} target="_blank" rel="noopener noreferrer">
          <img src={item.src} alt={item.altText} style={styles.carouselImage} /> {/* Estilo aquí */}
        </a>
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}

const styles = {
  carouselImage: {
    width: '100%', 
    height: 'auto', 
    objectFit: 'cover', 
  },
};

export default YTcarrusel;
