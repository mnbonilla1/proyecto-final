import React from 'react';

const Footer = () => (
  <footer className="bg-footer text-center py-3 fixed-bottom">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <img
            src="https://www.sabrinacarpenter.com/files/2024/06/logo-drk.png"
            alt="Logo"
            style={{ width: '90px', height: '40px' }}
          />
        </div>
        <div className="col-md-4 text-center">
          <p></p>
          <p className="font-footer">MARCELA NADIA BONILLA MAMANI</p>
        </div>
        <div className="col-md-4 text-right">
          <a href="#" target="_blank">
            <img src="https://assets.mockflow.com/app/wireframepro/company/Cb42fb6aca31b4a9b9ec19f4bdc4fbb6f/projects/MUqfyCp4yrb/images/thumbnails/Med932481705abccffe78da7e1265fdc61733796769720" alt="" />
          </a>
          <a href="#" target="_blank">
            <img src="https://assets.mockflow.com/app/wireframepro/company/Cb42fb6aca31b4a9b9ec19f4bdc4fbb6f/projects/MUqfyCp4yrb/images/thumbnails/Mf3681ace50dbbf9adc6ecfd22f50efa51733796936136" alt="" />
          </a>
          <a href="#" target="_blank">
            <img src="https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-icon-black-17.png" alt="" />
          </a>
          <a href="#" target="_blank">
            <img src="https://cdn.icon-icons.com/icons2/2428/PNG/512/facebook_black_logo_icon_147136.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
