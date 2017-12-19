import React, { Component } from 'react';
import './App.css';
import Tone from 'tone';

var panner = new Tone.AutoPanner({
    "frequency": 4,
    "depth": 1
}).toMaster().start();
//AutoFilter - a filter modulation effect
var filter = new Tone.AutoFilter({
    "frequency": 2,
    "depth": 0.6
}).toMaster().start();
//Tremolo - an amplitude modulation effect
var tremolo = new Tone.Tremolo({
    "frequency": 4,
    "depth": 0.4
}).toMaster().start();
//the input oscillators
var osc0 = new Tone.Oscillator({
    "volume": -Infinity,
    "type": "square6",
    "frequency": "C2"
}).connect(panner).start();


var osc1 = new Tone.Oscillator({
    "volume": -Infinity,
    "type": "square6",
    "frequency": "G2"
}).connect(panner).start();

class App extends Component {

  componentDidMount() {

  }



  render() {
    return (
      <div className="App" id="DragContainer" >

          <button onClick={() => osc0.volume.rampTo(0, 0.1)}>Start1</button>
          <button onClick={() => osc0.volume.rampTo(-Infinity, 0.0)}>Start1</button>
          <button onClick={() => osc1.volume.rampTo(0, 0.1)}>Start2</button>
          <button onClick={() => osc1.volume.rampTo(-Infinity, 0.0)}>Start2</button>
          <br />
          <button onClick={() => {
              panner.wet.value = 0.1;
//fade to 100% wet over 3 seconds.
              panner.wet.rampTo(1, 3);
              // panner.set('frequency', 4)
          }}>Tone set</button>
      </div>
    );
  }
}

export default App;
