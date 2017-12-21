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

export const phaser = new Tone.Phaser({
    "frequency" : 15,
    "octaves" : 5,
    "baseFrequency" : 1000
}).toMaster();

//the input oscillators
export const osc1 = new Tone.FatOscillator({
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

var synth = new Tone.PolySynth({volume: -35}).connect(panner).toMaster();

export const arp = new Tone.Pattern(function(time, note){
    synth.triggerAttackRelease(note, 0.25).connect(panner).connect(filter).connect(tremolo);
}, ["C6", "G6", "C7", "G7", "D6"], 'alternateUp');