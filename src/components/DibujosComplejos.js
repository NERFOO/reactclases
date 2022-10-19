import {Component} from 'react';

class DibujosComplejos extends Component{
    //METODO QUE NOS DEVOLVERA UNA SERIE DE NUMEROS CON FORMATO HTML
    dibujarNumeros = () => {
        //DECLARAMOS UN ARRAY PARA ALMACENAR LOS NUMEROS, DICHO ARRAY NO CONTENDRA SOLAMENTE LOS NUMEROS, SINO QUE TAMBIEN
        //TENDRA QUE CONTENER EL CODIGO HTML
        var lista = [];
        //UNA LISTA CONTIENE EL METODO PUSH() PARA IR AÑADIENDO ELEMENTOS
        //CREAR UN BCLE PARA GENERAR NUMEROS Y AÑADIRLOS A NUESTRA COLECCION
        for (var i = 1; i < 10; i++) {
            var numero = parseInt(Math.random() * 101);
            //EL DIBUJO HTML SE ALMACENA EN LA COLECCION JUNTO A LOS ELEMENTOS A DIBUJAR
            lista.push(<li key={i}>{numero}</li>);
        }
        return lista;
    }

    render() {
        return(<div>
            <h1>Dibujos Complejos</h1>
            <ul>{this.dibujarNumeros()}</ul>
        </div>)
    }
}

export default DibujosComplejos;