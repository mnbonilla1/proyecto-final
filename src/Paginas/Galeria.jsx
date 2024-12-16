
import React from 'react';
import '../Styles/Styles.css'

const Galeria = () => {
  const photos = [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Sabrina_Carpenter_Vogue_2024.png/800px-Sabrina_Carpenter_Vogue_2024.png',
    'https://media.glamour.es/photos/6756e81337a70968c869a8e1/16:9/w_2560%2Cc_limit/MCDTAGI_ZX016_H.jpg',
    'https://pyxis.nymag.com/v1/imgs/4d5/e1c/f9248e62ffffb2ba0aa50afca85e7d950f-sabrinacarpenter-secondary.1x.rsquare.w1400.jpg',
    'https://images.squarespace-cdn.com/content/v1/55f9ade5e4b0fceefecad5ec/d3fd782d-6cf6-471c-bc20-332637602c52/2N6A5382.jpg',
    
    'https://i.abcnewsfe.com/a/bed9a801-846c-4801-aa9d-b431b3530b75/sabrina-carpenter-02-gty-jef-240620_1718894838146_hpEmbed_2x3.jpg',
    
    'https://resizer.glanacion.com/resizer/v2/sabrina-carpenter-el-pasado-11-de-septiembre-en-GLH6KV5RQJGZJIQ4CDIL6LQJBY.jpg?auth=37fb55a1afb41b650292a6ccd229c4ad7f660da0adfb00b862ed2a4c2d9c4887&width=1280&height=854&quality=70&smart=true',
    'https://variety.com/wp-content/uploads/2023/02/Sabrina-Carpenter_General-Image-1_Photo-Credit-Vince-Aung.jpg?w=1000&h=667&crop=1',
    'https://www.udiscovermusic.com/wp-content/uploads/2022/07/Sabrina-Carpenter-Emails-I-Cant-Send-2.jpg',
    'https://estaticos-cdn.prensaiberica.es/clip/37ba6e60-ee8a-4c40-914e-e9dc8fa6c5b1_alta-libre-aspect-ratio_default_0.jpg',
    'https://assets.teenvogue.com/photos/66ffccd7e3a98a99df53a3c0/16:10/w_2560%2Cc_limit/2175962835',
    'https://www.hindustantimes.com/ht-img/img/2024/08/23/550x309/Sabrina_Carpenter_1724398564951_1724398565202.jpg',
  ];

  return (
    <div className="galeria">
      {photos.map((photo, index) => (
        <div key={index} className={`photo-item photo-${index % 5}`}>
          <img src={photo} alt={`photo-${index}`} />
        </div>
      ))}
    </div>
  );
};

export default Galeria;

