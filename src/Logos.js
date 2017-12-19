import React, {Component} from 'react';
import SourceIcon from './svg/Source.svg';
import FixitIcon from './svg/Fixit.svg';
import GreenlightIcon from './svg/Greenlight.svg';

class Logos extends Component {
    render() {
        let {render1, render2, render3} = this.props;
        return (
            <div className="images-group">
                <img className={`${render1 ? 'see' : 'noSee'}`} src={SourceIcon} />
                <img className={`${render2 ? 'see' : 'noSee'}`} src={FixitIcon} />
                <img className={`${render3 ? 'see' : 'noSee'}`} src={GreenlightIcon} />
            </div>
        )
    }
}

export default Logos