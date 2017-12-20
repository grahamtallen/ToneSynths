import React from "react";
import {TweenMax} from "gsap";

class SlideIn extends React.Component {
    componentWillAppear(callback) {
        console.log('called');
        const el = this.container;
        TweenMax.fromTo(el, 0.3, {x: 100, opacity: 0}, {x: 0, opacity: 1, onComplete: callback});
    }
    componentWillEnter (callback) {
        const el = this.container;
        TweenMax.fromTo(el, 0.4, {x: 200, opacity: 0}, {x: 0, opacity: 1, onComplete: callback});
    }

    componentWillLeave (callback) {
        const el = this.container;
        TweenMax.fromTo(el, 0.4, {x: 0, opacity: 1}, {x: 900, opacity: 0, onComplete: callback});
    }

    render () {
        return (
            <div ref={c => this.container = c}>
                {this.props.children}
            </div>
        );
    }
}

export default SlideIn

