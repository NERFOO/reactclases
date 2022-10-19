import HijoDeporte from "./HijoDeporte";
import {Component} from 'react';

class PadreDeportes extends Component{
    //CREAMOS UN ARRAY DE DEPORTES EN STATE PARA DIBUJARLO EN LA PAGINA
    state = {
        deportes : ["Futbol", "F1", "Ajedrez", "Poker", "Tenis"] ,
        favorito: ""
    }

    //CREAMOS UN METODO QUE SERA LLAMADO DESDE EL HIJO Y DONDE MOSTRAREMOS EL FAVORITO
    mostrarFavorito = (deporteSeleccionado) => {
        //SEGUN RECIBAMOS UN VALOR DEL HIJO LO INCLUIMOS EN EL STATE PARA MOSTRARLO EN LA PAGINA
        this.setState({
            favorito: deporteSeleccionado
        });
    }

    render() {
        return (<div>
            <h1 style={{color:"red"}}>Padre Deportes</h1>
            <h2 style={{background:"fuchsia"}}>Su deporte favorito es: {this.state.favorito}</h2>

            {
                //QUEREMOS DIBUJAR CADA DEPORTE PERO UTILIZANDO LA ETIQUETA DEL HIJO
                this.state.deportes.map((deporte, index) => {
                    return (<HijoDeporte nombre={deporte} key={index} mostrarFavorito={this.mostrarFavorito}/>)
                })
            }
        </div>)
    }
}

export default PadreDeportes;