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
            <header role="banner">
                <div className="title">
                    <h1>
                        Stall Svarterud
                    </h1>
                </div>
            </header>

            <main className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="jumbotron">
                            <p>
                                <img className="img-responsive center-block" src={require('../images/stallen.jpg')}/>
                            </p>
                            <p>
                                Stall Svarterud er en liten stall på Enebakkneset.
                            </p>
                            <p>
                                Kontakt: { this.props.name } / { this.props.mobile }
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row small-nav">
                    <div className="col-xs-12">
                        <Link className="default-btn" to="/horses">Hesteoversikt</Link>
                    </div>
                </div>
            </main>

            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <Link className="default-btn" to="/horses">Hesteoversikt</Link>
                        </div>
                    </div>
                </div>
            </footer>
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
