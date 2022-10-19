import {Component} from 'react';

class HijoDeporte extends Component{
    render() {
        return (<div>
            <h1 style={{color:"blue"}}>{this.props.nombre}</h1>
        </div>)
    }
}

export default HijoDeporte;