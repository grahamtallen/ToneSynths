import React, {Component} from 'react';
import {render, findDOMNode} from 'react-dom';
import SourceIcon from './svg/Source.svg';
import GreenlightIcon from './svg/Greenlight.svg';
import FixitIcon from './svg/Fixit.svg';
import {TweenMax} from "gsap";
import TransitionGroup from 'react-transition-group/TransitionGroup' // ES6

const triggerAnimation = (el) => {
    if (el) TweenMax.fromTo(el, 1, {y: 100, filter: "blur(20px)", opacity: 0}, {y: 0, filter: "blur(0px)", opacity: 1});
}

class Wrapper extends Component {

    ref;

    componentDidMount () {
        triggerAnimation(this.ref)
    }

    render() {
        let {src} = this.props;
        return <div ref={ref => this.ref = ref} ><img src={src} /></div>
    }
}

const EmptyDiv = () => <div style={{width: "586px"}}></div>

class Logos extends Component {

    render() {
        let {render1, render2, render3} = this.props;
        return (
            <div  className="images-group">

                {render1 ? <Wrapper src={SourceIcon} /> : <EmptyDiv/>}
                {render2 ? <Wrapper src={FixitIcon} /> : <EmptyDiv/>}
                {render3 ? <Wrapper src={GreenlightIcon} /> : <EmptyDiv/>}
            </div>
        )
    }
}

export default (Logos)