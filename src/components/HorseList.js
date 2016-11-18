import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'

import {fetchHorses} from '../action_creators/horses'

import {Navigation} from './Navigation'
import * as types from './types'

class Horse extends React.Component {
    render() {
        let owner = null
        if (this.props.owner) {
            owner = this.props.owner.name
        }

        let responsible = null
        if (this.props.responsible) {
            responsible = this.props.responsible.name
        }

        return <div className="object">
            <h2><Link to={`/horse/${this.props.horse.ID}`}>{ this.props.horse.name }</Link></h2>
            <dl>
                <dt>{ this.props.horse.sex }</dt>
                <dd>{ this.props.horse.race }</dd>
                <dt>Eier</dt>
                <dd>{ owner }</dd>
                <dt>Ansvarlig</dt>
                <dd>{ responsible }</dd>
            </dl>
        </div>

    }
}

Horse.propTypes = {
    horse: types.horse,
    owner: types.person,
    responsible: types.person
}

class ViewHorseList extends React.Component {
    findPerson(id) {
        if (this.props.people) {
            return this.props.people.find((person) => person.ID === id)
        }
    }

    renderHorse(horse) {
        let owner = null
        let responsible = null

        if (horse.ownerID) {
            owner = this.findPerson(horse.ownerID)
        }

        if (horse.responsibleID) {
            responsible = this.findPerson(horse.responsibleID)
        }

        return <Horse key={`Horse:${horse.ID}`} horse={horse} owner={owner} responsible={responsible} />
    }

    render() {
        return <div className="list">
            <h1 className="title">Hestene</h1>

            <Navigation/>

            <div className="objectList">
                {this.props.horses.map(horse =>
                    this.renderHorse(horse)
                )}
            </div>
        </div>
    }
}

ViewHorseList.propTypes = {
    horses: types.horses,
    people: types.people,
    updateHorses: React.PropTypes.func.isRequired
}


function mapStateToProps(state) {
    return {
        horses: state.horses.horses,
        people: state.people.people
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
