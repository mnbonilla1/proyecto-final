import React from 'react';
import '../Styles/Styles.css';

const Contactos = () => {
  return (
    <div className="contact-container">
      <h1>Redes Sociales de Sabrina Carpenter</h1>
      <p>Sigue a Sabrina Carpenter en sus redes sociales:</p>
      <div className="links-container">
        <div className="social-link">
          <a
            href="https://www.instagram.com/sabrinacarpenter/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-item"
          >
            <img src="https://assets.mockflow.com/app/wireframepro/company/C66e6efc8c65949ac8d280daa82b391ef/projects/MDEg7LGuWh/images/Med932481705abccffe78da7e1265fdc61733796769720" alt="Instagram" className="social-icon" />
            <p>@sabrinacarpenter</p>
          </a>
        </div>
        <div className="social-link">
          <a
            href="https://www.tiktok.com/@sabrinacarpenter"
            target="_blank"
            rel="noopener noreferrer"
            className="social-item"
          >
            <img src="https://static.vecteezy.com/system/resources/previews/018/930/574/non_2x/tiktok-logo-tikok-icon-transparent-tikok-app-logo-free-png.png" alt="TikTok" className="social-icon" />
            @sabrinacarpenter
          </a>
        </div>
        <div className="social-link">
          <a
            href="https://www.facebook.com/sabrinacarpenter"
            target="_blank"
            rel="noopener noreferrer"
            className="social-item"
          >
            <img src="https://cdn.icon-icons.com/icons2/2428/PNG/512/facebook_black_logo_icon_147136.png" alt="Facebook" className="social-icon" />
            @sabrinacarpenter
          </a>
        </div>
        <div className="social-link">
          <a
            href="https://www.youtube.com/@sabrinacarpenter"
            target="_blank"
            rel="noopener noreferrer"
            className="social-item"
          >
            <img src="https://cdn.icon-icons.com/icons2/3261/PNG/512/youtube_logo_icon_206627.png" alt="YouTube" className="social-icon" />
            @sabrinacarpenter
          </a>
        </div>
        <div className="social-link">
          <a
            href="https://x.com/sabrinaannlynn"
            target="_blank"
            rel="noopener noreferrer"
            className="social-item"
          >
            <img src="https://assets.mockflow.com/app/wireframepro/company/C66e6efc8c65949ac8d280daa82b391ef/projects/MDEg7LGuWh/images/Mf3681ace50dbbf9adc6ecfd22f50efa51733796936136" alt="Twitter/X" className="social-icon" />
            @sabrinaannlynn
          </a>
        </div>
        <div className="social-link">
          <a
            href="https://open.spotify.com/artist/74KM79TiuVKeVCqs8QtB0B"
            target="_blank"
            rel="noopener noreferrer"
            className="social-item"
          >
            <img src="https://icones.pro/wp-content/uploads/2021/04/logo-spotify-icone-png-noir.png" alt="Spotify" className="social-icon" />
            <p>@SabrinaCarpenter</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contactos;
