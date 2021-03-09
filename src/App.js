import React, {Component} from 'react';
import Forms from './secciones/forms.js';

class Box extends Component{
  render(){
    return(
      <div style={{border: '1px solid #000', margin: 5, padding: 5}}>
        {this.props.children}
      </div>
    )
  }
}

class Article extends Component{
  render(){
    const {autor, children, fecha,titulo} = this.props
    return(
      <section>
        <h2>{titulo}</h2>
        {autor && <p><em>Escrito por {autor}</em></p>}
        <Box>{fecha}</Box>
        <article>
          {children}
        </article>
      </section>
    )
  }
}

class App extends Component {
  render(){
    return (
      <div className="App">
        <h4>Children props</h4>
        <Box>Texto interno</Box>
        <Box>Nuevo elemento hijo</Box>
        <Article autor="Crapaud" fecha={new Date().toLocaleDateString()} titulo="Artículo sobre la prop children">
          <p> Este es el párrafo de descipción que se pasa en un elemento p </p>
          <strong>En este texto se comprueba el uso de otras etiquetas html</strong>
        </Article>
        <Forms />
      </div>
    );
  }
}

export default App;
