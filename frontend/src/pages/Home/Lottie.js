import React from 'react'
import Lottie from 'react-lottie';
import animationData from './drawkit-grape-animation.json'

export default class LottieControl extends React.Component {

    constructor(props) {
        super(props);
        this.state = { isStopped: false, isPaused: false };
    }

    render() {

        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: animationData,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice'
            }
        };

        return <div>
            <Lottie options={defaultOptions}
                height={700}
                width={700}
                isStopped={this.state.isStopped}
                isPaused={this.state.isPaused} />
        </div>
    }
}