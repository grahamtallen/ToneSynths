import React, {Component} from 'react';
import {render, findDOMNode} from 'react-dom';
import SourceIcon from './svg/Source.svg';
import GreenlightIcon from './svg/Greenlight.svg';
import FixitIcon from './svg/Fixit.svg';
import {TweenMax} from "gsap";
import TransitionGroup from 'react-transition-group/TransitionGroup' // ES6

function makeFadesUp(Component, options = { duration: 0.3 }) {
    return class FadesUp extends React.Component {
        componentWillMount (callback) {
            console.log('entered');
            const el = findDOMNode(this);
            TweenMax.fromTo(el, options.duration, {y: 100, opacity: 0}, {y: 0, opacity: 1, onComplete: callback});
        }

        componentWillLeave (callback) {
            const el = findDOMNode(this);
            TweenMax.fromTo(el, options.duration, {y: 0, opacity: 1}, {y: -100, opacity: 0, onComplete: callback});
        }

        render () {
            return <Component ref="child" {...this.props} />;
        }
    }
}

function fadesUp (Component) {
    return typeof arguments[0] === 'function'
        ? makeFadesUp(arguments[0])
        : Component => makeFadesUp(Component, arguments[0]);
}

const triggerAnimation = (el) => {
    if (el) TweenMax.fromTo(el, 0.8, {y: 100, opacity: 0}, {y: 0, opacity: 1});
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