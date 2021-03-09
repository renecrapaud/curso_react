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
  constructor(){
    super()
    this.state = {mouseX: 0, mouseY:0}
    this.handleMouseMove = this.handleMouseMove.bind(this)
  }
  handleClick (e){
    console.log(e)
    console.log(e.nativeEvent)
    alert("Evento activado")
  }

  handleMouseMove(e){
    const {clientX, clientY} = e
    this.setState({mouseX: clientX, mouseY: clientY})
  }
  render(){
    const numbers = [1,1,3,4,5]
    return (
      <div className="App">
        <h4>Eventos</h4>
        <button onClick={this.handleClick}>activa evento Click</button>
        <div onMouseMove={this.handleMouseMove} style={{border: '1px solid', marginTop: 10, padding: 10}}>
          <p>{this.state.mouseX},{this.state.mouseY}</p>
        </div>
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
