import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Paginas/Home';
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import Biografia from './Paginas/Biografia';
import Musica from './Paginas/Musica';
import Albums from './componentes/Album1';
import Actuacion from './Paginas/Actuacion';
import Galeria from './Paginas/Galeria';
import Contactos from './Paginas/Contacto';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/biografia" element={<Biografia />} />
      <Route path="/musica" element={<Musica />} />
      <Route path="/actuacion" element={<Actuacion />} />
      <Route path="/galeria" element={< Galeria/>} />
      <Route path="/contactos" element={< Contactos/>} />
    </Routes>
    <Footer />
  </Router>
);

export default App;