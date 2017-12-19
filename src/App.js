import React, { Component } from 'react';
import './App.css';
import Tone from 'tone';
import _ from 'lodash';
import {handleMouseMove} from './mouseEvents';

var panner = new Tone.AutoPanner({
    "frequency": 4,
    "depth": 1
}).toMaster().start();
//AutoFilter - a filter modulation effect
var filter = new Tone.AutoFilter({
    "frequency": 2,
    "depth": 9
}).toMaster().start();
//Tremolo - an amplitude modulation effect
var tremolo = new Tone.Tremolo({
    "frequency": 0.4,
    "depth": 0.4
}).toMaster().start();

//the input oscillators
var osc1 = new Tone.FatOscillator({
    "volume": -Infinity,
    "type": "square6",
    "frequency": "C2"
}).connect(panner).connect(filter).connect(tremolo).start();


var osc2 = new Tone.FatOscillator({
    "volume": -Infinity,
    "type": "square6",
    "frequency": "G2"
}).connect(panner).connect(filter).connect(tremolo).start();


var osc3 = new Tone.FatOscillator({
    "volume": -Infinity,
    "type": "square6",
    "frequency": "C3"
}).connect(panner).connect(filter).connect(tremolo).start();

class App extends Component {

  componentDidMount() {

  }



  render() {
    return (
      <div className="App" id="DragContainer" onMouseMove={(e) => handleMouseMove(e, [panner, tremolo, filter])}>
          <p id="demo"></p>
          <button onClick={() => osc1.volume.rampTo(0, 0.1)}>Start1</button>
          <button onClick={() => osc1.volume.rampTo(-Infinity, 0.0)}>Stop1</button>
          <button onClick={() => osc2.volume.rampTo(0, 0.1)}>Start2</button>
          <button onClick={() => osc2.volume.rampTo(-Infinity, 0.0)}>Stop2</button>
          <button onClick={() => osc3.volume.rampTo(0, 0.1)}>Start3</button>
          <button onClick={() => osc3.volume.rampTo(-Infinity, 0.0)}>Stop3</button>
          <br />
          <button onClick={() => {
              panner.wet.value = 0.1;
//fade to 100% wet over 3 seconds.

              // panner.set('frequency', 4)
          }}>Tone set</button>
      </div>
    );
  }
}

export default App;
