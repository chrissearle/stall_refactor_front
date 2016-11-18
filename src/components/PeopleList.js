import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'

import {fetchPeople} from '../action_creators/people'

import {Navigation} from './Navigation'
import * as types from './types'

class Horses extends React.Component {
    render() {
        return <p>
            {this.props.horses.map(horse =>
                <Link to={`/horse/${horse.ID}`}>{ horse.name }</Link>
            )}
        </p>
    }
}

Horses.propTypes = {
    horses: types.horses
}

class Person extends React.Component {
    renderOwned() {
        if (this.props.owned && this.props.owned.length > 0) {
            return <div>
                <h3>Eier av:</h3>
                <Horses horses={ this.props.owned }/>
            </div>
        }
    }

    renderResponsible() {
        if (this.props.responsible && this.props.responsible.length > 0) {
            return <div>
                <h3>Ansvarlig for:</h3>
                <Horses horses={ this.props.responsible }/>
            </div>
        }
    }

    render() {
        let role = null

        if (this.props.person.role) {
            role = <span>
                &nbsp;
                ({this.props.person.role})
            </span>
        }

        let email = null

        if (this.props.person.email) {
            email = <a href={ `mailto:${this.props.person.email}`}>{this.props.person.email}</a>
        }

        return <div className="object">
            <h2>
                { this.props.person.name }
                { role }
            </h2>
            <dl>
                <dt>Mob:</dt>
                <dd>{ this.props.person.mobile }</dd>
                <dt>Email</dt>
                <dd>{ email }</dd>
            </dl>
            { this.renderOwned() }
            { this.renderResponsible() }
        </div>
    }
}

Person.propTypes = {
    person: types.person,
    owned: types.horses,
    responsible: types.horses
}

class ViewPeopleList extends React.Component {
    findHorsesOwned(person) {
        let horses = []

        if (person) {
            horses = this.props.horses.filter((horse) => horse.ownerID === person.ID)
        }

        return horses
    }

    findHorsesResponsibleFor(person) {
        let horses = []

        if (person) {
            horses = this.props.horses.filter((horse) => horse.responsibleID === person.ID)
        }

        return horses
    }

    render() {
        return <div className="list">
            <h1 className="title">Folk</h1>

            <Navigation/>

            <div className="objectList">
                {this.props.people.map(person =>
                    <Person key={`Person:${person.ID}`} person={person} owned={this.findHorsesOwned(person)}
                            responsible={this.findHorsesResponsibleFor(person)}/>
                )}
            </div>
        </div>
    }
}

ViewPeopleList.propTypes = {
    people: types.people,
    horses: types.horses,
    updatePeople: React.PropTypes.func.isRequired
}


function mapStateToProps(state) {
    return {
        people: state.people.people,
        horses: state.horses.horses
    }
}

function mapDispatchToProps(dispatch) {
    return {
        updatePeople: function () {
            fetchPeople()(dispatch)
        }
    }
}

export const PeopleList = connect(mapStateToProps, mapDispatchToProps)(ViewPeopleList)
