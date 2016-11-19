import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import {fetchPeople} from '../action_creators/people'
import {Navigation} from './Navigation'
import * as types from './types'
import {formatTlf} from '../formatters'

class Person extends React.Component {
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
                <Link to={`/person/${this.props.person.ID}` }>
                    { this.props.person.name }
                    { role }
                </Link>
            </h2>
            <dl>
                <dt>Mob:</dt>
                <dd>{ formatTlf(this.props.person.mobile) }</dd>
                <dt>Email</dt>
                <dd>{ email }</dd>
            </dl>
        </div>
    }
}

Person.propTypes = {
    person: types.person
}

class ViewPeopleList extends React.Component {
    render() {
        return <div className="list">
            <h1 className="title">Folk</h1>

            <Navigation/>

            <div className="objectList">
                {this.props.people.map(person =>
                    <Person key={`Person:${person.ID}`} person={person}/>
                )}
            </div>
        </div>
    }
}

ViewPeopleList.propTypes = {
    people: types.people,
    updatePeople: React.PropTypes.func.isRequired
}


function mapStateToProps(state) {
    return {
        people: state.people.people
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
