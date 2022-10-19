//IMPORTAR COMPONENTS PARA ESTA SINTAXIS
import {Component} from 'react';
//PODEMOS UTILIZAR FUNCTIONS EXTERNS A LA CLASE, EN DICHAS FUNCIONES NO SE PUEDE UTILIZAR NADA DE LA CLASE
function miFuncion() {
    console.log("Function externa a la clase");
}


class Contador extends Component{
    //ZONA DE DECLARACION DE VARIABLES
    //LA DECLARACON DE VARIABLES NO UTILIZA NI var NI const PARA SU DECLARACION
    numero = 1;
    //QUEREMOS UN METODO PARA INCREMENTAR DICHO NUMERO
    incrementarNumero = () => {
        //PARA ACCEDER A LOS OBJETOS/VARIABLES DE LA CLASE UTILIZAMOS THIS
        console.log("numero" + this.numero);
        this.numero = this.numero + 1;
    }
    //EL CONCEPTO STATE ES EL MISMO, UTILIZAMOS STATE A NIVEL DE CLASE PARA INICIALIZAR LOS ELEMENTOS DE SU INTERIOR
    //EN ESTE EJEMPLO QUEREMOS CAMBIAR UN VALOR DE UN CONTADOR
    state = { valor: parseInt(this.props.Inicio) };
    //PARA MODIFICAR EL VALOR DEL STATE UTILIZAMOS UN METODO DE LA CLASE LLAMADO SETSTATE
    incrementarValor = () => {
        this.setState({
            valor: this.state.valor + 1
        });
    }


    // TODA CLASE DEBE CONTENER UN RENDER() QUE ES EL DIBUJO QUE SE ACTUALIZA AL QUE LE CAMBIAMOS EL STATE
    //EL CODIGO INTERNO DEL RENDER ES COMO UTILIZAR FUNCTION()
    render() {
        return(<div>
            <h1>Contador JSX ES6</h1>
            <h2 style={{color:"blue"}}>Inicio: {this.props.Inicio}</h2>
            <h2 style={{color:"red"}}>Valor del state: {this.state.valor}</h2>
            {/* LLA LLAMADA A LOS METODOS DE LA CLASE SE REALIZA DE FORMA MAS SENCILLA Y SIN PARENTESIS */}
            <button onClick={this.incrementarValor}>Incrementar valor State</button>
            {/* TAMBIEN PODEMOS UTILIZAR FUNCTION ANONIMAS DENTRO DEL EVENTO */}
            <button onClick={ () => {
                //SI LLAMAMOS A CUALQUIER EVENTO FUERA DE LA CLASE SE HACE SIN THIS
                miFuncion();
                //SI LLAMAMOS A ELEMENTOS DE LA CLASE SE REALIZA CON THIS
                this.incrementarNumero();
            }}>Pulsa</button>
        </div>)
    }
}

export default Contador;