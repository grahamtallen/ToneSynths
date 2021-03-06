import React, { Component } from 'react';
import './App.css';
import {handleMouseMove} from './mouseEvents';
import Logos from './Logos';
import {
    panner,
    filter,
    tremolo,
    osc1,
    osc2,
    osc3
} from './sounds/'


class App extends Component {

  state = {
      render1: false,
      render2: false,
      render3: false,
  }

  componentDidMount() {
      setTimeout(() => {
          this.triggerRenderAndSound('render1', osc1)
          setTimeout(() => {
              this.triggerRenderAndSound('render2', osc2)
              setTimeout(() => {
                  this.triggerRenderAndSound('render3', osc3)
              }, 400)
          }, 300)
      }, 500)
  }

  triggerRenderAndSound(render, sound) {
    this.setState({[render]: true});
    sound.volume.rampTo(0, 0.1);
  }



  render() {
    return (
      <div className="App" id="DragContainer" onMouseMove={(e) => handleMouseMove(e, [panner, tremolo, filter])}>
          <div className="body">
              <Logos {...this.state} />
          </div>
      </div>
    );
  }
}

export default App;
