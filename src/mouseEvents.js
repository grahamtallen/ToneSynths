
const getDistanceFromCenter = (percent) => {
    let dist = 0.5 - percent;
    if (dist < 0) dist = dist * -1;
    return dist
}

const flip = (num) => ((num - 1) * -1);

export function handleMouseMove(e, effects, filter) {
    var x = e.clientX;
    var y = e.clientY;
    let percentX = x / window.innerWidth;
    console.log(percentX);
    let percentY = y / window.innerHeight;

    let xDistanceFromCenter = getDistanceFromCenter(percentX);
    const xflipped = flip(xDistanceFromCenter);

    let yDistanceFromCenter = getDistanceFromCenter(percentY);
    const yflipped = flip(yDistanceFromCenter);

    var coor = `Coordinates: (${x}, ${y}), X - closeness to center: ${xflipped}, Y - closeness to center ${yflipped}`;
    document.getElementById('demo').innerHTML = coor

    effects.forEach((effect) => {
        let val = xflipped;
        if (xflipped === 0.5) val = 0.1;
        let yval = yflipped;
        if (yflipped < 0.7) yval = 0.1;
        if (effect.depth > 2) {
            effect.depth.rampTo(val * 10, 0.1);
        } else effect.depth.rampTo(val , 0.1);

        effect.wet.rampTo(yval , 0.1);

    })


}



