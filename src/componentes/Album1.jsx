import React from 'react';
import '../Styles/Styles.css'; 
import { useState } from 'react';

import YTcarrusel from './yt';

const Album1 = () => {
  return (
    <div style={styles.container}>
      <div style={styles.left}>
        <img src="https://i.scdn.co/image/ab67616d0000b2730f45623be014a592a5815827" alt="Imagen descriptiva" style={styles.image} />
      </div>
      <div style={styles.right}>
        <div style={styles.topRight}>
          <p>Emails I Can't Send es el quinto álbum de estudio de la cantante y compositora estadounidense Sabrina Carpenter. Él Liberado el 15 de julio de 2022 por Island Records. Es el primer álbum de estudio de Carpenter con la discográfica.</p>
        </div>
        <div style={styles.bottomRight}>
          <div style={styles.tracklist}>
            <h3>Tracklist</h3>
            <ul>
              <li>emails i can't send</li>
              <li>Vicious</li>
              <li>Read your Mind</li>
              <li>Tornado Warnings</li>
              <li>because i liked a boy</li>
              <li>Already Over</li>
              <li>how many things</li>
              <li>bet u wanna</li>
              <li>Nonsense</li>
              <li>Fast Times</li>
              <li>skinny dipping</li>
              <li>Bad for Business</li>
              <li>decode</li>
              <li>opposite</li>
              <li>Feather</li>
              <li>Lonesome</li>
              <li>things i wish you said</li>
            </ul>
          </div>
          <div style={styles.carousel}>
            <YTcarrusel style={styles.carouselInternal}/> {/* Pasamos un estilo al carrusel si es necesario */}
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'grid',
    gridTemplateColumns: '3fr 5fr',
    gap: '20px',
  },
  left: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  image: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '15px',
    height: '95%',
  },
  text: {
    marginTop: '10px',
  },
  right: {
    display: 'grid', 
    gridTemplateRows: '0.2fr 1fr', 
    gap: 'px',
  },
  topRight: {
    marginBottom: '10px',
  },
  bottomRight: {
    display: 'grid',
    gridTemplateColumns: '1fr 3fr',
    gap: '10px',
  },
  tracklist: {
    display: 'flex',
    flexDirection: 'column',
    padding: '5px',
    borderRadius: '8px',
    lineHeight:'13px',
    fontSize:'13px',
  },
  carousel: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0px',
    width:'80%', 
    height:'60%',
  },
  carouselInternal: {
    width: '100%',
    height: '100%', 
  },
};

export default Album1;
