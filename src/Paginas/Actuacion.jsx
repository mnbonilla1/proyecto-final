import React, { useState } from 'react';
import { Table } from 'reactstrap';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';
import '../Styles/Styles.css';

const items = [
  {
    src: 'https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQVqwtfjtb1uKhOCiXzh3PRRmcdUwGs2l0JTpEtmbM0pVTIoj_IPtYhbPJ24miwg-sauQDZe_akFk_hgpFnYuxKkkFCapqfqop8HRkFHYUzXZQwrMTKYY0bXsnLh9kJNY_twGDyiy8346N6ASEHUaA7UA.jpg?r=c0e',
    key: 1,
  },
  {
    src: 'https://westendworld.co.uk/wp-content/uploads/2024/12/98ff7373-5ee1-4215-89c4-352dfe48e60c.jpeg',
    key: 2,
  },
  {
    src: 'https://westendworld.co.uk/wp-content/uploads/2024/12/df8464a3-b3a7-4b06-bd7c-38352b954df2.jpeg',
    key: 3,
  },
  {
    src: 'https://westendworld.co.uk/wp-content/uploads/2024/12/2ad121d2-fa50-439e-92f4-0e6de0cb0f42.jpeg',
    key: 4,
  },
  {
    src: 'https://www.billboard.com/wp-content/uploads/2024/07/sabrina-carpenter-adventures-in-babysitting-2016-billboard-1548.jpg?w=800',
    key: 5,
  },
  {
    src: 'https://www.billboard.com/wp-content/uploads/2024/07/sabrina-carpenter-the-hate-u-give-2018-billboard-1548.jpg?w=800',
    key: 6,
  },
  {
    src: 'https://hollywoodlife.com/wp-content/uploads/2013/02/girl-meets-world-sabrina-carpenter-featured.jpg?resize=600%2C350',
    key: 7,
  },
  {
    src: 'https://pbs.twimg.com/media/CjcyTaKW0AAdXmI.jpg',
    key: 8,
  },
  {
    src: 'https://e.rpp-noticias.io/large/2020/08/12/105510_982435.jpg',
    key: 9,
  },
  {
    src: 'https://pbs.twimg.com/media/CWgNDO_WsAAuWqg.jpg',
    key: 10,
  },
];

const CarouselComponent = (args) => {
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
        <img className="carousel-image" src={item.src} alt={`Slide ${item.key}`} />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      className="custom-carousel"
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
};

const Actuacion = () => {
  return (
    <div className="actuacion-container">
      <div className="columna izquierda">
        <Table bordered className="tabla">
          <thead>
            <tr>
              <th>Year</th>
              <th>Title</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2011</td>
              <td>Law &amp; Order: Special Victims Unit</td>
              <td>Paula</td>
            </tr>
            <tr>
              <td>2012</td>
              <td>Gulliver Quinn</td>
              <td>Iris</td>
            </tr>
            <tr>
              <td>2013</td>
              <td>Orange Is the New Black</td>
              <td>Jessica</td>
            </tr>
            <tr>
              <td>2013</td>
              <td>Austin &amp; Ally</td>
              <td>Lucy</td>
            </tr>
            <tr>
              <td>2014</td>
              <td>Girl Meets World</td>
              <td>Maya Hart</td>
            </tr>
            <tr>
              <td>2015</td>
              <td>Horns</td>
              <td>Young Merrin</td>
            </tr>
            <tr>
              <td>2016</td>
              <td>Adventures in Babysitting</td>
              <td>Jenny Parker</td>
            </tr>
            <tr>
              <td>2016</td>
              <td>Soy Luna</td>
              <td>A ella misma</td>
            </tr>
            <tr>
              <td>2017</td>
              <td>The Hate U Give</td>
              <td>Hailey</td>
            </tr>
            <tr>
              <td>2018</td>
              <td>The Short History of the Long Road</td>
              <td>Nola</td>
            </tr>
            <tr>
              <td>2019</td>
              <td>Tall Girl</td>
              <td>Harper Kreyman</td>
            </tr>
            <tr>
              <td>2020</td>
              <td>Work It</td>
              <td>Quinn Ackerman</td>
            </tr>
            <tr>
              <td>2022</td>
              <td>Emergency</td>
              <td>Maddy</td>
            </tr>
            <tr>
              <td>2022</td>
              <td>Tall Girl 2</td>
              <td>Harper Kreyman</td>
            </tr>
            <tr>
              <td>2024</td>
              <td>A Nonsense Christmas with Sabrina Carpenter</td>
              <td>A ella Misma</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div className="columna derecha">
        <CarouselComponent />
      </div>
    </div>
  );
};

export default Actuacion;