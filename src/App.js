import React, { Component } from 'react';
import JumpSynth from './sounds/jump';
import './App.css';
import {handleMouseMove} from './mouseEvents';
import Logos from './Logos';
import Tone from 'tone';
import WelcomeMessage from './components/WelcomeMessage';
import {TweenMax} from 'gsap';
import {
    panner,
    filter,
    tremolo,
    osc1,
    osc2,
    osc3,
    arp,
    arp2,
    synth2,
    synth,
    bassOsc
} from './sounds/';

const appLocations = {
    'source': 'https://demo.way2b1.com/source',
    'fixit': 'https://demo.way2b1.com/fixit',
    'greenlight': 'https://demo.way2b1.com/greenlight',
}

export const triggerFadeAnimation = (el) => {
    if (el) TweenMax.fromTo(el, 4, {filter: "blur(20px)", opacity: 0}, {filter: "blur(0px)", opacity: 1});
}

export const reverseFadeAnimation = (el) => {
    if (el) TweenMax.fromTo(el, 1, {filter: "blur(0px)", opacity: 1}, {filter: "blur(20px)", opacity: 0});
}


class App extends Component {

  ref;

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
          triggerFadeAnimation(this.ref);
          bassOsc.volume.rampTo(2, 0.1);
      }, 1500)
  }

  startStartUpSounds() {
      setTimeout(() => {
          this.triggerRenderAndSound('render1', osc1);
          setTimeout(() => {
              this.triggerRenderAndSound('render2', osc2);
              setTimeout(() => {
                  this.triggerRenderAndSound('render3', osc3);
                  arp.start(4);
                  arp2.start(6);

                  Tone.Transport.bpm.value = 350;
                  Tone.Transport.start();
                  setTimeout(() => {
                      this.triggerWelcomeAndSound();
                  }, 1200)

              }, 800)
          }, 900)
      }, 2900)
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
          ref={ref => this.ref = ref}
          className="App bg"
          id="DragContainer"
          onMouseMove={(e) => handleMouseMove(e, [panner, filter, tremolo], [synth2, synth])}
          onClick={() => {
              if (!this.alreadyRan) this.startStartUpSounds();
              this.alreadyRan = true;
          }}
      >
          {this.state.renderWelcome && <WelcomeMessage onClick={() => this.startStartUpSounds()} />}
          {/*<p id="demo"></p>*/}
          <div className="body" >
              <Logos onAppClick={name => {
                  reverseFadeAnimation(this.ref)
                  setTimeout(() => {
                      window.location = appLocations[name];
                  }, 1200)
              }} {...this.state} />
          </div>
      </div>
    );
  }
}


export default App;
