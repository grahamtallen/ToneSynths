import Tone from 'tone';


export const panner = new Tone.AutoPanner({
    "frequency": 4,
    "depth": 1
}).toMaster().start();
//AutoFilter - a filter modulation effect
export const filter = new Tone.AutoFilter({
    "frequency": 2,
    "depth": 1
}).toMaster().start();
//Tremolo - an amplitude modulation effect
export const tremolo = new Tone.Tremolo({
    "frequency": 0.4,
    "depth": 0.4
}).toMaster().start();

export const phaser = new Tone.Phaser({
    "frequency" : 15,
    "octaves" : 5,
    "baseFrequency" : 1000
}).toMaster();

//the input oscillators

export const bassOsc = new Tone.FatOscillator({
    "volume": -Infinity,
    "type": "square6",
    "frequency": "C1",
    "phase": 40,
}).connect(filter).start();

export const osc1 = new Tone.OmniOscillator({
    "volume": -Infinity,
    "type": "square6",
    "frequency": "C2"
}).connect(panner).connect(tremolo).connect(filter).start();


export const osc2 = new Tone.FatOscillator({
    "volume": -Infinity,
    "type": "square6",
    "frequency": "G2"
}).connect(panner).connect(tremolo).connect(filter).start();


export const osc3 = new Tone.FatOscillator({
    "volume": -Infinity,
    "type": "square6",
    "frequency": "D3"
}).connect(panner).connect(tremolo).connect(filter).start();

export const synth = new Tone.PolySynth({
    volume: -22,
    polyphony: 4
}).connect(panner).toMaster();
export const synth2 = new Tone.FMSynth({
    volume: -32,
    modulationIndex: 12,
}).connect(panner).toMaster();

export const arp = new Tone.Pattern(function(time, note){
    synth.triggerAttackRelease(note, 0.25).connect(panner).connect(filter).connect(tremolo);
}, ["C6", "G6", "C7", "G7", "B6"], 'alternateUp');

//     synth.triggerAttackRelease(note, 0.25).connect(panner).connect(filter).connect(tremolo);
export const arp2 = new Tone.Pattern(function(time, note){
    synth2.triggerAttackRelease(note, 0.25).connect(panner).connect(filter).connect(tremolo);
}, ["C4", "C5", "C3","C4", "G3", "C5", "G5", "B4"], 'alternateDown');