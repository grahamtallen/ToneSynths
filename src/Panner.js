import Tone from 'tone';


const pannerCreator = ({frequency, depth}) => {
    return new Tone.AutoPanner({
        frequency,
        depth
    }).toMaster().start()
}

export default pannerCreator