import React, {Component} from 'react';

class Contador extends Component{
  constructor (props) {
    super(props)
    this.state = {contador : this.props.contadorInicial}
    setInterval(()=> {
      this.setState({contador : this.state.contador + 1})
    },1000)
  }

  render(){
    // const contador = 0
    return <ContadorNum numero={this.state.contador}/>
  }
}

Contador.defaultProps = {
  contadorInicial : 0
}
class ContadorNum extends Component {
    render(){
      return <span>{this.props.numero}</span>
    }
}

class App extends Component {
  render(){
    return (
      <div className="App">
        <p>Componente con estado</p>
        <Contador contadorInicial={50} />
      </div>
    );
  }
}

export default App;
