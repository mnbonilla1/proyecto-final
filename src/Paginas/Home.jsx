import React from 'react';
import '../Styles/Styles.css'
import { Container, Row, Col } from 'reactstrap';
import CardStacked from '../componentes/MusicCard'; 

const Home = () => (
  <div className="bg-light text-center py-5">
    <h1 className="mb-3 title">Sabrina Carpenter</h1>
    <p className="lead mb-4 text">
      Sabrina Annlynn Carpenter (nacida el 11 de mayo de 1999) es una cantante y actriz estadounidense. Es conocida por sus éxitos "Espresso", "Please Please Please", "Feather" y "Nonsense", así como por su carrera como actriz, en particular por su papel de Maya Hart en la serie de Disney Channel Girl Meets World.
    </p>
    <Container className='body'>
      <Row className="justify-content-center grid-cards">
        <Col md="6" className="mb-4">
          <CardStacked 
            image="https://imageshack.com/i/pnPKiRCLp" 
            title="ÚLTIMO EN MUSICA"
            text="Con los exitosos singles Espresso y Please Please Please. "
            link="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsBAMAAADsqkcyAAAAMFBMVEVHcEwd118d1l8d118d118d118d118d12Ae12Ae3WIf42Ud118d118d118d1mAd1l4EeRIGAAAAEHRSTlMAGz9mgJ/T+v///+W6VS4ODrctrAAAAj9JREFUeAF9kwPMHEEUgKcKfyusbdu2bdvc2Uujat7ehdXOTv74sDMNage13Ya/Y9Zh9d75qu/83eKRpSjpN3/+2NYsl0b9NzrG+AfmFuXYCUEjARzjr8v2A5S0LADLcvTajC0PCg5xBPdnp2zjLW7CkrejrZK6q5+y5IPnkwdftyAL60zi8IoY5BBYzYglHEBYBAeCR8g2kdzijiGkoMsJ2StxDWVCl58+fbqVGy148ipTRPDg3Jrinz8/tuje/4nCqPhJzHsLr+zJUvzof93nIlqEl7b3sCxKH/l08Wa+fY6xwhYNbXq0ZMT3RyI4i1X4/FRxu2Vbb1g3Lt+bTvX76uM9O7ogL9vKENq9OQKztgN72GABnIywMHZPheawfLAPY3xYnQP3xlZXvxn/JKCd2JwBEiNcAgD7W39IhPf2gXZcByCCmm6c4tNU7UjgqAXpj9379n1dT12dGuMApMG5+Pb+FQDr8t1XjBU8phrSLUHaxkOUPjCHsU6oT1KAAjBACZ7Ryr3NBgMFiOmAE1o/b3h1v2kblRebfw0gcJ7KLU7XJAIsmRbwjKSCY6mAn0D1sRgrVdg+AAIAQ8uXHCob+t/femPD3RrGuqEV7ktqAziWMlobHXr2gX5SG+JF8SS1HpS/tvE1alpyTFAhWMTY1sQd4wMBKXBiUwNB6acR6fHJHTYuUsNW8Pto1v1vkFnBFsHTlkfr0kuiMkuiZ2etlMGgOT7BbM9dQA2Iyl1AVvhuI06QPrD8A8sld7l/Ae9KbXma8APcAAAAAElFTkSuQmCC"
            offset="-20px"
          />
        </Col>
        <Col md="6" className="mb-4">
          <CardStacked 
            image="https://imageshack.com/i/pn9Cauryp" 
            title="ÚLTIMO SHOW"
            text="Con apariciones de celebridades, comedia de sketches y más."
            link="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjky_P2taGKAxVklZUCHX9SOJ0QFnoECEIQAQ&url=https%3A%2F%2Fwww.netflix.com%2Ftudum%2Farticles%2Fa-nonsense-christmas-with-sabrina-carpenter-holiday-variety-music-special&usg=AOvVaw0XD1OB9xNVTKfH5bA64m9N&opi=89978449"
            offset="-20px"
          />
        </Col>
      </Row>
    </Container>
  </div>
);

export default Home;
