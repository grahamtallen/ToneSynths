import {observable, extendObservable} from 'mobx';

class StyleControls {
    constructor() {
        extendObservable(this, {
            hueX: 1,
            hueY: 2
        })
    }


    setHueX = (num) => this.hueX = num;
    setHueY = (num) => this.hueY = num;

}

export default new StyleControls();