import React, { useState } from 'react';
import peak from '../assets/peak.jpg';
import classes from './History.module.css';
import slide1 from '../assets/carousel-1.jpg';
import slide2 from '../assets/carousel-2.jpg';
import slide3 from '../assets/carousel-3.jpg';
import slide4 from '../assets/carousel-4.jpg';

const History = () => {
  const [newIndex, setIndex] = useState(0);

  const carousel = [
    slide1,
    slide2,
    slide3,
    slide4,
    slide2,
    slide4,
    slide1,
    slide3,
    slide4,
    slide3,
    slide2,
    slide1,
  ];

  const startIndex = newIndex >= 1 ? 4 * newIndex : 0;
  const endIndex = startIndex + 4;
  const newCarousel = carousel.slice(startIndex, endIndex);
  const numButtons = Math.ceil(carousel.length / 4);
  const [newSlide, setSlide] = useState(newCarousel[0]);

  return (
    <section className={classes.history} id="history">
      <img style={{ position: 'absolute' }} src={peak} alt="" srcset="" />
      <div className="title">
        <h2>
          <span>01.</span>HISTORY
        </h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique
          explicabo, accusantium enim rerum accusamus, praesentium doloribus
          doloremque saepe autem deserunt, corrupti at suscipit. Aperiam at
          perferendis praesentium? Deserunt, rem molestiae?
        </p>
      </div>
      <div className={classes.carousel}>
        <ul>
          {newCarousel.map(slide => (
            <li
              onClick={() => setSlide(slide)}
              className={slide === newSlide ? classes.open : classes.closed}
            >
              <img src={slide} alt="" srcset="" />
            </li>
          ))}
        </ul>
        <div className={classes.buttons}>
          {Array.from({ length: numButtons }, (_, index) => (
            <button
              className={
                index === newIndex ? classes.visible : classes.notActive
              }
              key={index}
              onClick={() => setIndex(index)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default History;
