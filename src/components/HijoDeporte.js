import {Component} from 'react';

class HijoDeporte extends Component{
    // state = {
    //     favorito: ""
    // }

    seleccionarFavorito = () => {
        //LLAMAMOS AL METODO PARENT DEL PADRE Y CAPTURAMOS EL DEPORTE
        var deporte = this.props.nombre;
        //LLAMAMOS AL PARENT MEDIANTE PROPS CON EL NOMBRE DEL METODO QUE HEMOS INDICADO
        this.props.mostrarFavorito(deporte);

        // this.setState({
        //     favorito: this.props.nombre
        // });
    }

    render() {
        return (<div>
            <h1 style={{color:"blue"}}>{this.props.nombre}</h1>
            {/* <h3 style={{color:"green"}}>Deporte favorito: {this.state.favorito}</h3> */}
            <button onClick={this.seleccionarFavorito}>Seleccionar favorito</button>
        </div>)
    }
}

export default HijoDeporte;