import React, { Component } from 'react';
import './App.css';
import Tone from 'tone';
import controls from './Controls'
import pannerCreator from './Panner'
import {toJS} from 'mobx';
import {handleMouseMove} from './mouseEvents'
// Arpeggiator
// var synth = new Tone.Synth().toMaster();
//
// var pattern = new Tone.Pattern(function(time, note){
//     synth.triggerAttackRelease(note, 0.25);
// }, ["C4", "E4", "G4", "A4", "C5", "D4", "G4"]).start(0);


/**
 *  PIANO
 */


var piano = new Tone.PolySynth(5, Tone.Synth, {
    "volume" : -8,
    "oscillator" : {
        "partials" : [1, 2, 1],
    },
    "portamento" : 0.05
}).toMaster()
var cChord = ["C4", "E4", "G4", "B4"];
var dChord = ["D4", "F4", "A4", "C5"];
var gChord = ["B3", "D4", "E4", "A4"];
var pianoPart = new Tone.Part(function(time, chord){

    var filter = new Tone.AutoFilter({
        frequency: toJS(controls.filterFrequency),
        depth: toJS(controls.filterDepth)
    }).toMaster().start();

    // let panner = pannerCreator({
    //     frequency: toJS(controls.panFrequency),
    //     depth: toJS(controls.panDepth)
    // })
    piano.triggerAttackRelease(chord, "9n", time).connect(filter);
}, [["0:0:2", cChord], ["0:1", cChord], ["0:1:3", dChord], ["0:2:2", cChord], ["0:3", cChord], ["0:3:2", gChord]])
    .start("0");
pianoPart.loop = true;
pianoPart.loopEnd = "1m";
pianoPart.humanize = false;
Tone.Transport.bpm.value = 80;


class App extends Component {


  render() {
    return (
      <div className="App" onMouseMove={(e) => handleMouseMove(e)}>
        <header className="App-header">
            <button onClick={() => Tone.Transport.stop()}  className="App-logo" alt="logo">
                Stop
            </button>
            <button onClick={() => Tone.Transport.start("+0.1")} className="App-title">
                Start
            </button>
        </header>
        <button onClick={() => {
            controls.arpLength = controls.arpLength + 0.1;
        }} className="App-intro">
          Longer
        </button>
          <p id="demo"></p>
      </div>
    );
  }
}

export default App;
