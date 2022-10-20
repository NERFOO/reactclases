import { Component } from "react";

class Comic extends Component{
    render() {
        return(<div>
            <h1>{this.props.comic.titulo}</h1>
            <h3>{this.props.comic.descripcion}</h3>
            <img src={this.props.comic.imagen} style={{width:"150px" , height: "150px"}}/>
            <button onClick={() => {
                this.props.seleccionarFavorito(this.props.comic);
            }}>Seleccionar favorito</button>
            <button onClick={() => {
                var index = parseInt(this.props.index);
                this.props.eliminarComic(index);
            }}>Eliminar comic</button>
        </div>)
    }
}

export default Comic;