import React, {Component} from 'react';
import {TweenMax} from 'gsap';


const triggerAnimation = (el) => {
    if (el) TweenMax.fromTo(el, 2, {x: -300, filter: "blur(20px)", opacity: 0}, {x: 0, filter: "blur(0px)", opacity: 1});
}

class WelcomeMessage extends Component {

    ref

    componentDidMount() {
        triggerAnimation(this.ref);
    }

    render() {
        return (
            <p ref={ref => this.ref = ref} className="welcome-message">Welcome</p>
        )
    }
}

export default WelcomeMessage