import React, {Component} from 'react'

export default class Forms extends Component{
  constructor(){
    super()
    this.state = {
      inputName: '',
      inputTwitter: '@',
      inputTerminos: true
    }
  }
  // handleClick = (e) => {    // Arrow function para agregar el ontexto
  //   e.preventDefault()
  //   const name = this.inputName.value
  //   const cuenta = document.getElementById('twitter').value
  //   console.log({name, cuenta})
  // }
  handleSubmit = (e) => {    // Arrow function para agregar el ontexto
    e.preventDefault()
    console.log(this.state)
    const name = this.inputName.value
    const cuenta = document.getElementById('twitter').value
    console.log({name, cuenta})
  }

  handleChange = (e) => {
    console.log('handleChange', e.target.checked)
    this.setState({inputTerminos: e.target.checked})
  }

  render(){
    return (
      <div>
        <h4>Formularios</h4>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label htmlFor='nombre'>Nombre:</label>
            <input id='nombre' name='nombreUsr' placeholder='Introduce nombre'
            ref={inputElement => this.inputName = inputElement}
            value={this.state.inputName}
            onChange={e => this.setState({ inputName: e.target.value})}/>
          </p>
          <p>
            <label>Twitter:</label>
            <input id='twitter' name='cuentaTwit' placeholder='Cuenta twitter'
            ref={inputElement => this.inputTwitter = inputElement}
            value={this.state.inputTwitter}
            onChange={e => this.setState({ inputTwitter: e.target.value})} />
          </p>
          { // <button onClick={this.handleClick}>Enviar</button>
          }
          <p>
            <label>
              <input type='checkbox' onChange={this.handleChange}
              checked={this.state.inputTerminos}/>
              Acepto los terminos y condiciones
            </label>
          </p>
          <button>Enviar</button>
        </form>
      </div>
    )
  }
}
