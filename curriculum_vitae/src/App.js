import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="personalInformation">
        <h1 className="myName">Paloma Ledesma Peña</h1>
        <h3 className= "profession">Trabajadora Social</h3>
        <h4 className= "introduction">Soy una trabajadora social con aspiraciones de FrontEnd</h4>
      </div>
      <div className= "buttonInformation">
        <button className="formacion">Formación</button>
        <button className="experienciaProfesional">Experiencia profesional</button>
        <button className= "objetivosProfesionales">Objetivos profesionales</button>
        <button className= "otros">Otros</button>
        <button className= "contacto">Contacto</button>
      </div>
    </div>
  );
}

export default App;
