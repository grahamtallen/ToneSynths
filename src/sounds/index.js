import Tone from 'tone';

export const panner = new Tone.AutoPanner({
    "frequency": 4,
    "depth": 1
}).toMaster().start();
//AutoFilter - a filter modulation effect
export const filter = new Tone.AutoFilter({
    "frequency": 2,
    "depth": 9
}).toMaster().start();
//Tremolo - an amplitude modulation effect
export const tremolo = new Tone.Tremolo({
    "frequency": 0.4,
    "depth": 0.4
}).toMaster().start();

//the input oscillators
export const osc1 = new Tone.Oscillator({
    "volume": -Infinity,
    "type": "square6",
    "frequency": "C2"
}).connect(panner).connect(filter).connect(tremolo).start();


export const osc2 = new Tone.FatOscillator({
    "volume": -Infinity,
    "type": "square6",
    "frequency": "G2"
}).connect(panner).connect(filter).connect(tremolo).start();


export const osc3 = new Tone.FatOscillator({
    "volume": -Infinity,
    "type": "square6",
    "frequency": "C3"
}).connect(panner).connect(filter).connect(tremolo).start();