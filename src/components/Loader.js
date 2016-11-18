import React from 'react'
import {connect} from 'react-redux'

import {fetchHorses} from '../action_creators/horses'
import {fetchPeople} from '../action_creators/people'

class ViewLoader extends React.Component {
    componentDidMount() {
        this.props.updatePeople()
        this.props.updateHorses()
    }

    render() {
        return <div>
            {this.props.children}
        </div>
    }
}

ViewLoader.propTypes = {
    children: React.PropTypes.node,
    updatePeople: React.PropTypes.func,
    updateHorses: React.PropTypes.func
}


function mapDispatchToProps(dispatch) {
    return {
        updatePeople: function () {
            fetchPeople()(dispatch)
        },
        updateHorses: function () {
            fetchHorses()(dispatch)
        }
    }
}

export const Loader = connect(() => {return {}}, mapDispatchToProps)(ViewLoader)
