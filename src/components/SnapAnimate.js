import Snap from 'snapsvg-cjs';
import React, {Component} from 'react';

import Fixit from '../svg/Fixit.svg';

console.log(Snap().mina);


export default class Mermaid extends Component {
    svgRender() {
        console.log('RENDERED');
        let element = Snap(this.svgDiv)
        Snap.load(Fixit, function(data){
            if (element) {
                element.append(data);
                var s = Snap(element);
                let ele = s.select("svg").animate({r: 10}, 1000)
                let anims = ele.inAnim();
                console.log({anims});

                var svg = document.getElementById("Fixit-svg");

                let start;

                function step(timestamp) {
                    if (!start) start = timestamp;
                    var progress = timestamp - start;
                    svg.style.left = Math.min(progress / 10, 200) + 'px';
                    if (progress < 2000) {
                        window.requestAnimationFrame(step);
                    }
                }

                window.requestAnimationFrame(step)


            }
        });
    }
    componentDidMount() {
        this.svgRender();
    }
    render() {
        return  <div ref={d=>this.svgDiv=d} />
    }
}