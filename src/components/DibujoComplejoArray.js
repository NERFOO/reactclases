import {Component} from 'react';

class DibujoComplejoArray extends Component{
    //ALMACENAMOS DENTRO DEL STATE UN ARRAY DE STRING (NOMBRES)
    state = {
        nombres : ["Jaime", "Ina", "Lucia", "Carlos", "Javier"]
    }

    nuevoNombre = () => {
        this.state.nombres.push("Alejandro");
        this.setState({
            nombres : this.state.nombres
        });
    }

    render() {
        return(<div>
            <h1>Dibujo Complejo Array</h1>
            <button onClick={this.nuevoNombre}>Crear Nombre</button>

            {
                //CODIGO LOGICO CON LENGUAJE REACT
                this.state.nombres.map((name, index) => {
                    //ESTE CODIGO SE EJECUTA POR CADA ELEMENTO, NUNCA PODEMOS DEJARLO VACIO, SIEMPRE DEBE DEVOLVER UN RETURN
                    return (<h3 key={index} style={{color:"red"}}>{name}</h3>)
                })
            }

        </div>);
    }
}

export default DibujoComplejoArray;