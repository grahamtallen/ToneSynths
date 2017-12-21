import React, {Component} from 'react';
import {render, findDOMNode} from 'react-dom';
import SourceIcon from './svg/Source.svg';
import GreenlightIcon from './svg/Greenlight.svg';
import FixitIcon from './svg/Fixit.svg';
import {TweenMax} from "gsap";
import TransitionGroup from 'react-transition-group/TransitionGroup' // ES6
const startWidth = 568;
const hoverWidth = 599;
const growWidth = 900;


export const triggerFadeAnimation = (el) => {
    if (el) TweenMax.fromTo(el, 1, {y: 100, filter: "blur(20px)", opacity: 0}, {y: 0, filter: "blur(0px)", opacity: 1});
}

export const reverseFadeAnimation = (el) => {
    if (el) TweenMax.fromTo(el, 1, {y: 0, filter: "blur(0px)", opacity: 1}, {y: 100, filter: "blur(20px)", opacity: 0});
}

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

export class Wrapper extends Component {

    ref;

    componentDidMount () {
        triggerFadeAnimation(this.ref)
    }

    render() {
        let {src, getRef} = this.props;
        return <div>
            <img
                style={{width: startWidth}}
                onMouseOver={() => triggerGrowAnimation(this.ref)}
                onMouseLeave={() => reverseGrowAnimation(this.ref)}
                onClick={() => growAndFadeOut(this.ref)}
                ref={ref => {
                    this.ref = ref
                }}
                src={src} />
        </div>
    }
}

class Logos extends Component {

    render() {
        let {render1, render2, render3} = this.props;
        return (
            <div  className="images-group">
                <div className="image-wrapper">
                    {render1 &&  <Wrapper src={SourceIcon} />}
                </div>
                <div className="image-wrapper">
                    {render2 &&  <Wrapper src={FixitIcon} />}
                </div>
                <div className="image-wrapper">
                    {render3 && <Wrapper src={GreenlightIcon} />}
                </div>
            </div>
        )
    }
}

export default (Logos)