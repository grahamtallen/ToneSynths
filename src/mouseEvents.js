import controls from './Controls';
import {toJS} from 'mobx';

export function handleMouseMove(e) {
    var x = e.clientX;
    var y = e.clientY;
    let percentX = x / window.outerWidth;
    controls.setFilterDepth(percentX * 0.01);

    var coor = `Coordinates: (${x}, ${y}), percent: ${percentX}, filterDepth: ${toJS(controls.filterDepth)}`;
    document.getElementById("demo").innerHTML = coor;

}



