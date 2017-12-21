import React, { Component } from 'react';
import JumpSynth from './sounds/jump';
import './App.css';
import {handleMouseMove} from './mouseEvents';
import Logos from './Logos';
import Tone from 'tone';
import WelcomeMessage from './components/WelcomeMessage';

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
      renderWelcome: false,
      hueX: 255,
      hueY: 255
  }

  componentDidMount() {

      setTimeout(() => {
          this.triggerRenderAndSound('render1', osc1);
          setTimeout(() => {
              this.triggerRenderAndSound('render2', osc2);
              setTimeout(() => {
                  this.triggerRenderAndSound('render3', osc3);
                  arp.start(4);
                  Tone.Transport.bpm.value = 350;
                  Tone.Transport.start();
                  setTimeout(() => {
                      this.triggerWelcomeAndSound();
                  }, 1200)

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

  triggerWelcomeAndSound() {
      this.setState({renderWelcome: true});
      JumpSynth.triggerAttackRelease(["C4", "G4", "E5", "D5", "G5"], 6)
  }



  render() {
    return (
      <div
          className="App"
          style={{backgroundColor: `rgba(255, ${this.state.hueX}, ${this.state.hueY})`}}
          id="DragContainer"
          onMouseMove={(e) => handleMouseMove(e, [panner, filter, tremolo], [osc1], this.setState)}
      >
          {this.state.renderWelcome && <WelcomeMessage />}
          <p id="demo"></p>
          <div className="body" >
              <Logos {...this.state} />
          </div>
      </div>
    );
  }
}

export default App;
