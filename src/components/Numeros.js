import { Component } from "react";
import Numero from "./Numero";
class Numeros extends Component{
    state = {
        numeros: [14, 5],
        suma: 0
    }
    
    sumarNumeros = (valor) => {
        this.setState({
            suma: this.state.suma + valor
        });
    }
    crearNuevoNumero = () => {
        var random = parseInt(Math.random() * 100) + 1;
        this.state.numeros.push(random);
        this.setState({
            numeros: this.state.numeros
        });
        console.log("Nuevo número " + random);
        console.log("Elementos del Array " + this.state.numeros.length);
    }
    render() {
        return (<div>
            <h1>Padre números</h1>
            <h2 style={{color:"red"}}>
                La suma es {this.state.suma}
            </h2>
            <button onClick={() => this.crearNuevoNumero()}>
                Crear nuevo número
            </button>
            {
                this.state.numeros.map((entero, index) => {
                   return (<Numero 
                    key={index} numero={entero}
                    sumarNumeros={this.sumarNumeros}/>)
                })
            }
        </div>);
    }
}
export default Numeros;
