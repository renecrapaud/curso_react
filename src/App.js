import React, {Component} from 'react';
import SeccionCondicional from './secciones/condicional.js'
import cars from './data/cars.json'

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

class CarItem extends Component{
  render(){
    const {car} = this.props
    return (
      <li>
        <p><strong>{car.name}</strong></p>
        <p><strong>{car.company}</strong></p>
      </li>
    )
  }
}

class App extends Component {
  render(){
    const numbers = [1,1,3,4,5]
    return (
      <div className="App">
        <p>Componente con estado</p>
        <Contador contadorInicial={50} />
        <SeccionCondicional/>
        <h4>Manipular Listas</h4>
        {numbers.map( (number,index) => {
          return <p key={index}>Soy el número {number}</p>
        })}
        <ul>
        {
          cars.map(car => {
            return  (
              <CarItem key={car.id} car={car} />
            )
          })
        }
        </ul>
      </div>
    );
  }
}

export default App;
