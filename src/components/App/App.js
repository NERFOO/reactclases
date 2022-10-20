import logo from '../../logo.svg';
import Comics from '../Comics';
import Contador from '../Contador';
import DibujoComplejoArray from '../DibujoComplejoArray';
import DibujosComplejos from '../DibujosComplejos';
import Numero from '../Numero';
import Numeros from '../Numeros';
import PadreDeportes from '../PadreDeportes';
import './App.css';

function App() {
  return (
    <div className="App">
      {/*<h1>Programando con POO en react</h1>
        <Contador Inicio="1" />
      <DibujosComplejos />
      <DibujoComplejoArray />
      <PadreDeportes />
      <Numeros />
      <Numero />*/}
      <Comics />
    </div>
  );
}

export default App;
