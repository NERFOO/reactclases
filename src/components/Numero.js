import { Component } from "react";
class Numero extends Component{
    render() {
        return (<div>
            <h1 style={{color:"blue"}}>
                Número hijo: {this.props.numero}
            </h1>
            <button onClick={ () => {
                var numero = parseInt(this.props.numero);
                this.props.sumarNumeros(numero);
            }}>
                Sumar {this.props.numero}
            </button>
        </div>);
    }
}
export default Numero;