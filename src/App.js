import React, { Component } from 'react';
import JumpSynth from './sounds/jump';
import './App.css';
import {handleMouseMove} from './mouseEvents';
import Logos from './Logos';
import Tone from 'tone';
import {
    panner,
    filter,
    tremolo,
    osc1,
    osc2,
    osc3,
    arp,
    phaser
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
                  arp.start(4);
                  console.log(arp.volume);
                  Tone.Transport.bpm.value = 350;
                  Tone.Transport.start();
                  // Tone.Transport.stop();
                  console.log("tone", Tone.Transport)

              }, 800)
          }, 900)
      }, 10)

  }

  triggerRenderAndSound(render, sound) {
    this.setState({[render]: true});
    sound.volume.rampTo(-13, 0.1);
      setTimeout(() => {
          sound.volume.rampTo(-Infinity, 20);
      }, 2000)
  }



  render() {
    return (
      <div className="App" id="DragContainer" onMouseMove={(e) => handleMouseMove(e, [panner, phaser, tremolo])}>
          <p id="demo"></p>
          <div className="body" onClick={() => JumpSynth.triggerAttackRelease(["C4", "G4", "E5"], 4)}>
              <Logos {...this.state} />
          </div>
      </div>
    );
  }
}

export default App;
