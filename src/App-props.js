import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

function Liga (props){
  return <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    {props.titulo}
  </a>
}

Liga.defaultProps = {titulo : <span>Titulo por defecto</span>}
// Función flecha
// const Hello = (props) => <h2>{props.titulo}</h2>
class Texto extends Component{
  render(){
    const {isActivated, arregloNums, multiplica} = this.props
    const textoCambiaBool = isActivated ? 'Activo' : 'Inactivo'
    // const numsMapeados = this.props.arregloNums.map(n => n * 2)
    const numsMapeados = arregloNums.map(multiplica)

    return <div>
      <p>{this.props.texto}</p>
      <p>{this.props.numero}</p>
      <p>{numsMapeados.join(' ')}</p>
      <p>{textoCambiaBool}</p>
      <p>{this.props.objInfo.llave1}</p>
    </div>
  }
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Texto
          arregloNums ={[1,2,3]}
          isActivated
          multiplica={(number => number *4)}
          numero={5}
          objInfo= {{llave1:'Primera', llave2:'Segunda'}}
          texto={<span>Edit <code>src/App.js</code> and save to reload.</span>}
        />
        <Liga titulo="Aprende React"/>
      </header>
    </div>
  );
}

export default App;
