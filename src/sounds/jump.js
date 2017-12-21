import Tone from 'tone';

var synth = new Tone.PolySynth(3, Tone.Synth, {
    "oscillator" : {
        "type" : "fatsawtooth",
        "count" : 3,
        "spread" : 30
    },
    "envelope": {
        "attack": 5,
        "decay": 7,
        "sustain": 0.5,
        "release": 0.4,
        "attackCurve" : "smooth"
    },
}).toMaster()

synth.set('detune', 0)


export default synth


