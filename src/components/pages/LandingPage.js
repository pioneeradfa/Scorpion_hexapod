import React from "react"
import { SECTION_NAMES } from "../vars"

class LandingPage extends React.Component {
    pageName = SECTION_NAMES.landingPage

    componentDidMount = () => this.props.onMount(this.pageName)

    render = () => (
        <div id="landing">
            <h1>Scorpion Hexapod Simulator</h1>
            <p>
                Interactive kinematics and gait simulation configured for the six-legged
                prototype. Robot dimensions are in millimetres, with three joints per leg.
            </p>
            <p>
                Explore forward and inverse kinematics, leg poses, and IK-based tripod or
                ripple walking. The current model omits the tail and does not control the
                physical servos.
            </p>
        </div>
    )
}

export default LandingPage
