import React from 'react'
import {connect} from 'react-redux'

import {fetchHorses} from '../action_creators/horses'


class Horse extends React.Component {
    render() {
        return <tr className="small-table-sep">
                <td><a href="">{ this.props.horse.name }</a></td>
                <td>{ this.props.horse.sex }</td>
                <td>{ this.props.horse.race }</td>
                <td className="hidden-xs">
                    <a className="no-print" href=""> </a>
                    <span className="print"> </span>
                    <br/>
                </td>
                <td className="hidden-xs">
                    <a className="no-print" href=""> </a>
                    <span className="print"> </span>
                    <br/>
                </td>
            </tr>
    }
}

Horse.propTypes = {
    horse: React.PropTypes.shape({
        ID: React.PropTypes.number.isRequired,
        name: React.PropTypes.string.isRequired,
        sex: React.PropTypes.string.isRequired,
        race: React.PropTypes.string.isRequired
    }).isRequired
}

class ViewHorseList extends React.Component {
    componentDidMount() {
        this.props.updateHorses()
    }

    render() {
        return <div className="row">
            <div className="col-xs-12">
                <h1 className="title">Hestene</h1>
            </div>

            <div className="col-xs-12">
                <table className="table table-bordered table-condensed table-hover table-responsive table-striped">
                    <thead>
                    <tr>
                        <th></th>
                        <th>Kjønn</th>
                        <th>Rase</th>
                        <th className="hidden-xs">Eier</th>
                        <th className="hidden-xs">Ansvarlig</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.horses.map(horse =>
                        <Horse key={`Horse:${horse.ID}`} horse={horse}/>
                    )}
                    </tbody>
                </table>
            </div>
        </div>
    }
}

ViewHorseList.propTypes = {
    horses: React.PropTypes.arrayOf(React.PropTypes.shape({
        ID: React.PropTypes.number.isRequired,
        name: React.PropTypes.string.isRequired,
        sex: React.PropTypes.string.isRequired,
        race: React.PropTypes.string.isRequired
    })).isRequired,
    updateHorses: React.PropTypes.func.isRequired
}


function mapStateToProps(state) {
    return {
        horses: state.horses.horses
    }
}

function mapDispatchToProps(dispatch) {
    return {
        updateHorses: function () {
            fetchHorses()(dispatch)
        }
    }
}

export const HorseList = connect(mapStateToProps, mapDispatchToProps)(ViewHorseList)

/*
 <tr className="small-table-row">
 <th>Eier</th>
 <td colSpan="2">
 <a className="no-print" href=""> </a>
 <span className="print"> </span>
 <br/>
 </td>
 </tr>
 */
