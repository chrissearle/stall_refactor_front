import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'

import {fetchHorses} from '../action_creators/horses'

import {Navigation} from './Navigation'
import * as types from './types'
import {findOwner, findResponsible} from '../helpers'

class Horse extends React.Component {
    renderPerson(person) {
        if (person) {
            return <Link to={`/person/${person.ID}` }>
                { person.name }
            </Link>
        }
    }

    render() {
        return <div className="object">
            <h2><Link to={`/horse/${this.props.horse.ID}`}>{ this.props.horse.name }</Link></h2>
            <dl>
                <dt>{ this.props.horse.sex }</dt>
                <dd>{ this.props.horse.race }</dd>
                {
                    this.props.owner &&
                    [
                        <dt key={`Owner1:${this.props.horse.ID}`}>Eier</dt>,
                        <dd key={`Owner2:${this.props.horse.ID}`}> {this.renderPerson(this.props.owner) }</dd>
                    ]
                }
                {
                    this.props.responsible &&
                    [
                        <dt key={`Responsible1:${this.props.horse.ID}`}>Ansvarlig</dt>,
                        <dd key={`Responsible2:${this.props.horse.ID}`}>{ this.renderPerson(this.props.responsible) }</dd>
                    ]
                }
            </dl>
        </div>

    }
}

Horse.propTypes = {
    horse: types.horse,
    owner: types.person,
    responsible: types.optionalPerson
}

class ViewHorseList extends React.Component {
    renderHorse(horse) {
        const owner = findOwner(this.props.people, horse)

        let responsible = null

        if (horse.ownerID !== horse.responsibleID) {
            responsible = findResponsible(this.props.people, horse)
        }

        return <Horse key={`Horse:${horse.ID}`} horse={horse} owner={owner} responsible={responsible}/>
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
