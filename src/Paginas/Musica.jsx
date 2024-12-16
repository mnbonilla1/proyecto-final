import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from 'reactstrap';
import Album1 from '../componentes/Album1';
import Albumm from '../componentes/Album2';
import Albummm from '../componentes/Album3';
import '../Styles/Styles.css';

const items = [
  {
    component: <Album1 />,
    altText: 'Album 1',
    caption: 'emails i can´t send fwd',
    key: 1,
  },
  {
    component: <Albumm />,
    altText: 'Album 2',
    caption: 'Fruitcake',
    key: 2,
  },
  {
    component: <Albummm />,
    altText: 'Album 3',
    caption: 'Short ´n Sweet',
    key: 3,
  },
];

function Musica(args) {
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
        key={item.key}
      >
        <div>{item.component}</div>
        <div style={styles.caption}>{item.caption}</div>
      </CarouselItem>
    );
  });

  return (
    <div className="containerm" style={styles.containerm}>
      <h2 style={styles.title}>Musica</h2>
      <div style={styles.carouselContainer}>
        <Carousel
          activeIndex={activeIndex}
          next={next}
          previous={previous}
          interval={false} 
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
            style={styles.carouselControl}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={next}
            style={styles.carouselControl}
          />
        </Carousel>
      </div>
    </div>
  );
}

const styles = {
  containerm: {
    textAlign: 'center',
    padding: '1px',
    backgroundColor: '#00000082',
  },
  title: {
    marginBottom: '20px',
    fontSize: '2rem',
  },
  carouselContainer: {
    margin: '0 auto',
    width: '100%',
    maxWidth: '1300px',
    backgroundColor: 'rgba(0, 0, 0, 0.15)',
  },
  carouselControl: {
    fontSize: '0.5rem',
    width: '200px',
    height: '20px',
    top: '50%',
    transform: 'translateY(-30%)',
  },
  caption: {
    fontSize: '2rem',
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: '15px',
    position: 'absolute',
    bottom: '10px',
    left: '50%',
    transform: 'translateX(-50%)',
  },
};

export default Musica;
