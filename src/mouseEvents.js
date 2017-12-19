
const getXDistanceFromCenter = (percentX) => {
    let dist = percentX - 0.5;
    if (dist < 0) dist = dist * -1;
    return dist
}

const flip = (num) => ((num - 1) * -1);

export function handleMouseMove(e, effects, filter) {
    var x = e.clientX;
    var y = e.clientY;
    let percentX = x / window.outerWidth;


    let xDistanceFromCenter = getXDistanceFromCenter(percentX);
    const flipped = flip(xDistanceFromCenter);

    var coor = `Coordinates: (${x}, ${y}), percentX from right: ${percentX}, xcloseness to center ${flipped}`;
    document.getElementById("demo").innerHTML = coor;

    effects.forEach(effect => {
        let val = flipped
        if (flipped === 0.5) val = 0.1;
        effect.wet.rampTo(val, 0.3);
    })


}



