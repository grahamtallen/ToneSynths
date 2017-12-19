
export function handleMouseMove(e, panner) {
    var x = e.clientX;
    var y = e.clientY;
    let percentX = x / window.outerWidth;

    var coor = `Coordinates: (${x}, ${y}), percent: ${percentX}, `;
    document.getElementById("demo").innerHTML = coor;

    panner.wet.rampTo(percentX, 1);

}



