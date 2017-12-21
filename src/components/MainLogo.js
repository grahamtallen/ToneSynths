import React, {Component} from 'react';
import BlackLogo from '../Black_Logo.png';
import {TweenMax} from 'gsap';
import {clickSound} from '../sounds/'
const startWidth = 230;
const hoverWidth = 299;
const growWidth = 1100;


export const triggerGrowAnimation = (el) => {
    if (el) TweenMax.fromTo(el, 0.3, {width: startWidth}, {width: hoverWidth});
}

export const reverseGrowAnimation = (el) => {
    if (el) TweenMax.fromTo(el, 0.3, {width: hoverWidth}, {width: startWidth});
}

const growAndFadeOut = (el) => {
    console.log('called')
    if (el) TweenMax.fromTo(el, 0.8, {opacity: 1, width: hoverWidth, filter: "blur(0px)"}, {opacity: 0, filter: "blur(20px)", width: growWidth});
}

class MainLogo extends Component {
    render() {
        return <div className="logo-wrapper">
            <img
                style={{width: startWidth}}
                src={BlackLogo}
                ref={ref => this.ref = ref}
                onMouseOver={() => triggerGrowAnimation(this.ref)}
                onMouseLeave={() => reverseGrowAnimation(this.ref)}
                onClick={() => {
                    clickSound();
                    growAndFadeOut(this.ref)
                }}
            />
        </div>
    }
}

export default MainLogo