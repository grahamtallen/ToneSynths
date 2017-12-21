import React, {Component} from 'react';
import {TweenMax} from 'gsap';
import {observer} from 'mobx-react';
import stylesObj from '../StyleControls';
const triggerAnimation = (el) => {
    if (el) TweenMax.fromTo(el, 2, {y: -9, filter: "blur(20px)", opacity: 0}, {y: 0, filter: "blur(0px)", opacity: 1});
};

class WelcomeMessage extends Component {

    ref

    componentDidMount() {
        triggerAnimation(this.ref);
    }

    render() {
        return (
            <p
                onClick={this.props.onClick}
                ref={ref => this.ref = ref}
                className="welcome-message">
                Welcome
            </p>
        )
    }
}

export default observer(WelcomeMessage)