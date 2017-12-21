import {observable} from 'mobx';


class Controls {
    arpLength = observable(0.01);
    panFrequency = observable(0.01);
    panDepth = observable(1);
    filterFrequency = observable(0.01);
    filterDepth = observable(0.01)

    setFilterFrequency = (num) => this.filterFrequency = num;
    setFilterDepth = (num) => this.filterDepth = num;

}

export default new Controls;