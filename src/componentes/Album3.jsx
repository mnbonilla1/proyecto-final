import React from 'react';
import '../Styles/Styles.css'; 
import { useState } from 'react';

import YTcarrusel from './yt';

const Albummm = () => {
  return (
    <div style={styles.container}>
      <div style={styles.left}>
        <img src="https://i.scdn.co/image/ab67616d0000b273fd8d7a8d96871e791cb1f626" alt="Imagen descriptiva" style={styles.image} />
      </div>
      <div style={styles.right}>
        <div style={styles.topRight}>
          <p>Short n' Sweet es el sexto álbum de estudio de la cantante y compositora estadounidense Sabrina Carpenter. Fue lanzado el 23 de agosto de 2024 por Island Records.​ Fue precedido por el lanzamiento del sencillo «Espresso» el 11 de abril de 2024.</p>
        </div>
        <div style={styles.bottomRight}>
          <div style={styles.tracklist}>
            <h3>Tracklist</h3>
            <ul>
            <li>Please Please Please</li>
  <li>Espresso</li>
  <li>Good Graces</li>
  <li>Sharpest Tool</li>
  <li>Coincidence</li>
  <li>Bed Chem</li>
  <li>Dumb & Poetic</li>
  <li>Slim Pickins</li>
  <li>Juno</li>
  <li>Lie To Girls</li>
  <li>Don't Smile</li>
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
    lineHeight:'20px',
    fontSize:'15px',
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

export default Albummm;