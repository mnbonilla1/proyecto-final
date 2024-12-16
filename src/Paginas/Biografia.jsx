import React from 'react';
import '../Styles/Styles.css';
import { Container, Row, Col } from 'reactstrap';
import CardsBio from '../componentes/CardsBio'; 

const Biografia = () => (
<div className='bio text-center'>
<h1 className="biot title">Biografia</h1>


    <Container className='body'>
        
          <Row className="justify-content-center grid-biocards">
            
            <Col md="6" className="mb-4">
              <CardsBio 
                image="bio1.png" 
                title="Niñes de Sabrina Carpenter"
                text="Con Criada en East Greenville, comenzó a mostrar interés por la música desde pequeña. Su padre incluso construyó un estudio en casa para alentar su talento musical."
                text1="Participó en concursos como The Next Miley Cyrus Project y comenzó a subir videos de canciones de Christina Aguilera y Adele en YouTube."               
 link="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsBAMAAADsqkcyAAAAMFBMVEVHcEwd118d1l8d118d118d118d118d12Ae12Ae3WIf42Ud118d118d118d1mAd1l4EeRIGAAAAEHRSTlMAGz9mgJ/T+v///+W6VS4ODrctrAAAAj9JREFUeAF9kwPMHEEUgKcKfyusbdu2bdvc2Uujat7ehdXOTv74sDMNage13Ya/Y9Zh9d75qu/83eKRpSjpN3/+2NYsl0b9NzrG+AfmFuXYCUEjARzjr8v2A5S0LADLcvTajC0PCg5xBPdnp2zjLW7CkrejrZK6q5+y5IPnkwdftyAL60zi8IoY5BBYzYglHEBYBAeCR8g2kdzijiGkoMsJ2StxDWVCl58+fbqVGy148ipTRPDg3Jrinz8/tuje/4nCqPhJzHsLr+zJUvzof93nIlqEl7b3sCxKH/l08Wa+fY6xwhYNbXq0ZMT3RyI4i1X4/FRxu2Vbb1g3Lt+bTvX76uM9O7ogL9vKENq9OQKztgN72GABnIywMHZPheawfLAPY3xYnQP3xlZXvxn/JKCd2JwBEiNcAgD7W39IhPf2gXZcByCCmm6c4tNU7UjgqAXpj9379n1dT12dGuMApMG5+Pb+FQDr8t1XjBU8phrSLUHaxkOUPjCHsU6oT1KAAjBACZ7Ryr3NBgMFiOmAE1o/b3h1v2kblRebfw0gcJ7KLU7XJAIsmRbwjKSCY6mAn0D1sRgrVdg+AAIAQ8uXHCob+t/femPD3RrGuqEV7ktqAziWMlobHXr2gX5SG+JF8SS1HpS/tvE1alpyTFAhWMTY1sQd4wMBKXBiUwNB6acR6fHJHTYuUsNW8Pto1v1vkFnBFsHTlkfr0kuiMkuiZ2etlMGgOT7BbM9dQA2Iyl1AVvhuI06QPrD8A8sld7l/Ae9KbXma8APcAAAAAElFTkSuQmCC"
                offset="-20px"
              />
            </Col>
            <Col md="6" className="mb-4">
              <CardsBio 
                image="bio2.png" 
                title="Carrera temprana"
                text="Debutó como actriz en un episodio de Law & Order: Special Victims Unit (2011) y tuvo apariciones recurrentes en series como The Goodwin Games.

"               text1="Éxito en Disney: Obtuvo fama como Maya Hart en Girl Meets World (2014-2017), lo que marcó su ascenso en la industria"
                link="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjky_P2taGKAxVklZUCHX9SOJ0QFnoECEIQAQ&url=https%3A%2F%2Fwww.netflix.com%2Ftudum%2Farticles%2Fa-nonsense-christmas-with-sabrina-carpenter-holiday-variety-music-special&usg=AOvVaw0XD1OB9xNVTKfH5bA64m9N&opi=89978449"
                offset="-20px"
              />
            </Col>
            <Col md="6" className="mb-4">
              <CardsBio 
                image="bio3.png" 
                title="Carrera Musical"
                text="En 2014, debutó con el sencillo Can’t Blame a Girl for Trying, seguido de su primer álbum Eyes Wide Open (2015). "
                text1="Alcanzó mayor reconocimiento con su álbum Emails I Can’t Send (2022), destacando su madurez artística y narrativa"
                link="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsBAMAAADsqkcyAAAAMFBMVEVHcEwd118d1l8d118d118d118d118d12Ae12Ae3WIf42Ud118d118d118d1mAd1l4EeRIGAAAAEHRSTlMAGz9mgJ/T+v///+W6VS4ODrctrAAAAj9JREFUeAF9kwPMHEEUgKcKfyusbdu2bdvc2Uujat7ehdXOTv74sDMNage13Ya/Y9Zh9d75qu/83eKRpSjpN3/+2NYsl0b9NzrG+AfmFuXYCUEjARzjr8v2A5S0LADLcvTajC0PCg5xBPdnp2zjLW7CkrejrZK6q5+y5IPnkwdftyAL60zi8IoY5BBYzYglHEBYBAeCR8g2kdzijiGkoMsJ2StxDWVCl58+fbqVGy148ipTRPDg3Jrinz8/tuje/4nCqPhJzHsLr+zJUvzof93nIlqEl7b3sCxKH/l08Wa+fY6xwhYNbXq0ZMT3RyI4i1X4/FRxu2Vbb1g3Lt+bTvX76uM9O7ogL9vKENq9OQKztgN72GABnIywMHZPheawfLAPY3xYnQP3xlZXvxn/JKCd2JwBEiNcAgD7W39IhPf2gXZcByCCmm6c4tNU7UjgqAXpj9379n1dT12dGuMApMG5+Pb+FQDr8t1XjBU8phrSLUHaxkOUPjCHsU6oT1KAAjBACZ7Ryr3NBgMFiOmAE1o/b3h1v2kblRebfw0gcJ7KLU7XJAIsmRbwjKSCY6mAn0D1sRgrVdg+AAIAQ8uXHCob+t/femPD3RrGuqEV7ktqAziWMlobHXr2gX5SG+JF8SS1HpS/tvE1alpyTFAhWMTY1sQd4wMBKXBiUwNB6acR6fHJHTYuUsNW8Pto1v1vkFnBFsHTlkfr0kuiMkuiZ2etlMGgOT7BbM9dQA2Iyl1AVvhuI06QPrD8A8sld7l/Ae9KbXma8APcAAAAAElFTkSuQmCC"
                offset="-20px"
              />
            </Col>
          </Row>
        </Container>
</div>
);
export default Biografia;