import HijoDeporte from "./HijoDeporte";
import {Component} from 'react';

class PadreDeportes extends Component{
    //CREAMOS UN ARRAY DE DEPORTES EN STATE PARA DIBUJARLO EN LA PAGINA
    state = {
        deportes : ["Futbol", "F1", "Ajedrez", "Poker", "Tenis"]
    }

    render() {
        return (<div>
            <h1 style={{color:"red"}}>Padre Deportes</h1>


            {
                //QUEREMOS DIBUJAR CADA DEPORTE PERO UTILIZANDO LA ETIQUETA DEL HIJO
                this.state.deportes.map((deporte, index) => {
                    return (<HijoDeporte nombre={deporte} key={index}/>)
                })
            }
        </div>)
    }
}

export default PadreDeportes;