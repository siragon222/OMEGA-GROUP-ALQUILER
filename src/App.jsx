import PortadaSlider from './landin_page/portada_slider/PortadaSlider';
import QuienesSomos from './landin_page/quienes_somos/QuienesSomos';
import NuestroServicios from './landin_page/nuestro_servicios/NuestroServicios';
import NuestrosClientes from './landin_page/nuestros_clientes/NuestrosClientes';
import './App.css';
import PreguntasFrecuentes from './landin_page/preguntas_frecuentes/PreguntasFrecuentes';
import Formulario from './landin_page/formulario/Formulario';
import Header from './landin_page/header/Header';
import Footer from './landin_page/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <PortadaSlider />
      <QuienesSomos />
      <NuestroServicios />
      <NuestrosClientes />
      <PreguntasFrecuentes />
      <Formulario />
      <Footer />
    </div>
  );
}

export default App;
