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
} from '../sounds/'

var synth = new Tone.PolySynth(5, Tone.Synth, {
    "volume": -22,
    "oscillator" : {
        "type" : "fatsawtooth",
        "count" : 3,
        "spread" : 9
    },
    "envelope": {
        "attack": 4,
        "decay": 19,
        "sustain": 0.5,
        "release": 19,
        "attackCurve" : "linear"
    },
}).connect(panner).connect(tremolo).connect(filter).toMaster()



export default synth


