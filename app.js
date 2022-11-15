import React from 'react';
import ReactDOM from 'react-dom';


class Main extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      colorText: "#0000FF",
      id: "yjs"
    };
    this.setarCor = this.setarCor.bind(this)
    this.setarCorU = this.setarCorU.bind(this)
  }
  
  setarCor() {
    var value = document.getElementById("yjs").value 
    this.setState({
      colorText: value
    })
    document.getElementById("corisi").style.backgroundColor=value
  }
  setarCorU() {
    var value = document.getElementById("jxk").value
    this.setState({
      colorText: `${value}`
    })
    document.getElementById("corisi").style.background=value
  }

  render() {
    return  (
      <div class="container">
        <header>
          <h1>Gerador De Cores</h1>
          <hr />
        </header>
        <main>
         <div class="inputs">
          <div id="txt-color">
            <label for="yjs">Cor Hex em Texto</label>
            <input 
              type="text" 
              id={this.state.id}
              onChange={this.setarCor}
              placeholder="Digite uma cor a hex."
              value={this.state.colorText}
            />
            
          </div>
          <hr />
          <div id="color-txt">
            <label for="jxk">Cor para transformar em hex</label>
            <input 
              type="color" 
              onChange={this.setarCorU}
              value={this.state.colorText} 
              id="jxk" />
            </div>
            </div>
            <div id="corisi">
              <p id="cols">{this.state.colorText}</p>
            </div>
        
         
        </main>
      </div>
      
    )
  }
}



ReactDOM.render(
  <Main />,
  document.getElementById('react-app')
);
