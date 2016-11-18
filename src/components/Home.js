import React from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'

import {fetchManager} from '../action_creators/manager'

export class ViewHome extends React.Component {
    componentDidMount() {
        this.props.updateManager()
    }

    render() {
        return <div>
            <main className="container frontpage">
                <div>
                    <h1>Stall Svarterud</h1>

                    <p>En liten stall på Enebakkneset</p>

                    <p>Kontakt: { this.props.name } / { this.props.mobile }</p>
                </div>

                <Link to="/horses">Hesteoversikt</Link>
            </main>
        </div>
    }
}

ViewHome.propTypes = {
    name: React.PropTypes.string.isRequired,
    mobile: React.PropTypes.string.isRequired,
    updateManager: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
        name: state.manager.name,
        mobile: state.manager.mobile
    }
}

function mapDispatchToProps(dispatch) {
    return {
        updateManager: function () {
            fetchManager()(dispatch)
        }
    }
}

export const Home = connect(mapStateToProps, mapDispatchToProps)(ViewHome)
