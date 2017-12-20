
const getDistanceFromCenter = (percent) => {
    let dist = percent - 0.5;
    if (dist < 0) dist = dist * -1;
    return dist
}

const flip = (num) => ((num - 1) * -1);

export function handleMouseMove(e, effects, filter) {
    var x = e.clientX;
    var y = e.clientY;
    let percentX = x / window.outerWidth;
    let percentY = y / window.outerHeight;

    let xDistanceFromCenter = getDistanceFromCenter(percentX);
    const xflipped = flip(xDistanceFromCenter);

    let yDistanceFromCenter = getDistanceFromCenter(percentY);
    const yflipped = flip(yDistanceFromCenter);

    var coor = `Coordinates: (${x}, ${y}), percentY from right: ${percentY}, ycloseness to center ${yflipped}`;
    // document.getElementById('demo').innerHTML = (coor);

    effects.forEach(effect => {
        let val = xflipped;
        if (xflipped === 0.5) val = 0.1;
        let yval = yflipped;
        if (yflipped === 0.5) yval = 0.1;
        effect.wet.rampTo(val, 0.3);
        // effect.depth.rampTo(yval * 10, 0.1);
    })


}



