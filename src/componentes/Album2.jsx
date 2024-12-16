import React from 'react';
import '../Styles/Styles.css'; 
import { useState } from 'react';

import YTcarrusell from './yt2';

const Albumm = () => {
  return (
    <div style={styles.container}>
      <div style={styles.left}>
        <img src="https://i.scdn.co/image/ab67616d0000b2734114a7fb3bf4ed0bf4934b43" alt="Imagen descriptiva" style={styles.image} />
      </div>
      <div style={styles.right}>
        <div style={styles.topRight}>
          <p>Fruitcake es el cuarto extended play y primer álbum navideño de la cantante estadounidense Sabrina Carpenter. Fue lanzado por Island Records el 17 de noviembre de 2023.​ Fue producido por Julian Bunetta y John Ryan.</p>
        </div>
        <div style={styles.bottomRight}>
          <div style={styles.tracklist}>
            <h3>Tracklist</h3>
            <ul>
              <li>A Nonsense Christmas</li>
              <li>buy me presents</li>
              <li>santa doesn't know you like i do</li>
              <li>cindy lou who</li>
              <li>is it new years yet?</li>
              <li>white xmas</li>
            </ul>
          </div>
          <div style={styles.carousel}>
            <YTcarrusell style={styles.carouselInternal}/> {/* Pasamos un estilo al carrusel si es necesario */}
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

export default Albumm;
